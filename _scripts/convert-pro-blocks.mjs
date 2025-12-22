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

const README_PATH = path.join(__dirname, '../src/blocks/README.md')
const BLOCKS_DIR = path.join(__dirname, '../src/blocks')
const HOOKS_DIR = path.join(__dirname, '../src/hooks')
const API_DIR = path.join(__dirname, '../src/app/api')
const LAYOUT_PATH = path.join(__dirname, '../src/app/layout.tsx')

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
    /####\s+([^\n]+)\n[\s\S]*?\*\*Slug:\*\*\s+`([^`]+)`\s*\n\*\*Tier:\*\*\s+(Pro|Free)/gi

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
function generateProBlockContent(blockName, blockSlug) {
  return `import { ProBlock } from '@/components'

export default function ${toPascalCase(blockSlug)}() {
  return (
    <ProBlock
      blockSlug="${blockSlug}"
      blockName="${blockName}"
    />
  )
}
`
}

// Convert slug to PascalCase (e.g., hero-11 -> Hero11)
function toPascalCase(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
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
async function convertBlock(block) {
  const filePath = path.join(BLOCKS_DIR, block.fileName)

  try {
    // Check if file exists
    await fs.access(filePath)

    // Check if already converted
    if (await isAlreadyConverted(filePath)) {
      console.log(`⏭️  Skipping ${block.slug} - already uses ProBlock`)
      return { success: true, skipped: true }
    }

    // Generate new content
    const newContent = generateProBlockContent(block.name, block.slug)

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

    const results = []
    for (const block of proBlocks) {
      const result = await convertBlock(block)
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

  console.log('\n✨ Lite conversion complete!')
}

main().catch(console.error)
