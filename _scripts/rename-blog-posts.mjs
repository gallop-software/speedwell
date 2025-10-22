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

files.forEach((oldFilename, index) => {
  const oldPath = path.join(postsDir, oldFilename)
  const title = loremTitles[index]
  const slug = title.toLowerCase().replace(/\s+/g, '-')
  const newFilename = `${slug}.mdx`
  const newPath = path.join(postsDir, newFilename)

  // Read the file content
  let content = fs.readFileSync(oldPath, 'utf8')

  // Update metadata title
  content = content.replace(/title:\s*'[^']*'/g, `title: '${title}'`)

  // Update metadata slug
  content = content.replace(/slug:\s*'[^']*'/g, `slug: '${slug}'`)

  // Update canonical URL slug
  content = content.replace(
    /(canonical:\s*'https:\/\/[^\/]+\/post\/)[^']+'/g,
    `$1${slug}'`
  )

  // Update the first H1 in the body to match the title
  content = content.replace(/^#\s+.+$/m, `# ${title}`)

  // Write to new file
  fs.writeFileSync(newPath, content)

  // Delete old file if different from new file
  if (oldPath !== newPath) {
    fs.unlinkSync(oldPath)
  }

  console.log(`✓ ${oldFilename} → ${newFilename}`)
})

console.log('\nBlog post renaming complete!')
