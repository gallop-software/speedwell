import { getSlug } from '@/tools/get-slug'
import { readdirSync } from 'fs'
import path from 'path'

type CategorySlug = {
  slug: string
  uri: string
}

export async function getCategorySlugs(): Promise<{
  categorySlugs: CategorySlug[]
}> {
  const postsDir = path.join(process.cwd(), 'src/app/markdown/post')
  const files = readdirSync(postsDir).filter((file) => file.endsWith('.mdx'))
  const categorySet = new Set<string>()

  for (const file of files) {
    const slugPath = `post/${file.replace(/\.mdx$/, '')}`

    try {
      const { metadata } = await import(`@/app/markdown/${slugPath}.mdx`)

      if (Array.isArray(metadata.categories)) {
        for (const category of metadata.categories) {
          if (typeof category === 'string' && category.trim()) {
            const slug = getSlug(category.trim())
            if (slug) {
              categorySet.add(slug)
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error reading ${file}:`, error)
    }
  }

  const categorySlugs: CategorySlug[] = Array.from(categorySet)
    .sort((a, b) => a.localeCompare(b))
    .map((slug) => ({
      slug,
      uri: `/category/${slug}`,
    }))

  return { categorySlugs }
}
