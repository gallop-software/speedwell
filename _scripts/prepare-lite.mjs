#!/usr/bin/env node
/**
 * Script to convert Pro blocks to use ProBlock component
 *
 * This script:
 * 1. Reads the blocks README.md file
 * 2. Identifies blocks marked as "Tier: Pro"
 * 3. For each Pro block, replaces the content with ProBlock component
 * 4. Preserves the file structure and exports
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const README_PATH = path.join(__dirname, '../src/app/BLOCKS.md')
const README_FILE_PATH = path.join(__dirname, '../README.md')
const APP_DIR = path.join(__dirname, '../src/app')
const HOOKS_DIR = path.join(__dirname, '../src/hooks')
const API_DIR = path.join(__dirname, '../src/app/api')
const LAYOUT_PATH = path.join(__dirname, '../src/app/layout.tsx')
const PKG_PATH = path.join(__dirname, '../package.json')
const PRO_BLOCK_PATH = path.join(
  __dirname,
  '../src/components/pro-block.tsx'
)
// Files and directories to delete for lite version
const FILES_TO_DELETE = [
  path.join(HOOKS_DIR, 'flow-trace.tsx'),
  path.join(HOOKS_DIR, 'flow-trace.md'),
  path.join(HOOKS_DIR, 'use-iframe-height.tsx'),
  path.join(HOOKS_DIR, 'use-iframe-height.md'),
]

const DIRS_TO_DELETE = [path.join(API_DIR, 'flow-trace')]

// Lines to remove from layout.tsx
const LAYOUT_IMPORT_PATTERNS = [
  /import IframeHeight from '@\/hooks\/use-iframe-height'\n/,
]

const LAYOUT_USAGE_PATTERNS = [/        <IframeHeight \/>\n/]

// Parse README to find Pro blocks
async function findProBlocks() {
  const readmeContent = await fs.readFile(README_PATH, 'utf-8')
  const proBlocks = []

  // Match pattern: block name followed by slug and tier
  const blockPattern =
    /####\s+([^\n]+)\n[\s\S]*?\*\*Slug:\*\*\s+`([^`]+)`[\s\S]*?\*\*Tier:\*\*\s+(Pro|Free)/gi

  let match
  while ((match = blockPattern.exec(readmeContent)) !== null) {
    const [, blockName, slug, tier] = match
    if (tier === 'Pro') {
      proBlocks.push({
        name: blockName.trim(),
        slug: slug.trim(),
        fileName: `${slug.trim()}.tsx`,
      })
    }
  }

  return proBlocks
}

// Generate ProBlock component content
function generateProBlockContent(blockName, blockSlug, { hasPtNavbar = false } = {}) {
  const classNameProp = hasPtNavbar ? `\n      className="pt-navbar xl:!pt-0"` : ''
  return `import { ProBlock } from '@/components/pro-block'

export default function ${toPascalCase(blockSlug)}() {
  return (
    <ProBlock
      blockSlug="${blockSlug}"
      blockName="${blockName}"${classNameProp}
    />
  )
}
`
}

// Convert slug to PascalCase (e.g., hero-11 -> Hero11, layout-2/hero -> Hero)
function toPascalCase(slug) {
  const base = slug.includes('/') ? slug.split('/').pop() : slug
  return base
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

// Recursively find all _blocks/ directories under src/app/
async function findBlocksDirs(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const results = []

  for (const entry of entries) {
    if (entry.name === '_blocks' && entry.isDirectory()) {
      results.push(path.join(dir, entry.name))
    } else if (entry.isDirectory() && !entry.name.startsWith('.')) {
      results.push(...(await findBlocksDirs(path.join(dir, entry.name))))
    }
  }

  return results
}

// Convert route path to URL slug (strip route group parentheses)
function routeToUrlSlug(blocksDir) {
  const relPath = path.dirname(blocksDir).replace(APP_DIR + '/', '')
  return relPath
    .split('/')
    .filter((seg) => !seg.startsWith('('))
    .join('/')
}

// Find all block file paths indexed by their slug
async function buildBlockPathIndex() {
  const blocksDirs = await findBlocksDirs(APP_DIR)
  const index = new Map()

  for (const blocksDir of blocksDirs) {
    const urlSlug = routeToUrlSlug(blocksDir)
    const files = (await fs.readdir(blocksDir)).filter((f) =>
      f.endsWith('.tsx')
    )

    for (const file of files) {
      const blockName = file.replace('.tsx', '')
      const slug = urlSlug ? `${urlSlug}/${blockName}` : blockName
      index.set(slug, path.join(blocksDir, file))
    }
  }

  return index
}

// Check if a block file already uses ProBlock
async function isAlreadyConverted(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return content.includes('ProBlock')
  } catch (error) {
    return false
  }
}

// Convert a single block file
async function convertBlock(block, blockPathIndex) {
  const filePath = blockPathIndex.get(block.slug)
  if (!filePath) {
    console.error(`❌ Block file not found for slug: ${block.slug}`)
    return { success: false, skipped: false, error: 'File not found' }
  }

  try {
    // Check if file exists
    await fs.access(filePath)

    // Read original content before conversion
    const originalContent = await fs.readFile(filePath, 'utf-8')

    // Check if already converted
    if (originalContent.includes('ProBlock')) {
      console.log(`⏭️  Skipping ${block.slug} - already uses ProBlock`)
      return { success: true, skipped: true }
    }

    // Detect pt-navbar usage in original block
    const hasPtNavbar = originalContent.includes('pt-navbar')

    // Generate new content
    const newContent = generateProBlockContent(block.name, block.slug, { hasPtNavbar })

    // Write to file
    await fs.writeFile(filePath, newContent, 'utf-8')
    console.log(`✅ Converted ${block.slug}`)

    return { success: true, skipped: false }
  } catch (error) {
    console.error(`❌ Error converting ${block.slug}: ${error.message}`)
    return { success: false, skipped: false, error: error.message }
  }
}

// Delete pro-only hooks and their documentation
async function deleteProHooks() {
  console.log('🗑️  Deleting pro-only hooks and API routes...\n')

  // Delete individual files
  for (const filePath of FILES_TO_DELETE) {
    try {
      await fs.unlink(filePath)
      console.log(`  ✅ Deleted ${path.relative(__dirname + '/..', filePath)}`)
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(
          `  ⏭️  Skipping ${path.relative(__dirname + '/..', filePath)} - already deleted`
        )
      } else {
        console.error(
          `  ❌ Error deleting ${path.relative(__dirname + '/..', filePath)}: ${error.message}`
        )
      }
    }
  }

  // Delete directories recursively
  for (const dirPath of DIRS_TO_DELETE) {
    try {
      await fs.rm(dirPath, { recursive: true })
      console.log(`  ✅ Deleted ${path.relative(__dirname + '/..', dirPath)}/`)
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(
          `  ⏭️  Skipping ${path.relative(__dirname + '/..', dirPath)}/ - already deleted`
        )
      } else {
        console.error(
          `  ❌ Error deleting ${path.relative(__dirname + '/..', dirPath)}/: ${error.message}`
        )
      }
    }
  }
}

// Remove hook references from layout.tsx
async function removeHookReferencesFromLayout() {
  console.log('\n🔧 Removing hook references from layout.tsx...\n')

  try {
    let content = await fs.readFile(LAYOUT_PATH, 'utf-8')
    let modified = false

    // Remove import statements
    for (const pattern of LAYOUT_IMPORT_PATTERNS) {
      if (pattern.test(content)) {
        content = content.replace(pattern, '')
        modified = true
      }
    }

    // Remove usage statements
    for (const pattern of LAYOUT_USAGE_PATTERNS) {
      if (pattern.test(content)) {
        content = content.replace(pattern, '')
        modified = true
      }
    }

    if (modified) {
      await fs.writeFile(LAYOUT_PATH, content, 'utf-8')
      console.log('  ✅ Updated layout.tsx - removed hook references')
    } else {
      console.log('  ⏭️  layout.tsx - no changes needed')
    }
  } catch (error) {
    console.error(`  ❌ Error updating layout.tsx: ${error.message}`)
  }
}

// Rewrite ProBlock image src to use CDN URLs
async function rewriteProBlockImageSrc() {
  console.log('\n🌐 Rewriting ProBlock image src to CDN URLs...\n')

  try {
    const pkg = JSON.parse(await fs.readFile(PKG_PATH, 'utf-8'))
    const templateName = pkg.name
    let content = await fs.readFile(PRO_BLOCK_PATH, 'utf-8')

    const oldSrc = '`/blocks/${blockSlug}.jpg`'
    const newSrc = `\`https://${templateName}-cdn.gallop.software/blocks/\${blockSlug}.jpg\``

    if (content.includes(oldSrc)) {
      content = content.replace(oldSrc, newSrc)
      await fs.writeFile(PRO_BLOCK_PATH, content, 'utf-8')
      console.log(
        `  ✅ Updated image src to https://${templateName}-cdn.gallop.software/blocks/...`
      )
    } else {
      console.log('  ⏭️  ProBlock image src already updated or not found')
    }
  } catch (error) {
    console.error(`  ❌ Error rewriting ProBlock image src: ${error.message}`)
  }
}

// Rewrite README.md for lite version
async function rewriteReadmeForLite() {
  console.log('\n📝 Rewriting README.md for lite version...\n')

  try {
    let content = await fs.readFile(README_FILE_PATH, 'utf-8')
    let modified = false

    // Replace GitHub repo references (covers repo link, issues, Vercel deploy URL)
    const repoReplacements = [
      ['gallop-software/speedwell-pro', 'gallop-software/speedwell'],
      ['gallop-software%2Fspeedwell-pro', 'gallop-software%2Fspeedwell'],
      ['project-name=speedwell-pro', 'project-name=speedwell'],
      ['repository-name=speedwell-pro', 'repository-name=speedwell'],
      ['demo-url=https%3A%2F%2Fspeedwell.gallop.software', 'demo-url=https%3A%2F%2Fspeedwell-lite.vercel.app'],
      ['demo-image=https%3A%2F%2Fspeedwell.gallop.software', 'demo-image=https%3A%2F%2Fspeedwell-lite.vercel.app'],
    ]

    for (const [oldStr, newStr] of repoReplacements) {
      if (content.includes(oldStr)) {
        content = content.replaceAll(oldStr, newStr)
        modified = true
      }
    }

    // Replace Pro generate button with Lite generate button
    const proButton =
      '[![Speedwell Pro](https://img.shields.io/badge/Speedwell_Pro-6366F1?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gallop-software/speedwell/generate)'
    const liteButton =
      '[![Speedwell](https://img.shields.io/badge/Speedwell-238636?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gallop-software/speedwell/generate)'

    if (content.includes(proButton)) {
      content = content.replace(proButton, liteButton)
      modified = true
    }

    if (modified) {
      await fs.writeFile(README_FILE_PATH, content, 'utf-8')
      console.log('  ✅ Updated README.md for lite version')
    } else {
      console.log('  ⏭️  README.md - no changes needed')
    }
  } catch (error) {
    console.error(`  ❌ Error updating README.md: ${error.message}`)
  }
}

// Main execution
async function main() {
  console.log('🔍 Scanning blocks README for Pro blocks...\n')

  const proBlocks = await findProBlocks()

  if (proBlocks.length === 0) {
    console.log('No Pro blocks found in README.')
  } else {
    console.log(`Found ${proBlocks.length} Pro block(s):\n`)
    proBlocks.forEach((block) => {
      console.log(`  • ${block.name} (${block.slug})`)
    })
    console.log()

    console.log('🔄 Converting blocks...\n')

    const blockPathIndex = await buildBlockPathIndex()
    const results = []
    for (const block of proBlocks) {
      const result = await convertBlock(block, blockPathIndex)
      results.push({ ...block, ...result })
    }

    // Summary
    console.log('\n📊 Block Conversion Summary:')
    const converted = results.filter((r) => r.success && !r.skipped).length
    const skipped = results.filter((r) => r.skipped).length
    const failed = results.filter((r) => !r.success).length

    console.log(`  ✅ Converted: ${converted}`)
    console.log(`  ⏭️  Skipped: ${skipped}`)
    console.log(`  ❌ Failed: ${failed}`)

    if (failed > 0) {
      console.log('\nFailed blocks:')
      results
        .filter((r) => !r.success)
        .forEach((r) => {
          console.log(`  • ${r.slug}: ${r.error}`)
        })
    }
  }

  // Delete pro-only hooks and API routes
  await deleteProHooks()

  // Remove hook references from layout.tsx
  await removeHookReferencesFromLayout()

  // Rewrite ProBlock image src to CDN URLs
  await rewriteProBlockImageSrc()

  // Rewrite README.md for lite version
  await rewriteReadmeForLite()

  console.log('\n✨ Lite conversion complete!')
}

main().catch(console.error)
