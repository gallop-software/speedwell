import type { Metadata } from 'next'
import { baseURL, defaultOGImage, defaultSEOConfig } from '@/app/metadata'
import { getMetaImage } from '@/utils/image-meta'

export interface PageMetadata {
  title?: string
  description?: string
  keywords?: string[]
  slug?: string
  featuredImage?: string
  focusKeyword?: string | string[]
  readingTimeMinutes?: number
  date?: string
  categories?: string[]
  publishDate?: string
  modifiedDate?: string
  alternates?: { canonical?: string }
  authors?: { name: string; url?: string }[]
  category?: string
  applicationName?: string
  referrer?: string
  openGraph?: {
    type?: 'website' | 'article'
    locale?: string
    url?: string
    siteName?: string
    title?: string
    description?: string
    image?: {
      url: string
      alt?: string
    }
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    site?: string
    creator?: string
    title?: string
    description?: string
    image?: string
  }
  other?: Record<string, string>
  structuredData?: object[]
}

export function generatePageMetadata(
  metadata: PageMetadata,
  slug?: string[]
): Metadata {
  const openGraphImageData = metadata?.openGraph?.image
    ? getMetaImage(metadata.openGraph.image.url, 'large')
    : null

  const twitterImageData = metadata?.twitter?.image
    ? getMetaImage(metadata.twitter.image, 'large')
    : null

  return {
    title: metadata?.title || 'Page',
    description: metadata?.description || 'A page on our website',
    keywords: metadata?.keywords || undefined,
    other: {
      ...(metadata?.publishDate && {
        'article:published_time': metadata.publishDate,
      }),
      ...(metadata?.modifiedDate && {
        'article:modified_time': metadata.modifiedDate,
      }),
      ...metadata?.other,
    },
    alternates: metadata?.alternates || undefined,
    authors: metadata?.authors || undefined,
    creator: defaultSEOConfig.creator,
    publisher: defaultSEOConfig.publisher,
    category: metadata?.category || undefined,
    applicationName: metadata?.applicationName || undefined,
    referrer: 'origin-when-cross-origin',
    robots: defaultSEOConfig.robots,
    openGraph: {
      type: metadata?.openGraph?.type || 'website',
      locale: metadata?.openGraph?.locale || 'en_US',
      url:
        metadata?.openGraph?.url ||
        `${baseURL}${slug ? `/${slug.join('/')}` : ''}`,
      siteName: metadata?.openGraph?.siteName || 'Speedwell',
      title: metadata?.openGraph?.title || metadata?.title || 'Page',
      description:
        metadata?.openGraph?.description ||
        metadata?.description ||
        'A page on our website',
      images:
        metadata?.openGraph?.image && openGraphImageData
          ? [
              {
                url: openGraphImageData.url,
                width: openGraphImageData.width,
                height: openGraphImageData.height,
                ...(metadata.openGraph.image.alt && {
                  alt: metadata.openGraph.image.alt,
                }),
              },
            ]
          : [defaultOGImage],
    },
    twitter: {
      card: metadata?.twitter?.card || 'summary_large_image',
      site: metadata?.twitter?.site || undefined,
      creator: metadata?.twitter?.creator || undefined,
      title:
        metadata?.twitter?.title ||
        metadata?.openGraph?.title ||
        metadata?.title ||
        'Page',
      description:
        metadata?.twitter?.description ||
        metadata?.openGraph?.description ||
        metadata?.description ||
        'A page on our website',
      images:
        metadata?.twitter?.image && twitterImageData
          ? [twitterImageData.url]
          : undefined,
    },
  }
}
