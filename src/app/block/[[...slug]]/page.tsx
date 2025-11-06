import React from 'react'
import { readdirSync } from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { GalleryPopup } from '@/components/lightbox/gallery-popup'

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

// Generate static params for all MDX files to prerender them
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/blocks')

  function getAllMdxFiles(dir: string, basePath: string = ''): string[][] {
    const files = readdirSync(dir, { withFileTypes: true })
    const mdxFiles: string[][] = []

    for (const file of files) {
      const fullPath = path.join(dir, file.name)
      const relativePath = basePath ? `${basePath}/${file.name}` : file.name

      if (file.isDirectory()) {
        // Recursively get files from subdirectories
        mdxFiles.push(...getAllMdxFiles(fullPath, relativePath))
      } else if (file.name.endsWith('.mdx')) {
        const slugPath = relativePath.replace(/\.mdx$/, '')
        const segments = slugPath.split('/').map((seg) => {
          try {
            return decodeURIComponent(seg)
          } catch {
            return seg
          }
        })
        mdxFiles.push(
          segments.length === 1 && segments[0] === 'index' ? [] : segments
        )
      }
    }

    return mdxFiles
  }

  const allFiles = getAllMdxFiles(contentDir)

  return allFiles.map((slugArray) => ({
    slug: slugArray,
  }))
}

// This makes the route optional, so it can handle both "/" and "/slug"
export default async function Page({ params }: PageProps) {
  const { slug } = await params
  console.log(slug)
  const slugPath = getSlugPath(slug)

  // If no slug provided, show 404
  if (!slugPath) {
    notFound()
  }

  // Slugs that should have py-30 class
  const slugsWithPadding = ['section-1', 'hero-2', 'hero-3']
  const shouldAddPadding = slugsWithPadding.includes(slugPath)

  try {
    const { default: MDXContent, metadata } = await import(
      `@/blocks/${slugPath}.mdx`
    )

    return (
      <div className="overflow-hidden">
        <main
          className={`[&>.content-wrapper]:px-6 [&>.content-wrapper]:lg:px-8 [&>.content-wrapper]:mx-auto [&>.content-wrapper]:max-w-3xl [&>.aligncontent]:px-6 [&>.aligncontent]:lg:px-8 [&>.aligncontent]:mx-auto [&>.aligncontent]:max-w-3xl [&>*:last-child:not(div):not(section)]:mb-40 [&>*:last-child:is(.content-wrapper)]:mb-40 ${shouldAddPadding ? 'py-30' : ''}`}
        >
          <MDXContent />
          <GalleryPopup />
        </main>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
