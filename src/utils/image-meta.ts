import imageMeta from '@/../_data/_meta.json'

type ImageSize = 'small' | 'medium' | 'large' | 'full'

type ImageSizeData = {
  width: number
  height: number
  file: string
}

type ImageResult = {
  url: string
  width: number
  height: number
}

type ImageMetadata = {
  [size in ImageSize]?: ImageSizeData
}

type ImageMetaData = {
  [key: string]: ImageMetadata
}

/**
 * Gets the image metadata for a specific size from the image metadata
 * Falls back to 'full' size if the requested size doesn't exist.
 *
 * @example
 * ```tsx
 * // Get large version, fallback to full if large doesn't exist
 * const image = getMetaImage('/images/photo.jpg', 'large')
 * // Returns: { url: '/images/photo-1400x934.jpg', width: 1400, height: 934 }
 *
 * // Get medium version, fallback to full if medium doesn't exist
 * const mediumImage = getMetaImage('/images/photo.jpg', 'medium')
 * ```
 *
 * @param url - The original image URL to look up
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
    const metaData = imageMeta as ImageMetaData
    const imageMetadata = metaData[url]

    if (!imageMetadata) {
      // If no metadata found, return undefined
      return undefined
    }

    // Try requested size first, then fall back to full
    const imageData = imageMetadata[size] || imageMetadata.full

    if (!imageData) {
      return undefined
    }

    return {
      url: imageData.file,
      width: imageData.width,
      height: imageData.height,
    }
  } catch (error) {
    // Safe fallback on any error
    console.warn(`Failed to get meta image for ${url}:`, error)
    return undefined
  }
}
