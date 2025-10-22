import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const postsDir = path.join(__dirname, '../src/app/markdown/post')
const imagesDir = path.join(__dirname, '../public/images')

// Get all unique Pexels images (excluding resized versions)
const allImages = fs
  .readdirSync(imagesDir)
  .filter(
    (file) =>
      file.match(/^pexels.*\.(jpg|jpeg|png|webp)$/i) &&
      !file.match(/-\d+x\d+\.(jpg|jpeg|png|webp)$/i)
  )
  .map((file) => `/images/${file}`)

console.log(`Found ${allImages.length} unique Pexels images`)

// Get all blog post files
const blogFiles = fs
  .readdirSync(postsDir)
  .filter((file) => file.endsWith('.mdx'))
  .sort()

console.log(`Found ${blogFiles.length} blog post files`)

// Shuffle images to ensure random distribution
const shuffledImages = [...allImages].sort(() => Math.random() - 0.5)

// Assign unique images to each blog post
blogFiles.forEach((filename, index) => {
  const filePath = path.join(postsDir, filename)
  let content = fs.readFileSync(filePath, 'utf8')

  // Get the unique image for this blog post
  const uniqueImage = shuffledImages[index % shuffledImages.length]

  // Update featuredImage
  content = content.replace(
    /featuredImage:\s*'[^']*'/g,
    `featuredImage: '${uniqueImage}'`
  )

  // Update openGraph image url
  content = content.replace(
    /(openGraph:\s*\{[^}]*image:\s*\{[^}]*url:\s*)'[^']*'/s,
    `$1'${uniqueImage}'`
  )

  // Find the first Image component and update its src
  // Match: <Image src="..." or <Image\n  src="..."
  const firstImageMatch = content.match(
    /<Image\s+[^>]*src=["']([^"']+)["'][^>]*>/s
  )

  if (firstImageMatch) {
    const oldImageSrc = firstImageMatch[1]
    // Replace only the first occurrence of this image in an Image component
    content = content.replace(
      new RegExp(
        `(<Image\\s+[^>]*src=["'])${oldImageSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(["'][^>]*>)`,
        's'
      ),
      `$1${uniqueImage}$2`
    )
  } else {
    // If no Image component found, try GalleryItem
    const galleryItemMatch = content.match(
      /<GalleryItem\s+[^>]*src=["']([^"']+)["'][^>]*>/s
    )
    if (galleryItemMatch) {
      const oldImageSrc = galleryItemMatch[1]
      content = content.replace(
        new RegExp(
          `(<GalleryItem\\s+[^>]*src=["'])${oldImageSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(["'][^>]*>)`,
          's'
        ),
        `$1${uniqueImage}$2`
      )
    }
  }

  // Write updated content back
  fs.writeFileSync(filePath, content)

  console.log(`✓ ${filename} → ${uniqueImage}`)
})

console.log('\nDone! Each blog post now has a unique featured image.')
