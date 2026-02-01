import { clsx } from 'clsx'
import Link from 'next/link'
import { Paragraph } from '@/components/paragraph'
import type { ComponentProps } from 'react'
import { getStudioImage } from '@/utils/studio-helpers'

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

  // Default to 'large' size for metadata lookup if no size specified
  const effectiveSize = size || 'large'

  // Get resolved image from metadata (URL + dimensions)
  const studioImage = getStudioImage(src, effectiveSize)

  // Resolve src and dimensions
  const resolvedSrc = studioImage?.url || src
  let resolvedWidth: number | 'auto' | undefined = width
  let resolvedHeight: number | 'auto' | undefined = height

  // Use metadata dimensions if not explicitly provided
  if (!hasExplicitWidth && !hasExplicitHeight && studioImage) {
    resolvedWidth = studioImage.width
    resolvedHeight = studioImage.height
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
  // If href is not set but mediaLink is true, use full size image for lightbox
  else if (!href && mediaLink) {
    const fullImage = getStudioImage(src, 'full')
    mediaLinkHref = fullImage?.url || src
    isMediaLink = true
  }

  // Calculate aspect ratio style if aspect prop is not provided and we have dimensions
  const aspectRatioStyle =
    !aspect && resolvedWidth && resolvedHeight
      ? { aspectRatio: `${resolvedWidth} / ${resolvedHeight}` }
      : undefined

  const imgClasses = clsx(
    rounded || defaultRounded,
    aspect,
    !resolvedWidth && !resolvedHeight ? 'w-full h-auto' : '',
    className
  )

  const imgTag = (
    <img
      src={resolvedSrc}
      alt={alt}
      title={title}
      width={resolvedWidth}
      height={resolvedHeight}
      loading={lazy ? 'lazy' : 'eager'}
      style={aspectRatioStyle}
      className={imgClasses}
    />
  )

  let imageElement = imgTag

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
          {imgTag}
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
          {imgTag}
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
          {imgTag}
        </Link>
      )
    }
  }

  // Handle caption case
  if (caption) {
    let figureElement = (
      <figure className="space-y-2">
        {imgTag}
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
            {imgTag}
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
