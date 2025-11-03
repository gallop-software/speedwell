import { readdirSync, statSync } from 'fs'
import path from 'path'

type PostSlugItem = {
  slug: string
  modified: string
  uri: string
}

export async function getPostSlugs(): Promise<{ postSlugs: PostSlugItem[] }> {
  const postsDir = path.join(process.cwd(), 'src/markdown/post')

  function walk(dir: string, basePath = ''): PostSlugItem[] {
    const entries = readdirSync(dir, { withFileTypes: true })
    const out: PostSlugItem[] = []

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      const relPath = basePath ? `${basePath}/${entry.name}` : entry.name

      if (entry.isDirectory()) {
        out.push(...walk(fullPath, relPath))
        continue
      }

      if (entry.isFile() && entry.name.endsWith('.mdx')) {
        const withoutExt = relPath.slice(0, -4)
        const segments = withoutExt.split('/').map((seg) => {
          const decoded = decodeURIComponent(seg)
          return encodeURIComponent(decoded).toLowerCase()
        })
        const slug = segments.join('/')
        const stats = statSync(fullPath)

        out.push({
          slug,
          modified: stats.mtime.toISOString(),
          uri: `/post/${slug}`,
        })
      }
    }

    return out
  }

  return { postSlugs: walk(postsDir) }
}
