'use server'

import React from 'react'
import { BlogClient } from './blog-client'
import fs from 'fs'
import path from 'path'

export async function Blog({
  className,
  page = 1,
}: {
  className?: string
  page?: number
}) {
  // Get initial posts and total pages from static metadata file
  let totalPages = 1
  let initialPosts = []
  try {
    const metadataPath = path.join(process.cwd(), '_data/_blog.json')
    if (fs.existsSync(metadataPath)) {
      const fileContent = fs.readFileSync(metadataPath, 'utf8')
      const allPosts = JSON.parse(fileContent)
      totalPages = Math.ceil(allPosts.length / 9)
      // Get first 9 posts for server-side rendering
      initialPosts = allPosts.slice(0, 9)
    }
  } catch (error) {
    console.error('Failed to read blog metadata:', error)
  }

  return (
    <BlogClient
      totalPages={totalPages}
      currentPage={1}
      initialPosts={initialPosts}
      className={className}
    />
  )
}
