import puppeteer from 'puppeteer'
import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const LAYOUTS_DIR = join(__dirname, '../src/content')
const OUTPUT_DIR = join(__dirname, '../public/layouts')
const README_PATH = join(__dirname, '../src/content/README.md')
const BASE_URL = 'https://speedwell.gallop.software'
const SCREENSHOT_WIDTH = 1920
const SCREENSHOT_HEIGHT = 2400 // Tall screenshot for layouts
const LARGE_SIZE = 1400 // Large image size on longest side
const MEDIUM_SIZE = 700 // Medium image size on longest side (with -md suffix)

// Helper function for natural sort (layout-1, layout-2, ..., layout-10)
function naturalSort(a, b) {
  return a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: 'base',
  })
}

// Helper function to convert filename to display name and slug
function parseLayoutName(filename) {
  const name = filename.replace('.tsx', '')
  const slug = name

  // Special case: index.tsx should display as "Home"
  if (name === 'index') {
    return { name, slug, displayName: 'Home' }
  }

  // Convert to display name (e.g., "layout-1" -> "Layout 1")
  const displayName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return { name, slug, displayName }
}

// Helper function to parse existing README to preserve tier settings, preview, and order
async function parseExistingReadme() {
  try {
    const readme = await readFile(README_PATH, 'utf8')
    const existingLayouts = []

    // Match layouts with their tier info and optional preview: **Tier:** Free or Pro, **Preview:** value
    const layoutRegex =
      /####\s+([^\n]+)[\s\S]*?\*\*Tier:\*\*\s+(Free|Pro)(?:[\s\S]*?\*\*Preview:\*\*\s+([^\n]+))?/g
    let match

    while ((match = layoutRegex.exec(readme)) !== null) {
      const displayName = match[1].trim()
      const tier = match[2].toLowerCase()
      const preview = match[3] ? match[3].trim() : null
      existingLayouts.push({ displayName, tier, preview })
    }

    return existingLayouts
  } catch (error) {
    // README doesn't exist yet, return empty array
    return []
  }
}

async function captureScreenshot(browser, slug, outputDir) {
  const page = await browser.newPage()

  try {
    // Set viewport to a standard desktop size
    await page.setViewport({
      width: SCREENSHOT_WIDTH,
      height: 1080,
      deviceScaleFactor: 2, // For retina/high-DPI screenshots
    })

    // Construct preview URL - layouts are at root level
    const previewUrl = `${BASE_URL}/${slug}`

    console.log(`Capturing: ${slug} from ${previewUrl}`)

    // Navigate to the page
    await page.goto(previewUrl, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    })

    // Wait a bit for any animations or lazy-loaded content
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Wait for videos (both native and Vimeo iframes) to load and show content
    await page.evaluate(async () => {
      // Handle native video elements
      const videos = document.querySelectorAll('video')
      const videoPromises = Array.from(videos).map((video) => {
        return new Promise((resolve) => {
          // Force video to load by setting preload and autoplay attributes
          video.preload = 'auto'
          video.autoplay = true
          video.muted = true

          // If video has no src attribute but has a source, force reload
          if (!video.src && video.querySelector('source')) {
            video.load()
          }

          // Force the video to load by re-setting its src
          const currentSrc = video.src || video.currentSrc
          if (currentSrc) {
            video.src = currentSrc
            video.load()
          }

          const tryToPlay = () => {
            video.currentTime = 0.5 // Seek a bit further to ensure visible frame
            video.play().catch(() => {})
            // Wait for the video to actually render a frame
            setTimeout(resolve, 1000)
          }

          // If video already has enough data
          if (video.readyState >= 3) {
            tryToPlay()
          } else {
            // Wait for video to load enough data
            const onCanPlay = () => {
              video.removeEventListener('canplay', onCanPlay)
              video.removeEventListener('loadeddata', onCanPlay)
              tryToPlay()
            }
            video.addEventListener('canplay', onCanPlay)
            video.addEventListener('loadeddata', onCanPlay)

            // Timeout after 8 seconds if video doesn't load
            setTimeout(() => {
              video.removeEventListener('canplay', onCanPlay)
              video.removeEventListener('loadeddata', onCanPlay)
              // Try to play anyway
              tryToPlay()
            }, 8000)
          }
        })
      })

      // Handle Vimeo iframes - wait for them to load
      const vimeoIframes = document.querySelectorAll('iframe[src*="vimeo.com"]')
      const vimeoPromises = Array.from(vimeoIframes).map((iframe) => {
        return new Promise((resolve) => {
          // If iframe is already loaded
          if (iframe.contentWindow) {
            // Give Vimeo player time to initialize and buffer
            setTimeout(resolve, 8000)
          } else {
            iframe.addEventListener('load', () => {
              // Give Vimeo player time to initialize and buffer after load
              setTimeout(resolve, 8000)
            })
            // Timeout after 15 seconds
            setTimeout(resolve, 15000)
          }
        })
      })

      await Promise.all([...videoPromises, ...vimeoPromises])
    })

    // Additional wait to ensure video frames are rendered
    await new Promise((resolve) => setTimeout(resolve, 5000))

    // Take screenshot of the top portion as buffer (tall screenshot)
    const screenshotBuffer = await page.screenshot({
      type: 'jpeg',
      quality: 90,
      clip: {
        x: 0,
        y: 0,
        width: SCREENSHOT_WIDTH,
        height: SCREENSHOT_HEIGHT,
      },
    })

    // Get original image dimensions
    const metadata = await sharp(screenshotBuffer).metadata()
    const { width, height } = metadata

    // Helper function to calculate dimensions for a target size
    const calculateDimensions = (targetSize) => {
      const longestSide = Math.max(width, height)
      if (longestSide <= targetSize) {
        return { w: width, h: height }
      } else if (width > height) {
        return { w: targetSize, h: Math.round((height / width) * targetSize) }
      } else {
        return { w: Math.round((width / height) * targetSize), h: targetSize }
      }
    }

    // Calculate dimensions for both sizes
    const large = calculateDimensions(LARGE_SIZE)
    const medium = calculateDimensions(MEDIUM_SIZE)

    // Save large image (1400px)
    const largeImagePath = join(outputDir, `${slug}.jpg`)
    await sharp(screenshotBuffer)
      .resize(large.w, large.h, { fit: 'inside' })
      .jpeg({ quality: 90 })
      .toFile(largeImagePath)

    // Save medium image (700px with -md suffix)
    const mediumImagePath = join(outputDir, `${slug}-md.jpg`)
    await sharp(screenshotBuffer)
      .resize(medium.w, medium.h, { fit: 'inside' })
      .jpeg({ quality: 90 })
      .toFile(mediumImagePath)

    console.log(`✓ Saved: ${slug}.jpg (${large.w}x${large.h}) + ${slug}-md.jpg (${medium.w}x${medium.h})`)
    return true
  } catch (error) {
    console.error(`✗ Error capturing ${slug}:`, error.message)
    return false
  } finally {
    await page.close()
  }
}

async function imageExists(slug, outputDir) {
  try {
    const imagePath = join(outputDir, `${slug}.jpg`)
    const { access } = await import('fs/promises')
    await access(imagePath)
    return true
  } catch {
    return false
  }
}

async function generateLayoutsCatalog(
  mode = 'smart',
  ignoreSavedOrder = false
) {
  try {
    console.log('Starting layouts catalog generation...\n')

    // Read all files from content directory
    const files = await readdir(LAYOUTS_DIR)
    // Include all top-level .tsx files (excluding directories)
    const layoutFiles = files.filter((f) => f.endsWith('.tsx'))

    console.log(`Found ${layoutFiles.length} layout files\n`)

    // Load existing layouts from README to preserve order and tier settings
    const existingReadmeLayouts = ignoreSavedOrder
      ? []
      : await parseExistingReadme()
    if (!ignoreSavedOrder) {
      console.log(
        `Loaded ${existingReadmeLayouts.length} layouts from existing README\n`
      )
    } else {
      console.log('Ignoring saved order - sorting all layouts naturally\n')
    }

    // Create a map for quick lookup
    const existingLayoutMap = new Map(
      existingReadmeLayouts.map((l) => [l.displayName, l])
    )

    // Parse all layout files
    const allLayoutsMap = new Map()
    for (const file of layoutFiles) {
      const { name, slug, displayName } = parseLayoutName(file)
      // Use existing tier and preview from README, default to 'free' and null (Auto)
      const existingLayout = existingLayoutMap.get(displayName)
      const tier = existingLayout?.tier || 'free'
      const preview = existingLayout?.preview || null // null means Auto (omitted)

      allLayoutsMap.set(displayName, {
        name,
        slug,
        displayName,
        tier,
        preview,
        filename: file,
      })
    }

    // Build layouts list preserving order from README
    const layouts = []
    const processedLayouts = new Set()

    // First, add existing layouts in their README order
    for (const existingLayout of existingReadmeLayouts) {
      if (allLayoutsMap.has(existingLayout.displayName)) {
        layouts.push(allLayoutsMap.get(existingLayout.displayName))
        processedLayouts.add(existingLayout.displayName)
      }
    }

    // Then, add any new layouts (sorted naturally by number)
    const newLayouts = []
    for (const layout of allLayoutsMap.values()) {
      if (!processedLayouts.has(layout.displayName)) {
        newLayouts.push(layout)
        processedLayouts.add(layout.displayName)
      }
    }
    newLayouts.sort(naturalSort)
    layouts.push(...newLayouts)

    const totalNew = layouts.length - existingReadmeLayouts.length
    if (totalNew > 0) {
      console.log(`Found ${totalNew} new layouts\n`)
    }

    // Determine which layouts need screenshots
    let layoutsToCapture = []

    if (mode === 'force') {
      // Force mode: capture all layouts
      layoutsToCapture = layouts
      console.log('Force mode: capturing all layouts\n')
    } else if (mode === 'smart') {
      // Smart mode: only capture missing images
      console.log('Checking for existing images...\n')
      for (const layout of layouts) {
        const exists = await imageExists(layout.slug, OUTPUT_DIR)
        if (!exists) {
          layoutsToCapture.push(layout)
        } else {
          layout.hasScreenshot = true
        }
      }

      if (layoutsToCapture.length === 0) {
        console.log(
          'All layout images already exist, skipping screenshot capture\n'
        )
      } else {
        console.log(`Found ${layoutsToCapture.length} layouts without images\n`)
      }
    } else {
      // Skip mode: don't capture any
      console.log('Skipping screenshot capture\n')
      layouts.forEach((layout) => (layout.hasScreenshot = true))
    }

    // Capture screenshots if needed
    if (layoutsToCapture.length > 0) {
      await mkdir(OUTPUT_DIR, { recursive: true })

      // Launch browser for screenshots
      console.log('Launching browser...\n')
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      })

      let successCount = 0
      let errorCount = 0

      // Capture screenshots
      for (const layout of layoutsToCapture) {
        const success = await captureScreenshot(
          browser,
          layout.slug,
          OUTPUT_DIR
        )

        if (success) {
          successCount++
          layout.hasScreenshot = true
        } else {
          errorCount++
          layout.hasScreenshot = false
        }
      }

      await browser.close()

      console.log('\n=== Screenshot Capture Complete ===')
      console.log(`✓ Successful: ${successCount}`)
      console.log(`✗ Failed: ${errorCount}`)
      console.log(`Total captured: ${layoutsToCapture.length}\n`)
    }

    // Generate README
    console.log('Generating README...')
    const readme = generateReadme(layouts)
    await writeFile(README_PATH, readme, 'utf8')
    console.log(`✓ README saved to ${README_PATH}\n`)

    console.log('=== Layouts Catalog Generation Complete ===')
    console.log(`\nView README at: ${README_PATH}`)
  } catch (error) {
    console.error('Fatal error:', error)
    process.exit(1)
  }
}

function generateReadme(layouts) {
  const freeLayouts = layouts.filter((l) => l.tier === 'free')
  const proLayouts = layouts.filter((l) => l.tier === 'pro')

  let readme = `# Speedwell Layouts\n\n`
  readme += `A collection of ${layouts.length} pre-built page layouts for the Speedwell template.\n\n`
  readme += `## Overview\n\n`
  readme += `- **Total Layouts:** ${layouts.length}\n`
  readme += `- **Free Layouts:** ${freeLayouts.length}\n`
  readme += `- **Pro Layouts:** ${proLayouts.length}\n\n`

  readme += `## Layouts\n\n`

  layouts.forEach((layout) => {
    readme += `#### ${layout.displayName}\n\n`
    if (layout.hasScreenshot) {
      readme += `<img src="../../public/layouts/${layout.slug}.jpg" alt="${layout.displayName}" width="350">\n\n`
    }
    readme += `**Slug:** \`${layout.slug}\`  \n`
    readme += `**Tier:** ${layout.tier.charAt(0).toUpperCase() + layout.tier.slice(1)}  \n`
    // Only show Preview if it's not Auto (null)
    if (layout.preview) {
      readme += `**Preview:** ${layout.preview}\n\n`
    } else {
      readme += `\n`
    }
    readme += `---\n\n`
  })

  return readme
}

// Run the script
let mode = 'smart' // Default: only capture missing images
let ignoreSavedOrder = false

if (process.argv.includes('--screenshots')) {
  mode = 'force' // Force overwrite all images
} else if (process.argv.includes('--skip')) {
  mode = 'skip' // Skip all screenshots
}

if (process.argv.includes('--sort')) {
  ignoreSavedOrder = true // Ignore saved order, sort naturally
}

generateLayoutsCatalog(mode, ignoreSavedOrder)
