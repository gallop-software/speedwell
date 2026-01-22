'use client'

import { useState } from 'react'
import { Masonry } from './masonry'
import { Image } from './image'

interface MasonryFilterItem {
  id: number
  category: string
  image: string
  alt: string
}

interface MasonryFilterProps {
  categories: string[]
  items: MasonryFilterItem[]
  gap?: number
  breakpoints?: {
    default: number
    lg?: number
    md?: number
    sm?: number
  }
  className?: string
}

export function MasonryFilter({
  categories,
  items,
  gap = 16,
  breakpoints = { default: 3, lg: 3, md: 2, sm: 1 },
  className,
}: MasonryFilterProps) {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filteredItems =
    activeFilter === 'ALL'
      ? items
      : items.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* Filter chips */}
      <div className="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`text-sm tracking-wider transition-colors ${
              activeFilter === category
                ? 'text-accent font-semibold'
                : 'text-body-contrast/60 hover:text-body-contrast'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry grid with filtered items */}
      <Masonry gap={gap} breakpoints={breakpoints} className={className}>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.alt}
              size="large"
              className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-102"
            />
          </div>
        ))}
      </Masonry>
    </>
  )
}
