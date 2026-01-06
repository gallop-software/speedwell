# Speedwell Project Conventions

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS v4
- clsx for conditional class names
- Swiper.js for sliders
- Headless UI for modals/dialogs
- Iconify for icons
- Luxon for date/time handling

## Page Files

Page files follow this pattern:

- Import `PageWrapper` from `@/components/page-wrapper`
- Import `generatePageMetadata, type PageMetadata` from `@/utils/page-helpers`
- Import blocks with default imports from `@/blocks/`
- Define a `Content()` function that renders blocks in fragments
- Define a `metadata` object with PageMetadata type
- Export `generateMetadata = () => generatePageMetadata(metadata)`
- Export default as `() => <PageWrapper metadata={metadata}><Content /></PageWrapper>`

Metadata properties: `title`, `description`, `keywords`, `slug`, `featuredImage`, `focusKeyword`, `readingTimeMinutes`, `publishDate`, `modifiedDate`, `alternates`, `authors`, `openGraph`, `twitter`, `structuredData`

## Block Components

### File Structure

- All block components go in `src/blocks/`
- Name files as `{block-name}.tsx` (lowercase, hyphenated)
- Block types use sequential numbering: `hero-1.tsx`, `section-1.tsx`, etc.
- Check existing files to find the next available number

### Block Types

- `hero-{n}` - Hero/banner sections
- `section-{n}` - General content sections
- `showcase-{n}` - Portfolio/gallery showcases
- `cover-{n}` - Full-width image/video covers
- `contact-{n}` - Contact forms and info
- `testimonial-{n}` - Testimonials
- `blog-{n}` - Blog-related sections
- `pricing-{n}` - Pricing tables
- `process-{n}` - Process/steps sections
- `about-{n}` - About sections

### Naming Conventions

- Export function name should be PascalCase matching the file name
- `hero-16.tsx` exports `function Hero16()`
- `business-info.tsx` exports `function BusinessInfo()`

### Component Guidelines

- Use `'use client'` directive ONLY when needed (hooks, interactivity)
- Most blocks do NOT need `'use client'`
- Import shared components from `@/components` using destructured imports
- Do not copy imports from other projects - adapt to this project

## Styling

### Tailwind CSS

- Use Tailwind classes exclusively, not inline styles
- Use `clsx` for conditional classes

### Common Patterns

- Max-width container: `mx-auto max-w-[1600px]`
- Section padding: `py-20 md:py-30`
- Horizontal padding: `px-6 lg:px-10`
- Responsive columns: `grid-cols-1 lg:grid-cols-2`

### Color Tokens

- Text: `text-body`, `text-contrast`, `text-accent`, `text-accent-contrast`, `text-white`
- Background: `bg-body`, `bg-body2`, `bg-contrast`, `bg-accent`, `bg-accent2`, `bg-accent3`
- Accent colors have contrast variants: `bg-accent` pairs with `text-accent-contrast`

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Common patterns: `flex-col xl:flex-row`, `h-[450px] sm:h-[600px] lg:h-[800px]`

## Imports

### Path Aliases

- Use `@/` path alias for src directory
- Components: `import { Heading, Paragraph } from '@/components'`
- Hooks: `import useCircleAnimation from '@/hooks/use-circle-animation'`
- Blocks: `import Hero1 from '@/blocks/hero-1'`
- Template: `import PageFooter from '@/template/page-footer'`

### Icons

- Use Iconify packages: `@iconify/icons-heroicons/`, `@iconify/icons-lucide/`
- Common icons: `arrow-right-20-solid`, `arrow-down-20-solid`, `play-solid`, `play-circle`
- Render with Icon component: `<Icon icon={playIcon} className="w-6 h-6" />`

## Available Components

### Typography

- `Heading` - props: `as` (h1-h6), `color`, `className`, `textAlign`, `margin`, `id`
- `Paragraph` - props: `variant` ("large"), `color`, `className`, `textAlign`, `margin`
- `Accent` - props: `size`, `color`, `margin`, `textAlign`, `className`

### Interactive

- `Button` - props: `href`, `variant` ("primary", "outline"), `icon`, `iconPlacement`
- `Buttons` - wrapper for button groups
- `ButtonPlay` - video play button variant
- `VideoPopup` - modal video player with Vimeo support
- `Icon` - Iconify icon wrapper

### Layout

- `Section` - semantic section wrapper with props: `className`
- `Columns` - grid layout, props: `cols`, `gap`, `className`, `reverseColumns`, `align`
- `Column` - column child, props: `className`
- `Cover` - background image/video sections, props: `imageSrc`, `imageAlt`
- `Container` - max-width wrapper
- `Gradient` - gradient background wrapper

### Media

- `Image` - props: `src`, `alt`, `className`, `rounded`, `size` ("large"), `lazy`
- `Video` - HTML5 video, props: `src`, `loop`, `muted`, `playsInline`, `className`
- `VimeoAutoPlayer` - auto-playing Vimeo embed, props: `videoId`, `id`, `className`

### Forms

- `Form` - form wrapper
- `FormInput` - props: `name`, `type`, `placeholder`, `label`, `required`, `hidden`
- `FormTextArea` - props: `name`, `placeholder`, `rows`, `label`, `required`
- `FormButton` - props: `label`

### Lists

- `List` - unordered list wrapper
- `Li` - list item

## Hooks

- All hooks go in `src/hooks/`
- Name files as `use-{hook-name}.tsx`
- `useCircleAnimation` - animates rotating text circles on scroll
- `SwiperSliderInit` - initializes Swiper sliders with props: `swiperId`, `autoHeight`

## Creating New Blocks

1. Check `src/blocks/` for the highest numbered file of that type
2. Create new file with incremented number
3. Use PascalCase function name matching file name
4. Import components from `@/components` using destructured imports
5. Hardcode all content (no CMS data)
6. Use Tailwind for all styling
7. Use `Section`, `Columns`, `Column` for layout structure
8. Add `Image` components with `size="large"` for large images

## Do NOT

- Use `classnames` package - use `clsx` instead
- Use inline styles for colors/backgrounds that need hover states
- Import components from other projects without adapting them
- Create documentation files unless explicitly requested
- Add `'use client'` unless the component uses hooks or event handlers
