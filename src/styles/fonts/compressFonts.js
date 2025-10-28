const fs = require('fs')
const path = require('path')
const ttf2woff2 = require('ttf2woff2').default

const folderName = process.argv[2]
const fontTypes = process.argv.slice(3) // Get all remaining arguments as font types

if (!folderName) {
  console.error('Please provide a folder name as an argument.')
  console.error('Usage: npm run fonts <folder> [fontType1] [fontType2] ...')
  console.error('Example: npm run fonts Switzer heading heading2 heading3')
  process.exit(1)
}

// Construct the full path to the fonts folder
const fontsBasePath = path.join(__dirname, folderName)

const processedFiles = []
const fontMap = []

const weightMap = {
  extrabold: '900',
  bold: '700',
  semibold: '700',
  medium: '500',
  regular: '400',
  italic: '400',
  light: '300',
}

function parseFontMetadata(filename) {
  const name = filename.toLowerCase()

  let weight = '400'
  let style = 'normal'
  let isVariable = name.includes('variable')

  // For variable fonts, use weight range
  if (isVariable) {
    weight = '100 900'
  } else {
    // For static fonts, detect specific weight
    if (name.includes('extrabold')) weight = weightMap.extrabold
    else if (name.includes('semibold')) weight = weightMap.semibold
    else if (name.includes('bold')) weight = weightMap.bold
    else if (name.includes('medium')) weight = weightMap.medium
    else if (name.includes('light')) weight = weightMap.light
    else if (name.includes('regular')) weight = weightMap.regular
  }

  if (name.includes('italic')) style = 'italic'

  return { weight, style, isVariable }
}

function compressTTF(filePath) {
  try {
    const input = fs.readFileSync(filePath)
    const woff2 = ttf2woff2(input)

    const baseName = path.basename(filePath, '.ttf')
    const woff2File = baseName + '.woff2'
    const outputPath = path.join(path.dirname(filePath), woff2File)
    const woff2Path = path.join('./', folderName, woff2File)

    fs.writeFileSync(outputPath, woff2)

    const { weight, style, isVariable } = parseFontMetadata(baseName)

    fontMap.push({
      path: woff2Path,
      weight,
      style,
      isVariable,
    })

    processedFiles.push(filePath)
    console.log(`✓ Compressed: ${baseName}${isVariable ? ' (variable)' : ''}`)
  } catch (error) {
    console.error(`Error compressing ${filePath}: ${error.message}`)
  }
}

async function processFonts(folder) {
  try {
    const files = await fs.promises.readdir(folder)

    files.forEach((file) => {
      const ext = path.extname(file).toLowerCase()
      const filePath = path.join(folder, file)

      if (ext === '.ttf') {
        compressTTF(filePath)
      }
    })

    // Display summary immediately since compression is now synchronous
    displaySummary()
  } catch (err) {
    console.error(`Error reading folder "${folder}": ${err.message}`)
  }
}

function displaySummary() {
  console.log('\n✅ Compression complete. Processed files:\n')
  processedFiles.forEach((file) => console.log(file))

  console.log('\n🧬 Generated localFont() object:\n')

  const localFontExport = `export const _font = localFont({\n  src: [\n${fontMap
    .map(
      (font) =>
        `    {\n      path: '${font.path}',\n      weight: '${font.weight}',\n      style: '${font.style}',\n    },`
    )
    .join('\n')}\n  ],\n});`

  console.log(localFontExport)

  // Update font files if font types are specified
  if (fontTypes.length > 0) {
    updateFontFiles()
  }
}

function updateFontFiles() {
  const dataFontsPath = path.join(__dirname, '../../../_data/_fonts')

  fontTypes.forEach((fontType) => {
    const fileName = `_${fontType}.tsx`
    const filePath = path.join(dataFontsPath, fileName)

    // Generate the font array with proper paths relative to _data/_fonts/
    const srcArray = fontMap
      .map(
        (font) =>
          `    {\n      path: '../../src/styles/fonts/${folderName}/${path.basename(font.path)}',\n      weight: '${font.weight}',\n      style: '${font.style}',\n    },`
      )
      .join('\n')

    if (!fs.existsSync(filePath)) {
      // Create new file from template
      console.log(`\n📝 Creating new file: ${fileName}`)

      const variableName = `_${fontType}Font`
      const template = `import localFont from 'next/font/local'

export const ${variableName} = localFont({
  src: [
${srcArray}
  ],
})
`

      try {
        fs.writeFileSync(filePath, template, 'utf8')
        console.log(`✅ Created: ${fileName}`)
      } catch (error) {
        console.error(`❌ Error creating ${fileName}: ${error.message}`)
      }
      return
    }

    try {
      let content = fs.readFileSync(filePath, 'utf8')

      // Replace the src array in the localFont call
      const regex = /src:\s*\[[\s\S]*?\]/
      const replacement = `src: [\n${srcArray}\n  ]`

      content = content.replace(regex, replacement)

      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`\n✅ Updated: ${fileName}`)
    } catch (error) {
      console.error(`\n❌ Error updating ${fileName}: ${error.message}`)
    }
  })
}

// Run
processFonts(fontsBasePath)
