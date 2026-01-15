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
- Components: `import { Heading, Paragraph, Label } from '@/components'`
- Hooks: `import CircleAnimationInit from '@/hooks/use-circle-animation'`
- Blocks: `import Hero1 from '@/blocks/hero-1'`
- Template: `import PageFooter from '@/template/page-footer'`

### Icons

- Use Iconify packages: `@iconify/icons-heroicons/`, `@iconify/icons-lucide/`
- Common icons: `arrow-right-20-solid`, `arrow-down-20-solid`, `play-solid`, `play-circle`
- Render with Icon component: `<Icon icon={playIcon} className="w-6 h-6" />`

## Available Components

### Typography

- `Heading` - props: `as` (h1-h6), `color`, `className`, `textAlign`, `margin`, `fontSize`, `fontWeight`, `id`
- `Subheading` - accent subheadings, props: `as`, `fontSize`, `color`, `margin`, `textAlign`
- `Paragraph` - props: `variant` ("large"), `color`, `className`, `textAlign`, `margin`, `fontSize`, `lineHeight`
- `Accent` - props: `size`, `color`, `margin`, `textAlign`, `className`
- `Label` - uppercase text for labels, props: `variant`, `fontSize`, `color`, `margin`, `textAlign`, `fontWeight`
- `Quote` - blockquotes, props: `variant`, `fontSize`, `color`, `margin`, `textAlign`, `fontStyle`
- `Chip` - badge/tag with icons, props: `iconBefore`, `iconAfter`, `fontSize`, `color`, `bgColor`, `margin`

### Interactive

- `Button` - props: `href`, `variant` ("primary", "outline"), `icon`, `iconPlacement`, `margin`
- `Buttons` - wrapper for button groups
- `ButtonPlay` - video play button variant
- `VideoPopup` - modal video player with Vimeo support
- `Icon` - Iconify icon wrapper
- `Accordion` - expandable content sections, props: `headingText`, `className`
- `CountUp` - animated number counting, props: `end`, `suffix`, `delay`, `duration`

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

## Hooks & Init Components

- All hooks go in `src/hooks/`
- Name files as `use-{hook-name}.tsx`
- `CircleAnimationInit` - client component that animates rotating text circles on scroll, props: `targetId`
- `SwiperSliderInit` - client component that initializes Swiper sliders, props: `swiperId`, `autoHeight`

## Creating New Blocks

1. Check `src/blocks/` for the highest numbered file of that type
2. Create new file with incremented number
3. Use PascalCase function name matching file name
4. Import components from `@/components` using destructured imports
5. Hardcode all content (no CMS data)
6. Use Tailwind for all styling
7. Use `Section`, `Columns`, `Column` for layout structure
8. Add `Image` components with `size="large"` for large images

## Gallop Lint Rules

This project uses `eslint-plugin-gallop` for architectural governance. Run `npm run lint` to check.

### `gallop/no-client-blocks`

Blocks should not use `'use client'`. Extract client-side logic into components in `src/components/`.

**Bad:**

```tsx
// src/blocks/hero-1.tsx
'use client'
import { useState } from 'react'
// ...
```

**Good:**

```tsx
// src/blocks/hero-1.tsx (server component)
import { MyClientFeature } from '@/components/my-client-feature'
// Use <MyClientFeature /> in JSX
```

### `gallop/no-container-in-section`

Don't use `Container` inside `Section` - it's redundant. Use `Section`'s `innerAlign` prop or a plain `div`.

**Bad:**

```tsx
<Section>
  <Container>
    <Heading>...</Heading>
  </Container>
</Section>
```

**Good:**

```tsx
<Section innerAlign="content">
  <Heading>...</Heading>
</Section>
```

### `gallop/prefer-component-props`

Use dedicated props instead of className for styling that components support.

**Bad:**

```tsx
<Heading className="text-center mb-6 text-accent">Title</Heading>
<Paragraph className="text-lg mb-4">Text</Paragraph>
```

**Good:**

```tsx
<Heading textAlign="text-center" margin="mb-6" color="text-accent">Title</Heading>
<Paragraph fontSize="text-lg" margin="mb-4">Text</Paragraph>
```

**Supported props by component:**

- `Heading`: `margin`, `color`, `textAlign`, `fontSize`, `fontWeight`
- `Paragraph`: `margin`, `color`, `textAlign`, `fontSize`, `lineHeight`
- `Accent`: `margin`, `color`, `textAlign`
- `Button`: `margin`
- `Label`: `margin`, `color`, `textAlign`, `fontSize`

## Post-Edit Verification

- After editing files, check for linter errors
- Fix lint errors before moving to the next task
- Run `npm run lint` to verify all rules pass

## Do NOT

- Use `classnames` package - use `clsx` instead
- Use inline styles for colors/backgrounds that need hover states
- Import components from other projects without adapting them
- Create documentation files unless explicitly requested
- Add `'use client'` unless the component uses hooks or event handlers
