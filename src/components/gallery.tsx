import clsx from 'clsx'
import React, { Children, isValidElement } from 'react'
import imageMeta from '@/../_data/_studio.json'
import { LightboxWrapper } from '@/components/lightbox-wrapper'

export interface GalleryProps {
  columns?: number
  className?: string
  children: React.ReactNode
  /** Gallery alignment - controls max width */
  align?: 'none' | 'wide' | 'content'
}

type ImageSize = 'small' | 'medium' | 'large' | 'full'

interface Dimensions {
  w: number
  h: number
}

type MetaEntry = {
  o?: Dimensions   // original dimensions {w, h}
  sm?: Dimensions  // small thumbnail
  md?: Dimensions  // medium thumbnail
  lg?: Dimensions  // large thumbnail
  f?: Dimensions   // full size
  c?: number       // CDN index
}

interface FullMeta {
  _cdns?: string[]
  [key: string]: MetaEntry | string[] | undefined
}

type GalleryItemProps = {
  src: string
  href?: string
  alt?: string
  target?: string
  className?: string
  width?: number
  height?: number
  size?: ImageSize
}

// Map size prop to meta key
const SIZE_KEY_MAP: Record<ImageSize, 'sm' | 'md' | 'lg' | 'f'> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  full: 'f',
}

// Normalize src to get the meta lookup key (strip /images prefix and any size suffix)
function getMetaLookupKey(src: string): string {
  let key = src.startsWith('/') ? src : `/${src}`
  
  // Strip /images prefix if present
  if (key.startsWith('/images/')) {
    key = key.slice(7) // Remove '/images'
  }
  
  // Strip size suffix if present (e.g., -sm, -md, -lg)
  key = key.replace(/-(sm|md|lg)\.(jpg|jpeg|png|webp)$/i, '.$2')
  
  return key
}

const getDimsFromMetadata = (
  src: string,
  size: ImageSize = 'large'
): { width: number; height: number } => {
  const metaData = imageMeta as FullMeta
  
  // Normalize src to get lookup key (strips /images prefix and size suffixes)
  const lookupKey = getMetaLookupKey(src)
  
  // Get entry from meta (exclude special keys)
  if (lookupKey.startsWith('_')) return { width: 1000, height: 1000 }
  const value = metaData[lookupKey]
  if (!value || Array.isArray(value)) return { width: 1000, height: 1000 }
  const entry = value as MetaEntry

  // Try requested size first
  const sizeKey = SIZE_KEY_MAP[size]
  const dims = entry[sizeKey]
  if (dims) {
    return { width: dims.w, height: dims.h }
  }

  // Fallback to any available size
  const fallbackOrder: Array<'lg' | 'md' | 'f' | 'sm' | 'o'> = ['lg', 'md', 'f', 'sm', 'o']
  for (const key of fallbackOrder) {
    const fallbackDims = entry[key as keyof MetaEntry] as Dimensions | undefined
    if (fallbackDims && typeof fallbackDims === 'object' && 'w' in fallbackDims) {
      return { width: fallbackDims.w, height: fallbackDims.h }
    }
  }

  return { width: 1000, height: 1000 } // fallback
}

const getGridGalleryClass = (items: { width: number; height: number }[]) => {
  let totalWidthRatio = 0
  const sized = items.map((s) => {
    const ratio = s.width / (s.height / 100)
    totalWidthRatio += ratio
    return { ...s, ratio }
  })

  const reducer = (100 - 1.5 * (items.length - 1)) / 100

  const gridTemplateColumns = sized
    .map((s) => ((reducer * s.ratio) / totalWidthRatio) * 100)
    .map((pct) => `${pct.toFixed(4)}%`)
    .join(' ')

  return {
    gridGalleryClass: 'grid gap-x-[1.5%] pb-[1.5%]',
    gridTemplateColumns,
  }
}

const computeRowSizes = (n: number, col: number): number[] => {
  if (n <= 0) return []
  if (n === 1) return [1]

  const c = Math.max(1, Math.min(col, n))
  const minFirst = c > 2 ? 2 : 1 // first row must be ≥2 unless columns ≤ 2
  const minRow = minFirst // same minimum for all rows to keep things sane

  const kMin = Math.ceil(n / c)
  const kMax = Math.max(kMin, Math.floor(n / minRow))

  let best: number[] | null = null
  let bestMaxDev = Infinity // primary: minimize max |size - c|
  let bestSumDev = Infinity // secondary: minimize total deviation

  for (let k = kMin; k <= kMax; k++) {
    const base = Math.floor(n / k)
    const rem = n % k

    // bounds: rows must be within [minRow, c]
    if (base < minRow) continue
    if (base > c) continue
    if (rem > 0 && base + 1 > c) continue

    const sizes = Array(k).fill(base)
    for (let i = k - rem; i < k; i++) sizes[i] = base + 1

    if (sizes[0] < minFirst) continue

    const devs = sizes.map((s) => Math.abs(s - c))
    const maxDev = Math.max(...devs)
    const sumDev = devs.reduce((a, b) => a + b, 0)

    if (maxDev < bestMaxDev || (maxDev === bestMaxDev && sumDev < bestSumDev)) {
      best = sizes
      bestMaxDev = maxDev
      bestSumDev = sumDev
    }
  }

  // Fallback
  if (!best) {
    const last = Math.min(c, Math.max(minRow, Math.ceil((n + 1) / 2)))
    const first = n - last
    best = first >= minRow && first <= c && first <= last ? [first, last] : [n]
  }

  return best!
}

export function Gallery({
  columns = 3,
  className,
  children,
  align = 'content',
}: GalleryProps) {
  const items = Children.toArray(children).filter(
    isValidElement
  ) as React.ReactElement<GalleryItemProps>[]

  const n = items.length
  if (n === 0) {
    return (
      <div
        className={clsx(
          'relative isolate mb-7 !columns-auto',
          'wp-block-gallery',
          className
        )}
      />
    )
  }

  const dims = items.map((child) => {
    const { src, width, height, size } = child.props
    if (width && height) return { width, height }
    return getDimsFromMetadata(src, size)
  })

  const sizes = computeRowSizes(n, columns)

  const rows: React.ReactNode[] = []
  let cursor = 0

  sizes.forEach((rowSize, rowIdx) => {
    const rowDims = dims.slice(cursor, cursor + rowSize)
    const rowChildren = items.slice(cursor, cursor + rowSize)
    cursor += rowSize

    const { gridTemplateColumns, gridGalleryClass } =
      getGridGalleryClass(rowDims)

    rows.push(
      <div
        key={`gallery-row-${rowIdx}-${cursor}`}
        className={clsx(gridGalleryClass, '[&>*]:[&_img]:!h-auto')}
        style={{ gridTemplateColumns }}
      >
        {rowChildren}
      </div>
    )
  })

  const maxWidthClass =
    align === 'wide'
      ? 'max-w-7xl mx-auto'
      : align === 'none'
        ? 'max-w-none'
        : align === 'content'
          ? 'content-wrapper'
          : ''

  return (
    <LightboxWrapper>
      <div
        className={clsx(
          'relative isolate mb-7 !columns-auto',
          maxWidthClass,
          className
        )}
      >
        {rows}
      </div>
    </LightboxWrapper>
  )
}
