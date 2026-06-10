import puppeteer from 'puppeteer'
import {
  readdir,
  writeFile,
  mkdir,
  unlink,
  access,
} from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { exec } from 'child_process'
import { promisify } from 'util'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: join(dirname(fileURLToPath(import.meta.url)), '../.env.local') })

const execAsync = promisify(exec)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SRC_DIR = join(__dirname, '../src')
const APP_DIR = join(SRC_DIR, 'app')
const OUTPUT_DIR = join(__dirname, '../public/blocks')
const BLOCK_INDEX_PATH = join(
  APP_DIR,
  '(demo)/block/[[...slug]]/_block-index.ts'
)
const BASE_URL = 'https://speedwell.gallop.software'
const LARGE_SIZE = 1400 // Large image size on longest side

// Route prefixes that are Pro. Screenshots are captured for Pro blocks only.
// Source of truth: PRO_LAYOUTS in prepare-lite.mjs — keep these in sync.
const PRO_LAYOUTS = [
  'layout-1',
  'layout-2',
  'layout-3',
  'layout-4',
  'layout-5',
  'layout-6',
  'layout-7',
]

// A block is Pro if the first segment of its slug is a Pro layout route.
function isProBlock(slug) {
  const prefix = slug.includes('/') ? slug.split('/')[0] : slug
  return PRO_LAYOUTS.includes(prefix)
}

// Helper function to recursively find all _blocks/ directories under src/app/
async function findBlocksDirs(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const results = []

  for (const entry of entries) {
    if (entry.name === '_blocks' && entry.isDirectory()) {
      results.push(join(dir, entry.name))
    } else if (entry.isDirectory() && !entry.name.startsWith('.')) {
      results.push(...(await findBlocksDirs(join(dir, entry.name))))
    }
  }

  return results
}

// Convert route path to URL slug (strip route group parentheses)
function routeToUrlSlug(blocksDir) {
  const relPath = dirname(blocksDir).replace(APP_DIR + '/', '')
  return relPath
    .split('/')
    .filter((seg) => !seg.startsWith('('))
    .join('/')
}

// Collect all block files from all _blocks/ directories
async function collectAllBlocks() {
  const blocksDirs = await findBlocksDirs(APP_DIR)
  const allFiles = []
  const seen = new Set()

  for (const blocksDir of blocksDirs) {
    const urlSlug = routeToUrlSlug(blocksDir)
    const files = (await readdir(blocksDir)).filter((f) => f.endsWith('.tsx'))

    for (const file of files) {
      const blockName = file.replace('.tsx', '')
      const slug = urlSlug ? `${urlSlug}/${blockName}` : blockName

      // Deduplicate by slug (shared blocks like cover/testimonial appear in multiple routes)
      if (!seen.has(slug)) {
        seen.add(slug)
        allFiles.push({ filename: file, slug, blocksDir })
      }
    }
  }

  return allFiles
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

    // Calculate dimensions for large size
    const large = calculateDimensions(LARGE_SIZE)

    // Save large image (1400px)
    const largeImagePath = join(outputDir, `${slug}.jpg`)
    await mkdir(dirname(largeImagePath), { recursive: true })
    await sharp(screenshotBuffer)
      .resize(large.w, large.h, { fit: 'inside' })
      .jpeg({ quality: 90 })
      .toFile(largeImagePath)

    console.log(`✓ Saved: ${slug}.jpg (${large.w}x${large.h})`)
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
    await access(imagePath)
    return true
  } catch {
    return false
  }
}

async function findScreenshots(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const results = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...(await findScreenshots(fullPath, base)))
    } else if (entry.name.endsWith('.jpg')) {
      const rel = fullPath.replace(base + '/', '').replace('.jpg', '')
      results.push(rel)
    }
  }

  return results
}

async function cleanupOrphanedScreenshots(currentBlockSlugs, outputDir) {
  const orphanedSlugs = []
  let deletedCount = 0

  // Find all screenshot files recursively
  let screenshotSlugs
  try {
    screenshotSlugs = await findScreenshots(outputDir)
  } catch {
    // Output directory doesn't exist yet
    return { orphanedSlugs, deletedCount }
  }

  // Find orphaned screenshots (exist as images but no corresponding block file)
  for (const slug of screenshotSlugs) {
    if (!currentBlockSlugs.has(slug)) {
      orphanedSlugs.push(slug)

      const imagePath = join(outputDir, `${slug}.jpg`)

      try {
        await access(imagePath)
        await unlink(imagePath)
        console.log(`✓ Deleted orphaned screenshot: ${slug}.jpg`)
        deletedCount++
      } catch {
        // File doesn't exist
      }
    }
  }

  return { orphanedSlugs, deletedCount }
}

async function generateBlocksCatalog(mode = 'smart', filterBlock = null) {
  try {
    console.log('Starting blocks catalog generation...\n')

    // Collect all block files from _blocks/ directories
    let blockFiles = await collectAllBlocks()

    // Filter to single block if specified
    if (filterBlock) {
      blockFiles = blockFiles.filter((f) => f.slug === filterBlock)
      if (blockFiles.length === 0) {
        console.error(`Error: Block "${filterBlock}" not found`)
        process.exit(1)
      }
      if (!isProBlock(filterBlock)) {
        console.error(
          `Error: "${filterBlock}" is not a Pro block — screenshots are only captured for Pro blocks (${PRO_LAYOUTS.join(', ')})`
        )
        process.exit(1)
      }
      console.log(`Filtering to single block: ${filterBlock}\n`)
    }

    console.log(`Found ${blockFiles.length} block files\n`)

    // Screenshots are captured for Pro blocks only (the block index below still covers all blocks).
    const blocks = blockFiles.filter((b) => isProBlock(b.slug)).map((b) => ({ ...b }))
    console.log(
      `${blocks.length} Pro blocks eligible for screenshots\n`
    )

    // Check for orphaned screenshots (skip when filtering to single block)
    if (!filterBlock) {
      const currentBlockSlugs = new Set(blocks.map((b) => b.slug))
      const { orphanedSlugs, deletedCount } = await cleanupOrphanedScreenshots(
        currentBlockSlugs,
        OUTPUT_DIR
      )

      if (orphanedSlugs.length > 0) {
        console.log(
          `\nCleaned up ${orphanedSlugs.length} orphaned blocks: ${orphanedSlugs.join(', ')}`
        )

        if (deletedCount > 0) {
          console.log(`Deleted ${deletedCount} orphaned screenshot files`)
          console.log('\nRunning npm run images to update processed images...')
          try {
            const { stdout } = await execAsync('npm run images', {
              cwd: join(__dirname, '..'),
            })
            if (stdout) console.log(stdout)
            console.log('✓ Image processing complete\n')
          } catch (error) {
            console.error('Warning: npm run images failed:', error.message)
          }
        }
      }
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
        } else {
          errorCount++
        }
      }

      await browser.close()

      console.log('\n=== Screenshot Capture Complete ===')
      console.log(`✓ Successful: ${successCount}`)
      console.log(`✗ Failed: ${errorCount}`)
      console.log(`Total captured: ${blocksToCapture.length}\n`)
    }

    // Generate block index (skip when filtering to single block)
    if (!filterBlock) {
      console.log('Generating block index...')
      await generateBlockIndex(blockFiles)
    }

    console.log('=== Blocks Catalog Generation Complete ===')
  } catch (error) {
    console.error('Fatal error:', error)
    process.exit(1)
  }
}

async function generateBlockIndex(blockFiles) {
  const entries = []

  for (const { slug, blocksDir } of blockFiles) {
    const relFromSrc = blocksDir.replace(SRC_DIR + '/', '')
    const blockName = slug.includes('/') ? slug.split('/').pop() : slug
    const importPath = `@/${relFromSrc}/${blockName}`
    entries.push({ slug, importPath })
  }

  entries.sort((a, b) => a.slug.localeCompare(b.slug))

  const lines = [
    '// Auto-generated — regenerate with: npm run blocks',
    '// Maps demo page slugs to block imports',
    '',
    "import type { ComponentType } from 'react'",
    '',
    'export const blockImports: Record<string, () => Promise<{ default: ComponentType }>> = {',
  ]

  for (const { slug, importPath } of entries) {
    lines.push(`  '${slug}': () => import('${importPath}'),`)
  }

  lines.push('}')
  lines.push('')
  lines.push('export const blockSlugs = Object.keys(blockImports)')
  lines.push('')

  await writeFile(BLOCK_INDEX_PATH, lines.join('\n'), 'utf-8')
  console.log(
    `✓ Block index saved to ${BLOCK_INDEX_PATH} with ${entries.length} entries\n`
  )
}

// Run the script
let mode = 'skip'
let filterBlock = null

if (process.argv.includes('--screenshots')) {
  mode = 'force'
}

// Parse --block=name argument to filter to a single block
const blockArg = process.argv.find((arg) => arg.startsWith('--block='))
if (blockArg) {
  filterBlock = blockArg.split('=')[1]
}

generateBlocksCatalog(mode, filterBlock)
