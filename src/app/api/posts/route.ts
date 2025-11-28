import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1', 10)
  const perPage = parseInt(searchParams.get('perPage') || '9', 10)

  try {
    // Read the static metadata file
    const metadataPath = path.join(process.cwd(), '_data/_blog.json')

    if (!fs.existsSync(metadataPath)) {
      return NextResponse.json(
        {
          error: 'Blog metadata not found. Run "npm run blog" to generate it.',
        },
        { status: 500 }
      )
    }

    const fileContent = fs.readFileSync(metadataPath, 'utf8')
    const allPosts = JSON.parse(fileContent)

    // Calculate pagination
    const totalPages = Math.ceil(allPosts.length / perPage)
    const start = (page - 1) * perPage
    const end = start + perPage
    const paginatedPosts = allPosts.slice(start, end)

    return NextResponse.json({
      posts: paginatedPosts,
      page,
      totalPages,
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
