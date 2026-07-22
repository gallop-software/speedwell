import { BlogClient } from '@/components/blog/blog-client'
import { FancyHeading } from '@/components/fancy-heading'
import { PageWrapper } from '@/components/page-wrapper'
import { Section } from '@/components/section'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { getSlug } from '@/tools/get-slug'
import { getTitle } from '@/tools/get-title'
import blogData from '@/data/_blog.json'

interface PageProps {
  params: Promise<{
    slug?: string
  }>
}

function toCategoryArray(value?: string | string[]) {
  if (!value) return []
  if (Array.isArray(value)) return value
  return value
    .split(/[,\|/]/)
    .map((s) => s.trim())
    .filter(Boolean)
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const category = slug ? decodeURIComponent(slug) : ''
  const categoryTitle = getTitle(category)

  const metadata: PageMetadata = {
    title: categoryTitle ? `${categoryTitle} | Our Journal` : 'Our Journal',
    description: categoryTitle
      ? `Browse our articles about ${categoryTitle.toLowerCase()}`
      : 'Browse all articles in our journal',
    slug: `category/${slug}`,
  }

  return generatePageMetadata(metadata, ['category', slug || ''])
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const category = slug ? decodeURIComponent(slug) : ''

  // Blog metadata is bundled at build time via the @/data/* alias (-> ./_data/*).
  // Reading it from disk at runtime does not work on Cloudflare Workers.
  const posts = blogData as any[]

  // Filter by category on server
  let allPosts: any[] = category
    ? posts.filter((post: any) =>
        toCategoryArray(post.metadata.categories)
          .map(getSlug)
          .includes(getSlug(category))
      )
    : posts

  // Sort by date desc (newest first; copy to avoid mutating the imported array)
  allPosts = [...allPosts].sort(
    (a: any, b: any) =>
      new Date(b.metadata.date || '').getTime() -
      new Date(a.metadata.date || '').getTime()
  )

  const metadata: PageMetadata = {
    title: getTitle(category)
      ? `${getTitle(category)} | Our Journal`
      : 'Our Journal',
  }

  return (
    <PageWrapper metadata={metadata}>
      <Section className="bg-body2 py-20">
        <FancyHeading
          as="h1"
          text="Our Journal"
          accent={getTitle(category)}
        />
        <BlogClient
          allPosts={allPosts}
          perPage={9}
        />
      </Section>
    </PageWrapper>
  )
}
