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
3. **Captures screenshots** - Takes screenshots of block previews from `BASE_URL/block/<slug>`, resizes to 1400px on the longest side, and saves to `public/blocks/<slug>.jpg`.
4. **Cleans up orphans** - Deletes `public/blocks/*.jpg` screenshots that no longer have a matching block file.

## Commands

### `npm run blocks`

**Mode:** Smart (default)

- Regenerates `_block-index.ts`
- Only captures screenshots for blocks that don't have images yet
- **Use this** for regular updates after adding/removing blocks

### `npm run blocks:screenshots`

**Mode:** Force

- Regenerates `_block-index.ts`
- Regenerates ALL screenshots (overwrites existing)
- **Use this** when block designs have changed or images appear corrupted

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

JPEG images sized to 1400px on longest side, mirroring the block slug path:

```
public/blocks/
├── before-after/about.jpg
├── layout-1/hero.jpg
└── ...
```

## Notes on Tiers

Block tiers (Free/Pro) are **not** stored here. A block's tier is inherited from its
layout/route. The list of Pro layout routes is hardcoded as `PRO_LAYOUTS` in
`prepare-lite.mjs`, which is the single source of truth used to swap Pro blocks for the
`ProBlock` placeholder in the lite distribution.

## Single-block mode

```bash
node _scripts/generate-blocks-catalog.mjs --block=layout-1/hero
```

Captures a screenshot for a single block only; skips index regeneration and orphan cleanup.

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
