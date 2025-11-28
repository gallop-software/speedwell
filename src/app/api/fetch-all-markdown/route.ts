import { NextResponse } from 'next/server'
import { readdirSync } from 'fs'
import path from 'path'
import fs from 'fs'

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
  metadata: any
  content: any
}

export const dynamic = 'force-dynamic'

async function importMDXPost(slug: string): Promise<MDXPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/content', `${slug}.tsx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const metadataMatch = fileContent.match(
      /export\s+const\s+metadata\s*=\s*({[\s\S]*?\n})\s*;?/
    )
    if (!metadataMatch) {
      console.warn(`No metadata found in ${slug}.tsx`)
      return null
    }

    const metadata = eval(`(${metadataMatch[1]})`) as Metadata

    const content = fileContent
      .replace(/export\s+const\s+metadata\s*=\s*{[\s\S]*?\n}\s*;?/, '')
      .replace(/import\s+{[^}]*}\s+from\s+['"][^'"]*['"]/g, '')
      .trim()

    return {
      metadata,
      content,
    }
  } catch (error) {
    console.error(`Failed to import ${slug}.tsx:`, error)
    return null
  }
}

function getSlugPaths(
  dir: string,
  basePath = ''
): { slug: string[]; slugPath: string; filePath: string }[] {
  const out: { slug: string[]; slugPath: string; filePath: string }[] = []
  const entries = readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relative = basePath ? `${basePath}/${entry.name}` : entry.name

    if (entry.isDirectory()) {
      out.push(...getSlugPaths(fullPath, relative))
      continue
    }

    if (!entry.name.endsWith('.tsx')) continue

    const slugPathNoExt = relative.replace(/\.tsx$/, '')
    const segs = slugPathNoExt.split('/').map((seg) => {
      try {
        return encodeURIComponent(decodeURIComponent(seg))
      } catch {
        return seg
      }
    })

    const slug = segs.length === 1 && segs[0] === 'index' ? [] : segs
    const slugPath = segs.join('/') || 'index'

    out.push({ slug, slugPath, filePath: fullPath })
  }

  return out
}

export async function GET() {
  try {
    const contentDir = path.join(process.cwd(), 'src/content')
    const entries = getSlugPaths(contentDir)

    const results: any[] = await Promise.all(
      entries.map(async ({ slug, slugPath }) => {
        const post = await importMDXPost(slugPath)
        return {
          slug,
          slugPath,
          metadata: post?.metadata,
          content: post?.content,
        }
      })
    )

    return NextResponse.json(results)
  } catch (err) {
    console.error('Error reading content:', err)
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    )
  }
}
