# Scripts Reference

Complete guide to all npm scripts available in Speedwell.

[← Back to README](../README.md)

---

## Development & Build

### `npm run dev`

Start development server on http://localhost:3000

### `npm run build`

Build for production (runs blog metadata generation first)

### `npm run start`

Start production server

### `npm run lint`

Run ESLint

---

## Image Management

### `npm run images`

Process all images in `public/originals/`

**What it does:**

- Sanitizes filenames to URL-friendly format
- Generates responsive variants based on `.images` config
- Creates WebP versions for modern browsers
- Extracts EXIF metadata (orientation, dimensions, GPS)
- Updates `_data/_meta.json` with image data

**When to run:**

- After adding new images to `public/originals/`
- After modifying `.images` configuration
- When image metadata needs updating

See [Image Management Guide](./images.md) for details.

### `npm run images:reset`

Delete all processed images and regenerate from scratch

**Use case:** When you need a clean slate (changed config, corrupted files, etc.)

### `npm run featured-image`

Generate social preview image

**What it does:**

- Captures screenshot of homepage
- 2000x1000px at 2x scale (4000x2000 actual pixels)
- Saves as `public/speedwell.jpg`
- Uses homepage URL from package.json

**Configuration:**

- Override URL: `SCREENSHOT_URL=https://example.com npm run featured-image`
- Default: Uses `homepage` field from package.json

---

## Font Management

### `npm run fonts <folder> [fontTypes...]`

Compress and configure fonts

**Examples:**

```bash
# Compress only
npm run fonts Switzer

# Compress and update font config files
npm run fonts Switzer heading heading2 heading3
```

**How it works:**

1. Converts TTF fonts to WOFF2 (90%+ smaller file size)
2. Auto-detects font weights and styles from filenames
3. Updates font configuration files in `_data/_fonts/`
4. Supports variable and static fonts

**Font file naming:**

- `FontName-Regular.ttf` → weight: 400, style: normal
- `FontName-Bold.ttf` → weight: 700, style: normal
- `FontName-BoldItalic.ttf` → weight: 700, style: italic
- `FontName-Variable.ttf` → weight: 100-900

See [Font System Guide](./fonts.md) for details.

### `npm run fonts:use`

Apply configured fonts to components

---

## Content & SEO

### `npm run blog`

Generate blog post metadata index

**How it works:**

1. Scans all `.tsx` files in `src/content/post/`
2. Extracts metadata exports from each post:
   - title, description, date
   - categories, featuredImage, author
3. Sorts posts by date (newest first)
4. Generates `_data/_blog.json` with all post metadata

**When to run:**

- After creating new blog posts
- After updating post metadata
- Automatically runs before `npm run build`

**Blog post structure:**

```tsx
// src/content/post/my-post.tsx
export const metadata = {
  title: 'Post Title',
  description: 'Post description',
  date: '2025-12-03',
  categories: ['Category'],
  featuredImage: '/images/post-image.jpg',
  author: 'Author Name',
}
```

### `npm run search`

Build search index for FlexSearch

**How it works:**

1. Builds your site (`npm run build`)
2. Starts temporary server on port 3000
3. Crawls all pages from your content directory
4. Extracts text from `<main>` element (excluding nav, header, footer)
5. Splits content into sections based on headings (h1-h6)
6. Generates `public/search-index.json`
7. Stops the server

**When to run:**

- After adding new pages
- After updating page content
- Before deploying to production

**Note:** Requires port 3000 to be available.

### `npm run favicon`

Generate favicon variants from source image

**Requirements:**

- Place `favicon.png` in `public/originals/`
- Source should be square (recommended 512x512 or larger)

**Generates:**

- `src/app/favicon.ico` (48x48) - Classic ICO format
- `src/app/icon.png` (32x32) - Standard favicon
- `src/app/apple-icon.png` (180x180) - Apple touch icon

All files are automatically detected by Next.js metadata system.

---

## Deployment

### `npm run env`

Push environment variables to Vercel (current project)

### `npm run env:prod`

Push to production environment

### `npm run env:prev`

Push to preview environment

**Usage:** Requires `./push-env-to-vercel.sh` script and Vercel CLI installed.

---

## Troubleshooting

**Port 3000 already in use:**

```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

**Images not processing:**

- Check `.images` file exists in project root
- Verify images are in `public/originals/`
- Ensure filenames don't have special characters

**Search index fails:**

- Ensure site builds successfully first
- Check port 3000 is available
- Verify `src/content/` has TSX files

---

[← Back to README](../README.md)
