import { getPageSlugs } from '@/tools/api/get-page-slugs'
import { getPostSlugs } from '@/tools/api/get-post-slugs'
import { getCategorySlugs } from '@/tools/api/get-category-slugs'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateSitemaps() {
  const sitemaps = [{ id: 'post' }, { id: 'page' }]
  return sitemaps
}

export default async function sitemap({
  id,
}: {
  id: string
}): Promise<MetadataRoute.Sitemap> {
  var resolvedMaps: any

  if (id == 'post') {
    const { postSlugs } = await getPostSlugs()
    var postMaps: any
    if (Array.isArray(postSlugs)) {
      postMaps = postSlugs.map(
        async (item: { slug: string; modified: any; uri: string }) => ({
          url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL + item.uri}`,
          lastModified: new Date(item.modified),
          changeFrequency: 'daily',
        })
      )
    }

    resolvedMaps = await Promise.all(postMaps)
  } else if (id === 'page') {
    const { pageSlugs } = await getPageSlugs()
    const { categorySlugs } = await getCategorySlugs()
    const base = process.env.NEXT_PUBLIC_PRODUCTION_URL ?? ''

    // Map all pages
    const pageMaps = Array.isArray(pageSlugs)
      ? pageSlugs.map(
          (item: {
            slug: string
            modified: string | number | Date
            uri: string
          }) => ({
            url: base + item.uri,
            lastModified: new Date(item.modified),
            changeFrequency: 'daily',
          })
        )
      : []

    const categoryMaps = Array.isArray(categorySlugs)
      ? categorySlugs.map((cat: { slug: string; uri: string }) => ({
          url: base + cat.uri,
          changeFrequency: 'weekly',
        }))
      : []

    resolvedMaps = [
      ...(await Promise.all(pageMaps)),
      ...(await Promise.all(categoryMaps)),
    ]
  }

  return [...resolvedMaps]
}
