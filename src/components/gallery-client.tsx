'use client'

import { useRef } from 'react'
import { GalleryLightbox } from '@/components/lightbox/gallery-lightbox'

interface GalleryClientProps {
  children: React.ReactNode
}

export function GalleryClient({ children }: GalleryClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef}>
      {children}
      <GalleryLightbox containerRef={containerRef} />
    </div>
  )
}
