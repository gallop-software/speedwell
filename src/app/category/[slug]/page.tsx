import React from 'react'
import { BlogClient } from '@/components/blog/blog-client'
import { getAllBlogPosts } from '@/utils/mdx-imports'
import { GalleryPopup } from '@/components/lightbox/gallery-popup'
import { FancyHeading, Footer, Navbar, Section } from '@/components'
import { getSlug } from '@/tools/get-slug'
import { getTitle } from '@/tools/get-title'

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
  const posts = await getAllBlogPosts()

  const filtered = category
    ? posts.filter((p) =>
        toCategoryArray(p.metadata.categories)
          .map(getSlug)
          .includes(getSlug(category))
      )
    : posts

  const clientPosts = filtered.map((post) => ({
    slug: post.slug,
    metadata: {
      title: post.metadata.title,
      date: post.metadata.date,
      categories: post.metadata.categories,
      featuredImage: post.metadata.featuredImage,
    },
    Component: post.Component,
  }))

  return (
    <div className="overflow-hidden">
      <main className="[&>p]:mx-auto [&>p]:max-w-3xl [&>.aligncontent]:mx-auto [&>.aligncontent]:max-w-3xl [&>*:last-child:not(div):not(section)]:mb-40">
        <Navbar />
        <Section className="bg-body2 py-20">
          <FancyHeading
            as="h1"
            text="Our Journal"
            accent={getTitle(category)}
          />
          <BlogClient posts={clientPosts} />
        </Section>
        <GalleryPopup />
      </main>
      <Footer />
    </div>
  )
}
