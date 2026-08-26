'use server'

import { BlogClient } from './blog-client'
import blogData from '@/data/_blog.json'
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
  // Blog metadata is bundled at build time via the @/data/* alias (-> ./_data/*).
  // Reading it from disk at runtime does not work on filesystem-less runtimes
  // (e.g. Cloudflare Workers), so import it statically instead.
  let allPosts: any[] = blogData as any[]

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

  // Sort by date, newest first (copy first to avoid mutating the imported array)
  allPosts = [...allPosts].sort(
    (a: any, b: any) =>
      DateTime.fromISO(b.metadata.date || '').toMillis() -
      DateTime.fromISO(a.metadata.date || '').toMillis()
  )

  return (
    <BlogClient
      allPosts={allPosts}
      perPage={perPage}
      className={className}
      loadMoreText={loadMoreText}
    />
  )
}
