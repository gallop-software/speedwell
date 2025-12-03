const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

async function generateFeaturedImage() {
  // Read package.json to get name and homepage
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8')
  )
  const projectName = packageJson.name || 'featured-image'
  const defaultUrl = packageJson.homepage || 'http://localhost:3000'

  const outputDir = path.join(process.cwd(), 'public')
  const outputPath = path.join(outputDir, `${projectName}.jpg`)

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  console.log('Launching browser...')
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()

    // Set viewport to 2000x1000 (2:1 aspect ratio for GitHub social preview)
    await page.setViewport({
      width: 2000,
      height: 1000,
      deviceScaleFactor: 2, // Retina display quality
    })

    console.log('Navigating to homepage...')
    // Use homepage from package.json by default, or override with SCREENSHOT_URL
    const url = process.env.SCREENSHOT_URL || defaultUrl

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    })

    // Wait a bit for animations/fonts to load
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Taking screenshot...')
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 90,
    })

    console.log(`✓ Featured image saved to: ${outputPath}`)
    console.log('You can now reference this in your README.md')
  } catch (error) {
    console.error('Error generating featured image:', error.message)
    console.error('\nMake sure:')
    console.error('1. Your dev server is running (npm run dev)')
    console.error(
      '2. Or set SCREENSHOT_URL environment variable to your production URL'
    )
    process.exit(1)
  } finally {
    await browser.close()
  }
}

generateFeaturedImage()
