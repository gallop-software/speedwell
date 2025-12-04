import { Footer } from '@/components'
import type { Metadata } from 'next'
import { readdirSync } from 'fs'
import path from 'path'
import React from 'react'
import Script from 'next/script'
import {
  baseURL,
  defaultOGImage,
  defaultSEOConfig,
  defaultStructuredData,
} from '../metadata'
import { notFound } from 'next/navigation'
import { GalleryPopup } from '@/components/lightbox/gallery-popup'
import { getMetaImage } from '@/utils/image-meta'

interface PageProps {
  params: Promise<{
    slug?: string[]
  }>
}

function getSlugPath(slug?: string[]): string {
  // If no slug or empty slug array, return 'index' for root
  if (!slug || slug.length === 0) {
    return 'index'
  }
  // Decode then re-encode to lowercase to match actual filenames
  const normalizedSlug = slug.map((segment) => {
    // First decode in case it's already encoded, then encode to lowercase
    const decoded = decodeURIComponent(segment)
    return encodeURIComponent(decoded).toLowerCase()
  })
  // Join slug parts with '/' for nested routes
  return normalizedSlug.join('/')
}

// Generate static params for all TSX content files to prerender them
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/content')

  function getAllContentFiles(dir: string, basePath: string = ''): string[][] {
    const files = readdirSync(dir, { withFileTypes: true })
    const contentFiles: string[][] = []

    for (const file of files) {
      const fullPath = path.join(dir, file.name)
      const relativePath = basePath ? `${basePath}/${file.name}` : file.name

      if (file.isDirectory()) {
        // Recursively get files from subdirectories
        contentFiles.push(...getAllContentFiles(fullPath, relativePath))
      } else if (file.name.endsWith('.tsx')) {
        const slugPath = relativePath.replace(/\.tsx$/, '')
        const segments = slugPath.split('/').map((seg) => {
          try {
            return decodeURIComponent(seg)
          } catch {
            return seg
          }
        })
        contentFiles.push(
          segments.length === 1 && segments[0] === 'index' ? [] : segments
        )
      }
    }

    return contentFiles
  }

  const allFiles = getAllContentFiles(contentDir)

  return allFiles.map((slugArray) => ({
    slug: slugArray,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const slugPath = getSlugPath(slug)

  try {
    const { metadata } = await import(`../../content/${slugPath}.tsx`)

    // Define image data variables
    const openGraphImageData = metadata?.openGraph?.image
      ? getMetaImage(metadata.openGraph.image.url, 'large')
      : null

    const twitterImageData = metadata?.twitter?.image
      ? getMetaImage(metadata.twitter.image, 'large')
      : null

    // Build comprehensive metadata object
    const generatedMetadata: Metadata = {
      // Primary SEO
      title: metadata?.title || 'Page',
      description: metadata?.description || 'A page on our website',

      // Keywords (if provided)
      keywords: metadata?.keywords || undefined,

      // Publication and modification dates for SEO
      other: {
        ...(metadata?.publishedDate && {
          'article:published_time': metadata.publishedDate,
        }),
        ...(metadata?.modifiedDate && {
          'article:modified_time': metadata.modifiedDate,
        }),
        ...metadata?.other,
      },

      // Canonical URL
      alternates: metadata?.alternates || undefined,

      // Author information
      authors: metadata?.authors || undefined,
      creator: defaultSEOConfig.creator,
      publisher: defaultSEOConfig.publisher,

      // Category and application info
      category: metadata?.category || undefined,
      applicationName: metadata?.applicationName || undefined,
      referrer: metadata?.referrer || 'origin-when-cross-origin',

      // Robots configuration
      robots: defaultSEOConfig.robots,

      // Open Graph
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

      // Twitter Card (always provide fallbacks from Open Graph)
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

    // Clean up undefined values to avoid cluttering the metadata
    Object.keys(generatedMetadata).forEach((key) => {
      if (generatedMetadata[key as keyof Metadata] === undefined) {
        delete generatedMetadata[key as keyof Metadata]
      }
    })

    return generatedMetadata
  } catch (error) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }
}

// This makes the route optional, so it can handle both "/" and "/slug"
export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const slugPath = getSlugPath(slug)

  try {
    const contentPath = `../../content/${slugPath}.tsx`
    const { default: Content, metadata } = await import(contentPath)

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [...defaultStructuredData, ...(metadata?.structuredData || [])],
    }

    return (
      <div className="overflow-hidden">
        <Script
          id="schema"
          type="application/ld+json"
        >
          {JSON.stringify(structuredData)}
        </Script>
        <main className="[&>.content-wrapper]:px-6 [&>.content-wrapper]:lg:px-8 [&>.content-wrapper]:mx-auto [&>.content-wrapper]:max-w-3xl [&>.aligncontent]:px-6 [&>.aligncontent]:lg:px-8 [&>.aligncontent]:mx-auto [&>.aligncontent]:max-w-3xl [&>*:last-child:not(div):not(section)]:mb-40 [&>*:last-child:is(.content-wrapper)]:mb-40">
          <Content />
          <GalleryPopup />
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}
