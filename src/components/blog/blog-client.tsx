'use client'

import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Image } from '@/components/image'
import DynamicSidebar from '@/components/dynamic-sidebar'
import { GalleryPopup } from '@/components/lightbox/gallery-popup'
import clsx from 'clsx'
import Link from 'next/link'
import { getSlug } from '@/tools/get-slug'
import chevronDownIcon from '@iconify/icons-heroicons/chevron-down'
import { DateTime } from 'luxon'

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
  allPosts = [],
  perPage = 9,
  loadMoreText = 'Load More Posts',
}: {
  allPosts?: BlogPost[]
  perPage?: number
  className?: string | undefined
  loadMoreText?: string
}) {
  const [displayedCount, setDisplayedCount] = useState(perPage)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [columns, setColumns] = useState(3)
  const [isMasonryEnabled, setIsMasonryEnabled] = useState(true)
  const [containerHeight, setContainerHeight] = useState(0)
  const [layoutKey, setLayoutKey] = useState(0) // Force layout recalculation
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(<></>)
  const [isLoading, setIsLoading] = useState(false)
  const sidebarContentRef = useRef<HTMLDivElement>(null)

  // Posts are already filtered and sorted on server, just slice for pagination
  const currentPosts = allPosts.slice(0, displayedCount)
  const hasMore = displayedCount < allPosts.length

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
      itemRefs.current.forEach((item) => {
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

    itemRefs.current.forEach((item) => {
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
  }, [currentPosts, calculateLayout, columns, layoutKey, isMasonryEnabled])

  const showMore = () => {
    setDisplayedCount((prev) => prev + perPage)
  }

  const openSidebar = async (slug: string) => {
    // Open sidebar immediately with loading state
    setIsOpen(true)
    setIsLoading(true)
    setContent(<></>)

    // Dynamically import the post component
    try {
      const postModule = await import(`../../blog/${slug}.tsx`)
      const Component = postModule.BlogContent || postModule.default
      setContent(<Component />)
      setIsLoading(false)
    } catch (error) {
      console.error(`Failed to load post ${slug}:`, error)
      setIsLoading(false)
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
                        fontWeight="font-semibold"
                        margin="mb-0"
                        className="!text-xl"
                      >
                        {post.metadata.title}
                      </Heading>
                    </Link>
                    {post.metadata.date && (
                      <span className="font-medium text-accent mb-0!">
                        {DateTime.fromISO(post.metadata.date, {
                          zone: 'utc',
                        }).toFormat('MM/dd/yyyy')}
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
            {loadMoreText}
          </Button>
        </div>
      )}
      <DynamicSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          </div>
        ) : (
          <div ref={sidebarContentRef}>
            {content}
            <GalleryPopup containerRef={sidebarContentRef} />
          </div>
        )}
      </DynamicSidebar>
    </>
  )
}
