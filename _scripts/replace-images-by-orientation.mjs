#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT_DIR = path.resolve(__dirname, '..')
const ORIGINALS_ROOT = path.join(ROOT_DIR, 'public', 'originals')
const PORTFOLIO_PATH = path.join(ORIGINALS_ROOT, 'portfolio')
const META_JSON = path.join(ROOT_DIR, '_data', '_meta.json')
const MARKDOWN_DIR = path.join(ROOT_DIR, 'src', 'markdown')

// Get orientation of an image
function getOrientation(width, height) {
  const ratio = width / height

  if (ratio > 1.1) return 'horizontal'
  if (ratio < 0.9) return 'vertical'
  return 'square'
}

// Get all pexels images from root originals directory (not subdirectories)
async function getRootImages(metaData) {
  const files = await fs.readdir(ORIGINALS_ROOT)
  const images = []

  for (const file of files) {
    if (file.startsWith('pexels-') && file.endsWith('.jpg')) {
      const key = `/images/${file}`

      if (metaData[key] && metaData[key].full) {
        const { width, height } = metaData[key].full
        const orientation = getOrientation(width, height)
        images.push({ file, orientation, width, height })
      }
    }
  }

  return images
}

// Get all pexels images from portfolio directory (including subdirectories)
async function getPortfolioImages(
  metaData,
  dir = PORTFOLIO_PATH,
  basePath = 'portfolio'
) {
  const images = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.join(basePath, entry.name)

    if (entry.isDirectory()) {
      const subImages = await getPortfolioImages(
        metaData,
        fullPath,
        relativePath
      )
      images.push(...subImages)
    } else if (
      entry.name.startsWith('pexels-') &&
      entry.name.endsWith('.jpg')
    ) {
      const key = `/images/${relativePath}`

      if (metaData[key] && metaData[key].full) {
        const { width, height } = metaData[key].full
        const orientation = getOrientation(width, height)
        images.push({ file: relativePath, orientation, width, height })
      }
    }
  }

  return images
}

// Find all MDX files
async function findMdxFiles(dir = MARKDOWN_DIR) {
  const files = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const subFiles = await findMdxFiles(fullPath)
      files.push(...subFiles)
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath)
    }
  }

  return files
}

// Replace images in a file
async function replaceImagesInFile(filePath, mappings) {
  let content = await fs.readFile(filePath, 'utf-8')
  let modified = false

  for (const [oldImg, newImg] of Object.entries(mappings)) {
    const regex = new RegExp(oldImg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
    if (regex.test(content)) {
      content = content.replace(regex, newImg)
      modified = true
    }
  }

  if (modified) {
    await fs.writeFile(filePath, content, 'utf-8')
    return true
  }

  return false
}

// Main function
async function main() {
  console.log('🔍 Reading image metadata...\n')

  // Load metadata
  const metaContent = await fs.readFile(META_JSON, 'utf-8')
  const metaData = JSON.parse(metaContent)

  // Get root and portfolio images
  const rootImages = await getRootImages(metaData)
  const portfolioImages = await getPortfolioImages(metaData)

  // Group by orientation
  const rootByOrientation = {
    horizontal: rootImages.filter((img) => img.orientation === 'horizontal'),
    vertical: rootImages.filter((img) => img.orientation === 'vertical'),
    square: rootImages.filter((img) => img.orientation === 'square'),
  }

  const portfolioByOrientation = {
    horizontal: portfolioImages.filter(
      (img) => img.orientation === 'horizontal'
    ),
    vertical: portfolioImages.filter((img) => img.orientation === 'vertical'),
    square: portfolioImages.filter((img) => img.orientation === 'square'),
  }

  console.log('📊 Image Analysis:')
  console.log(`Root images: ${rootImages.length} total`)
  console.log(`  - Horizontal: ${rootByOrientation.horizontal.length}`)
  console.log(`  - Vertical: ${rootByOrientation.vertical.length}`)
  console.log(`  - Square: ${rootByOrientation.square.length}`)
  console.log(`\nPortfolio images: ${portfolioImages.length} total`)
  console.log(`  - Horizontal: ${portfolioByOrientation.horizontal.length}`)
  console.log(`  - Vertical: ${portfolioByOrientation.vertical.length}`)
  console.log(`  - Square: ${portfolioByOrientation.square.length}\n`)

  // Create mappings
  const mappings = {}
  let hIndex = 0,
    vIndex = 0,
    sIndex = 0

  // Map horizontal images
  for (const rootImg of rootByOrientation.horizontal) {
    if (portfolioByOrientation.horizontal.length > 0) {
      const portfolioImg =
        portfolioByOrientation.horizontal[
          hIndex % portfolioByOrientation.horizontal.length
        ]
      mappings[rootImg.file] = portfolioImg.file
      hIndex++
    }
  }

  // Map vertical images
  for (const rootImg of rootByOrientation.vertical) {
    if (portfolioByOrientation.vertical.length > 0) {
      const portfolioImg =
        portfolioByOrientation.vertical[
          vIndex % portfolioByOrientation.vertical.length
        ]
      mappings[rootImg.file] = portfolioImg.file
      vIndex++
    }
  }

  // Map square images (can use square or horizontal)
  for (const rootImg of rootByOrientation.square) {
    const availableImages =
      portfolioByOrientation.square.length > 0
        ? portfolioByOrientation.square
        : portfolioByOrientation.horizontal

    if (availableImages.length > 0) {
      const portfolioImg = availableImages[sIndex % availableImages.length]
      mappings[rootImg.file] = portfolioImg.file
      sIndex++
    }
  }

  console.log('🗺️  Image Mappings:')
  for (const [oldImg, newImg] of Object.entries(mappings)) {
    console.log(`  ${oldImg} → ${newImg}`)
  }
  console.log('')

  // Find all MDX files
  const mdxFiles = await findMdxFiles()
  console.log(`📝 Found ${mdxFiles.length} MDX files\n`)

  // Replace images in all files
  let modifiedCount = 0
  for (const file of mdxFiles) {
    const wasModified = await replaceImagesInFile(file, mappings)
    if (wasModified) {
      modifiedCount++
      const relativePath = path.relative(ROOT_DIR, file)
      console.log(`✅ Updated: ${relativePath}`)
    }
  }

  console.log(`\n✨ Complete! Modified ${modifiedCount} files.`)
}

// Run the script
main().catch(console.error)
