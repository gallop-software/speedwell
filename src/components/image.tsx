import { clsx } from 'clsx'
import Link from 'next/link'
import { Paragraph } from '@/components/paragraph'
import type { ComponentProps } from 'react'
import leanMeta from '@/../_data/_studio.json'

interface Dimensions {
  w: number
  h: number
}

type LeanImageEntry = {
  o?: Dimensions   // original dimensions {w, h}
  b?: string       // blurhash
  sm?: Dimensions  // small thumbnail (300px width)
  md?: Dimensions  // medium thumbnail (700px width)
  lg?: Dimensions  // large thumbnail (1400px width)
  f?: Dimensions   // full size (capped at 2560px width)
  c?: number       // CDN index into _cdns array
}

// Check if an image entry is processed (has any thumbnail dimensions)
function isProcessed(entry: LeanImageEntry | undefined): boolean {
  if (!entry) return false
  return !!(entry.f || entry.lg || entry.md || entry.sm)
}

interface FullMeta {
  _cdns?: string[]
  [key: string]: LeanImageEntry | string[] | undefined
}

// Get CDN URLs from meta
const meta = leanMeta as FullMeta
const cdnUrls = meta._cdns || []

// Map size prop to thumbnail suffix
const SIZE_SUFFIX: Record<string, string> = {
  small: '-sm',
  medium: '-md',
  large: '-lg',
}

// Get thumbnail path from original path, using CDN if available
function getThumbnailPath(
  originalPath: string,
  size: 'small' | 'medium' | 'large',
  cdnUrl?: string
): string {
  const ext = originalPath.match(/\.\w+$/)?.[0] || '.jpg'
  const base = originalPath.replace(/\.\w+$/, '')
  const outputExt = ext.toLowerCase() === '.png' ? '.png' : '.jpg'
  const localPath = `/images${base}${SIZE_SUFFIX[size]}${outputExt}`
  
  // Use CDN URL if available
  if (cdnUrl) {
    return `${cdnUrl}${localPath}`
  }
  
  return localPath
}

// Helper to get entry from meta (excludes _cdns)
function getMetaEntry(key: string): LeanImageEntry | undefined {
  if (key.startsWith('_')) return undefined
  const value = meta[key]
  if (Array.isArray(value)) return undefined
  return value as LeanImageEntry | undefined
}

export interface ImageProps extends Omit<
  ComponentProps<'img'>,
  'alt' | 'title'
> {
  /** Image source URL */
  src: string
  /** Alt text for accessibility - optional, falls back to empty string */
  alt?: string
  /** Title attribute for hover tooltip - optional */
  title?: string
  /** Caption text that supports HTML elements - optional */
  caption?: string
  /** Whether to wrap the image in paragraph containers - default is true */
  wrap?: boolean
  /** Additional CSS classes */
  className?: string | undefined
  /** Image width - uses natural width if not provided */
  width?: number | undefined
  /** Image height - uses natural height if not provided */
  height?: number | undefined
  /** Link href - if provided and is an image file, enables media lightbox */
  href?: string
  /** Image size variant to use from metadata - 'small', 'medium', 'large', or 'full' */
  size?: 'small' | 'medium' | 'large' | 'full'
  /** Rounded corners class - overrides default rounded classes */
  rounded?: string
  /** Aspect ratio class - overrides default aspect ratio classes */
  aspect?: string
  /** Enable media link with full-sized image - default is false */
  mediaLink?: boolean
  /** Enable lazy loading - default is true */
  lazy?: boolean
}

export function Image({
  src,
  alt = '',
  title,
  caption,
  wrap = false,
  className = '',
  width,
  height,
  href,
  size,
  rounded,
  aspect,
  mediaLink = false,
  lazy = true,
}: ImageProps) {
  const defaultRounded = 'rounded-lg'

  // Check if user explicitly provided width or height
  const hasExplicitWidth = width !== undefined
  const hasExplicitHeight = height !== undefined

  // Resolve image metadata if size prop is provided
  let resolvedSrc = src
  let resolvedWidth: number | 'auto' | undefined = width
  let resolvedHeight: number | 'auto' | undefined = height

  if (size) {
    // Normalize src to have leading slash for lookup
    const lookupKey = src.startsWith('/') ? src : `/${src}`
    const entry = getMetaEntry(lookupKey)
    
    if (entry) {
      // Get CDN URL from _cdns array if image has a CDN index
      const cdnUrl = entry.c !== undefined ? cdnUrls[entry.c] : undefined
      const entryIsProcessed = isProcessed(entry)
      
      if (size === 'full' || !entryIsProcessed) {
        // Use original image if full size requested OR if not processed (no thumbnails exist)
        resolvedSrc = cdnUrl ? `${cdnUrl}${lookupKey}` : src
      } else {
        // Use thumbnail (from CDN if pushed)
        resolvedSrc = getThumbnailPath(lookupKey, size, cdnUrl)
      }
      // Only use metadata dimensions if user didn't explicitly provide them
      if (!hasExplicitWidth && !hasExplicitHeight) {
        // Use thumbnail dimensions if available for that size, otherwise original
        const sizeKey = size === 'small' ? 'sm' : size === 'medium' ? 'md' : size === 'large' ? 'lg' : 'f'
        const dims = entry[sizeKey] || entry.o
        if (dims) {
          resolvedWidth = dims.w
          resolvedHeight = dims.h
        }
      }
    }
  }

  // If user explicitly provided only width or height, set the other to 'auto'
  if (hasExplicitWidth && !hasExplicitHeight) {
    resolvedHeight = 'auto'
  } else if (hasExplicitHeight && !hasExplicitWidth) {
    resolvedWidth = 'auto'
  }

  // Determine media link href
  let mediaLinkHref: string | null = null
  let isMediaLink = false

  // If href is set and points to an image, enable media link behavior
  if (href && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(href)) {
    mediaLinkHref = href
    isMediaLink = true
  }
  // If href is not set but mediaLink is true, use original image for lightbox
  else if (!href && mediaLink) {
    const lookupKey = src.startsWith('/') ? src : `/${src}`
    const entry = getMetaEntry(lookupKey)
    if (entry) {
      // Get CDN URL from _cdns array if image has a CDN index
      const cdnUrl = entry.c !== undefined ? cdnUrls[entry.c] : undefined
      // Use original image for lightbox (best quality), from CDN if available
      mediaLinkHref = cdnUrl ? `${cdnUrl}${lookupKey}` : src
      isMediaLink = true
    }
  }

  // Calculate aspect ratio style if aspect prop is not provided and we have dimensions
  const aspectRatioStyle =
    !aspect && resolvedWidth && resolvedHeight
      ? { aspectRatio: `${resolvedWidth} / ${resolvedHeight}` }
      : undefined

  let imageElement = (
    <img
      src={resolvedSrc}
      alt={alt}
      title={title}
      width={resolvedWidth}
      height={resolvedHeight}
      loading={lazy ? 'lazy' : 'eager'}
      style={aspectRatioStyle}
      className={clsx(
        rounded || defaultRounded,
        aspect,
        // For unwrapped images (gallery), just use basic width classes
        // For wrapped images, use responsive width
        !resolvedWidth && !resolvedHeight ? 'w-full h-auto' : '',
        className
      )}
    />
  )

  if (isMediaLink && mediaLinkHref) {
    imageElement = (
      <figure
        className={clsx(
          'rounded-none',
          !resolvedWidth && !resolvedHeight ? 'w-full h-auto' : ''
        )}
      >
        <Link
          href={mediaLinkHref}
          prefetch={false}
          scroll={true}
          className="lightbox-item cursor-pointer"
        >
          {imageElement}
        </Link>
      </figure>
    )
  } else if (href) {
    // Check if href is external (starts with http:// or https://)
    const isExternal = href.startsWith('http://') || href.startsWith('https://')

    if (isExternal) {
      imageElement = (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          {imageElement}
        </a>
      )
    } else {
      imageElement = (
        <Link
          href={href}
          prefetch={false}
          scroll={true}
          className="cursor-pointer"
        >
          {imageElement}
        </Link>
      )
    }
  }

  // Handle caption case
  if (caption) {
    let figureElement = (
      <figure className="space-y-2">
        <img
          src={resolvedSrc}
          alt={alt}
          title={title}
          width={resolvedWidth}
          height={resolvedHeight}
          loading={lazy ? 'lazy' : 'eager'}
          style={aspectRatioStyle}
          className={clsx(
            rounded || defaultRounded,
            aspect,
            // Use responsive width for all images
            !resolvedWidth && !resolvedHeight ? 'w-full h-auto' : '',
            className
          )}
        />
        <figcaption
          className="text-sm text-gray-600 text-center italic"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      </figure>
    )

    if (isMediaLink && mediaLinkHref) {
      figureElement = (
        <figure
          className={clsx(
            'rounded-none',
            !resolvedWidth && !resolvedHeight ? 'w-full h-auto space-y-2' : '',
            className
          )}
        >
          <Link
            href={mediaLinkHref}
            prefetch={false}
            scroll={true}
            className="lightbox-item"
          >
            <img
              src={resolvedSrc}
              alt={alt}
              title={title}
              width={resolvedWidth}
              height={resolvedHeight}
              loading={lazy ? 'lazy' : 'eager'}
              style={aspectRatioStyle}
              className={clsx(
                rounded || defaultRounded,
                aspect,
                !resolvedWidth && !resolvedHeight ? 'w-full h-auto' : '',
                className
              )}
            />
          </Link>
          <figcaption
            className="text-sm text-gray-600 text-center italic"
            dangerouslySetInnerHTML={{ __html: caption }}
          />
        </figure>
      )
    }

    // Return with or without paragraph wrapper based on wrap prop
    return wrap ? <Paragraph>{figureElement}</Paragraph> : figureElement
  }

  // No caption case - return with or without paragraph wrapper based on wrap prop
  return wrap ? <Paragraph>{imageElement}</Paragraph> : imageElement
}
