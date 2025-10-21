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

    // Replace markdown headings (# Heading, ## Heading, etc.)
    content = content.replace(
      /^(#{1,6})\s+(.+)$/gm,
      (match, hashes, headingText) => {
        // Skip if already lorem ipsum
        if (headingText.toLowerCase().includes('lorem')) {
          return match
        }

        // Clean the text
        const cleanText = headingText
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
          .replace(/['"]/g, '')
          .trim()

        if (cleanText.length > 0) {
          const wordCount = countWords(cleanText)
          const newText = generateLoremWords(Math.max(wordCount, 2))
          modified = true
          return `${hashes} ${newText}`
        }
        return match
      }
    )

    // Replace Instagram hashtag links (lines with multiple [#hashtag](...) patterns)
    content = content.replace(
      /^.*\[#\w+\]\(https:\/\/www\.instagram\.com\/explore\/tags\/.*$/gm,
      (match) => {
        // Generate a lorem paragraph (around 20-30 words)
        const newParagraph = generateLoremWords(25)
        modified = true
        return newParagraph
      }
    )

    // Replace markdown paragraphs (text not inside components, not headings, not lists)
    // Split by double newlines to find paragraphs
    const lines = content.split('\n')
    const processedLines = lines.map((line) => {
      // Skip empty lines
      if (!line.trim()) return line

      // PRIORITY 1: Handle lines starting with emoji (may contain <br/> tags or other content)
      if (/^[\u{1F300}-\u{1F9FF}]/u.test(line.trim())) {
        // Skip if already lorem ipsum
        if (line.toLowerCase().includes('lorem')) {
          return line
        }

        // Clean the text (remove emojis, HTML tags, and quotes)
        const cleanText = line
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
          .replace(/<br\s*\/?>/gi, ' ') // Remove <br/> tags
          .replace(/['"]/g, '')
          .trim()

        if (cleanText.length > 15) {
          const wordCount = countWords(cleanText)
          const newText = generateLoremWords(Math.max(wordCount, 5))
          modified = true
          return newText
        }
        return line
      }

      // PRIORITY 2: Handle bold text lines that start with ** (like **1️⃣** text or **You don't...** text)
      if (line.trim().startsWith('**')) {
        // Skip if already lorem ipsum
        if (line.toLowerCase().includes('lorem')) {
          return line
        }

        // Check if it's an emoji bullet format: **emoji** text
        const emojiBulletMatch = line.match(
          /^\*\*([\u{1F300}-\u{1F9FF}]+)\*\*\s*(.+)$/u
        )
        if (emojiBulletMatch) {
          const restOfText = emojiBulletMatch[2]
          const cleanText = restOfText
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
            .replace(/['"]/g, '')
            .trim()

          if (cleanText.length > 5) {
            const wordCount = countWords(cleanText)
            const newText = generateLoremWords(Math.max(wordCount, 3))
            modified = true
            return `- ${newText}`
          }
        }

        // Otherwise, it's regular bold text: **text** - replace the content
        const boldTextMatch = line.match(/^\*\*([^*]+)\*\*(.*)$/)
        if (boldTextMatch) {
          const boldContent = boldTextMatch[1]
          const afterBold = boldTextMatch[2]

          // Clean and count the bold text
          const cleanBold = boldContent
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
            .replace(/['"]/g, '')
            .trim()

          if (cleanBold.length > 5) {
            const wordCount = countWords(cleanBold)
            const newText = generateLoremWords(Math.max(wordCount, 3))
            modified = true
            // Keep the bold formatting
            return `**${newText}**${afterBold.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim() ? '' : ''}`
          }
        }
        return line
      }

      // PRIORITY 3: Skip lines that are components, metadata, imports, or special syntax
      if (
        line.trim().startsWith('<') ||
        line.trim().startsWith('import ') ||
        line.trim().startsWith('export ') ||
        line.trim().startsWith('#') ||
        line.trim().startsWith('-') ||
        line.trim().startsWith('[') ||
        line.includes('{') ||
        line.includes('}') ||
        line.includes('=') ||
        (line.includes(':') && line.includes('//'))
      ) {
        // Skip URLs
        return line
      }

      // PRIORITY 4: Check if it's a regular paragraph (starts with capital letter or common words)
      if (
        /^[A-Z]/.test(line.trim()) ||
        /^(The|This|That|There|It|We|You|Your|Our|In|On|At|For|With|From|To|And|Or|But)\s/i.test(
          line.trim()
        )
      ) {
        // Skip if already lorem ipsum
        if (line.toLowerCase().includes('lorem')) {
          return line
        }

        // Clean the text
        const cleanText = line
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
          .replace(/['"]/g, '')
          .trim()

        if (cleanText.length > 20) {
          // Only replace longer paragraphs
          const wordCount = countWords(cleanText)
          const newText = generateLoremWords(Math.max(wordCount, 5))
          modified = true
          return newText
        }
      }

      return line
    })

    content = processedLines.join('\n')

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
