import React from 'react'
import { readdirSync } from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { GalleryPopup } from '@/components/lightbox/gallery-popup'
import clsx from 'clsx'

interface PageProps {
  params: Promise<{
    slug?: string[]
  }>
}

function getSlugPath(slug?: string[]): string | null {
  // If no slug or empty slug array, return null to trigger 404
  if (!slug || slug.length === 0) {
    return null
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

// Generate static params for all TSX block files to prerender them
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/blocks')

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

// This makes the route optional, so it can handle both "/" and "/slug"
export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const slugPath = getSlugPath(slug)

  // If no slug provided, show 404
  // Additional type guard to ensure slugPath is never null/undefined for the dynamic import
  if (!slugPath || typeof slugPath !== 'string') {
    notFound()
  }

  const slugsWithTopPadding = ['section-1', 'accordion-1']
  const slugsWithBottomPadding = ['section-1']
  const shouldAddTopPadding = slugsWithTopPadding.includes(slugPath)
  const shouldAddBottomPadding = slugsWithBottomPadding.includes(slugPath)

  try {
    const { default: Content, metadata } = await import(`@/blocks/${slugPath}.tsx`)

    return (
      <div className="overflow-hidden">
        <main
          className={clsx(
            '[&>.content-wrapper]:px-6 [&>.content-wrapper]:lg:px-8 [&>.content-wrapper]:mx-auto [&>.content-wrapper]:max-w-3xl',
            '[&>.aligncontent]:px-6 [&>.aligncontent]:lg:px-8 [&>.aligncontent]:mx-auto [&>.aligncontent]:max-w-3xl',
            '[&>*:last-child:not(div):not(section)]:mb-40 [&>*:last-child:is(.content-wrapper)]:mb-40',
            shouldAddTopPadding && 'pt-30',
            shouldAddBottomPadding && 'pb-30'
          )}
        >
          <Content />
          <GalleryPopup />
        </main>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
