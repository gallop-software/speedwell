const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const folderName = process.argv[2]

if (!folderName) {
  console.error('Please provide a folder name as an argument.')
  process.exit(1)
}

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

  if (name.includes('extrabold')) weight = weightMap.extrabold
  else if (name.includes('semibold')) weight = weightMap.semibold
  else if (name.includes('bold')) weight = weightMap.bold
  else if (name.includes('medium')) weight = weightMap.medium
  else if (name.includes('light')) weight = weightMap.light
  else if (name.includes('regular')) weight = weightMap.regular

  if (name.includes('italic')) style = 'italic'

  return { weight, style }
}

function compressTTF(filePath) {
  exec(`./woff2_compress "${filePath}"`, (error) => {
    if (error) {
      console.error(`Error compressing ${filePath}: ${error.message}`)
      return
    }

    const baseName = path.basename(filePath, '.ttf')
    const woff2File = baseName + '.woff2'
    const woff2Path = path.join('../../styles/fonts', folderName, woff2File)

    const { weight, style } = parseFontMetadata(baseName)

    fontMap.push({
      path: woff2Path,
      weight,
      style,
    })

    processedFiles.push(filePath)
  })
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

    // Wait for all compressions to complete
    setTimeout(displaySummary, 5000)
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
        `    {\n      path: '${font.path}',\n      weight: '${font.weight}',\n      style: '${font.style}'\n    },`
    )
    .join('\n')}\n  ]\n});`

  console.log(localFontExport)
}

// Run
processFonts(folderName)
