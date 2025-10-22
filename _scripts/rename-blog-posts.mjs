import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const postsDir = path.join(__dirname, '../src/app/markdown/post')

// Lorem ipsum title variations
const loremTitles = [
  'Lorem ipsum dolor sit amet',
  'Consectetur adipiscing elit sed',
  'Eiusmod tempor incididunt labore',
  'Dolore magna aliqua enim',
  'Minim veniam quis nostrud',
  'Exercitation ullamco laboris nisi',
  'Aliquip commodo consequat duis',
  'Aute irure dolor reprehenderit',
  'Voluptate velit esse cillum',
  'Dolore fugiat nulla pariatur',
  'Excepteur sint occaecat cupidatat',
  'Non proident sunt culpa',
  'Officia deserunt mollit anim',
  'Laborum est eiusmod adipiscing',
  'Tempor incididunt magna aliqua',
  'Veniam quis nostrud exercitation',
  'Ullamco laboris nisi aliquip',
  'Commodo consequat duis aute',
  'Irure dolor reprehenderit voluptate',
  'Velit esse cillum dolore',
  'Fugiat nulla pariatur excepteur',
  'Sint occaecat cupidatat non',
  'Proident sunt culpa officia',
  'Deserunt mollit anim laborum',
  'Est eiusmod adipiscing elit',
  'Sed do tempor incididunt',
  'Ut labore dolore magna',
  'Enim ad minim veniam',
  'Quis nostrud exercitation ullamco',
  'Laboris nisi aliquip commodo',
  'Consequat duis aute irure',
  'Dolor reprehenderit voluptate velit',
  'Esse cillum dolore fugiat',
  'Nulla pariatur excepteur sint',
  'Occaecat cupidatat non proident',
]

// Get all current blog post files
const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.mdx'))

console.log(`Found ${files.length} blog post files`)

// Use a temp directory to avoid naming conflicts
const tempDir = path.join(postsDir, '_temp')
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir)
}

files.forEach((filename, index) => {
  const oldPath = path.join(postsDir, filename)
  const title = loremTitles[index]
  const slug = title.toLowerCase().replace(/\s+/g, '-')
  const newFilename = `${slug}.mdx`
  const tempPath = path.join(tempDir, newFilename)

  // Read the file content
  let content = fs.readFileSync(oldPath, 'utf8')

  // Extract the first image src from the content (look for Image, GalleryItem src attributes)
  const imageMatch = content.match(
    /src=["']([^"']+\.(?:jpg|jpeg|png|webp))["']/i
  )
  const firstImageSrc = imageMatch
    ? imageMatch[1]
    : '/images/pexels-pixelcop-3173103.jpg'

  // Update metadata title
  content = content.replace(/title:\s*'[^']*'/g, `title: '${title}'`)

  // Update metadata slug
  content = content.replace(/slug:\s*'[^']*'/g, `slug: '${slug}'`)

  // Update featuredImage to match first image
  content = content.replace(
    /featuredImage:\s*'[^']*'/g,
    `featuredImage: '${firstImageSrc}'`
  )

  // Update openGraph image url to match first image
  content = content.replace(
    /(openGraph:\s*\{[^}]*image:\s*\{[^}]*url:\s*)'[^']*'/s,
    `$1'${firstImageSrc}'`
  )

  // Update canonical URL slug
  content = content.replace(
    /(canonical:\s*'https:\/\/[^\/]+\/post\/)[^']+'/g,
    `$1${slug}'`
  )

  // Update the first H1 in the body to match the title
  content = content.replace(/^#\s+.+$/m, `# ${title}`)

  // Write to temp directory
  fs.writeFileSync(tempPath, content)

  console.log(`✓ ${filename} → ${newFilename}`)
})

// Remove old files
files.forEach((filename) => {
  fs.unlinkSync(path.join(postsDir, filename))
})

// Move files from temp to main directory
const tempFiles = fs.readdirSync(tempDir)
tempFiles.forEach((filename) => {
  fs.renameSync(path.join(tempDir, filename), path.join(postsDir, filename))
})

// Remove temp directory
fs.rmdirSync(tempDir)

console.log('\nBlog post renaming complete!')
