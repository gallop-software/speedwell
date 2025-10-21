'use server'

import React from 'react'
import { BlogClient } from './blog-client'
import { getAllBlogPosts } from '@/utils/mdx-imports'

export async function Blog({ className }: { className?: string }) {
  const posts = await getAllBlogPosts()

  // Map the imported posts to the format expected by BlogClient
  const clientPosts = posts.map((post) => ({
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
    <BlogClient
      posts={clientPosts}
      className={className}
    />
  )
}
