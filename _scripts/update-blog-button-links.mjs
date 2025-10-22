import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const postsDir = path.join(__dirname, '../src/app/markdown/post')

// Get all blog post files
const blogFiles = fs
  .readdirSync(postsDir)
  .filter((file) => file.endsWith('.mdx'))
  .sort()

console.log(`Found ${blogFiles.length} blog post files\n`)

let updatedCount = 0

blogFiles.forEach((filename) => {
  const filePath = path.join(postsDir, filename)
  let content = fs.readFileSync(filePath, 'utf8')

  // Extract the slug from metadata
  const slugMatch = content.match(/slug:\s*'([^']+)'/)
  if (!slugMatch) {
    console.log(`⚠ No slug found in ${filename}`)
    return
  }

  const slug = slugMatch[1]
  const relativePath = `/post/${slug}`

  // Find and update the Button href
  // Match Button component with href attribute
  const buttonMatch = content.match(/<Button\s+href="[^"]*"/)

  if (!buttonMatch) {
    console.log(`⚠ No Button found in ${filename}`)
    return
  }

  // Replace the Button href with the relative path
  const updatedContent = content.replace(
    /(<Button\s+)href="[^"]*"/,
    `$1href="${relativePath}"`
  )

  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent)
    updatedCount++
    console.log(`✓ ${filename} → ${relativePath}`)
  }
})

console.log(`\nDone! Updated ${updatedCount} blog post buttons.`)
