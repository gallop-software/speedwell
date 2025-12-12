# generate-featured-image.js

Generate social preview image by screenshotting the homepage.

**Tier:** Free  
**File:** `_scripts/generate-featured-image.js`

---

## Usage

```bash
npm run featured-image
```

## What It Does

1. Reads `homepage` URL from `package.json`
2. Launches headless browser (Puppeteer)
3. Captures screenshot at 2000x1000px (2x scale = 4000x2000 actual)
4. Saves as `public/{project-name}.jpg`

## Default Configuration

The script uses values from `package.json`:

```json
{
  "name": "speedwell",
  "homepage": "https://speedwell.gallop.software"
}
```

Output: `public/speedwell.jpg`

## Override URL

```bash
SCREENSHOT_URL=https://example.com npm run featured-image
```

Use this to:

- Screenshot a different page
- Use localhost during development
- Capture staging environment

## Dimensions

- **Viewport:** 2000x1000px (2:1 aspect ratio)
- **Device scale:** 2x (retina display)
- **Actual output:** 4000x2000px
- **Format:** JPEG (optimized for social media)

This size is optimized for:

- GitHub social preview
- Open Graph images
- Twitter Cards
- LinkedIn previews

## When to Run

- After deploying your site
- After making significant visual changes
- Before sharing project on social media
- When updating README or documentation

## Requirements

- **Puppeteer** must be installed (included in dependencies)
- **Target site** must be accessible
- Port 3000 should be available (if using localhost)

## Local Development

To screenshot localhost, start your dev server first:

```bash
# Terminal 1
npm run dev

# Terminal 2
SCREENSHOT_URL=http://localhost:3000 npm run featured-image
```

## Output Usage

The featured image is typically used in:

- `README.md` - Project showcase
- Social media previews (Open Graph, Twitter Cards)
- GitHub repository social image
- Documentation headers

Example README usage:

```markdown
![Speedwell Theme](./public/speedwell.jpg)
```

---

**See also:**

- [Puppeteer Documentation](https://pptr.dev/) - Browser automation
- [Open Graph Protocol](https://ogp.me/) - Social preview metadata
