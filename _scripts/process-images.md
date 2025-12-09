# Image Management System

Complete guide to Speedwell's intelligent image processing system.

**Tier:** Free

---

## Overview

Speedwell includes an automated image processing system that handles optimization, responsive variants, and metadata extraction.

---

## How It Works

1. **Place original images** in `public/originals/` (any folder structure)
2. **Run `npm run images`**
3. **Images are processed:**
   - Filenames sanitized (spaces → dashes, lowercase, URL-safe)
   - Multiple responsive sizes generated based on longest side
   - WebP versions created for modern browsers
   - Orientation detected (portrait, landscape, square)
   - EXIF data extracted (GPS, dimensions, orientation)
4. **Metadata saved** to `_data/_meta.json`
5. **Use in code with helper functions**

---

## Configuration

### The `.images` File

The `.images` file in your project root controls image processing. **This file is required** for `npm run images` to work.

**Current configuration:**

```json
{
  "sizes": {
    "small": 300,
    "medium": 700,
    "large": 1400,
    "full": 2200
  },
  "quality": 90
}
```

### Understanding Sizes

Sizes are based on the **longest side** of the image:

- `"small": 300` - Maximum 300px on longest side
- `"medium": 700` - Maximum 700px on longest side
- `"large": 1400` - Maximum 1400px on longest side
- `"full": 2200` - Maximum 2200px on longest side

**Examples:**

- A 2400x1600 landscape at "large" (1400) becomes 1400x933
- A 800x1200 portrait at "medium" (700) becomes 467x700
- A 1000x1000 square at "small" (300) becomes 300x300

Aspect ratios are always preserved.

### Quality Settings

- `quality` - JPEG/WebP quality (1-100)
- **Recommended:**
  - 90-95 for photos with important detail
  - 85-90 for general photos
  - 80-85 for graphics and illustrations

### Customizing Configuration

```json
{
  "sizes": {
    "thumbnail": 150,
    "small": 300,
    "medium": 700,
    "large": 1400,
    "xlarge": 1920,
    "full": 2200
  },
  "quality": 85
}
```

Add or remove size breakpoints as needed for your design.

---

## File Organization

### Source Images (`public/originals/`)

```
public/originals/
├── hero-image.jpg
├── portfolio/
│   ├── project-1.jpg
│   └── project-2.jpg
└── team/
    ├── john-doe.jpg
    └── jane-smith.jpg
```

**Best practices:**

- Organize in folders by content type
- Use descriptive filenames
- Upload highest quality available
- Supported formats: JPG, JPEG, PNG, WebP

### Processed Images (`public/images/`)

After running `npm run images`, the structure is mirrored:

```
public/images/
├── hero-image-small.jpg
├── hero-image-small.webp
├── hero-image-medium.jpg
├── hero-image-medium.webp
├── hero-image-large.jpg
├── hero-image-large.webp
├── hero-image-full.jpg
├── hero-image-full.webp
└── portfolio/
    ├── project-1-small.jpg
    ├── project-1-small.webp
    ├── project-1-medium.jpg
    └── ...
```

---

## Filename Sanitization

The system automatically makes filenames URL-friendly:

**Before:**

```
My Project Photo (2024).JPG
Team Photo - John & Jane.jpg
Logo   Final   Version.png
```

**After:**

```
my-project-photo-2024.jpg
team-photo-john-jane.jpg
logo-final-version.png
```

**Rules:**

- Converts to lowercase
- Spaces → dashes
- Removes special characters
- Multiple dashes → single dash
- Removes leading/trailing dashes

---

## Metadata (`_data/_meta.json`)

Generated metadata for each image:

```json
{
  "portfolio/project-1.jpg": {
    "width": 2400,
    "height": 1600,
    "orientation": "landscape",
    "aspectRatio": 1.5,
    "sizes": {
      "small": { "width": 300, "height": 200 },
      "medium": { "width": 700, "height": 467 },
      "large": { "width": 1400, "height": 933 },
      "full": { "width": 2200, "height": 1467 }
    },
    "exif": {
      "gps": { "latitude": 32.7767, "longitude": -96.797 },
      "orientation": 1,
      "dateTime": "2024:12:03 10:30:00"
    }
  }
}
```

---

## Using Images in Code

### Basic Usage

```tsx
import { getImage } from '@/utils/image'

const image = getImage('portfolio/project-1.jpg')

<img
  src={image.src}
  srcSet={image.srcset}
  alt="Project 1"
  width={image.width}
  height={image.height}
/>
```

### Responsive Images

```tsx
<img
  src="/images/project-small.jpg"
  srcSet="
    /images/project-small.webp 300w,
    /images/project-medium.webp 700w,
    /images/project-large.webp 1400w,
    /images/project-full.webp 2200w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Project"
  loading="lazy"
/>
```

### Orientation-Based Layout

```tsx
const image = getImage('portfolio/project-1.jpg')

<div className={image.orientation === 'portrait' ? 'col-span-1' : 'col-span-2'}>
  <img src={image.src} alt="Project" />
</div>
```

---

## WebP Format

Modern browsers get WebP versions automatically:

- **Smaller file size** - 25-35% smaller than JPEG
- **Better quality** - At same file size
- **Automatic fallback** - JPG for older browsers

The system generates both formats. Use `<picture>` element for explicit control:

```tsx
<picture>
  <source
    srcSet="/images/hero-large.webp"
    type="image/webp"
  />
  <img
    src="/images/hero-large.jpg"
    alt="Hero"
  />
</picture>
```

---

## Performance Tips

1. **Always run `npm run images`** before deploying
2. **Upload high-quality originals** - The system optimizes down
3. **Use appropriate sizes** - Don't serve "full" size for thumbnails
4. **Lazy load images** - Use `loading="lazy"` attribute
5. **Specify dimensions** - Prevents layout shift

---

## Troubleshooting

### Images not processing

**Check:**

- `.images` file exists in project root
- Images are in `public/originals/`
- Filenames don't have problematic characters
- Run `npm install` to ensure Sharp is installed

### Quality issues

- Increase `quality` value in `.images`
- Upload higher resolution originals
- Check source images aren't already compressed

### Slow processing

- Processing time depends on:
  - Number of images
  - Original file sizes
  - Number of size variants
- Consider processing in batches for large sets

---

## Advanced Usage

### Custom Image Sizes

Add specific sizes for different use cases:

```json
{
  "sizes": {
    "thumbnail": 150,
    "card": 400,
    "hero": 1920,
    "fullscreen": 2560
  },
  "quality": 90
}
```

### Selective Processing

Process specific folders:

1. Move images to `public/originals/folder-name/`
2. Run `npm run images`
3. Only new/changed images are reprocessed

---

[← Back to README](../README.md) | [Scripts Reference](./scripts.md)
