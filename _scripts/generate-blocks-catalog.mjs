import puppeteer from 'puppeteer'
import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const BLOCKS_DIR = join(__dirname, '../src/blocks')
const OUTPUT_DIR = join(__dirname, '../public/blocks')
const README_PATH = join(__dirname, '../src/blocks/README.md')
const META_JSON_PATH = join(__dirname, '../_data/_meta.json')
const BASE_URL = 'https://speedwell.gallop.software'
const FULL_SIZE = 700 // Full image size on longest side

// Preferred category order (edit this to reorder categories)
const CATEGORY_ORDER = [
  'hero',
  'section',
  'content',
  'call-to-action',
  'testimonial',
  'contact',
  'about',
  'cover',
  'showcase',
  'blog',
  'partners',
  'accordion',
  'application',
]

// Helper function to sort categories by preferred order
function sortCategories(categories) {
  return categories.sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a)
    const indexB = CATEGORY_ORDER.indexOf(b)

    // If both in preferred order, use that order
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB
    }

    // If only A is in preferred order, A comes first
    if (indexA !== -1) return -1

    // If only B is in preferred order, B comes first
    if (indexB !== -1) return 1

    // If neither in preferred order, sort alphabetically
    return a.localeCompare(b)
  })
}

// Helper function for natural sort (hero-1, hero-2, ..., hero-10)
function naturalSort(a, b) {
  return a.name.localeCompare(b.name, undefined, {
    numeric: true,
    sensitivity: 'base',
  })
}

// Helper function to get full category display name
function getCategoryDisplayName(category) {
  // Convert category slug to display name (e.g., "call-to-action" -> "Call To Action")
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Helper function to convert filename to display name and slug
function parseBlockName(filename) {
  const name = filename.replace('.tsx', '')
  const slug = name

  // Convert to display name (e.g., "hero-1" -> "Hero 1")
  const displayName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return { name, slug, displayName }
}

// Helper function to parse existing README to preserve tier settings and order
async function parseExistingReadme() {
  try {
    const readme = await readFile(README_PATH, 'utf8')
    const existingBlocks = []

    // Match blocks with their tier info: **Tier:** Free or Pro (h4 headings)
    const blockRegex = /####\s+([^\n]+)[\s\S]*?\*\*Tier:\*\*\s+(Free|Pro)/g
    let match

    while ((match = blockRegex.exec(readme)) !== null) {
      const displayName = match[1].trim()
      const tier = match[2].toLowerCase()
      existingBlocks.push({ displayName, tier })
    }

    return existingBlocks
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
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2, // For retina/high-DPI screenshots
    })

    // Construct preview URL
    const previewUrl = `${BASE_URL}/block/${slug}`

    console.log(`Capturing: ${slug} from ${previewUrl}`)

    // Navigate to the page
    await page.goto(previewUrl, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    })

    // Wait a bit for any animations or lazy-loaded content
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Get the actual content height to avoid extra bottom whitespace
    const bodyHeight = await page.evaluate(() => {
      return document.body.scrollHeight
    })

    // Take screenshot as buffer
    const screenshotBuffer = await page.screenshot({
      type: 'jpeg',
      quality: 90,
      clip: {
        x: 0,
        y: 0,
        width: 1920,
        height: Math.min(bodyHeight, 10000), // Cap at reasonable height
      },
    })

    // Get original image dimensions
    const metadata = await sharp(screenshotBuffer).metadata()
    const { width, height } = metadata

    // Calculate size (max 700px on longest side) maintaining aspect ratio
    const longestSide = Math.max(width, height)
    let imageWidth, imageHeight

    if (longestSide <= FULL_SIZE) {
      // Image is already smaller than target size
      imageWidth = width
      imageHeight = height
    } else if (width > height) {
      // Width is longest side
      imageWidth = FULL_SIZE
      imageHeight = Math.round((height / width) * FULL_SIZE)
    } else {
      // Height is longest side
      imageHeight = FULL_SIZE
      imageWidth = Math.round((width / height) * FULL_SIZE)
    }

    // Save image (resized to max 700px)
    const imagePath = join(outputDir, `${slug}.jpg`)
    await sharp(screenshotBuffer)
      .resize(imageWidth, imageHeight, { fit: 'inside' })
      .jpeg({ quality: 90 })
      .toFile(imagePath)

    console.log(`✓ Saved: ${slug}.jpg (${imageWidth}x${imageHeight})`)
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

async function generateBlocksCatalog(mode = 'smart', ignoreSavedOrder = false) {
  try {
    console.log('Starting blocks catalog generation...\n')

    // Read all files from blocks directory
    const files = await readdir(BLOCKS_DIR)
    const blockFiles = files.filter((f) => f.endsWith('.tsx'))

    console.log(`Found ${blockFiles.length} block files\n`)

    // Load meta.json for image URLs
    let metaData = {}
    try {
      metaData = JSON.parse(await readFile(META_JSON_PATH, 'utf8'))
    } catch (error) {
      console.warn('Warning: Could not load _meta.json, will use default paths')
    }

    // Load existing blocks from README to preserve order and tier settings
    const existingReadmeBlocks = ignoreSavedOrder
      ? []
      : await parseExistingReadme()
    if (!ignoreSavedOrder) {
      console.log(
        `Loaded ${existingReadmeBlocks.length} blocks from existing README\n`
      )
    } else {
      console.log('Ignoring saved order - sorting all blocks naturally\n')
    }

    // Create a map for quick lookup
    const existingBlockMap = new Map(
      existingReadmeBlocks.map((b) => [b.displayName, b])
    )

    // Parse all block files
    const allBlocksMap = new Map()
    for (const file of blockFiles) {
      const filePath = join(BLOCKS_DIR, file)
      const { name, slug, displayName } = parseBlockName(file)
      // Use existing tier from README, default to 'free'
      const tier = existingBlockMap.get(displayName)?.tier || 'free'

      allBlocksMap.set(displayName, {
        name,
        slug,
        displayName,
        tier,
        filename: file,
      })
    }

    // Group blocks by category and preserve order within each category
    const blocksByCategory = {}
    const existingOrderByCategory = {}

    // First, group existing blocks by category to preserve their order
    for (const existingBlock of existingReadmeBlocks) {
      if (allBlocksMap.has(existingBlock.displayName)) {
        const block = allBlocksMap.get(existingBlock.displayName)
        const category = block.name.replace(/-\d+$/, '')

        if (!existingOrderByCategory[category]) {
          existingOrderByCategory[category] = []
        }
        existingOrderByCategory[category].push(block.displayName)
      }
    }

    // Reconstruct blocks organized by category
    const blocks = []
    const processedBlocks = new Set()

    // Get all categories and sort them by preferred order
    const allCategories = new Set()
    for (const block of allBlocksMap.values()) {
      allCategories.add(block.name.split('-')[0])
    }
    const sortedCategories = sortCategories([...allCategories])

    // For each category (in preferred order), add blocks
    for (const category of sortedCategories) {
      const categoryBlocks = []

      // First, add existing blocks in their README order within this category
      if (existingOrderByCategory[category]) {
        for (const displayName of existingOrderByCategory[category]) {
          if (allBlocksMap.has(displayName)) {
            categoryBlocks.push(allBlocksMap.get(displayName))
            processedBlocks.add(displayName)
          }
        }
      }

      // Then, add any new blocks in this category (sorted naturally by number)
      const newCategoryBlocks = []
      for (const block of allBlocksMap.values()) {
        if (
          block.name.split('-')[0] === category &&
          !processedBlocks.has(block.displayName)
        ) {
          newCategoryBlocks.push(block)
          processedBlocks.add(block.displayName)
        }
      }
      newCategoryBlocks.sort(naturalSort)
      categoryBlocks.push(...newCategoryBlocks)

      blocks.push(...categoryBlocks)
    }

    const totalNew = blocks.length - existingReadmeBlocks.length
    if (totalNew > 0) {
      console.log(`Found ${totalNew} new blocks\n`)
    }

    // Determine which blocks need screenshots
    let blocksToCapture = []

    if (mode === 'force') {
      // Force mode: capture all blocks
      blocksToCapture = blocks
      console.log('Force mode: capturing all blocks\n')
    } else if (mode === 'smart') {
      // Smart mode: only capture missing images
      console.log('Checking for existing images...\n')
      for (const block of blocks) {
        const exists = await imageExists(block.slug, OUTPUT_DIR)
        if (!exists) {
          blocksToCapture.push(block)
        } else {
          block.hasScreenshot = true
        }
      }

      if (blocksToCapture.length === 0) {
        console.log(
          'All block images already exist, skipping screenshot capture\n'
        )
      } else {
        console.log(`Found ${blocksToCapture.length} blocks without images\n`)
      }
    } else {
      // Skip mode: don't capture any
      console.log('Skipping screenshot capture\n')
      blocks.forEach((block) => (block.hasScreenshot = true))
    }

    // Capture screenshots if needed
    if (blocksToCapture.length > 0) {
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
      for (const block of blocksToCapture) {
        const success = await captureScreenshot(browser, block.slug, OUTPUT_DIR)

        if (success) {
          successCount++
          block.hasScreenshot = true
        } else {
          errorCount++
          block.hasScreenshot = false
        }
      }

      await browser.close()

      console.log('\n=== Screenshot Capture Complete ===')
      console.log(`✓ Successful: ${successCount}`)
      console.log(`✗ Failed: ${errorCount}`)
      console.log(`Total captured: ${blocksToCapture.length}\n`)
    }

    // Generate README
    console.log('Generating README...')
    const readme = generateReadme(blocks)
    await writeFile(README_PATH, readme, 'utf8')
    console.log(`✓ README saved to ${README_PATH}\n`)

    console.log('=== Blocks Catalog Generation Complete ===')
    console.log(`\nView README at: ${README_PATH}`)
  } catch (error) {
    console.error('Fatal error:', error)
    process.exit(1)
  }
}

function generateReadme(blocks) {
  const freeBlocks = blocks.filter((b) => b.tier === 'free')
  const proBlocks = blocks.filter((b) => b.tier === 'pro')

  let readme = `# Speedwell Blocks\n\n`
  readme += `A collection of ${blocks.length} pre-built UI blocks for the Speedwell template.\n\n`
  readme += `## Overview\n\n`
  readme += `- **Total Blocks:** ${blocks.length}\n`
  readme += `- **Free Blocks:** ${freeBlocks.length}\n`
  readme += `- **Pro Blocks:** ${proBlocks.length}\n\n`

  // Group blocks by category
  const categories = {}
  blocks.forEach((block) => {
    const category = block.name.replace(/-\d+$/, '')
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push(block)
  })

  readme += `## Categories\n\n`
  sortCategories(Object.keys(categories)).forEach((category) => {
    readme += `- **${getCategoryDisplayName(category)}:** ${categories[category].length} blocks\n`
  })
  readme += `\n`

  readme += `## Blocks\n\n`

  // Group blocks by category while preserving order within each category
  const blocksByCategory = {}
  blocks.forEach((block) => {
    const category = block.name.replace(/-\d+$/, '')
    if (!blocksByCategory[category]) {
      blocksByCategory[category] = []
    }
    blocksByCategory[category].push(block)
  })

  // Output blocks grouped by category (categories sorted by preferred order)
  sortCategories(Object.keys(blocksByCategory)).forEach((category) => {
    readme += `### ${getCategoryDisplayName(category)}\n\n`

    blocksByCategory[category].forEach((block) => {
      readme += `#### ${block.displayName}\n\n`
      if (block.hasScreenshot) {
        readme += `<img src="../../public/blocks/${block.slug}.jpg" alt="${block.displayName}" width="350">\n\n`
      }
      readme += `**Slug:** \`${block.slug}\`  \n`
      readme += `**Tier:** ${block.tier.charAt(0).toUpperCase() + block.tier.slice(1)}\n\n`
      readme += `---\n\n`
    })
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

generateBlocksCatalog(mode, ignoreSavedOrder)
