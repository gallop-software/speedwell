import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const replacements = [
  // URLs and domains
  {
    pattern: /heartbeatmidwifery\.com/g,
    replacement: 'speedwell.gallop.software'
  },
  {
    pattern: /heartbeatmidwifery2\.vercel\.app/g,
    replacement: 'speedwell.gallop.software'
  },
  // Business names
  {
    pattern: /Heartbeat Midwifery/g,
    replacement: 'Speedwell'
  },
  // Email addresses
  {
    pattern: /info@heartbeatmidwifery\.com/g,
    replacement: 'info@speedwell.gallop.software'
  },
]

const filesToUpdate = [
  'src/app/metadata.tsx',
  'src/app/layout.tsx',
  'src/app/[[...slug]]/page.tsx',
  'src/app/api/submit-form/route.ts',
  'src/app/api/job-application/route.ts',
  'src/app/api/message/route.ts',
  'src/components/navbar.tsx',
  'src/components/footer.tsx',
  'src/components/form-client.tsx',
  'src/app/markdown/index.mdx',
  'src/app/markdown/sit.mdx',
  'src/app/markdown/sed-do.mdx',
  'src/app/markdown/lorem-ipsum.mdx',
  'src/app/markdown/eiusmod-tempor.mdx',
  'src/app/markdown/adipiscing-elit-sed.mdx',
  'src/app/markdown/quis-nostrud.mdx',
  'src/app/markdown/laboris-nisi.mdx',
  'src/app/markdown/labore-dolore.mdx',
  'src/app/markdown/sit-amet-consectetur.mdx',
  'src/app/markdown/magna-aliqua.mdx',
  'src/app/markdown/incididunt.mdx',
  'src/app/markdown/minim-veniam.mdx',
  'src/app/markdown/enim-ad-minim.mdx',
  'src/app/markdown/enim-ad.mdx',
]

// Also update all blog posts
const postsDir = path.join(__dirname, '../src/app/markdown/post')
const blogFiles = fs.readdirSync(postsDir).filter((file) => file.endsWith('.mdx'))
blogFiles.forEach((file) => {
  filesToUpdate.push(`src/app/markdown/post/${file}`)
})

console.log(`Processing ${filesToUpdate.length} files...\n`)

let updatedCount = 0

filesToUpdate.forEach((relativePath) => {
  const filePath = path.join(__dirname, '..', relativePath)
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠ File not found: ${relativePath}`)
    return
  }
  
  let content = fs.readFileSync(filePath, 'utf8')
  let modified = false
  
  replacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement)
      modified = true
    }
  })
  
  if (modified) {
    fs.writeFileSync(filePath, content)
    updatedCount++
    console.log(`✓ ${relativePath}`)
  }
})

console.log(`\nDone! Updated ${updatedCount} files to use Speedwell branding.`)
