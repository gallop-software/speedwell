#!/usr/bin/env node

/**
 * Generate favicon files from source favicon.png
 *
 * Searches for favicon.png in public/originals/ and generates:
 * - favicon.ico (48x48) - Classic ICO format
 * - icon.png (32x32) - Standard favicon
 * - apple-icon.png (180x180) - Apple touch icon
 *
 * All outputs are square and saved to src/app/ for Next.js metadata
 */

import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync, readdirSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

const sourceFile = join(rootDir, 'public', 'originals', 'favicon.png')
const originalsDir = join(rootDir, 'public', 'originals')
const outputDir = join(rootDir, 'src', 'app')

const configs = [
  { name: 'favicon.ico', size: 48, format: 'png' }, // ICO format via PNG
  { name: 'icon.png', size: 32, format: 'png' },
  { name: 'apple-icon.png', size: 180, format: 'png' },
]

async function generateFavicons() {
  // Check if originals directory exists
  if (!existsSync(originalsDir)) {
    console.error(`❌ Error: Originals directory not found: ${originalsDir}`)
    console.error(`   Please create the directory first.`)
    process.exit(1)
  }

  // Check if favicon.png exists
  if (!existsSync(sourceFile)) {
    console.error(`❌ Error: Source file not found: ${sourceFile}`)
    console.error(`\n   Looking for available PNG files in originals folder...`)

    try {
      const files = readdirSync(originalsDir).filter((f) =>
        f.toLowerCase().endsWith('.png')
      )

      if (files.length > 0) {
        console.error(`\n   Available PNG files:`)
        files.forEach((f) => console.error(`   - ${f}`))
        console.error(
          `\n   💡 Tip: Rename one of these to 'favicon.png' or create a new favicon.png file`
        )
      } else {
        console.error(`\n   No PNG files found in originals folder.`)
        console.error(`   💡 Tip: Add a favicon.png file to ${originalsDir}`)
      }
    } catch (err) {
      console.error(`   Could not read directory: ${err.message}`)
    }

    process.exit(1)
  }

  // Verify the source file is a valid image
  try {
    const metadata = await sharp(sourceFile).metadata()
    console.log(`📁 Source: ${sourceFile}`)
    console.log(
      `   Format: ${metadata.format}, Size: ${metadata.width}x${metadata.height}`
    )
  } catch (err) {
    console.error(`❌ Error: Source file is not a valid image: ${sourceFile}`)
    console.error(`   ${err.message}`)
    process.exit(1)
  }

  // Verify output directory exists
  if (!existsSync(outputDir)) {
    console.error(`❌ Error: Output directory not found: ${outputDir}`)
    console.error(
      `   This should exist in a Next.js project. Please check your project structure.`
    )
    process.exit(1)
  }

  console.log(`📁 Output: ${outputDir}\n`)

  let successCount = 0
  let failCount = 0

  for (const config of configs) {
    try {
      const outputPath = join(outputDir, config.name)

      await sharp(sourceFile)
        .resize(config.size, config.size, {
          fit: 'cover',
          position: 'center',
        })
        .png({ quality: 100 })
        .toFile(outputPath)

      console.log(
        `✅ Generated: ${config.name} (${config.size}x${config.size})`
      )
      successCount++
    } catch (error) {
      console.error(`❌ Failed to generate ${config.name}:`, error.message)
      failCount++
    }
  }

  console.log(`\n✨ Favicon generation complete!`)
  console.log(`   ${successCount} succeeded, ${failCount} failed`)

  if (failCount > 0) {
    process.exit(1)
  }
}

generateFavicons()
