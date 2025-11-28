'use client'

import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import { Button } from '../button'
import { Heading } from '../heading'
import { Image } from '../image'
import DynamicSidebar from '../dynamic-sidebar'
import clsx from 'clsx'
import Link from 'next/link'
import { getSlug } from '@/tools/get-slug'
import chevronDownIcon from '@iconify/icons-heroicons/chevron-down'

// Helper function to decode HTML entities
const decodeHtmlEntities = (str: string): string => {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

interface BlogPost {
  slug: string
  metadata: {
    title?: string
    date?: string
    categories?: string[]
    featuredImage?: string
  }
}

export function BlogClient({
  totalPages = 1,
  currentPage = 1,
  initialPosts = [],
  className,
}: {
  totalPages?: number
  currentPage?: number
  initialPosts?: BlogPost[]
  className?: string
}) {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>(initialPosts)
  const [bufferedPosts, setBufferedPosts] = useState<BlogPost[]>([])
  const [page, setPage] = useState(currentPage)
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [columns, setColumns] = useState(3)
  const [isMasonryEnabled, setIsMasonryEnabled] = useState(true)
  const [containerHeight, setContainerHeight] = useState(0)
  const [layoutKey, setLayoutKey] = useState(0) // Force layout recalculation
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(<></>)

  // Load buffer on mount (initial posts already server-rendered)
  useEffect(() => {
    const loadBuffer = async () => {
      // Only fetch buffer if we have more pages
      if (totalPages > 1) {
        try {
          const bufferResponse = await fetch('/api/posts?page=2&perPage=9')
          if (bufferResponse.ok) {
            const bufferData = await bufferResponse.json()
            setBufferedPosts(bufferData.posts)
          }
        } catch (error) {
          console.error('Failed to load buffer:', error)
        }
      }
    }

    loadBuffer()
  }, [])

  // Calculate number of columns based on screen width
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      let newColumns = 3
      if (width < 768) {
        newColumns = 1
      } else if (width < 1024) {
        newColumns = 2
      } else {
        newColumns = 3
      }

      setColumns(newColumns)
      setIsMasonryEnabled(newColumns > 1)
    }

    updateColumns()

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        updateColumns()
        // Force layout recalculation by updating key
        setLayoutKey((prev) => prev + 1)
      }, 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  // Layout calculation (masonry for multi-column, simple for single column)
  const calculateLayout = useCallback(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth

    if (!isMasonryEnabled) {
      // Simple single column layout
      let currentHeight = 0
      itemRefs.current.forEach((item, index) => {
        if (!item) return

        item.style.position = 'relative'
        item.style.left = 'auto'
        item.style.top = 'auto'
        item.style.width = '100%'
        item.style.maxWidth = '100%'
        item.style.marginBottom = '32px'
      })

      // For single column, let the natural document flow handle height
      setContainerHeight(0)
      return
    }

    // Masonry layout for multi-column
    const gap = 32 // 2rem gap
    const availableWidth = Math.max(
      containerWidth - gap * (columns - 1),
      columns * 200
    )
    const columnWidth = availableWidth / columns
    const columnHeights = new Array(columns).fill(0)

    itemRefs.current.forEach((item, index) => {
      if (!item) return

      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      )

      // Position the item
      const x = shortestColumnIndex * (columnWidth + gap)
      const y = columnHeights[shortestColumnIndex]

      item.style.position = 'absolute'
      item.style.left = `${Math.min(x, containerWidth - columnWidth)}px`
      item.style.top = `${y}px`
      item.style.width = `${columnWidth}px`
      item.style.maxWidth = '100%'
      item.style.marginBottom = '0'

      // Update column height
      columnHeights[shortestColumnIndex] += item.offsetHeight + gap
    })

    // Set container height for masonry
    setContainerHeight(Math.max(...columnHeights))
  }, [columns, isMasonryEnabled])

  // Recalculate layout when posts change or images load
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateLayout()
    }, 100) // Small delay to ensure images are loaded

    return () => clearTimeout(timer)
  }, [displayedPosts, calculateLayout, columns, layoutKey, isMasonryEnabled])

  const showMore = async () => {
    if (bufferedPosts.length === 0 || isLoading) return

    // Add buffered posts to displayed posts
    setDisplayedPosts([...displayedPosts, ...bufferedPosts])
    const newPage = page + 1
    setPage(newPage)

    // If we're not at the end, fetch the next batch for buffer
    if (newPage < totalPages) {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/posts?page=${newPage + 1}&perPage=9`)
        if (response.ok) {
          const data = await response.json()
          setBufferedPosts(data.posts)
        } else {
          setBufferedPosts([])
        }
      } catch (error) {
        console.error('Failed to fetch next posts:', error)
        setBufferedPosts([])
      } finally {
        setIsLoading(false)
      }
    } else {
      setBufferedPosts([])
    }
  }

  const currentPosts = displayedPosts
  const hasMore = page < totalPages

  const openSidebar = async (slug: string) => {
    const post = displayedPosts.find((post) => post.slug === slug)
    if (!post) return

    // Dynamically import the post component
    try {
      const module = await import(`@/content/post/${slug}.tsx`)
      const Component = module.BlogContent || module.default
      setContent(<Component />)
      setIsOpen(true)
    } catch (error) {
      console.error(`Failed to load post ${slug}:`, error)
    }
  }

  return (
    <>
      <div
        ref={containerRef}
        className={clsx('w-full', {
          'relative overflow-hidden': isMasonryEnabled,
          'space-y-8': !isMasonryEnabled,
        })}
        style={isMasonryEnabled ? { height: `${containerHeight}px` } : {}}
      >
        {currentPosts.map(
          (post, index) =>
            post.metadata.title && (
              <div
                key={post.slug}
                ref={(el) => {
                  itemRefs.current[index] = el
                  if (el && el.offsetHeight > 0 && isMasonryEnabled) {
                    // Only recalculate layout for masonry
                    setTimeout(() => calculateLayout(), 50)
                  }
                }}
                className={clsx(
                  'transition-all duration-300 ease-in-out cursor-pointer',
                  {
                    absolute: isMasonryEnabled,
                    relative: !isMasonryEnabled,
                  }
                )}
                onClick={() => openSidebar(post.slug)}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {post.metadata.featuredImage && (
                    <div className="relative overflow-hidden w-full">
                      <Link
                        href={`/post/${post.slug}`}
                        scroll={true}
                        prefetch={false}
                        onClick={(e) => {
                          e.preventDefault()
                          openSidebar(post.slug)
                        }}
                      >
                        <Image
                          src={post.metadata.featuredImage}
                          alt={post.metadata.title || ''}
                          size="large"
                          className="w-full h-auto block"
                          rounded="rounded-none"
                          onLoad={() => {
                            // Only recalculate layout for masonry
                            if (isMasonryEnabled) {
                              setTimeout(() => calculateLayout(), 10)
                            }
                          }}
                        />
                      </Link>
                    </div>
                  )}
                  <div className="w-full flex flex-col text-center p-6 gap-4">
                    {post.metadata.categories &&
                      post.metadata.categories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2">
                          {post.metadata.categories.map(
                            (category: string, idx: number) => (
                              <Link
                                key={idx}
                                className="bg-gray-100 text-contrast text-xs px-3 py-[1px] rounded-full outline-0"
                                href={`/category/${getSlug(category)}`}
                                onClick={(e) => {
                                  e.preventDefault()
                                  openSidebar(post.slug)
                                }}
                              >
                                {decodeHtmlEntities(category)}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    <Link
                      href={`/post/${post.slug}`}
                      scroll={true}
                      prefetch={false}
                      onClick={(e) => {
                        e.preventDefault()
                        openSidebar(post.slug)
                      }}
                      className="hover:text-accent transition-colors duration-300"
                    >
                      <Heading
                        as="h3"
                        className=" font-semibold !mb-0 !text-xl"
                      >
                        {post.metadata.title}
                      </Heading>
                    </Link>
                    {post.metadata.date && (
                      <span className="font-medium text-accent !mb-0">
                        {new Date(post.metadata.date).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            timeZone: 'UTC',
                          }
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <Button
            onClick={showMore}
            icon={chevronDownIcon}
            iconPlacement="after"
            className="cursor-pointer"
          >
            Load More Posts
          </Button>
        </div>
      )}
      <DynamicSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {content}
      </DynamicSidebar>
    </>
  )
}
