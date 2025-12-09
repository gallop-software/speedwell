# Convert Pro Blocks Script

## Overview

The `convert-pro-blocks.mjs` script automatically converts Pro tier blocks to use the `ProBlock` component, removing their implementation details and replacing them with a standardized Pro block placeholder.

## What It Does

1. **Scans the README**: Reads `src/blocks/README.md` to identify blocks marked as `Tier: Pro`
2. **Identifies Pro Blocks**: Extracts block names and slugs from the README
3. **Converts Block Files**: Replaces the content of each Pro block file with a simple ProBlock component
4. **Prevents Duplicates**: Skips blocks that already use the ProBlock component

## Usage

```bash
node _scripts/convert-pro-blocks.mjs
```

## Output Format

The script converts Pro blocks to this format:

```tsx
import { ProBlock } from '@/components'

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

## Example Output

```
🔍 Scanning blocks README for Pro blocks...

Found 2 Pro block(s):

  • Hero 11 (hero-11)
  • Hero 13 (hero-13)

🔄 Converting blocks...

✅ Converted hero-11
✅ Converted hero-13

📊 Summary:
  ✅ Converted: 2
  ⏭️  Skipped: 0
  ❌ Failed: 0
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
- Write access to `src/blocks/` directory

## Related Components

- `src/components/pro-block.tsx` - The ProBlock component used for Pro tier blocks
- `src/blocks/README.md` - Source of truth for block tiers
