# Prepare Lite Script

**Tier:** Internal  
**File:** `_scripts/prepare-lite.mjs`

## Overview

The `prepare-lite.mjs` script automatically converts Pro tier blocks to use the `ProBlock` component, removes pro-only hooks and API routes, and cleans up references to them in the layout file.

## What It Does

1. **Scans the README**: Reads `src/blocks/README.md` to identify blocks marked as `Tier: Pro`
2. **Identifies Pro Blocks**: Extracts block names and slugs from the README
3. **Converts Block Files**: Replaces the content of each Pro block file with a simple ProBlock component
4. **Prevents Duplicates**: Skips blocks that already use the ProBlock component
5. **Deletes Pro-Only Hooks**: Removes `flow-trace.tsx`, `flow-trace.md`, `use-iframe-height.tsx`, and `use-iframe-height.md` from `src/hooks/`
6. **Deletes Pro-Only API Routes**: Removes the `src/app/api/flow-trace/` directory
7. **Cleans Up Layout**: Removes imports and usage of deleted hooks from `src/app/layout.tsx`

## Usage

```bash
npm run prepare-lite
# or
node _scripts/prepare-lite.mjs
```

## Output Format

The script converts Pro blocks to this format:

```tsx
import { ProBlock } from '@/components/pro-block'

export default function Hero11() {
  return (
    <ProBlock
      blockSlug="hero-11"
      blockName="Hero 11"
    />
  )
}
```

## Features

- ✅ Automatic detection of Pro blocks from README
- ✅ Idempotent - safe to run multiple times
- ✅ Detailed logging with emoji indicators
- ✅ Summary statistics at the end
- ✅ Error handling and reporting
- ✅ Deletes pro-only hooks (FlowTrace, use-iframe-height) and their .md files
- ✅ Deletes pro-only API routes (flow-trace)
- ✅ Cleans up hook references from layout.tsx

## Example Output

```
🔍 Scanning blocks README for Pro blocks...

Found 2 Pro block(s):

  • Hero 11 (hero-11)
  • Hero 13 (hero-13)

🔄 Converting blocks...

✅ Converted hero-11
✅ Converted hero-13

📊 Block Conversion Summary:
  ✅ Converted: 2
  ⏭️  Skipped: 0
  ❌ Failed: 0
🗑️  Deleting pro-only hooks and API routes...

  ✅ Deleted src/hooks/flow-trace.tsx
  ✅ Deleted src/hooks/flow-trace.md
  ✅ Deleted src/hooks/use-iframe-height.tsx
  ✅ Deleted src/hooks/use-iframe-height.md
  ✅ Deleted src/app/api/flow-trace/

🔧 Removing hook references from layout.tsx...

  ✅ Updated layout.tsx - removed hook references

✨ Lite conversion complete!
```

## README Format

The script expects the README to follow this format:

```markdown
#### Hero 11

<img src="../../public/blocks/hero-11.jpg" alt="Hero 11" width="350">

**Slug:** `hero-11`  
**Tier:** Pro
```

## Requirements

- Node.js with ES modules support
- `src/blocks/README.md` with proper formatting
- Write access to `src/blocks/`, `src/hooks/`, `src/app/api/`, and `src/app/` directories

## Related Components

- `src/components/pro-block.tsx` - The ProBlock component used for Pro tier blocks
- `src/blocks/README.md` - Source of truth for block tiers
- `src/hooks/flow-trace.tsx` - FlowTrace hook (deleted by this script)
- `src/hooks/use-iframe-height.tsx` - IframeHeight hook (deleted by this script)
- `src/app/api/flow-trace/` - FlowTrace API route (deleted by this script)
