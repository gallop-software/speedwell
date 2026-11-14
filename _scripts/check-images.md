# check-images.mjs

Check every image URL, width and height written in `src/` against `_data/_studio.json`.

**Tier:** Free  
**File:** `_scripts/check-images.mjs`

---

## Usage

```bash
npm run images
```

**Note:** This script also runs as part of `npm run check`.

## How `_studio.json` Is Used

`_data/_studio.json` is Studio's record of every image in the project: where it is served from, and the width and height of each size that exists. Studio writes it; nothing else should.

**The site does not read it.** No page, component or API route imports the file, so it is never part of what a visitor downloads, however large the library grows. It is a reference for whoever writes the code, which is usually your AI assistant.

Every image in the code carries its own full URL, width and height, copied from the file:

```tsx
<Image
  src="https://speedwell-cdn.gallop.software/images/flowers-md.png"
  width={700}
  height={843}
  alt="Flowers"
/>
```

Three things read the file:

| Reader | When | Why |
|---|---|---|
| Your AI assistant, or you | Adding or changing an image | To copy the URL, width and height |
| `npm run images` (this script) | After editing, and in `npm run check` | To confirm the code still matches the library |
| Studio in the Gallop editor | Managing media | It owns the file |

## Reading an Entry

```json
"_cdns": ["https://speedwell-cdn.gallop.software"],

"/flowers.png": {
  "o":  { "w": 1200, "h": 1445 },
  "f":  { "w": 1200, "h": 1445 },
  "sm": { "w": 300,  "h": 361 },
  "md": { "w": 700,  "h": 843 },
  "c": 0,
  "a": 1772742429953
}
```

- The key is the image's path in Media.
- `c` is the position in `_cdns` of the host that serves it.
- `o` is the size of the original upload. `a` is when Studio last processed it.
- Each of `sm`, `md`, `lg` and `f` is a file that exists, with its width (`w`) and height (`h`):

| Size | URL | Width |
|---|---|---|
| `sm` | `https://speedwell-cdn.gallop.software/images/flowers-sm.png` | 300 |
| `md` | `https://speedwell-cdn.gallop.software/images/flowers-md.png` | 700 |
| `lg` | `https://speedwell-cdn.gallop.software/images/flowers-lg.png` | 1400 |
| `f` | `https://speedwell-cdn.gallop.software/images/flowers.png` | the original, up to 2560 |

A size that is not in the entry does not exist. This image is 1200 wide, so it has no `lg`: use `f` for the largest version.

Thumbnails keep `.png` and `.jpeg`. Every other format is written as `.jpg`.

A file with no sizes at all, such as a video, is served under its own path with no `/images` prefix: `/videos/hero-op.mp4` is `https://speedwell-cdn.gallop.software/videos/hero-op.mp4`.

## Where Images Are Written

| Place | What to write |
|---|---|
| `Image`, `GalleryItem` | `src`, `width`, `height`. Add `href` with the full-size URL to open it in the lightbox |
| `Cover` | `imageSrc`, `imageWidth`, `imageHeight` |
| `Section` | `imageSrc` only: the image fills the section |
| Cards, profiles, testimonials | `image` or `img`, with `width` and `height` |
| `VideoBackground` | `posterImage`, `posterWidth`, `posterHeight` |
| Images in a data array | `image`, `width` and `height` on each item |
| Page metadata | `featuredImage` and `openGraph.image` are `{ url, width, height }`; `twitter.image` and schema.org `image` are the URL |

Width and height describe the file. To show an image smaller, keep its shape (a 700×414 logo at `width={200} height={118}`) or size it with classes.

## What It Checks

For every URL in `src/` that starts with a host in `_cdns`:

1. **The file exists.** The URL must be one the library serves. A typo, a size the image does not have, or an image that was deleted or renamed fails here.
2. **The size is right.** Where a width and height are written beside the URL, they must have the file's shape. This catches an image that was replaced or re-cropped under the same path. The same shape at another scale passes.
3. **The size is there.** `Image` and `GalleryItem` must be given a width and height.

Values that are not literals, such as `width={item.width}`, are checked where the literal is written: in the data array or at the call site.

## Output

```
✔ 634 image URLs match _data/_studio.json
```

or a list of problems with the file, the line and the correct numbers:

```
✖ 2 image problem(s):

  src/app/(default)/furniture/_blocks/banner.tsx:7  imageWidth/imageHeight are 2560×1200, but the file is 2560×1693: https://…/pexels-clickerhappy-584399.jpg
  src/app/(post)/post/art-deco-restoration/content.tsx:21  missing width={1400} height={2100}: https://…/pexels-jonathanborba-5570224-lg.jpg
```

The script exits with an error when it finds a problem, so `npm run check` fails.

## Moving to Another CDN

The CDN host is part of every image URL in the code. If the host changes, replace the old host with the new one across `src/` in one find-and-replace, then run `npm run images` to confirm every URL resolves.
