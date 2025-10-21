#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Configuration
const CONFIG_FILE = '.images'
const SOURCE_DIR = './public/originals'
const OUTPUT_DIR = './public/images'
const META_FILE = './_data/_meta.json'
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']

/**
 * Convert a string to URL-friendly format
 * - Replace spaces with dashes
 * - Convert to lowercase
 * - Remove special characters except dashes, underscores, and dots
 */
function toUrlFriendly(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9\-_.]/g, '') // Remove special characters except dash, underscore, dot
    .replace(/-+/g, '-') // Replace multiple dashes with single dash
    .replace(/^-+|-+$/g, '') // Remove leading/trailing dashes
}

/**
 * Recursively rename all files and folders in a directory to be URL-friendly
 * Returns a map of old paths to new paths
 */
function sanitizeFilenames(
  dir = SOURCE_DIR,
  baseDir = SOURCE_DIR,
  renameMap = new Map()
) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    // First pass: collect all items that need renaming
    const itemsToRename = []

    for (const entry of entries) {
      const oldPath = path.join(dir, entry.name)
      const ext = path.extname(entry.name)
      const nameWithoutExt = path.basename(entry.name, ext)
      const sanitizedName = entry.isFile()
        ? toUrlFriendly(nameWithoutExt) + ext.toLowerCase()
        : toUrlFriendly(entry.name)

      if (sanitizedName !== entry.name) {
        itemsToRename.push({
          oldPath,
          newPath: path.join(dir, sanitizedName),
          isDirectory: entry.isDirectory(),
          oldName: entry.name,
          newName: sanitizedName,
        })
      }
    }

    // Second pass: rename items (do this after collecting to avoid issues with iteration)
    for (const item of itemsToRename) {
      // Check if target already exists (case-sensitive check)
      const targetExists = fs.existsSync(item.newPath)
      const isCaseOnlyChange =
        item.oldName.toLowerCase() === item.newName.toLowerCase()

      if (targetExists && !isCaseOnlyChange) {
        console.warn(
          `  Warning: Cannot rename "${item.oldName}" to "${item.newName}" - target already exists`
        )
        continue
      }

      // For case-only changes on case-insensitive filesystems, use a temp name
      if (isCaseOnlyChange && targetExists) {
        const tempPath = item.oldPath + '.tmp_rename_' + Date.now()
        try {
          fs.renameSync(item.oldPath, tempPath)
          fs.renameSync(tempPath, item.newPath)
        } catch (error) {
          console.error(`  Error renaming "${item.oldName}":`, error.message)
          // Try to restore if temp rename succeeded but final rename failed
          if (fs.existsSync(tempPath)) {
            fs.renameSync(tempPath, item.oldPath)
          }
          continue
        }
      } else {
        try {
          fs.renameSync(item.oldPath, item.newPath)
        } catch (error) {
          console.error(`  Error renaming "${item.oldName}":`, error.message)
          continue
        }
      }

      const oldRelative = path.relative(baseDir, item.oldPath)
      const newRelative = path.relative(baseDir, item.newPath)
      renameMap.set(oldRelative, newRelative)
      console.log(`  Renamed: ${oldRelative} → ${newRelative}`)
    }

    // Third pass: recursively process subdirectories (using new names)
    const updatedEntries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of updatedEntries) {
      if (entry.isDirectory()) {
        const subDir = path.join(dir, entry.name)
        sanitizeFilenames(subDir, baseDir, renameMap)
      }
    }

    return renameMap
  } catch (error) {
    console.error('Error sanitizing filenames:', error.message)
    return renameMap
  }
}

/**
 * Load configuration from .images file
 */
function loadConfig() {
  try {
    const configPath = path.resolve(CONFIG_FILE)
    const configData = fs.readFileSync(configPath, 'utf8')
    return JSON.parse(configData)
  } catch (error) {
    console.error('Error loading configuration:', error.message)
    process.exit(1)
  }
}

/**
 * Recursively get all image files from source directory and subdirectories
 */
function getSourceImages(dir = SOURCE_DIR, baseDir = SOURCE_DIR) {
  try {
    let images = []
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        images = images.concat(getSourceImages(fullPath, baseDir))
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (SUPPORTED_EXTENSIONS.includes(ext)) {
          // Store relative path from SOURCE_DIR
          const relativePath = path.relative(baseDir, fullPath)
          images.push(relativePath)
        }
      }
    }

    return images
  } catch (error) {
    console.error('Error reading source directory:', error.message)
    return []
  }
}

/**
 * Recursively get existing generated images from output directory and subdirectories
 */
function getExistingImages(dir = OUTPUT_DIR, baseDir = OUTPUT_DIR) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      return []
    }

    let images = []
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        images = images.concat(getExistingImages(fullPath, baseDir))
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (SUPPORTED_EXTENSIONS.includes(ext)) {
          // Store relative path from OUTPUT_DIR
          const relativePath = path.relative(baseDir, fullPath)
          images.push(relativePath)
        }
      }
    }

    return images
  } catch (error) {
    console.error('Error reading output directory:', error.message)
    return []
  }
}

/**
 * Parse generated filename to extract original name and size info
 * Works with relative paths including subdirectories
 */
function parseGeneratedFilename(filename) {
  const basename = path.basename(filename)
  const dirname = path.dirname(filename)

  // First try to match the format with dimensions: name-WIDTHxHEIGHT.ext
  const matchWithDimensions = basename.match(/^(.+)-(\d+)x(\d+)(\..+)$/)
  if (matchWithDimensions) {
    const originalBasename = matchWithDimensions[1] + matchWithDimensions[4]
    const originalName =
      dirname === '.' ? originalBasename : path.join(dirname, originalBasename)

    return {
      originalName,
      width: parseInt(matchWithDimensions[2]),
      height: parseInt(matchWithDimensions[3]),
      extension: matchWithDimensions[4],
      hasEmbeddedDimensions: true,
    }
  }

  // If no dimensions found, treat as full-size original filename
  // We need to get the dimensions from the actual file
  const outputPath = path.join(OUTPUT_DIR, filename)
  if (fs.existsSync(outputPath)) {
    try {
      // We'll read dimensions from the file itself for full-size images
      return {
        originalName: filename,
        width: null, // Will be filled later when we read the file
        height: null, // Will be filled later when we read the file
        extension: path.extname(basename),
        hasEmbeddedDimensions: false,
      }
    } catch (error) {
      console.error(`Error reading dimensions for ${filename}:`, error.message)
    }
  }

  return null
}

/**
 * Generate filename for resized image
 * Preserves directory structure from original path
 */
function generateFilename(originalPath, width, height, isFullSize = false) {
  const dirname = path.dirname(originalPath)
  const basename = path.basename(originalPath)
  const nameWithoutExt = path.parse(basename).name
  const ext = path.parse(basename).ext

  // For full size images, don't include dimensions in filename
  const filename = isFullSize
    ? basename
    : `${nameWithoutExt}-${width}x${height}${ext}`

  // Preserve directory structure
  return dirname === '.' ? filename : path.join(dirname, filename)
}

/**
 * Calculate dimensions maintaining aspect ratio based on longest side
 */
function calculateDimensions(originalWidth, originalHeight, maxSize) {
  const isLandscape = originalWidth > originalHeight

  if (isLandscape) {
    // Width is the longer side
    const newWidth = Math.min(originalWidth, maxSize)
    const newHeight = Math.round((originalHeight * newWidth) / originalWidth)
    return { width: newWidth, height: newHeight }
  } else {
    // Height is the longer side (or square)
    const newHeight = Math.min(originalHeight, maxSize)
    const newWidth = Math.round((originalWidth * newHeight) / originalHeight)
    return { width: newWidth, height: newHeight }
  }
}

/**
 * Process a single image and generate all sizes
 * imagePath is relative to SOURCE_DIR and includes subdirectory structure
 */
async function processImage(imagePath, sizes, quality = 80) {
  const sourcePath = path.join(SOURCE_DIR, imagePath)
  const generatedFiles = []
  let wasUpdated = false // Track if this source image had any variants updated

  try {
    // Get original image metadata
    const metadata = await sharp(sourcePath).metadata()
    let originalWidth = metadata.width
    let originalHeight = metadata.height

    // Check if image needs rotation (EXIF orientation 5-8 require dimension swap)
    const orientation = metadata.orientation || 1
    if (orientation >= 5 && orientation <= 8) {
      // Swap dimensions for rotated images
      ;[originalWidth, originalHeight] = [originalHeight, originalWidth]
    }

    console.log(`Processing: ${imagePath} (${originalWidth}x${originalHeight})`)

    // Track generated filenames to avoid duplicates
    const generatedFilenames = new Set()

    // Find the largest size in the configuration
    const sizeEntries = Object.entries(sizes)
    const largestSize = Math.max(...sizeEntries.map(([, maxSize]) => maxSize))

    // Process each size
    for (const [sizeName, maxSize] of Object.entries(sizes)) {
      let actualWidth, actualHeight

      // Calculate dimensions based on longest side
      const maxDimension = Math.max(originalWidth, originalHeight)

      // Skip sizes that are larger than the original image dimensions
      // unless it's the largest configured size (which becomes the "full" size)
      if (maxSize > maxDimension && maxSize !== largestSize) {
        console.log(
          `  Skipping ${sizeName} (${maxSize}px) - larger than original (${maxDimension}px)`
        )
        continue
      }

      if (maxSize >= maxDimension) {
        // Use original dimensions but compress at quality setting
        actualWidth = originalWidth
        actualHeight = originalHeight
      } else {
        // Calculate resized dimensions based on longest side
        const dimensions = calculateDimensions(
          originalWidth,
          originalHeight,
          maxSize
        )
        actualWidth = dimensions.width
        actualHeight = dimensions.height
      }

      // Determine if this is the full-size image (largest size)
      const isFullSize = maxSize === largestSize

      const outputFilename = generateFilename(
        imagePath,
        actualWidth,
        actualHeight,
        isFullSize
      )
      const outputPath = path.join(OUTPUT_DIR, outputFilename)

      // Skip if we already generated this exact filename (for small images)
      if (generatedFilenames.has(outputFilename)) {
        console.log(
          `  Skipping ${sizeName} (${actualWidth}x${actualHeight}) - same as previous size`
        )
        continue
      }

      // Ensure output directory exists
      const outputDir = path.dirname(outputPath)
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      // Skip if file already exists on disk
      // Check if already exists and is up-to-date
      if (fs.existsSync(outputPath)) {
        const sourceStats = fs.statSync(sourcePath)
        const outputStats = fs.statSync(outputPath)

        // If output is newer than or equal to source, skip
        if (outputStats.mtime >= sourceStats.mtime) {
          console.log(
            `  Skipping ${sizeName} (${actualWidth}x${actualHeight}) - up-to-date`
          )
          generatedFiles.push(outputFilename)
          generatedFilenames.add(outputFilename)
          continue
        }

        // Output exists but is older than source, need to regenerate
        console.log(
          `  Updating ${sizeName} (${actualWidth}x${actualHeight}) - source modified`
        )
        wasUpdated = true
      }

      // Generate image (resized or compressed original)
      let sharpInstance = sharp(sourcePath).rotate() // Auto-rotate based on EXIF orientation FIRST

      if (maxSize < maxDimension) {
        // Resize the image
        sharpInstance = sharpInstance.resize(actualWidth, actualHeight, {
          fit: 'inside', // Changed from 'cover' to 'inside' to maintain aspect ratio
        })
      } else {
        console.log(
          `  Processing ${sizeName}: using original size (${originalWidth}x${originalHeight}) with compression`
        )
      }

      // Apply compression based on original file format
      const ext = path.extname(imagePath).toLowerCase()

      if (ext === '.jpg' || ext === '.jpeg') {
        await sharpInstance.jpeg({ quality }).toFile(outputPath)
      } else if (ext === '.png') {
        await sharpInstance.png({ quality }).toFile(outputPath)
      } else if (ext === '.webp') {
        await sharpInstance.webp({ quality }).toFile(outputPath)
      } else {
        // Fallback for other formats - preserve as JPEG
        await sharpInstance.jpeg({ quality }).toFile(outputPath)
      }

      // Copy modification timestamp from source to output
      const sourceStats = fs.statSync(sourcePath)
      fs.utimesSync(outputPath, sourceStats.atime, sourceStats.mtime)

      console.log(`  Generated ${sizeName}: ${outputFilename}`)
      generatedFiles.push(outputFilename)
      generatedFilenames.add(outputFilename)
    }

    return { generatedFiles, wasUpdated }
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error.message)
    return { generatedFiles: [], wasUpdated: false }
  }
}

/**
 * Generate metadata JSON file for all processed images
 */
async function generateMetadata(sourceImages, sizes) {
  const metadata = {}

  for (const imagePath of sourceImages) {
    // Create slug from the image path (include extension to handle duplicates)
    const nameWithoutExt = path.parse(imagePath).name
    const ext = path.parse(imagePath).ext
    const dirname = path.dirname(imagePath)
    const slug =
      dirname === '.'
        ? `/images/${nameWithoutExt}${ext}`
        : `/images/${dirname}/${nameWithoutExt}${ext}`

    // Initialize the image object
    metadata[slug] = {}

    // Get the generated filenames for this image
    const existingFiles = getExistingImages()

    // Map size names to our desired output format
    const sizeMapping = {
      small: 'small',
      medium: 'medium',
      large: 'large',
      full: 'full',
    }

    // Get all generated files for this source image
    const imageFiles = []

    for (const file of existingFiles) {
      const parsed = parseGeneratedFilename(file)
      if (parsed && parsed.originalName === imagePath) {
        // For files without embedded dimensions, read from the actual file
        if (!parsed.hasEmbeddedDimensions) {
          try {
            const filePath = path.join(OUTPUT_DIR, file)
            const fileMetadata = await sharp(filePath).metadata()
            parsed.width = fileMetadata.width
            parsed.height = fileMetadata.height
          } catch (error) {
            console.error(
              `Error reading dimensions for ${file}:`,
              error.message
            )
            continue
          }
        }

        imageFiles.push({
          file,
          parsed,
          maxDimension: Math.max(parsed.width, parsed.height),
        })
      }
    }

    // Sort by width to match them to size categories
    const sortedFiles = imageFiles.sort(
      (a, b) => a.maxDimension - b.maxDimension
    )

    // Determine which sizes should exist based on the original image dimensions
    if (
      sortedFiles.length === 0 ||
      !sortedFiles[sortedFiles.length - 1].parsed
    ) {
      console.warn(
        `No valid parsed files found for ${imagePath}, skipping metadata generation`
      )
      continue
    }

    const originalMaxDimension = Math.max(
      sortedFiles[sortedFiles.length - 1].parsed.width,
      sortedFiles[sortedFiles.length - 1].parsed.height
    )

    // Get size entries and determine which ones should exist
    const sizeEntries = Object.entries(sizes)
    sizeEntries.sort((a, b) => a[1] - b[1]) // Sort by size value

    // Filter out sizes that are larger than the original (except the largest configured size)
    const largestConfiguredSize = Math.max(
      ...sizeEntries.map(([, size]) => size)
    )
    const validSizes = sizeEntries.filter(([sizeName, sizeValue]) => {
      return (
        sizeValue <= originalMaxDimension || sizeValue === largestConfiguredSize
      )
    })

    sortedFiles.forEach((fileInfo, index) => {
      if (index < validSizes.length) {
        let [sizeName] = validSizes[index]

        // If this is the largest file and it's not the largest configured size,
        // it should be labeled as "full" instead of its configured name
        if (index === sortedFiles.length - 1 && sizeName !== 'full') {
          sizeName = 'full'
        }

        const outputSizeName = sizeMapping[sizeName] || sizeName
        const filePathForUrl = fileInfo.file.split(path.sep).join('/')

        metadata[slug][outputSizeName] = {
          width: fileInfo.parsed.width,
          height: fileInfo.parsed.height,
          file: `/images/${filePathForUrl}`,
        }
      }
    })
  }

  return metadata
}

/**
 * Write metadata to JSON file
 */
function writeMetadata(metadata) {
  try {
    // Ensure _data directory exists
    const dataDir = path.dirname(META_FILE)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Write the metadata file
    fs.writeFileSync(META_FILE, JSON.stringify(metadata, null, 2))
    console.log(`📄 Generated metadata file: ${META_FILE}`)
  } catch (error) {
    console.error('Error writing metadata file:', error.message)
  }
}

/**
 * Find and remove orphaned images
 */
async function removeOrphanedImages(
  sourceImages,
  existingImages,
  validGenerated
) {
  const orphaned = []

  for (const existingImage of existingImages) {
    const parsed = parseGeneratedFilename(existingImage)
    if (!parsed) continue

    // For files without embedded dimensions, we need to get dimensions to complete parsing
    if (!parsed.hasEmbeddedDimensions) {
      try {
        const filePath = path.join(OUTPUT_DIR, existingImage)
        const fileMetadata = await sharp(filePath).metadata()
        parsed.width = fileMetadata.width
        parsed.height = fileMetadata.height
      } catch (error) {
        console.error(
          `Error reading dimensions for ${existingImage}:`,
          error.message
        )
        continue
      }
    }

    const sourceExists = sourceImages.includes(parsed.originalName)
    const isValidGenerated = validGenerated.includes(existingImage)

    if (!sourceExists || !isValidGenerated) {
      const orphanPath = path.join(OUTPUT_DIR, existingImage)
      try {
        fs.unlinkSync(orphanPath)
        orphaned.push(existingImage)
        console.log(`Removed orphaned: ${existingImage}`)
      } catch (error) {
        console.error(`Error removing ${existingImage}:`, error.message)
      }
    }
  }

  return orphaned
}

/**
 * Get all subdirectories in output folder
 */
function getAllDirectories(
  dir = OUTPUT_DIR,
  baseDir = OUTPUT_DIR,
  dirList = []
) {
  try {
    if (!fs.existsSync(dir)) {
      return dirList
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name)
        const relativePath = path.relative(baseDir, fullPath)
        dirList.push(relativePath)

        // Recursively get subdirectories
        getAllDirectories(fullPath, baseDir, dirList)
      }
    }

    return dirList
  } catch (error) {
    console.error('Error getting directories:', error.message)
    return dirList
  }
}

/**
 * Get all subdirectories in source folder
 */
function getSourceDirectories(
  dir = SOURCE_DIR,
  baseDir = SOURCE_DIR,
  dirList = []
) {
  try {
    if (!fs.existsSync(dir)) {
      return dirList
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name)
        const relativePath = path.relative(baseDir, fullPath)
        dirList.push(relativePath)

        // Recursively get subdirectories
        getSourceDirectories(fullPath, baseDir, dirList)
      }
    }

    return dirList
  } catch (error) {
    console.error('Error getting source directories:', error.message)
    return dirList
  }
}

/**
 * Remove empty directories and orphaned directories
 */
function removeOrphanedDirectories() {
  const outputDirs = getAllDirectories()
  const sourceDirs = getSourceDirectories()
  const orphanedDirs = []

  // Check which output directories don't have corresponding source directories
  // This is CASE-SENSITIVE to catch folders with wrong casing
  for (const outputDir of outputDirs) {
    const hasExactMatch = sourceDirs.includes(outputDir)

    if (!hasExactMatch) {
      const fullPath = path.join(OUTPUT_DIR, outputDir)
      try {
        // Remove directory and all its contents
        fs.rmSync(fullPath, { recursive: true, force: true })
        orphanedDirs.push(outputDir)
        console.log(`Removed orphaned folder: ${outputDir}`)
      } catch (error) {
        console.error(`Error removing directory ${outputDir}:`, error.message)
      }
    }
  }

  // Remove empty directories
  const remainingDirs = getAllDirectories()
  // Sort in reverse order (deepest first) to remove empty leaf directories first
  remainingDirs.sort(
    (a, b) => b.split(path.sep).length - a.split(path.sep).length
  )

  for (const dir of remainingDirs) {
    const fullPath = path.join(OUTPUT_DIR, dir)
    try {
      if (fs.existsSync(fullPath)) {
        const entries = fs.readdirSync(fullPath)
        if (entries.length === 0) {
          fs.rmdirSync(fullPath)
          orphanedDirs.push(dir)
          console.log(`Removed empty folder: ${dir}`)
        }
      }
    } catch (error) {
      // Ignore errors for non-empty directories
    }
  }

  return orphanedDirs
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Starting image processing...\n')

  // Load configuration
  const config = loadConfig()
  const sizes = config.sizes
  const quality = config.quality || 80

  console.log('Configuration loaded:')
  Object.entries(sizes).forEach(([name, maxSize]) => {
    console.log(`  ${name}: ${maxSize}px longest side`)
  })
  console.log(`  Quality: ${quality}%\n`)

  // Sanitize filenames first in originals
  console.log('🔄 Sanitizing filenames in originals to be URL-friendly...')
  const originalsRenameMap = sanitizeFilenames(SOURCE_DIR, SOURCE_DIR)
  if (originalsRenameMap.size > 0) {
    console.log(
      `✓ Renamed ${originalsRenameMap.size} files/folders in originals\n`
    )
  } else {
    console.log('✓ All originals filenames are already URL-friendly\n')
  }

  // Get source images AFTER sanitization
  const sourceImages = getSourceImages()

  console.log(`Found ${sourceImages.length} source images`)

  if (sourceImages.length === 0) {
    console.log('No source images found. Exiting.')
    return
  }

  // Clean up orphaned folders BEFORE processing images
  // This ensures folders with wrong casing are removed before we create new ones
  console.log('🗑️  Cleaning up orphaned folders...')
  const orphanedDirs = removeOrphanedDirectories()
  if (orphanedDirs.length > 0) {
    console.log('')
  }

  // Get existing images AFTER cleaning up orphaned directories
  const existingImages = getExistingImages()
  console.log(`Found ${existingImages.length} existing generated images\n`)

  // Process all source images
  const allGeneratedFiles = []
  let totalUpdated = 0
  for (const imageName of sourceImages) {
    const result = await processImage(imageName, sizes, quality)
    allGeneratedFiles.push(...result.generatedFiles)
    if (result.wasUpdated) {
      totalUpdated++
    }
  }

  console.log('\n🧹 Cleaning up orphaned images...')
  const orphaned = await removeOrphanedImages(
    sourceImages,
    existingImages,
    allGeneratedFiles
  )

  console.log('\n📄 Generating metadata...')
  const metadata = await generateMetadata(sourceImages, sizes)
  writeMetadata(metadata)

  // Summary
  console.log('\n📊 Summary:')
  console.log(`  Source images processed: ${sourceImages.length}`)
  console.log(`  Generated images: ${allGeneratedFiles.length}`)
  console.log(`  Source images updated: ${totalUpdated}`)
  console.log(`  Orphaned images removed: ${orphaned.length}`)
  console.log(`  Orphaned folders removed: ${orphanedDirs.length}`)
  console.log(`  Total images in output: ${allGeneratedFiles.length}`)
  console.log(`  Metadata entries: ${Object.keys(metadata).length}`)

  console.log('\n✅ Image processing complete!')
}

// Run the script
if (require.main === module) {
  main().catch((error) => {
    console.error('Script failed:', error)
    process.exit(1)
  })
}
