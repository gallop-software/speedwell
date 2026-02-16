# Gallop Canon v1.0.0 - Copilot Instructions

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

### 002: Layout Hierarchy

No Container inside Section

- **ESLint Rule:** `gallop/no-container-in-section`
- **Category:** layout

### 003: Typography Components

Use Paragraph/Span, not raw tags

- **ESLint Rule:** `gallop/prefer-typography-components`
- **Category:** typography

### 004: Component Props

Use props over className for supported styles

- **ESLint Rule:** `gallop/prefer-component-props`
- **Category:** typography

### 006: Block Naming

{type}-{n}.tsx naming, PascalCase exports

- **ESLint Rule:** `gallop/block-naming-convention`
- **Category:** structure

### 007: Import Paths

@/ aliases, direct file imports

- **ESLint Rule:** `gallop/prefer-alias-imports`
- **Category:** structure

### 008: Tailwind Only

No inline styles in blocks, components allowed for dynamic values

- **ESLint Rule:** `gallop/no-inline-styles`
- **Category:** styling

### 009: Color Tokens

Use semantic color tokens

- **ESLint Rule:** `gallop/no-raw-colors`
- **Category:** styling

### 012: Icon System

Iconify with Icon component

- **ESLint Rule:** `gallop/no-inline-svg`
- **Category:** components

### 014: clsx Not classnames

Use clsx, never classnames package

- **ESLint Rule:** `gallop/no-classnames-package`
- **Category:** styling

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

## Documentation Patterns

These patterns are not enforced by ESLint but should be followed.

### 005: Page Structure

PageWrapper, generatePageMetadata pattern

### 010: Spacing System

Standard padding/margin values

### 011: Responsive Mobile-First

sm/md/lg/xl breakpoint usage

### 013: New Component Pattern

Props for margin/color/fontSize

### 015: No Inline Hover Styles

Tailwind for hover states

### 016: Client Extraction

Extract hooks to components, not blocks (see Pattern 001 for enforcement)

### 017: SEO Metadata

PageMetadata structure, structured data

## Component Quick Reference

- `Heading` - props: `as`, `color`, `margin`, `fontSize`, `fontWeight`, `textAlign` (h1/h4 default text-accent; h2/h3/h5/h6 default text-contrast)
- `Paragraph` - props: `color`, `margin`, `fontSize`, `lineHeight`, `textAlign`
- `Span` - props: `color`, `margin`, `fontSize` (Inline text, mb-0 default)
- `Label` - props: `color`, `margin`, `fontSize`, `fontWeight`, `textAlign`
- `Accent` - props: `color`, `margin`, `size`, `textAlign` (Has conditional text-shadow when color='text-body')
- `Quote` - props: `variant`, `color`, `margin`, `fontSize`, `fontWeight`, `textAlign`
- `Section` - props: `overlayColor` (Wraps content with Container. Default overlay bg-overlay/30)
- `Cover` - props: `overlayColor` (Full-height hero-style with image backgrounds)
- `Columns` - props: `cols`, `gap`, `align`
- `Column`
- `Button` - props: `href`, `variant`, `icon`, `iconPlacement`, `margin`, `dark` (dark prop flips light/dark variant class sets (render-time boolean, not CSS dark mode))
- `Icon` (Iconify icon wrapper. Always include sizing class (w-5 h-5))
- `Image` - props: `size` (Always use size prop ('small'|'medium'|'large'|'full'). Uses getStudioImage() from src/utils/studio-helpers.ts)

## Do NOT

- Use `'use client'` in blocks - extract to components
- Use raw `<p>`, `<span>`, or `<h1>`–`<h6>` - use Paragraph/Span/Heading components
- Use className for margin/color/fontSize when component has props
- Use Container inside Section - Section already provides containment
- Use `classnames` package - use `clsx` instead
- Use inline styles for hover states - use Tailwind classes
- Use native `IntersectionObserver` - use `react-intersection-observer` package
- Use inline `<svg>` in blocks - use the Icon component with Iconify icons
- Use deep relative imports (`../../`) - use `@/` alias imports
- Use gray-*, white, black, slate-* — always map to a semantic token
- Put text color in className when component has a color prop
- Manually construct image URLs when a _data/_studio.json metadata entry exists
- Manually edit files in _data/ (generated only)

## Post-Edit Verification

After editing files:
1. Run `npm run lint`
2. Run `npm run ts`
3. Fix any violations before committing

Note: Only lint files you edited, not the entire codebase.
