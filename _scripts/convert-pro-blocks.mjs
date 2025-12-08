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

// Main execution
async function main() {
  console.log('🔍 Scanning blocks README for Pro blocks...\n')

  const proBlocks = await findProBlocks()

  if (proBlocks.length === 0) {
    console.log('No Pro blocks found in README.')
    return
  }

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
  console.log('\n📊 Summary:')
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

main().catch(console.error)
