# generate-blocks-catalog.mjs

Generate the demo block index and capture block preview screenshots.

**Tier:** Internal  
**File:** `_scripts/generate-blocks-catalog.mjs`

---

## Usage

```bash
# Standard: regenerate the block index and capture missing screenshots
npm run blocks

# Force regenerate all screenshots
npm run blocks:screenshots
```

## What It Does

1. **Scans block files** - Recursively finds every `.tsx` file in `_blocks/` directories under `src/app/`, deduplicating shared blocks by slug.
2. **Generates the block index** - Writes `src/app/(demo)/block/[[...slug]]/_block-index.ts`, a map of demo slugs to dynamic block imports consumed by the demo block-preview route (`generateStaticParams` + dynamic import).
3. **Captures screenshots (Pro blocks only)** - For blocks under a Pro layout route (`PRO_LAYOUTS`: `layout-1`–`layout-7`), takes screenshots of block previews from `BASE_URL/block/<slug>`, resizes to 1400px on the longest side, and saves to `public/blocks/<slug>.jpg`. Free blocks are never screenshotted.
4. **Cleans up orphans** - Deletes `public/blocks/*.jpg` screenshots that don't correspond to a current Pro block (including any leftover free-block screenshots).

## Commands

### `npm run blocks`

**Mode:** Smart (default)

- Regenerates `_block-index.ts` (all blocks)
- Only captures screenshots for Pro blocks that don't have images yet
- **Use this** for regular updates after adding/removing blocks

### `npm run blocks:screenshots`

**Mode:** Force

- Regenerates `_block-index.ts` (all blocks)
- Regenerates ALL Pro block screenshots (overwrites existing)
- **Use this** when Pro block designs have changed or images appear corrupted

## Output

### Block index (`src/app/(demo)/block/[[...slug]]/_block-index.ts`)

Auto-generated TypeScript mapping each demo slug to a dynamic import:

```typescript
export const blockImports: Record<string, () => Promise<{ default: ComponentType }>> = {
  'before-after/about': () => import('@/app/(default)/before-after/_blocks/about'),
  // ...
}

export const blockSlugs = Object.keys(blockImports)
```

### Screenshots (`public/blocks/`)

JPEG images sized to 1400px on longest side, mirroring the block slug path. Only Pro blocks
(`layout-1`–`layout-7`) are screenshotted:

```
public/blocks/
├── layout-1/hero.jpg
├── layout-2/cover.jpg
└── ...
```

## Notes on Tiers

A block's tier is inherited from its layout/route. The list of Pro layout routes is the
single source of truth in `PRO_LAYOUTS` (`prepare-lite.mjs`) and is mirrored as a `PRO_LAYOUTS`
constant in `generate-blocks-catalog.mjs` to scope screenshots to Pro blocks — **keep the two
lists in sync**. Free blocks are never screenshotted (they render inline; only Pro blocks use
the `ProBlock` placeholder backed by a CDN image).

## Single-block mode

```bash
node _scripts/generate-blocks-catalog.mjs --block=layout-1/hero
```

Captures a screenshot for a single block only; skips index regeneration and orphan cleanup.
The block must be a Pro block, or the script exits with an error.

## Prerequisites

- The block previews are captured from the deployed `BASE_URL` (`https://speedwell.gallop.software`)
- Puppeteer and Sharp installed (`npm install`)

## Troubleshooting

### Screenshots not capturing

- Confirm `BASE_URL` is reachable and block routes resolve at `/block/<slug>`
- Network idle timeout is 30s per page

### Missing blocks

- Ensure block files end in `.tsx` and live in a `_blocks/` directory under `src/app/`

---

[← Back to README](../README.md)
