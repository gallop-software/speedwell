/**
 * Refactor barrel imports to direct imports
 * 
 * This script transforms:
 *   import { Heading, Paragraph } from '@/components'
 * 
 * Into:
 *   import { Heading } from '@/components/heading'
 *   import { Paragraph } from '@/components/paragraph'
 * 
 * Usage:
 *   node _scripts/refactor-barrel-imports.mjs          # Dry run (preview changes)
 *   node _scripts/refactor-barrel-imports.mjs --write  # Apply changes
 */

import { readFile, writeFile, readdir, stat } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = join(__dirname, '..')

const DRY_RUN = !process.argv.includes('--write')

// Build a map of export name -> source file from the barrel
async function buildExportMap() {
  const barrelPath = join(ROOT, 'src/components/index.ts')
  const content = await readFile(barrelPath, 'utf8')
  
  const exportMap = new Map()
  
  // Match: export { Name } from './path'
  // Match: export { Name as Alias } from './path'
  // Match: export { default as Name } from './path'
  // Match: export { Name, Name2 } from './path'
  const exportRegex = /export\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g
  
  let match
  while ((match = exportRegex.exec(content)) !== null) {
    const exports = match[1]
    const sourcePath = match[2]
    
    // Parse individual exports (handle "Name", "Name as Alias", "default as Name")
    const parts = exports.split(',').map(p => p.trim())
    
    for (const part of parts) {
      if (part.includes(' as ')) {
        // "default as Name" or "Name as Alias"
        const [, alias] = part.split(' as ').map(s => s.trim())
        exportMap.set(alias, sourcePath)
      } else if (part.includes('type ')) {
        // Skip type exports
        continue
      } else {
        exportMap.set(part, sourcePath)
      }
    }
  }
  
  return exportMap
}

// Find all TypeScript/TSX files in a directory recursively
async function findFiles(dir, extensions = ['.ts', '.tsx']) {
  const files = []
  
  async function walk(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name)
      
      if (entry.isDirectory()) {
        // Skip node_modules and .next
        if (entry.name === 'node_modules' || entry.name === '.next') continue
        await walk(fullPath)
      } else if (extensions.some(ext => entry.name.endsWith(ext))) {
        files.push(fullPath)
      }
    }
  }
  
  await walk(dir)
  return files
}

// Transform a file's barrel imports to direct imports
async function transformFile(filePath, exportMap) {
  const content = await readFile(filePath, 'utf8')
  
  let hasChanges = false
  let newContent = content
  
  // First pass: Clean up any existing /index suffixes
  const indexSuffixRegex = /from\s*['"](@\/components\/[^'"]+)\/index['"]/g
  newContent = newContent.replace(indexSuffixRegex, (match, path) => {
    hasChanges = true
    return `from '${path}'`
  })
  
  // Match: import { ... } from '@/components'
  const barrelImportRegex = /import\s*\{([^}]+)\}\s*from\s*['"]@\/components['"]/g
  
  // Find all barrel imports
  const matches = [...newContent.matchAll(barrelImportRegex)]
  
  if (matches.length === 0 && !hasChanges) {
    return { changed: false, content }
  }
  
  if (matches.length === 0) {
    return { changed: hasChanges, content: newContent }
  }
  
  for (const match of matches) {
    const fullMatch = match[0]
    const importsStr = match[1]
    
    // Parse the imports
    const imports = importsStr
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)
    
    // Group imports by their source file
    const groupedImports = new Map()
    const unknownImports = []
    
    for (const imp of imports) {
      // Handle "type Name" imports
      const isType = imp.startsWith('type ')
      const name = isType ? imp.replace('type ', '') : imp
      
      const sourcePath = exportMap.get(name)
      
      if (sourcePath) {
        const key = sourcePath
        if (!groupedImports.has(key)) {
          groupedImports.set(key, { names: [], types: [] })
        }
        if (isType) {
          groupedImports.get(key).types.push(name)
        } else {
          groupedImports.get(key).names.push(name)
        }
      } else {
        unknownImports.push(imp)
      }
    }
    
    // Generate new import statements
    const newImports = []
    
    for (const [sourcePath, { names, types }] of groupedImports) {
      const allImports = [
        ...names,
        ...types.map(t => `type ${t}`)
      ]
      
      // Convert relative path to @/components/path
      // Strip /index suffix since TypeScript resolves it automatically
      let cleanPath = sourcePath.startsWith('./')
        ? sourcePath.slice(1)
        : `/${sourcePath}`
      
      if (cleanPath.endsWith('/index')) {
        cleanPath = cleanPath.slice(0, -6)
      }
      
      const absolutePath = `@/components${cleanPath}`
      
      newImports.push(`import { ${allImports.join(', ')} } from '${absolutePath}'`)
    }
    
    // Keep unknown imports pointing to barrel (shouldn't happen if map is complete)
    if (unknownImports.length > 0) {
      newImports.push(`import { ${unknownImports.join(', ')} } from '@/components'`)
    }
    
    // Replace the original import with new imports
    newContent = newContent.replace(fullMatch, newImports.join('\n'))
    hasChanges = true
  }
  
  return { changed: hasChanges, content: newContent }
}

async function main() {
  console.log(DRY_RUN ? '🔍 DRY RUN - No files will be modified\n' : '✏️  WRITE MODE - Files will be modified\n')
  
  // Build export map from barrel
  console.log('Building export map from src/components/index.ts...')
  const exportMap = await buildExportMap()
  console.log(`Found ${exportMap.size} exports\n`)
  
  // Debug: show some mappings
  console.log('Sample mappings:')
  let count = 0
  for (const [name, path] of exportMap) {
    if (count++ < 5) {
      console.log(`  ${name} -> ${path}`)
    }
  }
  console.log('  ...\n')
  
  // Find all files
  const srcDir = join(ROOT, 'src')
  const files = await findFiles(srcDir)
  console.log(`Scanning ${files.length} files...\n`)
  
  let changedCount = 0
  const changedFiles = []
  
  for (const file of files) {
    // Skip the barrel itself
    if (file.endsWith('src/components/index.ts')) continue
    
    const { changed, content } = await transformFile(file, exportMap)
    
    if (changed) {
      changedCount++
      const relativePath = file.replace(ROOT + '/', '')
      changedFiles.push(relativePath)
      
      if (!DRY_RUN) {
        await writeFile(file, content, 'utf8')
        console.log(`✓ Updated: ${relativePath}`)
      } else {
        console.log(`Would update: ${relativePath}`)
      }
    }
  }
  
  console.log(`\n${'='.repeat(50)}`)
  console.log(`Total files ${DRY_RUN ? 'to update' : 'updated'}: ${changedCount}`)
  
  if (DRY_RUN && changedCount > 0) {
    console.log('\nRun with --write to apply changes:')
    console.log('  node _scripts/refactor-barrel-imports.mjs --write')
  }
}

main().catch(console.error)
