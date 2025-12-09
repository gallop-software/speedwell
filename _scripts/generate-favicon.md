# generate-favicon.js

Generate favicon variants from a single source image.

**Tier:** Free

---

## Usage

```bash
npm run favicon
```

## Requirements

Place a square favicon source image in `public/originals/`:

```
public/originals/favicon.png
```

**Recommended:**

- Format: PNG with transparency
- Size: 512x512px or larger
- Square aspect ratio (1:1)

## What It Generates

All files are saved to `src/app/` for automatic Next.js detection:

1. **`favicon.ico`** (48x48px)
   - Classic ICO format for browser tabs
   - Legacy browser support

2. **`icon.png`** (32x32px)
   - Standard favicon size
   - Modern browser support

3. **`apple-icon.png`** (180x180px)
   - Apple touch icon for iOS devices
   - Used when saving to home screen

## Next.js Integration

Next.js automatically detects these files in `src/app/` and serves them:

- `/favicon.ico` - Browser default
- `/icon.png` - Modern browsers
- `/apple-icon.png` - iOS devices

No additional configuration needed in `layout.tsx` or `metadata.tsx`.

## Output Location

```
src/
  app/
    favicon.ico       ← Generated
    icon.png          ← Generated
    apple-icon.png    ← Generated
    layout.tsx
    ...
```

## When to Run

- After creating or updating `public/originals/favicon.png`
- When changing site branding
- After redesigning logo

## Tips

- Use a simple, recognizable icon that works at small sizes
- Ensure good contrast at 32x32px (icon.png size)
- Test on light and dark browser backgrounds
- Include padding - icons shouldn't touch edges

---

**See also:**

- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/file-conventions/metadata) - Official favicon documentation
- [Favicon Best Practices](https://web.dev/articles/defining-app-icons) - Design guidelines
