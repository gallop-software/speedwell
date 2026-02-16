# CLAUDE.md — Project-Specific Intelligence

> Auto-generated from Gallop Canon v1.0.0. Do not edit manually.
> Regenerate with: npm run generate:ai-rules

## Auto-Generated Files — Never Edit Manually

| File | Regenerate With | Triggered By |
|---|---|---|
| `_data/_blog.json` | `npm run blog` | Adding/editing posts in src/blog/ |
| `_data/_studio.json` | `Gallop Studio UI` | Never edit — image optimization metadata |
| `_data/_meta.json` | `npm run blocks` | Block catalog changes |
| `src/app/BLOCKS.md` | `npm run blocks` | Block additions (tier/order preserved) |
| `src/app/README.md` | `npm run layouts` | Layout additions |
| `public/search-index.json` | `npm run search` | Content changes |
| `public/blocks/*.jpg` | `npm run blocks:screenshots` | Block visual changes |
| `public/layouts/*.jpg` | `npm run layouts:screenshots` | Layout visual changes |
| `.cursorrules` | `npm run generate:ai-rules` | Canon rule changes |

## Build Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (auto-runs npm run blog) |
| `npm run blog` | Regenerate blog metadata |
| `npm run blocks` | Regenerate blocks catalog |
| `npm run search` | Regenerate search index |
| `npm run lint` | ESLint check (run after edits) |
| `npm run ts` | TypeScript check |
| `npm run check` | lint + ts combined |
| `npm run prettier` | Format code |

## Enforced Patterns (ESLint)

These patterns are enforced by `@gallop.software/canon/eslint`. Violations will be flagged.

- **001: Server-First Blocks** — `gallop/no-client-blocks` — Blocks must be server components
- **002: Layout Hierarchy** — `gallop/no-container-in-section` — No Container inside Section
- **003: Typography Components** — `gallop/prefer-typography-components` — Use Paragraph/Span, not raw tags
- **004: Component Props** — `gallop/prefer-component-props` — Use props over className for supported styles
- **006: Block Naming** — `gallop/block-naming-convention` — {type}-{n}.tsx naming, PascalCase exports
- **007: Import Paths** — `gallop/prefer-alias-imports` — @/ aliases, direct file imports
- **008: Tailwind Only** — `gallop/no-inline-styles` — No inline styles in blocks, components allowed for dynamic values
- **009: Color Tokens** — `gallop/no-raw-colors` — Use semantic color tokens
- **012: Icon System** — `gallop/no-inline-svg` — Iconify with Icon component
- **014: clsx Not classnames** — `gallop/no-classnames-package` — Use clsx, never classnames package
- **018: Layout Components** — `gallop/prefer-layout-components` — Use Grid/Columns, not raw div with grid
- **019: Background Image Rounded** — `gallop/background-image-rounded` — Background images must have rounded="rounded-none"
- **020: No Arbitrary Colors** — `gallop/no-arbitrary-colors` — Use defined color tokens, not arbitrary color values
- **021: Cross-Zone Import Boundaries** — `gallop/no-cross-zone-imports` — Enforce import boundaries between Canon zones
- **024: React Intersection Observer** — `gallop/no-native-intersection-observer` — Use react-intersection-observer package, not native API
- **025: No Components in Blocks** — `gallop/no-component-in-blocks` — Exported component functions must be in components folder; non-exported content components are allowed in blocks
- **026: List Components** — `gallop/prefer-list-components` — Use List/Li, not raw ul/li tags
- **027: Luxon for Dates** — `gallop/no-native-date` — Use Luxon DateTime, not native JavaScript Date

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

## Color Token System

All colors use semantic tokens defined in `src/styles/tailwind.css` `@theme`:

- **Surface**: `body`, `body-light`, `body-dark`, `body2`
- **Text**: `contrast`, `contrast-light`, `contrast-dark`
- **Overlay** (fixed — don't flip in dark mode): `overlay`, `overlay-text`
- **Accents**: `accent`, `accent-light`, `accent-dark`, `accent-contrast`, `accent2`, `accent2-light`, `accent2-dark`, `accent2-contrast`, `accent3`, `accent3-light`, `accent3-dark`, `accent3-contrast`, `accent4`, `accent4-light`, `accent4-dark`, `accent4-contrast`, `accent5`, `accent5-light`, `accent5-dark`, `accent5-contrast`, `accent6`, `accent6-light`, `accent6-dark`, `accent6-contrast`

**Never use**: `gray-*`, `white`, `black`, `slate-*` — always map to a semantic token.

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

## State Management

valtio store at `src/state.ts`. Read with `useSnapshot(state)`, write with `state.propName = value`.

Available state: `playVideo`, `offsetTop`, `windowHeight`, `lastOffsetTop`, `isScrolling`, `dialogOpen`, `scrollingDirection`, `lastScrollingDirection`, `lockScrollDirection`.

## Template-Specific Rules

- Use the color prop on typography components (Heading, Paragraph, Label, Span, Accent)
- Use props (fontSize, margin, fontWeight, textAlign) instead of className when a component prop exists
- Import icons from @iconify/icons-heroicons/ or @iconify/icons-lucide/
- Run npm run blog after editing blog posts in src/blog/

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
