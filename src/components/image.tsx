import { clsx } from 'clsx'
import Link from 'next/link'
import { Paragraph } from '@/components/paragraph'
import type { ComponentProps } from 'react'

export interface ImageProps extends Omit<
  ComponentProps<'img'>,
  'alt' | 'title'
> {
  /** Image URL, written out in full (see "Adding an image" in CLAUDE.md) */
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
  /** Width in pixels of the file at `src` */
  width?: number | undefined
  /** Height in pixels of the file at `src` */
  height?: number | undefined
  /** Link href - when it points at an image file, it opens in the lightbox */
  href?: string
  /** Rounded corners class - overrides default rounded classes */
  rounded?: string
  /** Aspect ratio class - overrides default aspect ratio classes */
  aspect?: string
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
  rounded,
  aspect,
  lazy = true,
}: ImageProps) {
  const defaultRounded = 'rounded-lg'

  // A link to an image file opens in the lightbox
  const isMediaLink = Boolean(
    href && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(href)
  )
  const mediaLinkHref = isMediaLink ? href : null

  // Reserve the image's space before it loads, unless an aspect class says how
  const aspectRatioStyle =
    !aspect && width && height
      ? { aspectRatio: `${width} / ${height}` }
      : undefined

  const imgClasses = clsx(
    rounded || defaultRounded,
    aspect,
    !width && !height ? 'w-full h-auto' : '',
    className
  )

  const imgTag = (
    <img
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
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
          !width && !height ? 'w-full h-auto' : ''
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
          className="text-sm text-contrast-light text-center italic"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      </figure>
    )

    if (isMediaLink && mediaLinkHref) {
      figureElement = (
        <figure
          className={clsx(
            'rounded-none',
            !width && !height ? 'w-full h-auto space-y-2' : '',
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
            className="text-sm text-contrast-light text-center italic"
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
