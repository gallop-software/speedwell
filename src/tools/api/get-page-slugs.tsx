import { readdirSync, statSync } from 'fs'
import path from 'path'

type PageSlugItem = {
  slug: string
  modified: string
  uri: string
}

export async function getPageSlugs(): Promise<{ pageSlugs: PageSlugItem[] }> {
  const rootDir = path.join(process.cwd(), 'src/markdown')

  function walk(dir: string, basePath = ''): PageSlugItem[] {
    const entries = readdirSync(dir, { withFileTypes: true })
    const out: PageSlugItem[] = []

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      const relPath = basePath ? `${basePath}/${entry.name}` : entry.name

      if (entry.isDirectory()) {
        if (basePath === '' && entry.name === 'post') continue
        out.push(...walk(fullPath, relPath))
        continue
      }

      if (entry.isFile() && entry.name.endsWith('.tsx')) {
        const isIndex = entry.name.toLowerCase() === 'index.tsx'

        const rawPath = isIndex
          ? basePath
          : (basePath ? `${basePath}/` : '') + entry.name.slice(0, -4)

        const segments = rawPath
          .split('/')
          .filter(Boolean)
          .map((seg) => {
            const decoded = decodeURIComponent(seg)
            return encodeURIComponent(decoded).toLowerCase()
          })

        const slug = segments.join('/')
        const uri = '/' + slug
        const stats = statSync(fullPath)

        out.push({
          slug,
          modified: stats.mtime.toISOString(),
          uri: uri === '//' ? '/' : uri,
        })
      }
    }

    return out
  }

  return { pageSlugs: walk(rootDir) }
}
