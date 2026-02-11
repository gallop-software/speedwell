# CLAUDE.md — Project-Specific Intelligence

> Complements `.cursorrules` (ESLint-enforced patterns). This covers operational knowledge that isn't linted.

## Auto-Generated Files — Never Edit Manually

| File | Regenerate With | Triggered By |
|---|---|---|
| `_data/_blog.json` | `npm run blog` | Adding/editing posts in `src/blog/` |
| `_data/_studio.json` | Gallop Studio UI | Never edit — image optimization metadata |
| `_data/_meta.json` | `npm run blocks` | Block catalog changes |
| `src/blocks/README.md` | `npm run blocks` | Block additions (tier/order preserved) |
| `src/app/README.md` | `npm run layouts` | Layout additions |
| `public/search-index.json` | `npm run search` | Content changes |
| `public/blocks/*.jpg` | `npm run blocks:screenshots` | Block visual changes |
| `public/layouts/*.jpg` | `npm run layouts:screenshots` | Layout visual changes |
| `.cursorrules` | `npm run generate:ai-rules` | Canon rule changes |

## Blog Post Workflow

1. Edit the `.tsx` file in `src/blog/`
2. Run `npm run blog` to regenerate `_data/_blog.json`
3. Metadata is extracted from `export const metadata = { ... }` and `const TITLE = '...'`
4. `npm run build` runs `npm run blog` automatically

## Color Token System

All colors use semantic tokens defined in `src/styles/tailwind.css` `@theme`:

- **Surface**: `body`, `body-light`, `body-dark`, `body2`
- **Text**: `contrast`, `contrast-light`, `contrast-dark`
- **Overlay** (fixed — don't flip in dark mode): `overlay`, `overlay-text`
- **Accents 1–6**: each has `accent`, `accent-light`, `accent-dark`, `accent-contrast` (e.g. `accent2`, `accent2-light`, etc.)

### When to use which

| Scenario | Token |
|---|---|
| Text over image/video overlays | `text-overlay-text` |
| Image/video dimming scrims | `bg-overlay/30` |
| Text on solid backgrounds that flip | `text-body` |
| Text on accent-colored backgrounds | `text-accent-contrast` (or `accent2-contrast`, etc.) |

**Never use**: `gray-*`, `white`, `black`, `slate-*` — always map to a semantic token.

**Exceptions** (keep hardcoded): External brand colors (Spotify `#1DB954`, Discord `#5865F2`, YouTube `#FF0000`, etc.), button inset shadow hex values (`#ffffff4d`, `#00000040`).

## Component Color Props vs className

Typography components (`Heading`, `Paragraph`, `Label`, `Span`, `Accent`) accept a `color` prop. **Always use the `color` prop** — don't put text color in `className`.

The `Accent` component has conditional `text-shadow` logic tied to the `color` prop value (adds shadow when `color="text-body"`). Setting color via `className` bypasses this.

```tsx
// WRONG
<Paragraph className="text-contrast-light">Muted text</Paragraph>

// RIGHT
<Paragraph color="text-contrast-light">Muted text</Paragraph>
```

Same applies to `fontSize`, `margin`, `fontWeight`, `textAlign` — use the prop when one exists.

## Component Quick Reference

**Heading defaults by level** (when no `color` prop is passed):
- h1, h4 → default `text-accent`
- h2, h3, h5, h6 → default `text-contrast`

**Button `dark` prop**: Flips between light/dark variant class sets. NOT CSS dark mode — it's a render-time boolean. Pass `dark={true}` when button sits on a dark background.

**Image component**: Always use the `size` prop (`'small' | 'medium' | 'large' | 'full'`). Uses `getStudioImage()` from `src/utils/studio-helpers.ts` to resolve optimized URLs and dimensions from `_data/_studio.json`. Never manually construct image URLs when a metadata entry exists.

**Section vs Cover**: `Section` wraps content with a Container. `Cover` is for full-height hero-style layouts with image backgrounds. Both accept `overlayColor` — default overlay is `bg-overlay/30`.

## Build Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (auto-runs `npm run blog`) |
| `npm run blog` | Regenerate blog metadata |
| `npm run blocks` | Regenerate blocks catalog |
| `npm run search` | Regenerate search index |
| `npm run lint` | ESLint check (run after edits) |
| `npm run ts` | TypeScript check |
| `npm run check` | lint + ts combined |
| `npm run prettier` | Format code |

## State Management

Valtio store at `src/state.ts`. Read with `useSnapshot(state)`, write with direct mutation (`state.playVideo = true`).

Available state: `playVideo`, `offsetTop`, `windowHeight`, `lastOffsetTop`, `isScrolling`, `dialogOpen`, `scrollingDirection`, `lastScrollingDirection`, `lockScrollDirection`.

## Icons

Import from `@iconify/icons-heroicons/` or `@iconify/icons-lucide/`, render with `<Icon>` component. Always include sizing class (e.g. `className="w-5 h-5"`).
