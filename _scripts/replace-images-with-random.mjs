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

// Get all Pexels image keys only
const allImageKeys = Object.keys(imageMeta).filter(
  (key) => key.toLowerCase().includes('pexels') && key.startsWith('/images/')
)

console.log(`📸 Found ${allImageKeys.length} Pexels images in metadata`)

// Categorize images by aspect ratio
const portraitImages = []
const landscapeImages = []
const squareImages = []

allImageKeys.forEach((key) => {
  const meta = imageMeta[key]
  const fullSize = meta.full || meta.large || meta.medium || meta.small

  if (fullSize) {
    const aspectRatio = fullSize.width / fullSize.height

    if (aspectRatio < 0.9) {
      portraitImages.push(key)
    } else if (aspectRatio > 1.1) {
      landscapeImages.push(key)
    } else {
      squareImages.push(key)
    }
  }
})

console.log(`  � ${portraitImages.length} portrait images (aspect ratio < 0.9)`)
console.log(
  `  🖼️  ${landscapeImages.length} landscape images (aspect ratio > 1.1)`
)
console.log(`  ⬜ ${squareImages.length} square images (aspect ratio 0.9-1.1)`)

// Function to get aspect ratio of an existing image
function getAspectRatio(imageUrl) {
  // Try original metadata first (for looking up old images)
  let meta = imageMetaOriginal[imageUrl]

  // Fallback to current metadata (for new Pexels images)
  if (!meta) {
    meta = imageMeta[imageUrl]
  }

  if (!meta) return null

  const fullSize = meta.full || meta.large || meta.medium || meta.small
  if (!fullSize) return null

  return fullSize.width / fullSize.height
}

// Function to get a random image URL matching aspect ratio
function getRandomImageUrl(currentUrl = null) {
  // If no current URL, return random from all
  if (!currentUrl) {
    const randomIndex = Math.floor(Math.random() * allImageKeys.length)
    return allImageKeys[randomIndex]
  }

  const currentAspectRatio = getAspectRatio(currentUrl)

  // If we can't determine aspect ratio, return random
  if (currentAspectRatio === null) {
    const randomIndex = Math.floor(Math.random() * allImageKeys.length)
    return allImageKeys[randomIndex]
  }

  // Calculate aspect ratio difference for each image and sort by similarity
  const imagesWithDiff = allImageKeys.map((imageKey) => {
    const aspectRatio = getAspectRatio(imageKey)
    if (aspectRatio === null) {
      return { imageKey, diff: Infinity }
    }

    // Calculate absolute difference in aspect ratios
    const diff = Math.abs(aspectRatio - currentAspectRatio)
    return { imageKey, diff }
  })

  // Sort by aspect ratio difference (most similar first)
  imagesWithDiff.sort((a, b) => a.diff - b.diff)

  // Take top 5 most similar images and randomly pick one
  // This adds variety while maintaining aspect ratio similarity
  const topMatches = imagesWithDiff.slice(0, Math.min(5, imagesWithDiff.length))
  const randomIndex = Math.floor(Math.random() * topMatches.length)

  return topMatches[randomIndex].imageKey
} // Find all MDX files in a directory recursively
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
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false

    console.log(`\n📝 Processing ${path.basename(filePath)}`)

    // Pattern 1: Replace featuredImage in metadata
    content = content.replace(
      /featuredImage:\s*['"](\/images\/[^'"]+)['"]/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `featuredImage: '${newImage}'`
      }
    )

    // Pattern 2: Replace image.url in openGraph metadata
    content = content.replace(
      /image:\s*\{\s*url:\s*['"](\/images\/[^'"]+)['"]/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `image: {\n      url: '${newImage}'`
      }
    )

    // Pattern 3: Replace src="/images/..." in Image components
    content = content.replace(
      /src="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `src="${newImage}"`
      }
    )

    // Pattern 4: Replace src='/images/...' in Image components (single quotes)
    content = content.replace(
      /src='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `src='${newImage}'`
      }
    )

    // Pattern 5: Replace src={"/images/..."} or src={'/images/...'}
    content = content.replace(
      /src=\{["'](\/images\/[^"']+)["']\}/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `src="${newImage}"`
      }
    )

    // Pattern 6: Replace image="/images/..." prop
    content = content.replace(
      /image="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `image="${newImage}"`
      }
    )

    // Pattern 7: Replace image='/images/...' prop
    content = content.replace(
      /image='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `image='${newImage}'`
      }
    )

    // Pattern 8: Replace imageUrl="/images/..." prop
    content = content.replace(
      /imageUrl="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `imageUrl="${newImage}"`
      }
    )

    // Pattern 9: Replace imageUrl='/images/...' prop
    content = content.replace(
      /imageUrl='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `imageUrl='${newImage}'`
      }
    )

    // Pattern 10: Replace backgroundImage="/images/..." prop
    content = content.replace(
      /backgroundImage="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `backgroundImage="${newImage}"`
      }
    )

    // Pattern 11: Replace imageSrc="/images/..." prop (used in Cover, etc.)
    content = content.replace(
      /imageSrc="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `imageSrc="${newImage}"`
      }
    )

    // Pattern 12: Replace imageSrc='/images/...' prop (single quotes)
    content = content.replace(
      /imageSrc='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `imageSrc='${newImage}'`
      }
    )

    // Pattern 13: Replace img="/images/..." prop (used in Testimonial, etc.)
    content = content.replace(
      /img="(\/images\/[^"]+)"/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `img="${newImage}"`
      }
    )

    // Pattern 14: Replace img='/images/...' prop (single quotes)
    content = content.replace(
      /img='(\/images\/[^']+)'/g,
      (match, currentUrl) => {
        const newImage = getRandomImageUrl(currentUrl)
        modified = true
        return `img='${newImage}'`
      }
    )

    // Pattern 15: Replace images: ["/images/...", "/images/..."] arrays
    content = content.replace(
      /images:\s*\[([^\]]+)\]/g,
      (match, imageArray) => {
        // Count how many images are in the array
        const imageMatches = imageArray.match(/["'](\/images\/[^"']+)["']/g)
        if (imageMatches) {
          const newImages = imageMatches
            .map((imgMatch) => {
              const currentUrl = imgMatch.match(/["'](\/images\/[^"']+)["']/)[1]
              return `'${getRandomImageUrl(currentUrl)}'`
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
}

main().catch(console.error)
