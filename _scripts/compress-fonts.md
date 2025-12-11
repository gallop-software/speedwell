# Font System

Complete guide to managing fonts in Speedwell.

**Tier:** Free  
**File:** `/_scripts/compress-fonts.js`

---

## Overview

Speedwell uses a streamlined font system that converts TTF fonts to optimized WOFF2 format and automatically configures them for Next.js.

---

## Usage

```bash
npm run fonts <folder> [fontTypes...]
```

### Examples

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

---

## Adding Custom Fonts

### 1. Place TTF Files

Add your font files to `src/styles/fonts/YourFontName/`:

```
src/styles/fonts/
└── Switzer/
    ├── Switzer-Regular.ttf
    ├── Switzer-Bold.ttf
    ├── Switzer-Italic.ttf
    └── Switzer-BoldItalic.ttf
```

### 2. Run Compression

```bash
# Compress only
npm run fonts Switzer

# Compress and update font config files
npm run fonts Switzer heading heading2 heading3
```

### 3. Font is Automatically:

- ✅ Converted to WOFF2 (90%+ smaller file size)
- ✅ Weight and style detected from filename
- ✅ Configuration updated in `_data/_fonts/`

---

## Font File Naming

The system detects font properties from filenames:

### Weights

| Filename Contains | Weight | CSS Value          |
| ----------------- | ------ | ------------------ |
| `Thin`            | 100    | `font-weight: 100` |
| `ExtraLight`      | 200    | `font-weight: 200` |
| `Light`           | 300    | `font-weight: 300` |
| `Regular`         | 400    | `font-weight: 400` |
| `Medium`          | 500    | `font-weight: 500` |
| `Semibold`        | 600    | `font-weight: 600` |
| `Bold`            | 700    | `font-weight: 700` |
| `Extrabold`       | 800    | `font-weight: 800` |
| `Black`           | 900    | `font-weight: 900` |

### Styles

| Filename Contains | Style  | CSS Value            |
| ----------------- | ------ | -------------------- |
| `Italic`          | italic | `font-style: italic` |

### Examples

```
FontName-Regular.ttf      → weight: 400, style: normal
FontName-Bold.ttf         → weight: 700, style: normal
FontName-BoldItalic.ttf   → weight: 700, style: italic
FontName-Light.ttf        → weight: 300, style: normal
FontName-Semibold.ttf     → weight: 600, style: normal
```

### Variable Fonts

```
FontName-Variable.ttf     → weight: 100-900
```

Variable fonts support the full weight range in a single file.

---

## Font Configuration Files

Fonts are organized by usage in `_data/_fonts/`:

| File            | Usage          | HTML Elements          |
| --------------- | -------------- | ---------------------- |
| `_heading.tsx`  | Main headings  | `<h1>`                 |
| `_heading2.tsx` | Subheadings    | `<h2>`, `<h3>`         |
| `_heading3.tsx` | Small headings | `<h4>`, `<h5>`, `<h6>` |
| `_body.tsx`     | Body text      | `<p>`, `<span>`, etc.  |
| `_accent.tsx`   | Special text   | Custom components      |

### Example Configuration

```tsx
// _data/_fonts/_heading.tsx
import localFont from 'next/font/local'

export const heading = localFont({
  src: [
    {
      path: '../../src/styles/fonts/Switzer/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../src/styles/fonts/Switzer/Switzer-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
})
```

---

## Using Fonts in Components

### Automatic Application

Once configured, fonts are applied automatically through CSS variables:

```css
h1 {
  font-family: var(--font-heading);
}
h2,
h3 {
  font-family: var(--font-heading2);
}
h4,
h5,
h6 {
  font-family: var(--font-heading3);
}
body {
  font-family: var(--font-body);
}
```

### Manual Application

```tsx
import { heading } from '@/_data/_fonts/_heading'

export default function Hero() {
  return <h1 className={heading.className}>Welcome</h1>
}
```

### With Tailwind

```tsx
<h1 className="font-heading font-bold">Welcome</h1>
```

Configure in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)'],
        heading2: ['var(--font-heading2)'],
        heading3: ['var(--font-heading3)'],
        body: ['var(--font-body)'],
        accent: ['var(--font-accent)'],
      },
    },
  },
}
```

---

## Font Formats

### WOFF2

**Why WOFF2?**

- ✅ **Smaller** - 30% smaller than WOFF, 90% smaller than TTF
- ✅ **Faster** - Reduced download time
- ✅ **Compatible** - Supported by all modern browsers
- ✅ **Optimized** - Built-in compression

### Browser Support

WOFF2 is supported in:

- Chrome 36+
- Firefox 39+
- Safari 10+
- Edge 14+

For older browsers, consider adding TTF fallback.

---

## Complete Workflow Example

### 1. Download Font

Get your font files from:

- Google Fonts
- Adobe Fonts
- Commercial font foundries
- Custom design

### 2. Organize Files

```bash
mkdir -p src/styles/fonts/MyFont
mv MyFont-*.ttf src/styles/fonts/MyFont/
```

### 3. Compress & Configure

```bash
npm run fonts MyFont heading heading2 body
```

### 4. Verify Output

Check that files were created:

```
src/styles/fonts/MyFont/
├── MyFont-Regular.woff2
├── MyFont-Bold.woff2
└── ...

_data/_fonts/
├── _heading.tsx
├── _heading2.tsx
└── _body.tsx
```

### 5. Test in Browser

```bash
npm run dev
```

Visit your site and inspect elements to verify fonts loaded.

---

## Font Loading Strategy

Next.js automatically optimizes font loading:

1. **Preloads** critical fonts
2. **Subsetting** - Only includes used characters
3. **Self-hosted** - No external requests
4. **Cache-optimized** - Fonts cached by browser

### Loading Performance

```tsx
export const heading = localFont({
  src: './fonts/heading.woff2',
  display: 'swap', // Show fallback while loading
  preload: true, // Load immediately
  variable: '--font-heading',
})
```

---

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

---

## Troubleshooting

### Fonts not appearing

**Check:**

1. Font files are in correct directory
2. `npm run fonts` completed successfully
3. WOFF2 files were generated
4. Font config files updated
5. CSS variables defined in layout
6. Clear browser cache

### Compression failed

**Possible causes:**

- Invalid TTF file
- File permissions issue
- Missing `ttf2woff2` dependency

**Solution:**

```bash
npm install ttf2woff2 --save-dev
```

### Wrong weights detected

**Fix filename:**

```bash
# Wrong
mv Font-Reg.ttf Font-Regular.ttf

# Wrong
mv Font-B.ttf Font-Bold.ttf
```

Weight detection requires specific keywords in filename.

---

## Best Practices

1. **Use variable fonts** when possible - Smaller file size for multiple weights
2. **Limit font weights** - Only include weights you actually use
3. **Subset fonts** - Remove unused characters for smaller files
4. **Self-host** - Don't rely on external CDNs
5. **Preload critical fonts** - Heading fonts should be preloaded

---

## Advanced: Custom Font Configuration

### Manual Configuration

Edit `_data/_fonts/_heading.tsx` directly:

```tsx
import localFont from 'next/font/local'

export const heading = localFont({
  src: [
    {
      path: '../../src/styles/fonts/Custom/Custom-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../src/styles/fonts/Custom/Custom-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../src/styles/fonts/Custom/Custom-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
})
```

### Font Subsetting

For smaller file sizes, subset fonts to include only needed characters:

```bash
# Using pyftsubset (install fonttools)
pyftsubset font.ttf \
  --output-file=font-subset.ttf \
  --unicodes=U+0020-007F,U+00A0-00FF

# Then convert to WOFF2
npm run fonts SubsetFont heading
```

---

## When to Run

- After adding new font files
- After updating font weights
- When setting up fonts for the first time
- Before committing font changes

---

[← Back to README](../README.md)
