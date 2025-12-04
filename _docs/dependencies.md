# Dependencies

Complete reference of all npm packages used in Speedwell.

[← Back to README](../README.md)

---

## Core Framework

### next (15.5.3)

React framework with App Router, server components, and optimizations.

**Why:** Industry-standard for production React apps, excellent performance, built-in optimizations.

**Usage:**

```tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
```

### react (19)

UI library for building component-based interfaces.

**Why:** Latest version with improved performance and new features.

### react-dom (19.2.0)

React rendering for web browsers.

**Why:** Required for React applications.

---

## Styling & Animation

### tailwindcss (4.1.5)

Utility-first CSS framework.

**Why:** Rapid development, pixel-perfect design, small bundle size.

**Usage:**

```tsx
<div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg">
  Content
</div>
```

### framer-motion (12.9.4)

Animation library for React.

**Why:** Declarative animations, gesture support, production-ready.

**Usage:**

```tsx
import { motion } from 'framer-motion'

;<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### clsx (2.1.1)

Utility for constructing className strings.

**Why:** Cleaner conditional classes, tiny size (228 bytes).

**Usage:**

```tsx
<div className={clsx(
  'base-class',
  isActive && 'active-class',
  { 'conditional': condition }
)}>
```

---

## Content & Markdown

### @markdoc/markdoc (0.5.4)

Markdown processor with custom components.

**Why:** Powerful, extensible, component support.

### @markdoc/next.js (0.5.0)

Next.js integration for Markdoc.

**Why:** Seamless markdown rendering in Next.js.

---

## Search

### flexsearch (0.8.212)

Fast full-text search library.

**Why:** Zero-configuration, incredibly fast, small size, works client-side.

**Usage:**

```tsx
import { Index } from 'flexsearch'

const index = new Index()
index.add(1, 'Content to search')
const results = index.search('search query')
```

### @algolia/autocomplete-core (1.19.4)

Search autocomplete UI library.

**Why:** Accessible, keyboard navigation, highly customizable.

---

## UI Components

### @headlessui/react (2.2.2)

Unstyled, accessible UI components.

**Why:** Accessibility built-in, full control over styling, keyboard navigation.

**Components:**

- Disclosure (accordions)
- Menu (dropdowns)
- Dialog (modals)
- Transition (animations)

**Usage:**

```tsx
import { Menu } from '@headlessui/react'

;<Menu>
  <Menu.Button>Options</Menu.Button>
  <Menu.Items>
    <Menu.Item>{({ active }) => <a>Item</a>}</Menu.Item>
  </Menu.Items>
</Menu>
```

### swiper (12.0.1)

Touch slider/carousel library.

**Why:** Mobile-first, performant, feature-rich.

**Usage:**

```tsx
import { Swiper, SwiperSlide } from 'swiper/react'

;<Swiper
  spaceBetween={50}
  slidesPerView={3}
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>
```

### yet-another-react-lightbox (3.25.0)

Image lightbox/gallery.

**Why:** Accessible, keyboard support, touch gestures, customizable.

---

## Icons & Media

### @iconify/icons-heroicons (1.2.9)

### @iconify/icons-lucide (1.2.135)

### @iconify/icons-mdi (1.2.48)

Icon collections from Iconify.

**Why:** Huge icon library, tree-shakeable, consistent API.

**Usage:**

```tsx
import { Icon } from '@iconify/react'
import homeIcon from '@iconify/icons-heroicons/home'

;<Icon icon={homeIcon} />
```

### @vimeo/player (2.27.0)

Vimeo embed player.

**Why:** Official SDK, full API access, customizable.

---

## Utilities

### dayjs (1.11.13)

Date manipulation library.

**Why:** Lightweight alternative to Moment.js (2KB vs 67KB).

**Usage:**

```tsx
import dayjs from 'dayjs'

const formatted = dayjs('2025-12-03').format('MMMM D, YYYY')
// "December 3, 2025"
```

### @sindresorhus/slugify (3.0.0)

Convert strings to URL-friendly slugs.

**Why:** Handles unicode, configurable, well-maintained.

**Usage:**

```tsx
import slugify from '@sindresorhus/slugify'

slugify('Hello World!') // 'hello-world'
```

### valtio (2.1.7)

Proxy-based state management.

**Why:** Simple API, minimal boilerplate, automatic optimization.

**Usage:**

```tsx
import { proxy, useSnapshot } from 'valtio'

const state = proxy({ count: 0 })

function Counter() {
  const snap = useSnapshot(state)
  return <button onClick={() => state.count++}>{snap.count}</button>
}
```

### react-highlight-words (0.21.0)

Highlight text matches in search results.

**Why:** Essential for search functionality.

### react-intersection-observer (9.16.0)

Detect when elements enter viewport.

**Why:** Lazy loading, scroll animations, infinite scroll.

**Usage:**

```tsx
import { useInView } from 'react-intersection-observer'

const { ref, inView } = useInView()
<div ref={ref}>{inView ? 'Visible' : 'Hidden'}</div>
```

### react-use-measure (2.1.7)

Measure component dimensions.

**Why:** Responsive components, dynamic layouts.

---

## Build Tools

### sharp (0.34.4)

High-performance image processing.

**Why:** Fast, supports all formats, used by Next.js.

**Usage in scripts:**

```javascript
const sharp = require('sharp')

await sharp('input.jpg')
  .resize(800, 600)
  .webp({ quality: 80 })
  .toFile('output.webp')
```

### puppeteer (23.9.0)

Headless browser automation.

**Why:** Screenshot generation, testing, web scraping.

**Used in:** `npm run featured-image`

### ttf2woff2 (8.0.0)

Convert TTF fonts to WOFF2.

**Why:** Smaller font files (90% reduction), modern format.

**Used in:** `npm run fonts`

### typescript (5)

JavaScript with static typing.

**Why:** Catches errors early, better tooling, improved DX.

---

## Analytics & SEO

### @vercel/analytics (1.5.0)

Web analytics for Vercel deployments.

**Why:** Privacy-focused, zero-config, free tier.

**Usage:**

```tsx
import { Analytics } from '@vercel/analytics/react'

;<Analytics />
```

### feed (4.2.2)

RSS/Atom feed generator.

**Why:** SEO, content syndication, blog subscriptions.

---

## Development Dependencies

### @tailwindcss/postcss (4.1.5)

PostCSS plugin for Tailwind CSS.

**Why:** Required for Tailwind v4.

### eslint (9)

JavaScript linter.

**Why:** Code quality, consistency, catch errors.

### eslint-config-next (15.5.3)

ESLint configuration for Next.js.

**Why:** Best practices for Next.js apps.

### prettier (3.5.3)

Code formatter.

**Why:** Consistent formatting, automated styling.

### prettier-plugin-organize-imports (4.1.0)

Auto-organize import statements.

**Why:** Clean imports, consistent ordering.

### prettier-plugin-tailwindcss (0.6.11)

Sort Tailwind classes automatically.

**Why:** Consistent class ordering, easier to read.

### jsdom (27.0.0)

JavaScript implementation of web standards.

**Why:** Used in search indexing script.

### csv-writer (1.6.0)

Write data to CSV files.

**Why:** Data export, reporting.

### xml2js (0.6.2)

XML parser and builder.

**Why:** Sitemap generation, RSS feeds.

---

## Type Definitions

### @types/node (22)

TypeScript types for Node.js.

### @types/react (19)

TypeScript types for React.

### @types/react-dom (19)

TypeScript types for React DOM.

### @types/react-highlight-words (0.20.0)

TypeScript types for react-highlight-words.

### @types/vimeo\_\_player (2.18.3)

TypeScript types for Vimeo player.

**Why:** Full TypeScript support, autocomplete, error checking.

---

## Package Management

### Why these packages?

All packages in Speedwell are:

- ✅ **Actively maintained** - Regular updates
- ✅ **Production-tested** - Used by major sites
- ✅ **Well-documented** - Good docs and examples
- ✅ **Performance-focused** - Optimized bundle size
- ✅ **TypeScript support** - Full type definitions

### Bundle Size Impact

Packages are tree-shakeable and only include what you use:

- **Core (Next.js + React):** ~90KB
- **Tailwind CSS:** ~10KB (after purge)
- **Framer Motion:** ~30KB (lazy-loaded)
- **Icons:** Only icons you import
- **Total (average):** ~150KB for typical page

---

## Updating Dependencies

### Check for updates

```bash
npm outdated
```

### Update all packages

```bash
npm update
```

### Update specific package

```bash
npm install package-name@latest
```

### Major version updates

```bash
npm install package-name@next
```

**Always test after updating!**

---

[← Back to README](../README.md)
