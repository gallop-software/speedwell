# Speedwell

![Speedwell Theme](./public/speedwell.jpg)

**A Next.js template for small businesses featuring high-quality feminine design.** Build and deploy a professional small business website with speed and get highly ranked on Google. Manage content and images with AI using Gallop software. No CMS required.

**🌐 Demo:** [speedwell.gallop.software](https://speedwell.gallop.software)

**📦 Repository:** [github.com/gallop-software/speedwell](https://github.com/gallop-software/speedwell)

---

## About Gallop Templates

Speedwell is part of the [Gallop](https://gallop.software) template ecosystem, designed specifically to work seamlessly with AI assistants like GitHub Copilot, Claude, and ChatGPT. Built with an opinionated codebase optimized for AI efficiency, Gallop templates enable you to:

- **Build websites with AI** - Let AI do the technical heavy lifting while you provide instructions
- **Pixel-perfect design** - TailwindCSS integration for rapid development without leaving component files
- **Automate workflows** - AI-powered scripts for sitewide SEO improvements, image regeneration, and content updates
- **Get found online** - Battle-tested SEO foundation with structured data for search engines and AI models
- **Deploy instantly** - Next.js architecture on Vercel for cheap, fast hosting

Gallop templates are trusted by professionals achieving #1 Google rankings in competitive search terms like "dallas architects," "lubbock attorneys," and "birth center."

---

## Features

- 🚀 **Next.js 15.5** with App Router
- ⚛️ **React 19** for cutting-edge performance
- 🎨 **Tailwind CSS 4.1** for pixel-perfect design
- 📝 **TSX-powered content** - No CMS required
- 🖼️ **Intelligent image processing** with responsive variants
- 🔍 **Built-in search** powered by FlexSearch
- 📱 **Fully responsive** and mobile-optimized
- ⚡ **Lightning-fast** performance
- 🎭 **Framer Motion** animations
- 🎯 **SEO-optimized** with structured data
- 🤖 **AI-friendly** codebase structure
- 📊 **Vercel Analytics** integration

---

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
speedwell/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [[...slug]]/       # Dynamic catch-all routes
│   │   ├── api/               # API routes
│   │   ├── block/             # Block preview routes
│   │   ├── category/          # Category pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── metadata.tsx       # Site metadata
│   │   └── not-found.tsx      # 404 page
│   ├── blocks/                # Reusable content blocks
│   │   ├── hero-*.tsx         # Hero sections
│   │   ├── section-*.tsx      # Content sections
│   │   ├── call-to-action-*.tsx
│   │   ├── contact-*.tsx
│   │   └── ...
│   ├── components/            # React components
│   │   ├── navbar/
│   │   ├── footer/
│   │   └── ui/
│   ├── content/              # Page content (TSX files)
│   ├── hooks/                # Custom React hooks
│   ├── styles/               # Global styles & fonts
│   │   ├── fonts/           # Font files & management
│   │   └── globals.css
│   ├── template/             # Page templates
│   ├── tools/                # Utility tools
│   ├── types/                # TypeScript types
│   └── utils/                # Helper functions
├── public/
│   ├── originals/            # Source images (not deployed)
│   ├── images/               # Processed images
│   ├── videos/               # Video assets
│   └── speedwell.jpg         # Featured image
├── _data/                    # Generated metadata
│   ├── _meta.json           # Image metadata
│   └── _fonts/              # Font configurations
├── _scripts/                 # Automation scripts
│   ├── process-images.js
│   ├── generate-blog-metadata.mjs
│   ├── generate-favicon.js
│   ├── generate-featured-image.js
│   └── generate-search.sh
└── _docs/                    # Documentation
```

---

## Available Scripts

### Development & Build

- **`npm run dev`** - Start development server on http://localhost:3000
- **`npm run build`** - Build for production (runs blog metadata generation first)
- **`npm run start`** - Start production server
- **`npm run lint`** - Run ESLint

### Image Management

- **`npm run images`** - Process all images in `public/originals/`
  - Sanitizes filenames to URL-friendly format
  - Generates responsive variants (1920w, 1280w, 640w, 320w)
  - Creates WebP versions for modern browsers
  - Extracts EXIF metadata (orientation, dimensions, GPS)
  - Updates `_data/_meta.json` with image data

- **`npm run images:reset`** - Delete all processed images and regenerate from scratch

- **`npm run featured-image`** - Generate social preview image
  - Captures screenshot of homepage
  - 2000x1000px at 2x scale (4000x2000 actual)
  - Saves as `public/speedwell.jpg`
  - Uses homepage URL from package.json

### Font Management

- **`npm run fonts <folder> [fontTypes...]`** - Compress and configure fonts

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

- **`npm run fonts:use`** - Apply configured fonts to components

### Content & SEO

- **`npm run blog`** - Generate blog post metadata
- **`npm run search`** - Build search index for FlexSearch
- **`npm run favicon`** - Generate favicon variants

### Deployment

- **`npm run env`** - Push environment variables to Vercel
- **`npm run env:prod`** - Push to production environment
- **`npm run env:prev`** - Push to preview environment

---

## Image Management System

### How It Works

Speedwell includes an intelligent image processing system that automates optimization and metadata extraction:

1. **Place original images** in `public/originals/` (any folder structure)
2. **Run `npm run images`**
3. **Images are processed:**
   - Filenames sanitized (spaces → dashes, lowercase, URL-safe)
   - Multiple responsive sizes generated (1920w, 1280w, 640w, 320w)
   - WebP versions created for modern browsers
   - Orientation detected (portrait, landscape, square)
   - EXIF data extracted (GPS, dimensions, orientation)
4. **Metadata saved** to `_data/_meta.json`
5. **Use in code:**

   ```tsx
   import { getImage } from '@/utils/image'

   const image = getImage('portfolio/project-hero.jpg')
   // Returns: { src, srcset, alt, width, height, orientation, ... }
   ```

### Image Configuration

Create a `.images` file in your project root to customize processing:

```json
{
  "widths": [1920, 1280, 640, 320],
  "formats": ["webp", "jpg"],
  "quality": 85
}
```

### Responsive Images

The system automatically generates srcset attributes:

```tsx
<img
  src="/images/project.jpg"
  srcSet="/images/project-320w.webp 320w,
          /images/project-640w.webp 640w,
          /images/project-1280w.webp 1280w,
          /images/project-1920w.webp 1920w"
  sizes="(max-width: 640px) 100vw, 50vw"
/>
```

---

## Font System

### Adding Custom Fonts

1. **Place TTF files** in `src/styles/fonts/YourFont/`
2. **Run compression:**
   ```bash
   npm run fonts YourFont heading
   ```
3. **Font is automatically:**
   - Converted to WOFF2 (smaller, faster)
   - Weight/style detected from filename
   - Configuration updated in `_data/_fonts/_heading.tsx`

### Using Fonts in Components

Fonts are configured in `_data/_fonts/`:

- `_heading.tsx` - Main headings (h1)
- `_heading2.tsx` - Subheadings (h2, h3)
- `_heading3.tsx` - Small headings (h4-h6)
- `_body.tsx` - Body text
- `_accent.tsx` - Accent/special text

Each font file exports font configurations that Next.js loads automatically.

---

## Key Dependencies

### Core Framework

- **next** (15.5.3) - React framework with App Router
- **react** (19) - UI library
- **react-dom** (19.2.0) - React DOM rendering

### Styling & Animation

- **tailwindcss** (4.1.5) - Utility-first CSS
- **framer-motion** (12.9.4) - Animation library
- **clsx** (2.1.1) - Conditional classnames

### Content & Markdown

- **@markdoc/markdoc** (0.5.4) - Markdown processor
- **@markdoc/next.js** (0.5.0) - Next.js integration

### Search

- **flexsearch** (0.8.212) - Fast full-text search
- **@algolia/autocomplete-core** (1.19.4) - Search UI

### UI Components

- **@headlessui/react** (2.2.2) - Unstyled components
- **swiper** (12.0.1) - Touch slider
- **yet-another-react-lightbox** (3.25.0) - Image lightbox

### Icons & Media

- **@iconify/icons-heroicons** - Icon library
- **@vimeo/player** (2.27.0) - Vimeo embed

### Utilities

- **dayjs** (1.11.13) - Date formatting
- **@sindresorhus/slugify** (3.0.0) - URL slugs
- **valtio** (2.1.7) - State management

### Build Tools

- **sharp** (0.34.4) - Image processing
- **puppeteer** (23.9.0) - Browser automation
- **ttf2woff2** (8.0.0) - Font conversion
- **typescript** (5) - Type safety

### Analytics & SEO

- **@vercel/analytics** (1.5.0) - Web analytics
- **feed** (4.2.2) - RSS feed generation

---

## Content Management

Speedwell uses **TSX files for content** instead of a traditional CMS:

### Benefits

- ✅ **Version control** - Track all content changes in Git
- ✅ **Type safety** - TypeScript catches errors before deployment
- ✅ **AI-friendly** - AI assistants can directly edit content
- ✅ **Component-based** - Reuse blocks across pages
- ✅ **No database** - Faster, cheaper, more secure
- ✅ **Preview instantly** - See changes in milliseconds

### Editing Content

Content lives in `src/content/`. Each page is a TSX file:

```tsx
// src/content/home.tsx
import Hero1 from '@/blocks/hero-1'
import Section3 from '@/blocks/section-3'

export default function HomePage() {
  return (
    <>
      <Hero1
        title="Welcome to Our Business"
        subtitle="We deliver excellence"
      />
      <Section3
        heading="Our Services"
        items={services}
      />
    </>
  )
}
```

### Creating New Blocks

See `_docs/block-extraction-workflow.md` for the complete workflow.

---

## SEO & Performance

### Built-in SEO Features

- ✅ Semantic HTML structure
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Automatic sitemap generation
- ✅ RSS feed support
- ✅ Optimized images with lazy loading
- ✅ Fast page loads (<1s)

### Metadata Configuration

Update `src/app/metadata.tsx`:

```tsx
export const metadata = {
  title: 'Your Business Name',
  description: 'Your business description',
  openGraph: {
    images: ['/speedwell.jpg'],
  },
}
```

---

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gallop-software/speedwell)

Or manually:

```bash
npm run build
vercel --prod
```

### Environment Variables

Set these in your Vercel dashboard or `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Support & Community

- **Documentation:** [gallop.software](https://gallop.software)
- **Issues:** [GitHub Issues](https://github.com/gallop-software/speedwell/issues)
- **Slack:** [Join Community](https://join.slack.com/t/gallop-software/shared_invite/zt-358q3rdrp-H6kKvKzpR2qgB5xJviAOcw)
- **Professional Services:** [webplant.media](https://webplant.media)

---

## License

MIT License - see [LICENSE](./LICENSE) for details

---

## Credits

**Author:** [Gallop](https://gallop.software)

**Contributors:**

- [Chris Baldelomar](https://github.com/webplantmedia)
- [Niel Wostan](https://github.com/NielWostan)

Built with ❤️ by the team at [Web Plant Media](https://webplant.media)

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Gallop Templates](https://gallop.software)
- [React Documentation](https://react.dev)
