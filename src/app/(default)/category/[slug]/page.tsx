import React from 'react'
import { BlogClient } from '@/components/blog/blog-client'
import { GalleryPopup } from '@/components/lightbox/gallery-popup'
import { FancyHeading, Footer, Navbar, Section } from '@/components'
import { getSlug } from '@/tools/get-slug'
import { getTitle } from '@/tools/get-title'
import fs from 'fs'
import path from 'path'

interface PageProps {
  params: Promise<{
    slug?: string
  }>
}

function toCategoryArray(value?: string | string[]) {
  if (!value) return []
  if (Array.isArray(value)) return value
  return value
    .split(/[,\|/]/)
    .map((s) => s.trim())
    .filter(Boolean)
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const category = slug ? decodeURIComponent(slug) : ''

  // Load and filter posts from static JSON file
  let allPosts: any[] = []
  try {
    const metadataPath = path.join(process.cwd(), '_data/_blog.json')
    if (fs.existsSync(metadataPath)) {
      const fileContent = fs.readFileSync(metadataPath, 'utf8')
      const posts = JSON.parse(fileContent)

      // Filter by category on server
      allPosts = category
        ? posts.filter((post: any) =>
            toCategoryArray(post.metadata.categories)
              .map(getSlug)
              .includes(getSlug(category))
          )
        : posts

      // Sort by date desc (newest first)
      allPosts.sort(
        (a: any, b: any) =>
          new Date(b.metadata.date || '').getTime() -
          new Date(a.metadata.date || '').getTime()
      )
    }
  } catch (error) {
    console.error('Failed to read blog metadata:', error)
  }

  return (
    <div className="overflow-hidden">
      <main className="[&>p]:mx-auto [&>p]:max-w-3xl [&>.aligncontent]:mx-auto [&>.aligncontent]:max-w-3xl [&>*:last-child:not(div):not(section)]:mb-40">
        <Section className="bg-body2 py-20">
          <FancyHeading
            as="h1"
            text="Our Journal"
            accent={getTitle(category)}
          />
          <BlogClient
            allPosts={allPosts}
            perPage={9}
          />
        </Section>
        <GalleryPopup />
      </main>
      <Footer />
    </div>
  )
}
