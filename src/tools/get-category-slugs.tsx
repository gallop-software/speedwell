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
  const postsDir = path.join(process.cwd(), 'src/blog')
  const files = readdirSync(postsDir).filter((file) => file.endsWith('.tsx'))
  const categorySet = new Set<string>()

  for (const file of files) {
    const slug = file.replace(/\.tsx$/, '')

    try {
      const { metadata } = await import(`../../blog/${slug}.tsx`)

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
