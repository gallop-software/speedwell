#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')

const POSTS_DIR = path.join(ROOT_DIR, 'src/app/(post)/post')
const OUTPUT_FILE = path.join(ROOT_DIR, '_data/_blog.json')

function extractMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')

    // Match `const metadata: PageMetadata = { … }` (folder-per-post shape)
    const metadataMatch = content.match(
      /^const metadata[^=]*=\s*({[\s\S]*?^})/m
    )

    if (!metadataMatch) {
      console.warn(`No metadata declaration found in ${filePath}`)
      return null
    }

    const metadataCode = `return ${metadataMatch[1]}`
    return new Function(metadataCode)()
  } catch (error) {
    console.error(`Failed to extract metadata from ${filePath}:`, error.message)
    return null
  }
}

// Posts keep `const TITLE = '...'` in preview.tsx as the plain card title.
// The SEO `metadata.title` (in page.tsx) is the full "Title | Subtitle" form;
// _blog.json should store the plain version so blog cards render the short name.
function extractPlainTitle(previewPath) {
  if (!fs.existsSync(previewPath)) return null
  const content = fs.readFileSync(previewPath, 'utf8')
  const match =
    content.match(/const TITLE\s*=\s*"((?:[^"\\]|\\.)*)"/) ||
    content.match(/const TITLE\s*=\s*'((?:[^'\\]|\\.)*)'/) ||
    content.match(/const TITLE\s*=\s*`((?:[^`\\]|\\.)*)`/)
  return match ? match[1].replace(/\\(.)/g, '$1') : null
}

async function generateBlogMetadata() {
  console.log('🔍 Scanning posts directory...')

  const dataDir = path.dirname(OUTPUT_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  if (!fs.existsSync(POSTS_DIR)) {
    console.log(`📁 No posts directory found at ${POSTS_DIR}`)
    console.log(`📝 Creating empty _blog.json`)
    fs.writeFileSync(OUTPUT_FILE, '[]', 'utf8')
    console.log(`✅ Generated empty blog metadata: ${OUTPUT_FILE}`)
    return
  }

  const entries = fs.readdirSync(POSTS_DIR, { withFileTypes: true })
  const slugs = entries
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith('[') &&
        !entry.name.startsWith('_') &&
        fs.existsSync(path.join(POSTS_DIR, entry.name, 'page.tsx'))
    )
    .map((entry) => entry.name)

  console.log(`📝 Found ${slugs.length} post folders`)

  const posts = []

  for (const slug of slugs) {
    const filePath = path.join(POSTS_DIR, slug, 'page.tsx')
    const previewPath = path.join(POSTS_DIR, slug, 'preview.tsx')
    const metadata = await extractMetadata(filePath)
    const plainTitle = extractPlainTitle(previewPath)

    if (metadata) {
      posts.push({
        slug,
        metadata: {
          title: plainTitle || metadata.title || '',
          description: metadata.description || '',
          date: metadata.date || '',
          categories: metadata.categories || [],
          featuredImage: metadata.featuredImage || '',
          author: metadata.author || '',
        },
      })
    }
  }

  posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date)
    const dateB = new Date(b.metadata.date)
    return dateB.getTime() - dateA.getTime()
  })

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8')

  console.log(`✅ Generated blog metadata: ${OUTPUT_FILE}`)
  console.log(`📊 Total posts: ${posts.length}`)
}

generateBlogMetadata().catch((error) => {
  console.error('❌ Error generating blog metadata:', error)
  process.exit(1)
})
