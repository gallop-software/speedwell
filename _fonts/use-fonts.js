const fs = require('fs')
const path = require('path')

const folderName = process.argv[2]
const fontTypes = process.argv.slice(3)

if (!folderName) {
  console.error('Please provide a folder name as an argument.')
  console.error('Usage: npm run fonts:use <folder> <fontType1> [fontType2] ...')
  console.error('Example: npm run fonts:use Switzer body heading')
  process.exit(1)
}

if (fontTypes.length === 0) {
  console.error('Please provide at least one font type.')
  console.error('Example: npm run fonts:use Switzer body')
  process.exit(1)
}

// Construct the full path to the fonts folder (relative to _fonts/)
const fontsBasePath = path.join(__dirname, folderName)

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

function scanWoff2Files(folder) {
  try {
    if (!fs.existsSync(folder)) {
      console.error(`❌ Folder not found: ${folder}`)
      process.exit(1)
    }

    const files = fs.readdirSync(folder)

    files.forEach((file) => {
      const ext = path.extname(file).toLowerCase()

      if (ext === '.woff2') {
        const baseName = path.basename(file, '.woff2')
        // Path relative to _fonts/ directory
        const woff2Path = `${folderName}/${file}`
        const { weight, style, isVariable } = parseFontMetadata(baseName)

        fontMap.push({
          path: woff2Path,
          weight,
          style,
          isVariable,
        })

        console.log(`✓ Found: ${baseName}${isVariable ? ' (variable)' : ''}`)
      }
    })

    if (fontMap.length === 0) {
      console.error(`\n❌ No .woff2 files found in ${folder}`)
      console.error(
        'Run "npm run fonts <folder>" first to generate woff2 files.'
      )
      process.exit(1)
    }

    displaySummary()
    updateFontFiles()
  } catch (err) {
    console.error(`Error reading folder "${folder}": ${err.message}`)
    process.exit(1)
  }
}

function displaySummary() {
  console.log('\n🧬 Generated font config:\n')

  const srcArray = fontMap.map((font) => ({
    path: font.path,
    weight: font.weight,
    style: font.style,
  }))

  console.log(JSON.stringify({ src: srcArray }, null, 2))
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
scanWoff2Files(fontsBasePath)
