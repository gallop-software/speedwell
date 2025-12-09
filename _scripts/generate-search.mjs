import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { JSDOM } from 'jsdom'
import { slugifyWithCounter } from '@sindresorhus/slugify'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Get all slug paths from MDX files
function getSlugPaths(dir, basePath = '') {
  const out = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relative = basePath ? `${basePath}/${entry.name}` : entry.name

    if (entry.isDirectory()) {
      out.push(...getSlugPaths(fullPath, relative))
      continue
    }

    if (!entry.name.endsWith('.tsx')) continue

    const slugPathNoExt = relative.replace(/\.tsx$/, '')
    const segs = slugPathNoExt.split('/')
    const slugPath = segs.join('/') || 'index'

    out.push(slugPath)
  }

  return out
}

// Fetch HTML from local server
async function fetchPage(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    return await response.text()
  } catch (error) {
    throw new Error(`Failed to fetch ${url}: ${error.message}`)
  }
}

// Extract text content from an element, excluding script/style tags
function getTextContent(element) {
  const clone = element.cloneNode(true)
  // Remove script, style, nav, header, footer, and aside elements
  clone
    .querySelectorAll('script, style, nav, header, footer, aside')
    .forEach((el) => el.remove())
  return clone.textContent.trim().replace(/\s+/g, ' ')
}

// Parse HTML and extract sections based on headings
function extractSectionsFromHtml(html, url) {
  const dom = new JSDOM(html)
  const document = dom.window.document
  const sections = []

  // Focus only on content within main element
  const main = document.querySelector('main')
  if (!main) {
    console.warn(`No <main> element found on ${url}`)
    return sections
  }

  // Remove header, footer, and aside elements from main before processing
  main.querySelectorAll('header, footer, aside').forEach((el) => el.remove())

  // Find all headings (h1-h6) within main
  const headings = main.querySelectorAll('h1, h2, h3, h4, h5, h6')

  let pageTitle =
    main.querySelector('h1')?.textContent.trim() ||
    document.querySelector('title')?.textContent.trim() ||
    url.split('/').pop().replace(/-/g, ' ')

  // If there's only one heading (typical for blog posts), extract all main content
  if (headings.length === 1) {
    const heading = headings[0]
    const id = heading.id || ''
    const title = heading.textContent.trim()
    const headingUrl = `${url}${id ? `#${id}` : ''}`

    // Get all text content from main
    const mainContent = getTextContent(main)

    // Remove the heading from the beginning of the content if it exists
    let content = mainContent
    if (mainContent.startsWith(title)) {
      content = mainContent.slice(title.length).trim()
    }

    // Only add if there's actual content
    if (content.trim()) {
      sections.push({
        url: headingUrl,
        title: title,
        content: content,
        pageTitle: undefined,
      })
    }

    return sections
  }

  // For pages with multiple headings, parse by sections
  headings.forEach((heading, index) => {
    const id = heading.id || ''
    const title = heading.textContent.trim()
    const headingUrl = `${url}${id ? `#${id}` : ''}`

    // Collect content between this heading and the next
    let content = [] // Don't include the heading text in content
    let currentElement = heading.nextElementSibling
    const nextHeading = headings[index + 1]

    // Helper function to check if an element contains the next heading
    function containsNextHeading(element) {
      if (!nextHeading) return false
      return element === nextHeading || element.contains(nextHeading)
    }

    while (currentElement && !containsNextHeading(currentElement)) {
      // Skip nav, header, footer, aside, script, style
      if (
        !['NAV', 'HEADER', 'FOOTER', 'ASIDE', 'SCRIPT', 'STYLE'].includes(
          currentElement.tagName
        )
      ) {
        const text = getTextContent(currentElement)
        if (text) {
          content.push(text)
        }
      }
      currentElement = currentElement.nextElementSibling
    }

    const contentText = content.join(' ')
    // Only add if there's actual content
    if (contentText.trim()) {
      sections.push({
        url: headingUrl,
        title: title,
        content: contentText,
        pageTitle: id ? pageTitle : undefined,
      })
    }
  })

  return sections
}

async function crawlAndGenerateIndex() {
  console.log('🔍 Crawling local site to generate search index...\n')

  const baseDir = path.resolve(__dirname, '../src/content')
  const slugPaths = getSlugPaths(baseDir)
  const baseUrl = 'http://localhost:3000'

  console.log(`Found ${slugPaths.length} pages to crawl\n`)

  const allSections = []
  let successCount = 0
  let errorCount = 0

  for (const slugPath of slugPaths) {
    const url = slugPath === 'index' ? '/' : `/${slugPath}`
    const fullUrl = `${baseUrl}${url}`

    try {
      console.log(`Crawling: ${url}`)
      const html = await fetchPage(fullUrl)
      const sections = extractSectionsFromHtml(html, url)
      allSections.push(...sections)
      successCount++
    } catch (error) {
      console.error(`✗ ${url}: ${error.message}`)
      errorCount++
    }
  }

  // Write to file
  const outputPath = path.resolve(__dirname, '../public/search-index.json')
  fs.writeFileSync(outputPath, JSON.stringify(allSections, null, 2))

  console.log(`\n✅ Search index generated with ${allSections.length} entries`)
  console.log(`📄 Saved to: ${outputPath}`)
  console.log(`📊 Successfully crawled ${successCount} pages`)
  if (errorCount > 0) {
    console.log(`❌ Failed to crawl ${errorCount} pages`)
  }
}

crawlAndGenerateIndex()
