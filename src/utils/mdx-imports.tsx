import type { ComponentType } from 'react'
import React from 'react'
import fs from 'fs'
import path from 'path'
import { Markdown } from '../components/markdown'

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

export interface MDXPost {
  metadata: Metadata
  markdown: React.ReactNode
}

export interface BlogPost {
  slug: string
  metadata: Metadata
  Component: React.ReactNode
  exists: boolean
}

// Function to dynamically import an MDX file using next-mdx-remote/rsc (server-side)
export async function importMDXPost(slug: string): Promise<MDXPost | null> {
  try {
    // Import the TSX file (server-side only)
    const postModule = await import(`@/markdown/post/${slug}.tsx`)

    if (!postModule.default || !postModule.metadata) {
      console.warn(`No default export or metadata found in ${slug}.tsx`)
      return null
    }

    const Component = postModule.default
    const metadata = postModule.metadata as Metadata

    return {
      metadata,
      markdown: <Component />,
    }
  } catch (error) {
    console.error(`Failed to import ${slug}.tsx:`, error)
    return null
  }
}

// Function to get all blog posts by importing them
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Read the posts directory to get all MDX files
  const postsDirectory = path.join(process.cwd(), 'src/markdown/post')

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

  const posts: BlogPost[] = []
  let successCount = 0
  let errorCount = 0

  for (const slug of slugs) {
    const post = await importMDXPost(slug)
    if (post) {
      posts.push({
        slug,
        metadata: post.metadata,
        Component: post.markdown,
        exists: true,
      })
      successCount++
    } else {
      errorCount++
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

// Alternative: Function to get a single blog post
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await importMDXPost(slug)

  if (!post) {
    return null
  }

  return {
    slug,
    metadata: post.metadata,
    Component: post.markdown,
    exists: true,
  }
}
