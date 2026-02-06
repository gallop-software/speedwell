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

// Construct the full path to the fonts folder (relative to _fonts/)
const fontsBasePath = path.join(__dirname, folderName)

const processedFiles = []
const fontMap = []

const weightMap = {
  thin: '100',
  extralight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
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
    // For static fonts, detect specific weight (order matters - check longer strings first)
    if (name.includes('extralight')) weight = weightMap.extralight
    else if (name.includes('extrabold')) weight = weightMap.extrabold
    else if (name.includes('semibold')) weight = weightMap.semibold
    else if (name.includes('thin')) weight = weightMap.thin
    else if (name.includes('light')) weight = weightMap.light
    else if (name.includes('black')) weight = weightMap.black
    else if (name.includes('bold')) weight = weightMap.bold
    else if (name.includes('medium')) weight = weightMap.medium
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
    // Path relative to _fonts/ directory
    const woff2Path = `${folderName}/${woff2File}`

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

  console.log('\n🧬 Generated font config:\n')

  const srcArray = fontMap.map((font) => ({
    path: font.path,
    weight: font.weight,
    style: font.style,
  }))

  console.log(JSON.stringify({ src: srcArray }, null, 2))

  // Update font files if font types are specified
  if (fontTypes.length > 0) {
    updateFontFiles()
  }
}

function updateFontFiles() {
  const srcFontsPath = path.join(__dirname, '../src/fonts')

  // Ensure src/fonts directory exists
  if (!fs.existsSync(srcFontsPath)) {
    fs.mkdirSync(srcFontsPath, { recursive: true })
  }

  fontTypes.forEach((fontType) => {
    const fileName = `${fontType}.ts`
    const filePath = path.join(srcFontsPath, fileName)
    const variableName = `${fontType}Font`

    // Generate the font src array with paths relative to src/fonts/
    const srcArray = fontMap
      .map(
        (font) =>
          `    { path: '../../_fonts/${font.path}', weight: '${font.weight}', style: '${font.style}' },`
      )
      .join('\n')

    const template = `import localFont from 'next/font/local'

export const ${variableName} = localFont({
  src: [
${srcArray}
  ],
})
`

    try {
      fs.writeFileSync(filePath, template, 'utf8')
      console.log(`\n✅ Updated: src/fonts/${fileName}`)
    } catch (error) {
      console.error(`❌ Error writing ${fileName}: ${error.message}`)
    }
  })
}

// Run
processFonts(fontsBasePath)
