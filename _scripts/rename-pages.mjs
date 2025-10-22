import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const markdownDir = path.join(__dirname, '../src/app/markdown')

// Lorem ipsum words pool
const loremWords = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'dolore',
  'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
  'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'commodo', 'consequat',
  'duis', 'aute', 'irure', 'reprehenderit', 'voluptate', 'velit', 'esse',
  'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat',
  'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'officia', 'deserunt',
  'mollit', 'anim', 'laborum', 'est'
]

// Get all MDX files (excluding index.mdx)
const files = fs.readdirSync(markdownDir)
  .filter(file => file.endsWith('.mdx') && file !== 'index.mdx')

console.log(`Found ${files.length} MDX files to rename`)

// Use a temp directory to avoid naming conflicts
const tempDir = path.join(markdownDir, '_temp')
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir)
}

files.forEach((filename, index) => {
  const oldPath = path.join(markdownDir, filename)
  
  // Count words in current filename (remove .mdx and split by hyphens)
  const currentName = filename.replace('.mdx', '')
  const wordCount = currentName.split('-').length
  
  // Generate new filename with same word count
  const newWords = []
  for (let i = 0; i < wordCount; i++) {
    newWords.push(loremWords[(index * wordCount + i) % loremWords.length])
  }
  const newFilename = newWords.join('-') + '.mdx'
  const tempPath = path.join(tempDir, newFilename)
  
  // Read the file content
  let content = fs.readFileSync(oldPath, 'utf8')
  
  // Generate title from new filename
  const title = newWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  // Extract the old slug from metadata if it exists
  const slugMatch = content.match(/slug:\s*'([^']*)'/)
  const oldSlug = slugMatch ? slugMatch[1] : currentName
  const newSlug = newWords.join('-')
  
  // Update metadata slug if it exists
  if (slugMatch) {
    content = content.replace(/slug:\s*'[^']*'/g, `slug: '${newSlug}'`)
  }
  
  // Update canonical URL slug if it exists
  content = content.replace(
    new RegExp(`(canonical:\\s*'https://[^/]+/)${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
    `$1${newSlug}'`
  )
  
  // Update the first H1 in the body to match the title
  content = content.replace(/^#\s+.+$/m, `# ${title}`)
  
  // Write to temp directory
  fs.writeFileSync(tempPath, content)
  
  console.log(`✓ ${filename} (${wordCount} words) → ${newFilename}`)
})

// Remove old files
files.forEach((filename) => {
  fs.unlinkSync(path.join(markdownDir, filename))
})

// Move files from temp to main directory
const tempFiles = fs.readdirSync(tempDir)
tempFiles.forEach((filename) => {
  fs.renameSync(path.join(tempDir, filename), path.join(markdownDir, filename))
})

// Remove temp directory
fs.rmdirSync(tempDir)

console.log('\nPage renaming complete!')
