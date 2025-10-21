#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Lorem ipsum word pools
const loremWords = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'sed',
  'do',
  'eiusmod',
  'tempor',
  'incididunt',
  'ut',
  'labore',
  'et',
  'dolore',
  'magna',
  'aliqua',
  'enim',
  'ad',
  'minim',
  'veniam',
  'quis',
  'nostrud',
  'exercitation',
  'ullamco',
  'laboris',
  'nisi',
  'aliquip',
  'ex',
  'ea',
  'commodo',
  'consequat',
  'duis',
  'aute',
  'irure',
  'in',
  'reprehenderit',
  'voluptate',
  'velit',
  'esse',
  'cillum',
  'fugiat',
  'nulla',
  'pariatur',
  'excepteur',
  'sint',
  'occaecat',
  'cupidatat',
  'non',
  'proident',
  'sunt',
  'culpa',
  'qui',
  'officia',
  'deserunt',
  'mollit',
  'anim',
  'id',
  'est',
  'laborum',
]

// Generate lorem text with specific word count
function generateLoremWords(wordCount) {
  const words = []
  for (let i = 0; i < wordCount; i++) {
    words.push(loremWords[Math.floor(Math.random() * loremWords.length)])
  }
  // Capitalize first letter
  if (words.length > 0) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
  }
  return words.join(' ')
}

// Count words in a string
function countWords(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length
}

// Recursively find all MDX files
function findMdxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      findMdxFiles(filePath, fileList)
    } else if (file.endsWith('.mdx')) {
      fileList.push(filePath)
    }
  })

  return fileList
}

// Process a single MDX file
async function processMdxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false

    console.log(`\n📝 Processing ${path.basename(filePath)}`)

    // Props to replace (text display props)
    const textProps = [
      'alt',
      'imageAlt',
      'caption',
      'cite',
      'text',
      'accent',
      'label',
      'placeholder',
      'name',
      'value',
    ]

    // Replace each text prop
    textProps.forEach((prop) => {
      // Match prop="value" or prop='value' or prop={`value`} or prop={"value"}
      const patterns = [
        // Standard string props: prop="value" or prop='value'
        new RegExp(`${prop}=(['"])(.+?)\\1`, 'gm'),
        // Template literal props: prop={\`value\`}
        new RegExp(`${prop}=\\{[\`](.+?)[\`]\\}`, 'gm'),
        // String in braces: prop={"value"} or prop={'value'}
        new RegExp(`${prop}=\\{['"](.+?)['"]\\}`, 'gm'),
      ]

      patterns.forEach((regex) => {
        content = content.replace(
          regex,
          (match, quoteOrValue, value, offset) => {
            // Check if this prop is inside excluded components (Form components and CardContact)
            // Look back up to 1000 characters to find the component opening tag
            const before = content.substring(Math.max(0, offset - 1000), offset)

            // Find the last occurrence of each excluded component
            const excludedComponents = [
              'FormInput',
              'FormTextArea',
              'FormUpload',
              'FormRadioGroup',
              'FormCheckboxGroup',
              'FormButton',
              'FormName',
              'CardContact',
            ]

            // Check if any excluded component is currently open by finding the last opening tag
            for (const component of excludedComponents) {
              const lastOpen = before.lastIndexOf(`<${component}`)
              if (lastOpen === -1) continue

              // Check if this component tag is still open (no closing /> or </Component> after it)
              const afterOpen = before.substring(lastOpen)
              const selfClosing = afterOpen.indexOf('/>')
              const closingTag = afterOpen.indexOf(`</${component}>`)

              // If we haven't found a closing tag, or the closing comes after our current position,
              // we're inside this component
              if (selfClosing === -1 && closingTag === -1) {
                return match
              }
            }

            // For the first pattern, value is in second capture group
            // For other patterns, value is in first capture group
            const actualValue = value !== undefined ? value : quoteOrValue

            // Skip if it's a path (contains / or .)
            if (actualValue.includes('/') || actualValue.includes('.')) {
              return match
            }

            // Skip if it's already lorem ipsum
            if (actualValue.toLowerCase().includes('lorem')) {
              return match
            }

            // Clean the text
            const cleanText = actualValue
              .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
              .replace(/['"]/g, '')
              .replace(/[,]/g, '')
              .trim()

            if (cleanText.length > 0) {
              const wordCount = countWords(cleanText)
              const newText = generateLoremWords(Math.max(wordCount, 2))
              modified = true

              // Preserve the original quote style
              if (match.includes('={`')) {
                return `${prop}={\`${newText}\`}`
              } else if (match.includes('={"')) {
                return `${prop}={"${newText}"}`
              } else if (match.includes("={'")) {
                return `${prop}={'${newText}'}`
              } else if (match.includes('="')) {
                return `${prop}="${newText}"`
              } else {
                return `${prop}='${newText}'`
              }
            }
            return match
          }
        )
      })
    })

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ Updated ${path.basename(filePath)}`)
    } else {
      console.log(`⏭️  No changes needed for ${path.basename(filePath)}`)
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
  }
}

// Main function
async function main() {
  const rootDir = path.join(__dirname, '..')
  const mdxDir = path.join(rootDir, 'src/app/markdown')
  const templateDir = path.join(rootDir, 'src/app/template')

  console.log('🔍 Finding MDX files...\n')

  const markdownFiles = findMdxFiles(mdxDir)
  const templateFiles = findMdxFiles(templateDir)
  const files = [...markdownFiles, ...templateFiles]

  console.log(`📄 Found ${markdownFiles.length} MDX files in markdown/`)
  console.log(`📄 Found ${templateFiles.length} MDX files in template/`)
  console.log(`📄 Total: ${files.length} MDX files\n`)
  console.log('🔄 Processing files...\n')

  for (const file of files) {
    await processMdxFile(file)
  }

  console.log('\n✨ Done!')
}

main().catch(console.error)
