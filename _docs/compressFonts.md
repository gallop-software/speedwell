# compressFonts.js

Convert TTF fonts to WOFF2 format and auto-detect font properties.

[← Back to README](../README.md) | [All Scripts](./scripts.md)

---

## Usage

```bash
npm run fonts <folder> [fontTypes...]
```

## Examples

**Compress fonts only:**

```bash
npm run fonts Switzer
```

**Compress and update font configuration:**

```bash
npm run fonts Switzer heading heading2 heading3
```

This will:
1. Convert `src/styles/fonts/Switzer/*.ttf` to WOFF2
2. Update `_data/_fonts/_heading.tsx`
3. Update `_data/_fonts/_heading2.tsx`
4. Update `_data/_fonts/_heading3.tsx`

## What It Does

1. **Finds TTF files** in `src/styles/fonts/{folder}/`
2. **Converts to WOFF2** (90%+ smaller file size)
3. **Auto-detects properties** from filename:
   - Font weight (Thin, Light, Regular, Bold, Black, etc.)
   - Font style (Regular, Italic)
   - Variable font detection
4. **Generates font configs** in `_data/_fonts/` (if fontTypes provided)

## Font File Naming

The script auto-detects weight and style from filenames:

```
Switzer-Regular.ttf       → weight: 400, style: normal
Switzer-Bold.ttf          → weight: 700, style: normal
Switzer-BoldItalic.ttf    → weight: 700, style: italic
Switzer-Thin.ttf          → weight: 100, style: normal
Switzer-Variable.ttf      → weight: 100-900, variable
```

### Weight Detection

- Thin → 100
- ExtraLight/UltraLight → 200
- Light → 300
- Regular/Normal → 400
- Medium → 500
- SemiBold/DemiBold → 600
- Bold → 700
- ExtraBold/UltraBold → 800
- Black/Heavy → 900

## Directory Structure

```
src/styles/fonts/
  Switzer/              # Font family folder
    Switzer-Regular.ttf
    Switzer-Bold.ttf
    ...
  Geist/
    GeistVF.ttf
    ...

_data/_fonts/           # Generated configs
  _heading.tsx
  _heading2.tsx
  _body.tsx
  ...
```

## Font Configuration Files

Generated files in `_data/_fonts/` look like:

```tsx
export const heading = {
  name: 'Switzer',
  weights: [400, 700],
  styles: ['normal', 'italic'],
  variable: false,
  files: [
    {
      weight: 400,
      style: 'normal',
      path: '/fonts/Switzer/Switzer-Regular.woff2',
    },
    {
      weight: 700,
      style: 'normal',
      path: '/fonts/Switzer/Switzer-Bold.woff2',
    },
  ],
}
```

## Variable Fonts

Variable fonts are auto-detected and configured differently:

```tsx
export const heading = {
  name: 'Geist',
  weights: [100, 900],
  variable: true,
  files: [
    {
      weight: '100 900',
      style: 'normal',
      path: '/fonts/Geist/GeistVF.woff2',
    },
  ],
}
```

## WOFF2 Benefits

- **90%+ smaller** than TTF
- Faster page loads
- Better compression
- Same quality
- Modern browser support (95%+ coverage)

## When to Run

- After adding new font files
- After updating font weights
- When setting up fonts for the first time
- Before committing font changes

---

**See also:**
- [Font System Guide](./fonts.md) - Complete font documentation
- [Font Configuration](./fonts.md#configuration) - Using fonts in your project
- [WOFF2 Browser Support](https://caniuse.com/woff2) - Compatibility table
