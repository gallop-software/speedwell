import imageMeta from '@/../_data/_studio.json'

type ImageSize = 'small' | 'medium' | 'large' | 'full'

type ImageResult = {
  url: string
  width: number
  height: number
}

interface Dimensions {
  w: number
  h: number
}

type MetaEntry = {
  o?: Dimensions   // original dimensions {w, h}
  b?: string       // blurhash
  sm?: Dimensions  // small thumbnail (300px width)
  md?: Dimensions  // medium thumbnail (700px width)
  lg?: Dimensions  // large thumbnail (1400px width)
  f?: Dimensions   // full size (capped at 2560px width)
  c?: number       // CDN index into _cdns array
}

interface FullMeta {
  _cdns?: string[]
  [key: string]: MetaEntry | string[] | undefined
}

const meta = imageMeta as FullMeta
const cdnUrls = meta._cdns || []

// Map size to meta key and suffix
const SIZE_MAP: Record<ImageSize, { key: 'sm' | 'md' | 'lg' | 'f'; suffix: string }> = {
  small: { key: 'sm', suffix: '-sm' },
  medium: { key: 'md', suffix: '-md' },
  large: { key: 'lg', suffix: '-lg' },
  full: { key: 'f', suffix: '' },
}

// Check if an image entry is processed (has any thumbnail dimensions)
function isProcessed(entry: MetaEntry | undefined): boolean {
  if (!entry) return false
  return !!(entry.f || entry.lg || entry.md || entry.sm)
}

// Get thumbnail path from original path
function getThumbnailPath(originalPath: string, size: ImageSize): string {
  const ext = originalPath.match(/\.\w+$/)?.[0] || '.jpg'
  const base = originalPath.replace(/\.\w+$/, '')
  const outputExt = ext.toLowerCase() === '.png' ? '.png' : '.jpg'
  const suffix = SIZE_MAP[size].suffix
  return `/images${base}${suffix}${outputExt}`
}

/**
 * Gets the image metadata for a specific size from the image metadata
 * Falls back to 'full' size if the requested size doesn't exist.
 *
 * @example
 * ```tsx
 * // Get large version, fallback to full if large doesn't exist
 * const image = getMetaImage('/portfolio/photo.jpg', 'large')
 * // Returns: { url: '/images/portfolio/photo-lg.jpg', width: 1400, height: 934 }
 *
 * // Get medium version, fallback to full if medium doesn't exist
 * const mediumImage = getMetaImage('/portfolio/photo.jpg', 'medium')
 * ```
 *
 * @param url - The original image URL to look up (should start with /)
 * @param size - The desired image size ('small', 'medium', 'large', 'full')
 * @returns Object with url, width, height, or undefined if no metadata found
 */
export function getMetaImage(
  url: string | undefined,
  size: ImageSize = 'large'
): ImageResult | undefined {
  if (!url) {
    return undefined
  }

  try {
    // Normalize URL to have leading slash
    const lookupKey = url.startsWith('/') ? url : `/${url}`
    
    // Get entry from meta (exclude special keys)
    if (lookupKey.startsWith('_')) return undefined
    const value = meta[lookupKey]
    if (!value || Array.isArray(value)) return undefined
    const entry = value as MetaEntry

    // Get CDN URL if available
    const cdnUrl = entry.c !== undefined ? cdnUrls[entry.c] : undefined
    const entryIsProcessed = isProcessed(entry)

    // Get the size key and dimensions
    const sizeConfig = SIZE_MAP[size]
    const dims = entry[sizeConfig.key]

    if (size === 'full' || !entryIsProcessed) {
      // Use original or full dimensions
      const fullDims = entry.f || entry.o
      if (!fullDims) return undefined

      // Return original/full URL
      const imageUrl = cdnUrl 
        ? `${cdnUrl}${getThumbnailPath(lookupKey, 'full')}`
        : getThumbnailPath(lookupKey, 'full')

      return {
        url: imageUrl,
        width: fullDims.w,
        height: fullDims.h,
      }
    }

    // Try requested size, fall back to larger sizes, then full
    const fallbackOrder: Array<'sm' | 'md' | 'lg' | 'f'> = ['sm', 'md', 'lg', 'f']
    const startIndex = fallbackOrder.indexOf(sizeConfig.key)
    
    for (let i = startIndex; i < fallbackOrder.length; i++) {
      const key = fallbackOrder[i]
      const sizeDims = entry[key]
      if (sizeDims) {
        const sizeForPath = key === 'sm' ? 'small' : key === 'md' ? 'medium' : key === 'lg' ? 'large' : 'full'
        const imageUrl = cdnUrl
          ? `${cdnUrl}${getThumbnailPath(lookupKey, sizeForPath)}`
          : getThumbnailPath(lookupKey, sizeForPath)

        return {
          url: imageUrl,
          width: sizeDims.w,
          height: sizeDims.h,
        }
      }
    }

    // No size found, try original
    if (entry.o) {
      const imageUrl = cdnUrl ? `${cdnUrl}${lookupKey}` : lookupKey
      return {
        url: imageUrl,
        width: entry.o.w,
        height: entry.o.h,
      }
    }

    return undefined
  } catch (error) {
    // Safe fallback on any error
    console.warn(`Failed to get meta image for ${url}:`, error)
    return undefined
  }
}
