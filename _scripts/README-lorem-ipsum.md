# Lorem Ipsum Replacement Script

## Overview

This script automatically replaces English text in MDX files with lorem ipsum variations while maintaining the same content length and structure.

## Usage

```bash
npm run lorem
```

## What It Does

The script processes all MDX files in `src/app/markdown/` and:

1. **Detects English Content**: Searches for common English words and phrases in:
   - `<Paragraph>` components
   - `<Heading>` components
   - Component attributes (`cite`, `alt`, `imageAlt`, `title`)

2. **Replaces with Lorem Ipsum**: Generates randomized lorem ipsum text that:
   - Matches the approximate length of the original text
   - Uses varied Latin words to prevent repetition
   - Maintains proper capitalization and punctuation

3. **Preserves Structure**: Keeps all:
   - Component structure and JSX intact
   - Metadata and configuration
   - Image paths and other non-text content
   - Already-processed files (skips them)

## Results from Last Run

- **Total MDX files found**: 224
- **Files updated**: 20
- **Files skipped**: 204 (already processed or no changes needed)

### Updated Files

The script successfully updated the following files:

- birth-center.mdx
- birth-education-classes.mdx
- breech-twin-vbac.mdx
- contact.mdx
- job-application.mdx
- labor-delivery.mdx
- placenta-encapsulation.mdx
- postpartum-newborn.mdx
- prenatal-care.mdx
- testimonials.mdx
- water-birth.mdx
- And various blog posts in the `post/` directory

## How It Works

### Detection Patterns

The script uses multiple English word patterns to identify content that needs replacement:

```javascript
const englishPatterns = [
  /\b(the|and|or|but|with|from|this|that|these|those|have|has|had|will|would|could|should)\b/gi,
  /\b(about|after|before|because|during|through|between|among|within)\b/gi,
  /\b(provide|providing|served|serving|serves|service|services)\b/gi,
  // ... more patterns
]
```

### Lorem Ipsum Generation

Uses multiple word pools for variety:

- **Common Latin**: lorem, ipsum, dolor, sit, amet, consectetur, etc.
- **Extended Latin**: fusce, dapibus, tellus, cursus, commodo, etc.
- **Descriptive**: vestibulum, pellentesque, habitant, morbi, etc.
- **Latin verbs**: providens, serviens, afferens, focusans, etc.
- **Latin nouns**: familias, cura, partus, educatio, etc.
- **Latin adjectives**: naturalis, compassionata, dedicata, etc.

### Smart Skipping

The script automatically skips files that:

- Already contain "lorem ipsum" text
- Have been previously processed (detected by specific lorem ipsum patterns)
- Don't contain enough English content to warrant changes

## File Location

Script location: `_scripts/replace-english-with-lorem.mjs`

## Safety Features

- **Non-destructive**: Only modifies files that contain English text
- **Length preservation**: Maintains approximate original text length
- **Structure preservation**: Keeps all JSX/MDX structure intact
- **Skip already-processed**: Won't re-process files that already have lorem ipsum

## Configuration

To modify the script behavior, edit `_scripts/replace-english-with-lorem.mjs`:

- **Word pools**: Add or modify the `loremWords` object
- **Detection patterns**: Update `englishPatterns` array
- **Length tolerance**: Adjust the multipliers in `replaceWithLorem()` function
- **Skip logic**: Modify the `containsEnglish()` function

## Notes

- The script processes files sequentially to avoid race conditions
- Console output shows progress with emojis (✅ updated, ⏭️ skipped)
- All changes are saved immediately (no dry-run mode)
- Original files are overwritten (commit to git before running if needed)

## Troubleshooting

If the script misses some English text:

1. Check if the text is in a supported component (`<Paragraph>`, `<Heading>`)
2. Verify the attribute name is in the supported list
3. The text might be too short (< 10 characters)
4. Add more English word patterns to the detection array

If too much is replaced:

1. Adjust the `containsEnglish()` function to be more strict
2. Increase the minimum match count for English patterns
3. Add specific skip conditions for certain file types or sections
