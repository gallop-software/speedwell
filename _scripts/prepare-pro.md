# Prepare Pro Script

**Tier:** Internal  
**File:** `_scripts/prepare-pro.mjs`

## Overview

The `prepare-pro.mjs` script prepares the speedwell-pro distribution by removing dev-only npm scripts and deleting dev-only script files that are only needed during template development.

## What It Does

1. **Removes dev-only npm scripts**: Removes catalog generation and preparation scripts from `package.json`
2. **Deletes dev-only script files**: Removes script files from `_scripts/` that end users don't need

## Usage

```bash
npm run prepare-pro
# or
node _scripts/prepare-pro.mjs
```

## Scripts Removed from package.json

The following npm scripts are removed:

- `blocks` - Generate blocks catalog
- `blocks:screenshots` - Generate block screenshots
- `blocks:sort` - Sort blocks in catalog
- `blocks:lite` - Convert pro blocks for lite version
- `prepare-lite` - Prepare lite distribution
- `prepare-pro` - This script (removes itself)
- `layouts` - Generate layouts catalog
- `layouts:screenshots` - Generate layout screenshots
- `layouts:sort` - Sort layouts in catalog

## Files Deleted from \_scripts/

The following files are deleted:

- `generate-blocks-catalog.mjs` - Blocks catalog generator
- `generate-blocks-catalog.md` - Blocks catalog documentation
- `prepare-lite.mjs` - Lite preparation script
- `prepare-lite.md` - Lite preparation documentation
- `generate-layouts-catalog.mjs` - Layouts catalog generator
- `generate-layouts-catalog.md` - Layouts catalog documentation
- `prepare-pro.mjs` - This script (deletes itself)
- `prepare-pro.md` - This documentation (deletes itself)

## Example Output

```
🚀 Preparing speedwell-pro distribution...

📦 Removing dev-only scripts from package.json...

  ✅ Removed script: blocks
  ✅ Removed script: blocks:screenshots
  ✅ Removed script: blocks:sort
  ✅ Removed script: prepare-lite
  ✅ Removed script: prepare-pro
  ✅ Removed script: layouts
  ✅ Removed script: layouts:screenshots
  ✅ Removed script: layouts:sort

  Removed 8 script(s) from package.json

🗑️  Deleting dev-only script files...

  ✅ Deleted generate-blocks-catalog.mjs
  ✅ Deleted generate-blocks-catalog.md
  ✅ Deleted prepare-lite.mjs
  ✅ Deleted prepare-lite.md
  ✅ Deleted generate-layouts-catalog.mjs
  ✅ Deleted generate-layouts-catalog.md
  ✅ Deleted prepare-pro.mjs
  ✅ Deleted prepare-pro.md

✨ speedwell-pro preparation complete!
```

## When It Runs

This script is automatically run by the GitHub Actions workflow when pushing to the `main` branch (pro distribution) and when preparing the lite distribution.

## Requirements

- Node.js with ES modules support
- Write access to `package.json` and `_scripts/` directory
