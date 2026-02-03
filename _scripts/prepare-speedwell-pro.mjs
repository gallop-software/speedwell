#!/usr/bin/env node
/**
 * Script to prepare speedwell-pro distribution
 *
 * This script:
 * 1. Removes dev-only npm scripts from package.json
 * 2. Deletes dev-only script files from _scripts/
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PACKAGE_JSON_PATH = path.join(__dirname, '../package.json')

// Scripts to remove from package.json
const SCRIPTS_TO_REMOVE = [
  'blocks',
  'blocks:screenshots',
  'blocks:sort',
  'blocks:lite',
  'speedwell',
  'speedwell-pro',
  'layouts',
  'layouts:screenshots',
  'layouts:sort',
]

// Files to delete from _scripts/
const FILES_TO_DELETE = [
  path.join(__dirname, 'generate-blocks-catalog.mjs'),
  path.join(__dirname, 'generate-blocks-catalog.md'),
  path.join(__dirname, 'convert-pro-blocks.mjs'),
  path.join(__dirname, 'convert-pro-blocks.md'),
  path.join(__dirname, 'generate-layouts-catalog.mjs'),
  path.join(__dirname, 'generate-layouts-catalog.md'),
  path.join(__dirname, 'prepare-speedwell-pro.mjs'),
  path.join(__dirname, 'prepare-speedwell-pro.md'),
]

async function removeScriptsFromPackageJson() {
  console.log('📦 Removing dev-only scripts from package.json...\n')

  const packageJson = JSON.parse(await fs.readFile(PACKAGE_JSON_PATH, 'utf-8'))

  let removed = 0
  for (const scriptName of SCRIPTS_TO_REMOVE) {
    if (packageJson.scripts && packageJson.scripts[scriptName]) {
      delete packageJson.scripts[scriptName]
      console.log(`  ✅ Removed script: ${scriptName}`)
      removed++
    }
  }

  if (removed > 0) {
    await fs.writeFile(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8')
    console.log(`\n  Removed ${removed} script(s) from package.json`)
  } else {
    console.log('  ⏭️  No scripts to remove')
  }
}

async function deleteDevScripts() {
  console.log('\n🗑️  Deleting dev-only script files...\n')

  for (const filePath of FILES_TO_DELETE) {
    try {
      await fs.unlink(filePath)
      console.log(`  ✅ Deleted ${path.basename(filePath)}`)
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`  ⏭️  Skipping ${path.basename(filePath)} - already deleted`)
      } else {
        console.error(`  ❌ Error deleting ${path.basename(filePath)}: ${error.message}`)
      }
    }
  }
}

async function main() {
  console.log('🚀 Preparing speedwell-pro distribution...\n')

  await removeScriptsFromPackageJson()
  await deleteDevScripts()

  console.log('\n✨ speedwell-pro preparation complete!')
}

main().catch(console.error)
