# process-images.js

Process and optimize images from `public/originals/` directory.

[← Back to README](../README.md) | [All Scripts](./scripts.md)

---

## Usage

```bash
npm run images
```

## What It Does

1. **Sanitizes filenames** - Converts to URL-friendly format (lowercase, dashes, no special chars)
2. **Generates responsive variants** - Creates multiple sizes based on `.images` configuration
3. **WebP conversion** - Generates WebP versions for modern browsers
4. **EXIF extraction** - Extracts metadata (orientation, dimensions, GPS coordinates)
5. **Metadata generation** - Updates `_data/_meta.json` with all image data

## Configuration

Images are configured via the `.images` file in the project root:

```
portfolio:
  sizes:
    thumbnail: 400
    medium: 800
    large: 1200
    xlarge: 1600
  portrait:
    thumbnail: 300
    medium: 600
    large: 900
```

## When to Run

- After adding new images to `public/originals/`
- After modifying `.images` configuration
- When image metadata needs updating

## Output Structure

```
public/
  originals/         # Source images (not deployed)
    portfolio/
      my-image.jpg
  images/           # Processed images (deployed)
    portfolio/
      my-image-thumbnail.jpg
      my-image-thumbnail.webp
      my-image-medium.jpg
      my-image-medium.webp
      ...
```

## Reset All Images

```bash
npm run images:reset
```

Deletes all processed images and regenerates from scratch. Use when:
- Configuration has changed significantly
- Files appear corrupted
- You need a clean slate

---

**See also:**
- [Image Management Guide](./images.md) - Complete image system documentation
- [.images Configuration](./images.md#configuration) - Size calculator and examples
