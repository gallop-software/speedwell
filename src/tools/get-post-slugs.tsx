import blogData from '@/data/_blog.json'

type PostSlugItem = {
  slug: string
  modified: string
  uri: string
}

type BlogPost = {
  slug: string
  metadata: {
    date?: string
  }
}

export async function getPostSlugs(): Promise<{ postSlugs: PostSlugItem[] }> {
  const postSlugs: PostSlugItem[] = (blogData as BlogPost[]).map((post) => ({
    slug: post.slug,
    modified: post.metadata.date
      ? new Date(post.metadata.date).toISOString()
      : new Date().toISOString(),
    uri: `/post/${post.slug}`,
  }))

  return { postSlugs }
}
