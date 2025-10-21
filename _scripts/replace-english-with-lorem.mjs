#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Author variations (cycle through 3)
const AUTHORS = ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur Adipiscing']

// Category variations (cycle through 7)
const CATEGORIES = [
  'Elit Sed',
  'Do Eiusmod',
  'Tempor Incididunt',
  'Ut Labore',
  'Et Dolore',
  'Magna Aliqua',
  'Ut Enim',
]

let authorIndex = 0
let categoryIndex = 0

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

// Get next author (cycling)
function getNextAuthor() {
  const author = AUTHORS[authorIndex]
  authorIndex = (authorIndex + 1) % AUTHORS.length
  return author
}

// Get next category (cycling)
function getNextCategory() {
  const category = CATEGORIES[categoryIndex]
  categoryIndex = (categoryIndex + 1) % CATEGORIES.length
  return category
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

    // Replace title - handle both clean and malformed strings
    content = content.replace(
      /title:\s*['"](.+?)['"],[?\s]*$/gm,
      (match, title) => {
        // Remove emojis and any problematic characters
        const cleanTitle = title
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
          .replace(/['"]/g, '')
          .replace(/[,]/g, '')
          .trim()
        if (cleanTitle.length > 0) {
          const wordCount = countWords(cleanTitle)
          const newTitle = generateLoremWords(Math.max(wordCount, 2))
          modified = true
          return match.endsWith(',')
            ? `title: '${newTitle}',`
            : `title: '${newTitle}'`
        }
        return match
      }
    )

    // Replace description - handle both clean and malformed strings
    content = content.replace(
      /description:\s*['"](.+?)['"],?\s*$/gm,
      (match, desc) => {
        // Remove emojis and any problematic characters
        const cleanDesc = desc
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
          .replace(/['"]/g, '')
          .replace(/[,]/g, '')
          .trim()
        if (cleanDesc.length > 0) {
          const wordCount = countWords(cleanDesc)
          const newDesc = generateLoremWords(Math.max(wordCount, 10))
          modified = true
          // Preserve the original line ending structure
          return match.endsWith(',')
            ? `description: '${newDesc}',`
            : `description: '${newDesc}'`
        }
        return match
      }
    )

    // Replace alt text - handle both clean and malformed strings
    content = content.replace(
      /alt:\s*['"](.+?)['"],[?\s]*$/gm,
      (match, alt) => {
        // Remove emojis and any problematic characters
        const cleanAlt = alt
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
          .replace(/['"]/g, '')
          .replace(/[,]/g, '')
          .trim()
        if (cleanAlt.length > 0) {
          const wordCount = countWords(cleanAlt)
          const newAlt = generateLoremWords(Math.max(wordCount, 3))
          modified = true
          return match.endsWith(',') ? `alt: '${newAlt}',` : `alt: '${newAlt}'`
        }
        return match
      }
    )

    // Replace authors - simplified pattern
    content = content.replace(
      /authors:\s*\[\s*\{\s*name:\s*['"]([^'"]*)['"]\s*\}\s*\]/g,
      (match) => {
        const newAuthor = getNextAuthor()
        modified = true
        return `authors: [{ name: '${newAuthor}' }]`
      }
    )

    // Replace categories
    content = content.replace(
      /categories:\s*\[([^\]]+)\]/g,
      (match, categoriesStr) => {
        // Count how many categories there are
        const categoryMatches = categoriesStr.match(/['"][^'"]+['"]/g) || []
        const categoryCount = categoryMatches.length

        // Generate new categories
        const newCategories = []
        for (let i = 0; i < categoryCount; i++) {
          newCategories.push(`'${getNextCategory()}'`)
        }

        modified = true
        return `categories: [${newCategories.join(', ')}]`
      }
    )

    // Replace component inner text (Heading, Paragraph, Accent, Li, Quote, Button, FancyHeading)
    const componentPatterns = [
      { name: 'Heading', regex: /(<Heading[^>]*>)([^<]+)(<\/Heading>)/g },
      { name: 'Paragraph', regex: /(<Paragraph[^>]*>)([^<]+)(<\/Paragraph>)/g },
      { name: 'Accent', regex: /(<Accent[^>]*>)([^<]+)(<\/Accent>)/g },
      { name: 'Li', regex: /(<Li[^>]*>)([^<]+)(<\/Li>)/g },
      { name: 'Quote', regex: /(<Quote[^>]*>)([^<]+)(<\/Quote>)/g },
      { name: 'Button', regex: /(<Button\s[^>]*>)([^<]+)(<\/Button>)/g },
      {
        name: 'FancyHeading',
        regex: /(<FancyHeading[^>]*>)([^<]+)(<\/FancyHeading>)/g,
      },
    ]

    componentPatterns.forEach(({ name, regex }) => {
      content = content.replace(
        regex,
        (match, openTag, innerText, closeTag) => {
          // Remove emojis first, then trim
          const cleanText = innerText
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
            .trim()
          if (cleanText.length > 0) {
            const wordCount = countWords(cleanText)
            const newText = generateLoremWords(Math.max(wordCount, 2))
            modified = true
            return `${openTag}${newText}${closeTag}`
          }
          return match
        }
      )
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
