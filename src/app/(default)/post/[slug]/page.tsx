import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { notFound } from 'next/navigation'
import { readdirSync } from 'fs'
import path from 'path'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'src/blog')
  const files = readdirSync(blogDir).filter((file) => file.endsWith('.tsx'))

  return files.map((file) => ({
    slug: file.replace(/\.tsx$/, ''),
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  try {
    const postModule = await import(`@/blog/${slug}.tsx`)
    const postMetadata = postModule.metadata as PageMetadata
    return generatePageMetadata(postMetadata, ['post', slug])
  } catch {
    return { title: 'Post Not Found' }
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params

  try {
    const postModule = await import(`@/blog/${slug}.tsx`)
    const Content = postModule.default
    const metadata = postModule.metadata as PageMetadata

    return (
      <PageWrapper metadata={metadata}>
        <Content />
      </PageWrapper>
    )
  } catch {
    notFound()
  }
}
