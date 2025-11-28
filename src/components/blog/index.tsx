'use server'

import React from 'react'
import { BlogClient } from './blog-client'
import fs from 'fs'
import path from 'path'

export async function Blog({
  className,
  perPage = 9,
}: {
  className?: string
  perPage?: number
}) {
  // Get all posts from static metadata file and sort by date (newest first)
  let allPosts = []
  try {
    const metadataPath = path.join(process.cwd(), '_data/_blog.json')
    if (fs.existsSync(metadataPath)) {
      const fileContent = fs.readFileSync(metadataPath, 'utf8')
      allPosts = JSON.parse(fileContent)

      // Sort by date, newest first
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
    <BlogClient
      allPosts={allPosts}
      perPage={perPage}
      className={className}
    />
  )
}
