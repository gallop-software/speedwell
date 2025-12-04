import type { ComponentType } from 'react'
import React from 'react'
import fs from 'fs'
import path from 'path'
import { getPostSlugs } from '@/tools/api/get-post-slugs'

export type Metadata = {
  title: string
  description: string
  date: string
  slug: string
  featuredImage?: string
  categories?: string[]
  author?: string
  keywords?: string[]
  focusKeyword?: string[]
  readingTimeMinutes?: number
  publishDate?: string
  lastModified?: string
  alternates?: {
    canonical?: string
  }
  authors?: Array<{ name: string }>
  category?: string
  applicationName?: string
  structuredData?: Array<Record<string, any>>
  openGraph?: {
    type?: string
    locale?: string
    url?: string
    siteName?: string
    title?: string
    description?: string
    image?:
      | string
      | {
          url: string
          alt?: string
        }
  }
  twitter?: {
    card?: string
    site?: string
    creator?: string
    title?: string
    description?: string
    image?: string
  }
}

export interface Post {
  metadata: Metadata
  content: React.ReactNode
}

export interface BlogPost {
  slug: string
  metadata: Metadata
  Component: React.ReactNode
  exists: boolean
}

// Function to dynamically import a post file
export async function importPost(slug: string): Promise<Post | null> {
  try {
    // Import the TSX file (server-side only)
    const postModule = await import(`../content/post/${slug}.tsx`)

    if (!postModule.default || !postModule.metadata) {
      console.warn(`No default export or metadata found in ${slug}.tsx`)
      return null
    }

    // Prefer BlogContent export for sidebar, fall back to default for pages
    const Component = postModule.BlogContent || postModule.default
    const metadata = postModule.metadata as Metadata

    return {
      metadata,
      content: <Component />,
    }
  } catch (error) {
    console.error(`Failed to import ${slug}.tsx:`, error)
    return null
  }
}

// Function to get all blog posts by importing them
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Read the posts directory to get all TSX files
  const postsDirectory = path.join(process.cwd(), 'src/content/post')

  let filenames: string[] = []
  try {
    filenames = fs.readdirSync(postsDirectory)
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }

  // Filter to only .tsx files and extract slugs
  const slugs = filenames
    .filter((filename) => filename.endsWith('.tsx'))
    .map((filename) => filename.replace('.tsx', ''))

  // Import all posts in parallel
  const postPromises = slugs.map((slug) => importPost(slug))
  const results = await Promise.all(postPromises)

  const posts: BlogPost[] = []
  for (let i = 0; i < results.length; i++) {
    const post = results[i]
    if (post) {
      posts.push({
        slug: slugs[i],
        metadata: post.metadata,
        Component: post.content,
        exists: true,
      })
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date)
    const dateB = new Date(b.metadata.date)
    return dateB.getTime() - dateA.getTime()
  })

  return posts
}

// Get paginated posts with prefetch buffer
export async function getPaginatedPosts(
  page: number = 1,
  postsPerPage: number = 9
): Promise<{
  posts: BlogPost[]
  prefetchPosts: BlogPost[]
  totalPages: number
  currentPage: number
}> {
  const { postSlugs } = await getPostSlugs()
  const slugs = postSlugs.map((item) => item.slug)

  // Get all metadata first (lightweight - no component imports)
  const metadataPromises = slugs.map(async (slug) => {
    try {
      const postModule = await import(`../content/post/${slug}.tsx`)
      return {
        slug,
        metadata: postModule.metadata as Metadata,
      }
    } catch (error) {
      console.error(`Failed to load metadata for ${slug}:`, error)
      return null
    }
  })

  const allMetadata = (await Promise.all(metadataPromises)).filter(
    Boolean
  ) as Array<{
    slug: string
    metadata: Metadata
  }>

  // Sort by date (newest first)
  allMetadata.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )

  // Calculate pagination
  const totalPages = Math.ceil(allMetadata.length / postsPerPage)
  const start = (page - 1) * postsPerPage
  const end = start + postsPerPage
  const prefetchEnd = end + postsPerPage // Get next 9 posts for prefetch

  // Current page posts
  const currentPageMetadata = allMetadata.slice(start, end)

  // Next page posts for prefetch
  const prefetchMetadata = allMetadata.slice(end, prefetchEnd)

  // Import full content for current page
  const currentPagePosts = await Promise.all(
    currentPageMetadata.map(async ({ slug, metadata }) => {
      const postModule = await import(`../content/post/${slug}.tsx`)
      const Component = postModule.BlogContent || postModule.default
      return {
        slug,
        metadata,
        Component: <Component />,
        exists: true,
      }
    })
  )

  // Import full content for prefetch (next page)
  const prefetchPosts = await Promise.all(
    prefetchMetadata.map(async ({ slug, metadata }) => {
      const postModule = await import(`../content/post/${slug}.tsx`)
      const Component = postModule.BlogContent || postModule.default
      return {
        slug,
        metadata,
        Component: <Component />,
        exists: true,
      }
    })
  )

  return {
    posts: currentPagePosts,
    prefetchPosts,
    totalPages,
    currentPage: page,
  }
}

// Alternative: Function to get a single blog post
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await importPost(slug)

  if (!post) {
    return null
  }

  return {
    slug,
    metadata: post.metadata,
    Component: post.content,
    exists: true,
  }
}
