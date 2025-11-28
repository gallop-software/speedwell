#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')

const POSTS_DIR = path.join(ROOT_DIR, 'src/content/post')
const OUTPUT_FILE = path.join(ROOT_DIR, '_data/_blog.json')

function extractMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')

    // Find the metadata export block - match until the end of the object
    const metadataMatch = content.match(
      /export const metadata = ({[\s\S]*?^})/m
    )

    if (!metadataMatch) {
      console.warn(`No metadata export found in ${path.basename(filePath)}`)
      return null
    }

    // Use Function constructor to safely evaluate the object literal
    const metadataCode = `return ${metadataMatch[1]}`
    const metadata = new Function(metadataCode)()

    return metadata
  } catch (error) {
    console.error(
      `Failed to extract metadata from ${path.basename(filePath)}:`,
      error.message
    )
    return null
  }
}

async function generateBlogMetadata() {
  console.log('🔍 Scanning posts directory...')

  if (!fs.existsSync(POSTS_DIR)) {
    console.error(`❌ Posts directory not found: ${POSTS_DIR}`)
    process.exit(1)
  }

  const files = fs.readdirSync(POSTS_DIR)
  const tsxFiles = files.filter((file) => file.endsWith('.tsx'))

  console.log(`📝 Found ${tsxFiles.length} post files`)

  const posts = []

  for (const file of tsxFiles) {
    const slug = file.replace('.tsx', '')
    const filePath = path.join(POSTS_DIR, file)
    const metadata = await extractMetadata(filePath)

    if (metadata) {
      posts.push({
        slug,
        metadata: {
          title: metadata.title || '',
          description: metadata.description || '',
          date: metadata.date || '',
          categories: metadata.categories || [],
          featuredImage: metadata.featuredImage || '',
          author: metadata.author || '',
        },
      })
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date)
    const dateB = new Date(b.metadata.date)
    return dateB.getTime() - dateA.getTime()
  })

  // Ensure _data directory exists
  const dataDir = path.dirname(OUTPUT_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8')

  console.log(`✅ Generated blog metadata: ${OUTPUT_FILE}`)
  console.log(`📊 Total posts: ${posts.length}`)
}

generateBlogMetadata().catch((error) => {
  console.error('❌ Error generating blog metadata:', error)
  process.exit(1)
})
