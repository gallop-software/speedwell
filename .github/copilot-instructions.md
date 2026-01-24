# Gallop Canon v1.0.0 - AI Rules

This file is auto-generated from @gallop.software/canon. Do not edit manually.
Regenerate with: npm run generate:ai-rules

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS v4
- clsx for conditional class names

## Enforced Patterns (ESLint)

These patterns are enforced by `@gallop.software/canon/eslint`. Violations will be flagged.

### 001: Server-First Blocks

Blocks must be server components

- **ESLint Rule:** `gallop/no-client-blocks`
- **Category:** rendering

**Bad:**

```tsx
// src/blocks/hero-1.tsx
'use client'
import { useState } from 'react'

export default function Hero1() {
  const [isOpen, setIsOpen] = useState(false)
  // ...
}
```

**Good:**

```tsx
// src/blocks/hero-1.tsx (server component)
import { InteractiveFeature } from '@/components/interactive-feature'

export default function Hero1() {
  return (
    <Section>
      <Heading>Welcome</Heading>
      <InteractiveFeature /> {/* Client logic extracted */}
    </Section>
  )
}
```

### 002: Layout Hierarchy

No Container inside Section

- **ESLint Rule:** `gallop/no-container-in-section`
- **Category:** layout

**Bad:**

```tsx
<Section>
  <Container>
    <Heading>Title</Heading>
    <Paragraph>Content here</Paragraph>
  </Container>
</Section>
```

**Good:**

```tsx
<Section>
  <Heading>Title</Heading>
  <Paragraph>Content here</Paragraph>
</Section>
```

### 003: Typography Components

Use Paragraph/Span, not raw tags

- **ESLint Rule:** `gallop/prefer-typography-components`
- **Category:** typography

**Bad:**

```tsx
<p className="text-sm text-gray-500 mb-4">Some descriptive text</p>
<span className="text-green-500 font-medium">+28%</span>
```

**Good:**

```tsx
<Paragraph fontSize="text-sm" color="text-gray-500">
  Some descriptive text
</Paragraph>
<Span color="text-green-500" fontWeight="font-medium">+28%</Span>
```

### 004: Component Props

Use props over className for supported styles

- **ESLint Rule:** `gallop/prefer-component-props`
- **Category:** typography

**Bad:**

```tsx
<Heading className="text-center mb-6 text-accent">Title</Heading>
<Paragraph className="text-lg mb-4">Text content</Paragraph>
<Label className="text-sm font-semibold">Category</Label>
<Image src="/photo.jpg" className="rounded-lg aspect-4/5" />
```

**Good:**

```tsx
<Heading textAlign="text-center" margin="mb-6" color="text-accent">
  Title
</Heading>
<Paragraph fontSize="text-lg" margin="mb-4">
  Text content
</Paragraph>
<Label fontSize="text-sm" fontWeight="font-semibold">
  Category
</Label>
<Image src="/photo.jpg" rounded="rounded-lg" aspect="aspect-4/5" />
```

### 006: Block Naming

{type}-{n}.tsx naming, PascalCase exports

- **ESLint Rule:** `gallop/block-naming-convention`
- **Category:** structure

**Bad:**

```
src/blocks/
├── Hero.tsx            ❌ No number
├── hero_1.tsx          ❌ Underscore instead of hyphen
├── HeroSection.tsx     ❌ Wrong naming pattern
├── cta-1.tsx           ❌ Abbreviation not in type list
```

**Good:**

```
src/blocks/
├── hero-1.tsx          → export default function Hero1()
├── hero-2.tsx          → export default function Hero2()
├── section-1.tsx       → export default function Section1()
├── call-to-action-1.tsx → export default function CallToAction1()
```

### 008: Tailwind Only

No inline styles in blocks, components allowed for dynamic values

- **ESLint Rule:** `gallop/no-inline-styles`
- **Category:** styling

**Bad:**

```tsx
// Inline styles
<div style={{ display: 'flex', padding: '24px', backgroundColor: 'white' }}>
  <Heading>Title</Heading>
</div>

// CSS-in-JS
const StyledDiv = styled.div`
  display: flex;
  padding: 24px;
`;
```

**Good:**

```tsx
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-lg">
  <Heading className="text-2xl">Title</Heading>
</div>
```

### 018: Layout Components

Use Grid/Columns, not raw div with grid

- **ESLint Rule:** `gallop/prefer-layout-components`
- **Category:** layout

### 019: Background Image Rounded

Background images must have rounded="rounded-none"

- **ESLint Rule:** `gallop/background-image-rounded`
- **Category:** components

### 020: No Arbitrary Colors

Use defined color tokens, not arbitrary color values

- **ESLint Rule:** `gallop/no-arbitrary-colors`
- **Category:** styling

### 021: Cross-Zone Import Boundaries

Enforce import boundaries between Canon zones

- **ESLint Rule:** `gallop/no-cross-zone-imports`
- **Category:** structure

### 024: React Intersection Observer

Use react-intersection-observer package, not native API

- **ESLint Rule:** `gallop/no-native-intersection-observer`
- **Category:** components

### 025: No Components in Blocks

Exported component functions must be in components folder; non-exported content components are allowed in blocks

- **ESLint Rule:** `gallop/no-component-in-blocks`
- **Category:** structure

### 026: List Components

Use List/Li, not raw ul/li tags

- **ESLint Rule:** `gallop/prefer-list-components`
- **Category:** components

### 027: Luxon for Dates

Use Luxon DateTime, not native JavaScript Date

- **ESLint Rule:** `gallop/no-native-date`
- **Category:** components

**Bad:**

```tsx
// Native Date uses user's local timezone
const today = new Date()
today.setHours(0, 0, 0, 0) // Still in user's timezone!

// This will be wrong for users in different timezones
const selectedDate = new Date(2026, 0, 19)
if (selectedDate < today) {
  console.log('This comparison is timezone-dependent!')
}
```

**Good:**

```tsx
import { DateTime } from 'luxon'

// Business timezone from config/props
const BUSINESS_TIMEZONE = 'America/Chicago'

// Get "today" in business timezone
const today = DateTime.now().setZone(BUSINESS_TIMEZONE).startOf('day')

// Check if user-selected date is valid
const selectedDate = DateTime.fromObject(
  { year: 2026, month: 1, day: 19 },
  { zone: BUSINESS_TIMEZONE }
)

if (selectedDate < today) {
  console.log('Cannot select a date in the past')
}
```

## Documentation Patterns

These patterns are not enforced by ESLint but should be followed.

### 005: Page Structure

PageWrapper, generatePageMetadata pattern

### 007: Import Paths

@/ aliases, direct file imports

### 009: Color Tokens

Use semantic color tokens

### 010: Spacing System

Standard padding/margin values

### 011: Responsive Mobile-First

sm/md/lg/xl breakpoint usage

### 012: Icon System

Iconify with Icon component

### 013: New Component Pattern

Props for margin/color/fontSize

### 014: clsx Not classnames

Use clsx, never classnames package

### 015: No Inline Hover Styles

Tailwind for hover states

### 016: Client Extraction

Extract hooks to components, not blocks (see Pattern 001 for enforcement)

### 017: SEO Metadata

PageMetadata structure, structured data

## Canon Guarantees

Following these patterns provides these guarantees:

- **SEO Stability** (SEO_STABLE): Patterns 001, 016, 017
- **Performance Baseline** (PERF_BASELINE): Patterns 001, 007, 010, 016
- **Maintainability** (MAINTAIN): Patterns 004, 005, 006, 007, 013
- **Design System Compliance** (DESIGN_SYSTEM): Patterns 003, 004, 009, 010, 011, 018, 019

## Component Quick Reference

### Typography
- `Heading` - props: `as`, `color`, `margin`, `fontSize`, `fontWeight`, `textAlign`
- `Paragraph` - props: `color`, `margin`, `fontSize`, `lineHeight`, `textAlign`
- `Span` - props: `color`, `margin`, `fontSize` (inline text, mb-0 default)
- `Label` - props: `color`, `margin`, `fontSize`, `fontWeight`, `textAlign`
- `Quote` - props: `variant`, `color`, `margin`, `fontSize`, `fontWeight`, `textAlign`

### Layout
- `Section` - semantic section wrapper
- `Columns` - grid layout, props: `cols`, `gap`, `align`
- `Column` - column child

### Interactive
- `Button` - props: `href`, `variant`, `icon`, `iconPlacement`, `margin`
- `Icon` - Iconify icon wrapper

## Do NOT

- Use `'use client'` in blocks - extract to components
- Use raw `<p>` or `<span>` - use Paragraph/Span components
- Use className for margin/color/fontSize when component has props
- Use Container inside Section - Section already provides containment
- Use `classnames` package - use `clsx` instead
- Use inline styles for hover states - use Tailwind classes
- Use native `IntersectionObserver` - use `react-intersection-observer` package

## File & Folder Authority

These rules govern what AI is allowed and forbidden to do when creating, moving, or modifying files and folders.

### Defined `/src` Structure

```
src/
├── app/          # Routes, layouts, metadata (Next.js App Router)
├── blocks/       # Page-level content sections
├── blog/         # Blog content (archive content type)
├── components/   # Reusable UI primitives
├── hooks/        # Custom React hooks
├── styles/       # CSS, Tailwind, fonts
├── template/     # Template-level components
├── tools/        # Utility tools
├── types/        # TypeScript types
├── utils/        # Utility functions
└── state.ts      # Global state
```

### App Router Structure

Routes must use Next.js route groups. At minimum, `(default)` must exist:

```
src/app/
├── (default)/        # Required - default layout group
│   ├── layout.tsx
│   └── {routes}/
├── (hero)/           # Optional - hero layout variant
├── api/              # API routes (exception - no grouping)
├── layout.tsx        # Root layout
└── metadata.tsx      # Shared metadata
```

- All page routes must be inside a route group (parentheses folder)
- Never create routes directly under `src/app/` (except `api/`, root files)
- New route groups are allowed freely when a new layout variant is needed

### File Structure Rules

**Blocks:**
- Always single files directly in `src/blocks/`
- Never create folders inside `src/blocks/`
- Example: `src/blocks/hero-1.tsx`, `src/blocks/testimonial-3.tsx`

**Components:**
- Simple components: Single file in `src/components/`
- Complex components: Folder with `index.tsx`
- Use folders when component has multiple sub-files

### DO - What AI IS Allowed To Do

- Create files only inside existing Canon-defined zones
- Place new files in the zone that matches their architectural role
- Follow existing folder conventions within a zone
- Reuse existing folders when possible
- Create new route groups in `src/app/` when new layouts are needed
- Create new archive content folders (like `blog/`, `portfolio/`) in `/src`
- Create dotfiles/directories at project root (`.github/`, `.cursor/`, etc.)
- Ask for confirmation if the correct zone is ambiguous

### DO NOT - What AI Is Forbidden To Do

- Create new top-level directories (except dotfiles)
- Create new folders in `/src` (except archive content or route groups)
- Place files outside Canon-defined zones
- Mix responsibilities across zones (components importing blocks, etc.)
- Reorganize or move folders without explicit instruction
- Invent new organizational conventions
- Create placeholder or speculative files
- Import from `_scripts/` or `_data/` in runtime code
- Manually edit files in `_data/` (generated only)

## Post-Edit Verification

After editing files:
1. Run `npm run lint` to check for errors
2. Fix any violations before committing

Note: Only lint files you edited, not the entire codebase.
