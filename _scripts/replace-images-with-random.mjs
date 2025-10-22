#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load image metadata
const metaPath = path.join(__dirname, '..', '_data', '_meta.json')
const imageMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))

// Load original image metadata for aspect ratio lookup
const metaOriginalPath = path.join(
  __dirname,
  '..',
  '_data',
  '_meta-original.json'
)
const imageMetaOriginal = JSON.parse(fs.readFileSync(metaOriginalPath, 'utf8'))

// Get all Pexels image keys only, excluding specific images
const allImageKeys = Object.keys(imageMeta).filter(
  (key) =>
    key.toLowerCase().includes('pexels') &&
    key.startsWith('/images/') &&
    !key.toLowerCase().includes('favicon') &&
    !key.toLowerCase().includes('logo') &&
    !key.toLowerCase().includes('geometric') &&
    !key.toLowerCase().includes('flower') &&
    !key.toLowerCase().includes('bird') &&
    !key.toLowerCase().includes('adobestock')
)

console.log(`📸 Found ${allImageKeys.length} Pexels images in metadata`)

// Categorize images as horizontal or square
const horizontalImages = []
const squareImages = []

allImageKeys.forEach((key) => {
  const meta = imageMeta[key]
  const fullSize = meta.full || meta.large || meta.medium || meta.small

  if (fullSize) {
    const aspectRatio = fullSize.width / fullSize.height

    // Square includes portrait and square (aspect ratio <= 1.1)
    if (aspectRatio <= 1.1) {
      squareImages.push(key)
    } else {
      // Horizontal (aspect ratio > 1.1)
      horizontalImages.push(key)
    }
  }
})

console.log(
  `  🖼️  ${horizontalImages.length} horizontal images (aspect ratio > 1.1)`
)
console.log(
  `  ⬜ ${squareImages.length} square/portrait images (aspect ratio <= 1.1)`
)

// Track image usage to spread them evenly
const imageUsageCount = {}
allImageKeys.forEach((key) => {
  imageUsageCount[key] = 0
})

// Track images used on current page to avoid duplicates
let currentPageImages = new Set()
let currentPagePath = null

// Function to get aspect ratio of an image
function getAspectRatio(imageUrl, useOriginal = true) {
  // Try original metadata first if requested
  let meta = useOriginal ? imageMetaOriginal[imageUrl] : null

  // Fallback to current metadata
  if (!meta) {
    meta = imageMeta[imageUrl]
  }

  if (!meta) return null

  const fullSize = meta.full || meta.large || meta.medium || meta.small
  if (!fullSize) return null

  return fullSize.width / fullSize.height
}

// Function to determine if image is horizontal or square based on original dimensions
function isHorizontal(imageUrl) {
  const aspectRatio = getAspectRatio(imageUrl, true)
  if (aspectRatio === null) {
    // If we can't determine, check current metadata
    const currentRatio = getAspectRatio(imageUrl, false)
    return currentRatio !== null && currentRatio > 1.1
  }
  return aspectRatio > 1.1
}

// Function to get the least used image from a category, avoiding current page duplicates
function getLeastUsedImage(imageArray, isGallery = false) {
  if (imageArray.length === 0) return null

  // For galleries, allow repeating images
  if (isGallery) {
    // Sort by usage count and pick from least used
    const sorted = [...imageArray].sort(
      (a, b) => imageUsageCount[a] - imageUsageCount[b]
    )
    const leastUsedCount = imageUsageCount[sorted[0]]
    const leastUsed = sorted.filter(
      (img) => imageUsageCount[img] === leastUsedCount
    )
    const randomIndex = Math.floor(Math.random() * leastUsed.length)
    return leastUsed[randomIndex]
  }

  // For non-gallery, try to avoid images already on this page
  const availableImages = imageArray.filter(
    (img) => !currentPageImages.has(img)
  )

  if (availableImages.length > 0) {
    // Sort by usage count
    const sorted = availableImages.sort(
      (a, b) => imageUsageCount[a] - imageUsageCount[b]
    )
    const leastUsedCount = imageUsageCount[sorted[0]]
    const leastUsed = sorted.filter(
      (img) => imageUsageCount[img] === leastUsedCount
    )
    const randomIndex = Math.floor(Math.random() * leastUsed.length)
    return leastUsed[randomIndex]
  }

  // If all images are used on this page, just pick the least used overall
  const sorted = [...imageArray].sort(
    (a, b) => imageUsageCount[a] - imageUsageCount[b]
  )
  const leastUsedCount = imageUsageCount[sorted[0]]
  const leastUsed = sorted.filter(
    (img) => imageUsageCount[img] === leastUsedCount
  )
  const randomIndex = Math.floor(Math.random() * leastUsed.length)
  return leastUsed[randomIndex]
}

// Function to get replacement image
function getReplacementImage(currentUrl, isGallery = false) {
  const horizontal = isHorizontal(currentUrl)
  const imageArray = horizontal ? horizontalImages : squareImages

  const newImage = getLeastUsedImage(imageArray, isGallery)

  if (newImage) {
    imageUsageCount[newImage]++
    if (!isGallery) {
      currentPageImages.add(newImage)
    }
    return newImage
  }

  // Fallback to any image if category is empty
  const fallbackArray = horizontal ? squareImages : horizontalImages
  const fallbackImage = getLeastUsedImage(fallbackArray, isGallery)
  if (fallbackImage) {
    imageUsageCount[fallbackImage]++
    if (!isGallery) {
      currentPageImages.add(fallbackImage)
    }
    return fallbackImage
  }

  // Last resort: return current URL
  return currentUrl
}

// Find all MDX files in a directory recursively
function findMdxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      findMdxFiles(filePath, fileList)
    } else if (file.endsWith('.mdx')) {
      fileList.push(filePath)
    }
  })

  return fileList
}

// Process a single MDX file
async function processMdxFile(filePath) {
  try {
    // Reset page tracking when starting a new file
    if (currentPagePath !== filePath) {
      currentPageImages = new Set()
      currentPagePath = filePath
    }

    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false

    console.log(`\n📝 Processing ${path.basename(filePath)}`)

    // Check if this is inside a Gallery component to allow duplicate images
    const hasGallery =
      content.includes('<Gallery') || content.includes('images: [')

    // Pattern 1: Replace featuredImage in metadata
    content = content.replace(
      /featuredImage:\s*['"](\/images\/[^'"]+)['"]/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `featuredImage: '${newImage}'`
      }
    )

    // Pattern 2: Replace image.url in openGraph metadata
    content = content.replace(
      /image:\s*\{\s*url:\s*['"](\/images\/[^'"]+)['"]/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `image: {\n      url: '${newImage}'`
      }
    )

    // Pattern 3: Replace src="/images/..." in Image components
    content = content.replace(
      /src="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `src="${newImage}"`
      }
    )

    // Pattern 4: Replace src='/images/...' in Image components (single quotes)
    content = content.replace(
      /src='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `src='${newImage}'`
      }
    )

    // Pattern 5: Replace src={"/images/..."} or src={'/images/...'}
    content = content.replace(
      /src=\{["'](\/images\/[^"']+)["']\}/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `src="${newImage}"`
      }
    )

    // Pattern 6: Replace image="/images/..." prop
    content = content.replace(
      /image="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `image="${newImage}"`
      }
    )

    // Pattern 7: Replace image='/images/...' prop
    content = content.replace(
      /image='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `image='${newImage}'`
      }
    )

    // Pattern 8: Replace imageUrl="/images/..." prop
    content = content.replace(
      /imageUrl="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `imageUrl="${newImage}"`
      }
    )

    // Pattern 9: Replace imageUrl='/images/...' prop
    content = content.replace(
      /imageUrl='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `imageUrl='${newImage}'`
      }
    )

    // Pattern 10: Replace backgroundImage="/images/..." prop
    content = content.replace(
      /backgroundImage="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `backgroundImage="${newImage}"`
      }
    )

    // Pattern 11: Replace imageSrc="/images/..." prop (used in Cover, etc.)
    content = content.replace(
      /imageSrc="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `imageSrc="${newImage}"`
      }
    )

    // Pattern 12: Replace imageSrc='/images/...' prop (single quotes)
    content = content.replace(
      /imageSrc='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `imageSrc='${newImage}'`
      }
    )

    // Pattern 13: Replace img="/images/..." prop (used in Testimonial, etc.)
    content = content.replace(
      /img="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `img="${newImage}"`
      }
    )

    // Pattern 14: Replace img='/images/...' prop (single quotes)
    content = content.replace(
      /img='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getReplacementImage(currentUrl, false)
        modified = true
        return `img='${newImage}'`
      }
    )

    // Pattern 15: Replace images: ["/images/...", "/images/..."] arrays (galleries can have duplicates)
    content = content.replace(
      /images:\s*\[([^\]]+)\]/g,
      (match, imageArray) => {
        const imageMatches = imageArray.match(/["'](\/images\/[^"']+)["']/g)
        if (imageMatches) {
          const newImages = imageMatches
            .map((imgMatch) => {
              const currentUrl = imgMatch.match(/["'](\/images\/[^"']+)["']/)[1]
              return `'${getReplacementImage(currentUrl, true)}'`
            })
            .join(', ')
          modified = true
          return `images: [${newImages}]`
        }
        return match
      }
    )

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ Updated ${path.basename(filePath)}`)
    } else {
      console.log(`⏭️  No images found in ${path.basename(filePath)}`)
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
  }
}

// Main function
async function main() {
  const rootDir = path.join(__dirname, '..')
  const mdxDir = path.join(rootDir, 'src/app/markdown')
  const templateDir = path.join(rootDir, 'src/app/template')

  console.log('🔍 Finding MDX files...\n')

  const markdownFiles = findMdxFiles(mdxDir)
  const templateFiles = findMdxFiles(templateDir)
  const files = [...markdownFiles, ...templateFiles]

  console.log(`📄 Found ${markdownFiles.length} MDX files in markdown/`)
  console.log(`📄 Found ${templateFiles.length} MDX files in template/`)
  console.log(`📄 Total: ${files.length} MDX files\n`)
  console.log('🔄 Processing files...\n')

  for (const file of files) {
    await processMdxFile(file)
  }

  console.log('\n✨ Done!')
  console.log('\n📊 Image usage statistics:')

  // Show usage distribution
  const usageCounts = Object.values(imageUsageCount)
  const totalUsage = usageCounts.reduce((a, b) => a + b, 0)
  const minUsage = Math.min(...usageCounts)
  const maxUsage = Math.max(...usageCounts)
  const avgUsage = (totalUsage / allImageKeys.length).toFixed(1)

  console.log(`  Total image placements: ${totalUsage}`)
  console.log(`  Average uses per image: ${avgUsage}`)
  console.log(`  Min uses: ${minUsage}, Max uses: ${maxUsage}`)

  // Show most and least used
  const sorted = Object.entries(imageUsageCount).sort((a, b) => b[1] - a[1])
  console.log(
    `\n  Most used: ${path.basename(sorted[0][0])} (${sorted[0][1]} times)`
  )
  console.log(
    `  Least used: ${path.basename(sorted[sorted.length - 1][0])} (${sorted[sorted.length - 1][1]} times)`
  )
}

main().catch(console.error)
