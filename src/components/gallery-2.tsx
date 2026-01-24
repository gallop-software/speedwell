import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import { Container } from '@/components/container'

export interface Gallery2Props {
  /** Gallery content - typically Item components */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Number of columns in the gallery grid (sets default responsive behavior) */
  columns?: number
  /** Custom column classes - provide full Tailwind classes like 'grid-cols-2 lg:grid-cols-4' to override columns */
  cols?: string
  /** Gap between images - provide full Tailwind classes like 'gap-4' or 'gap-2 lg:gap-6' */
  gap?: string
  /** Gallery alignment - controls max width */
  align?: 'none' | 'wide'
}

export function Gallery2({
  children,
  className = '',
  columns = 3,
  cols = '',
  gap = '',
  align = 'none',
}: Gallery2Props) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }

  // Use cols override if provided, otherwise use columns default
  const finalColumns =
    cols || gridClasses[columns as keyof typeof gridClasses] || gridClasses[3]
  // Use gap override if provided, otherwise use default
  const finalGap = gap || 'gap-4'

  const maxWidthClass =
    align === 'wide'
      ? 'max-w-7xl'
      : align === 'none'
        ? 'max-w-none'
        : 'max-w-3xl'

  const galleryContent = (
    <div
      className={clsx(
        'grid mx-auto lightbox-gallery',
        maxWidthClass,
        finalColumns,
        finalGap,
        'my-8',
        '[&>*]:sm:aspect-square [&>*]:sm:overflow-hidden',
        '[&_img]:w-full [&_img]:h-full [&_img]:object-cover',
        className
      )}
    >
      {children}
    </div>
  )

  if (align === 'wide') {
    return <Container>{galleryContent}</Container>
  }

  return galleryContent
}
