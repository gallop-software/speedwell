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
    // Read the MDX file content (server-side only)
    const filePath = path.join(
      process.cwd(),
      'src/markdown/post',
      `${slug}.mdx`
    )
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // Extract metadata from the export const metadata format
    const metadataMatch = fileContent.match(
      /export\s+const\s+metadata\s*=\s*({[\s\S]*?\n})\s*;?/
    )
    if (!metadataMatch) {
      console.warn(`No metadata found in ${slug}.mdx`)
      return null
    }

    // Parse metadata (eval is safe here since we control the content)
    const metadata = eval(`(${metadataMatch[1]})`) as Metadata

    // Remove metadata export and imports from content for MDX processing
    const content = fileContent
      .replace(/export\s+const\s+metadata\s*=\s*{[\s\S]*?\n}\s*;?/, '')
      .replace(/import\s+{[^}]*}\s+from\s+['"][^'"]*['"]/g, '')
      .trim()

    return {
      metadata,
      markdown: <Markdown content={content} />,
    }
  } catch (error) {
    console.error(`Failed to import ${slug}.mdx:`, error)
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

  // Filter to only .mdx files and extract slugs
  const slugs = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replace('.mdx', ''))

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
