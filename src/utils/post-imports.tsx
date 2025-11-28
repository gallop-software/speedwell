import type { ComponentType } from 'react'
import React from 'react'
import fs from 'fs'
import path from 'path'

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
    const postModule = await import(`@/content/post/${slug}.tsx`)

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
