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
  // Get total pages from static metadata file
  let totalPages = 1
  try {
    const metadataPath = path.join(process.cwd(), '_data/_blog.json')
    if (fs.existsSync(metadataPath)) {
      const fileContent = fs.readFileSync(metadataPath, 'utf8')
      const allPosts = JSON.parse(fileContent)
      totalPages = Math.ceil(allPosts.length / 9)
    }
  } catch (error) {
    console.error('Failed to read blog metadata:', error)
  }

  return (
    <BlogClient
      totalPages={totalPages}
      currentPage={0}
      className={className}
    />
  )
}
