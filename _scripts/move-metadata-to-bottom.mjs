#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Script to move metadata exports from the top to the bottom of MDX files
 */

// Configuration
const ROOT_DIR = path.join(__dirname, '..')
const MDX_DIRECTORIES = [
  path.join(ROOT_DIR, 'src/markdown'),
  path.join(ROOT_DIR, 'src/blocks'),
  path.join(ROOT_DIR, 'src/template'),
]

// Statistics
let stats = {
  processed: 0,
  modified: 0,
  skipped: 0,
  errors: 0,
}

/**
 * Extract metadata export from content
 * Returns { metadata, remainingContent } or null if no metadata found
 */
function extractMetadata(content) {
  // Match export const metadata = { ... }
  // This regex handles nested objects and arrays
  const metadataRegex = /^export\s+const\s+metadata\s*=\s*\{/m

  if (!metadataRegex.test(content)) {
    return null
  }

  const lines = content.split('\n')
  let metadataStartIndex = -1
  let metadataEndIndex = -1
  let braceCount = 0
  let inMetadata = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Check if this line starts the metadata export
    if (!inMetadata && metadataRegex.test(line)) {
      metadataStartIndex = i
      inMetadata = true
      // Count braces in this line
      for (const char of line) {
        if (char === '{') braceCount++
        if (char === '}') braceCount--
      }

      // Check if metadata ends on the same line
      if (braceCount === 0) {
        metadataEndIndex = i
        break
      }
    } else if (inMetadata) {
      // Count braces to find the end of the metadata object
      for (const char of line) {
        if (char === '{') braceCount++
        if (char === '}') braceCount--
      }

      if (braceCount === 0) {
        metadataEndIndex = i
        break
      }
    }
  }

  if (metadataStartIndex === -1 || metadataEndIndex === -1) {
    return null
  }

  // Extract metadata lines
  const metadataLines = lines.slice(metadataStartIndex, metadataEndIndex + 1)
  const metadata = metadataLines.join('\n')

  // Get remaining content (everything except metadata)
  const beforeMetadata = lines.slice(0, metadataStartIndex)
  const afterMetadata = lines.slice(metadataEndIndex + 1)

  // Remove empty lines at the start of afterMetadata
  while (afterMetadata.length > 0 && afterMetadata[0].trim() === '') {
    afterMetadata.shift()
  }

  const remainingContent = [...beforeMetadata, ...afterMetadata].join('\n')

  return { metadata, remainingContent }
}

/**
 * Process a single MDX file
 */
function processMdxFile(filePath) {
  try {
    console.log(`Processing: ${path.relative(ROOT_DIR, filePath)}`)

    const content = fs.readFileSync(filePath, 'utf-8')
    const result = extractMetadata(content)

    if (!result) {
      console.log(`  ⊘ No metadata found, skipping`)
      stats.skipped++
      return
    }

    const { metadata, remainingContent } = result

    // Check if metadata is already at the bottom
    const trimmedContent = content.trim()
    const trimmedMetadata = metadata.trim()
    if (trimmedContent.endsWith(trimmedMetadata)) {
      console.log(`  ⊘ Metadata already at bottom, skipping`)
      stats.skipped++
      return
    }

    // Create new content with metadata at the bottom
    let newContent = remainingContent.trim()

    // Add metadata at the bottom with proper spacing
    newContent += '\n\n' + metadata + '\n'

    // Write the modified content back to the file
    fs.writeFileSync(filePath, newContent, 'utf-8')

    console.log(`  ✓ Metadata moved to bottom`)
    stats.modified++
  } catch (error) {
    console.error(`  ✗ Error processing file: ${error.message}`)
    stats.errors++
  }
}

/**
 * Recursively find all MDX files in a directory
 */
function findMdxFiles(directory) {
  const files = []

  if (!fs.existsSync(directory)) {
    console.warn(`Directory not found: ${directory}`)
    return files
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Starting metadata relocation...\n')

  // Collect all MDX files
  const allFiles = []
  for (const dir of MDX_DIRECTORIES) {
    const files = findMdxFiles(dir)
    allFiles.push(...files)
  }

  console.log(`Found ${allFiles.length} MDX file(s)\n`)

  // Process each file
  for (const file of allFiles) {
    processMdxFile(file)
    stats.processed++
  }

  // Print summary
  console.log('\n' + '='.repeat(60))
  console.log('Summary:')
  console.log('='.repeat(60))
  console.log(`Total files processed: ${stats.processed}`)
  console.log(`Files modified:        ${stats.modified}`)
  console.log(`Files skipped:         ${stats.skipped}`)
  console.log(`Errors:                ${stats.errors}`)
  console.log('='.repeat(60))

  if (stats.errors > 0) {
    process.exit(1)
  }
}

// Run the script
main()
