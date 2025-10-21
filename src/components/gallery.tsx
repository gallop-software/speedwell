import clsx from 'clsx'
import React, { Children, isValidElement } from 'react'
import imageMeta from '@/../_data/_meta.json'

export interface GalleryProps {
  columns?: number
  className?: string
  children: React.ReactNode
  /** Gallery alignment - controls max width */
  align?: 'none' | 'wide' | 'content'
}

type ImageSize = 'small' | 'medium' | 'large' | 'full'

type ImageSizeData = {
  width: number
  height: number
  file: string
}

type ImageMetadata = {
  [size in ImageSize]?: ImageSizeData
}

type ImageMetaData = {
  [key: string]: ImageMetadata
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

const getDimsFromMetadata = (
  src: string,
  size: ImageSize = 'large'
): { width: number; height: number } => {
  const metaData = imageMeta as ImageMetaData
  const metadata = metaData[src]

  if (metadata && size in metadata) {
    const sizeData = metadata[size]
    if (sizeData) {
      return { width: sizeData.width, height: sizeData.height }
    }
  }

  // Fallback to any available size if specified size not found
  if (metadata) {
    const availableSizes: ImageSize[] = ['large', 'medium', 'full', 'small']
    for (const fallbackSize of availableSizes) {
      if (metadata[fallbackSize]) {
        const sizeData = metadata[fallbackSize]
        return { width: sizeData.width, height: sizeData.height }
      }
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

  const galleryContent = (
    <div
      className={clsx(
        'relative isolate mb-7 !columns-auto',
        'lightbox-gallery',
        maxWidthClass,
        className
      )}
    >
      {rows}
    </div>
  )

  return galleryContent
}
