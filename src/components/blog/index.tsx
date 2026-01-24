'use server'

import React from 'react'
import { BlogClient } from './blog-client'
import fs from 'fs'
import path from 'path'
import { DateTime } from 'luxon'

export async function Blog({
  className,
  perPage = 9,
  categoriesInclude,
  categoriesExclude,
  loadMoreText = 'Load More Posts',
}: {
  className?: string
  perPage?: number
  categoriesInclude?: string[]
  categoriesExclude?: string[]
  loadMoreText?: string
}) {
  // Get all posts from static metadata file and sort by date (newest first)
  let allPosts = []
  try {
    const metadataPath = path.join(process.cwd(), '_data/_blog.json')
    if (fs.existsSync(metadataPath)) {
      const fileContent = fs.readFileSync(metadataPath, 'utf8')
      allPosts = JSON.parse(fileContent)

      // Filter by included categories (if specified), otherwise check excludes
      if (categoriesInclude && categoriesInclude.length > 0) {
        allPosts = allPosts.filter((post: any) => {
          const postCategories = post.metadata.categories || []
          return postCategories.some((cat: string) =>
            categoriesInclude.includes(cat)
          )
        })
      } else if (categoriesExclude && categoriesExclude.length > 0) {
        // Only apply excludes if no includes are specified
        allPosts = allPosts.filter((post: any) => {
          const postCategories = post.metadata.categories || []
          return !postCategories.some((cat: string) =>
            categoriesExclude.includes(cat)
          )
        })
      }

      // Sort by date, newest first
      allPosts.sort(
        (a: any, b: any) =>
          DateTime.fromISO(b.metadata.date || '').toMillis() -
          DateTime.fromISO(a.metadata.date || '').toMillis()
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
      loadMoreText={loadMoreText}
    />
  )
}
