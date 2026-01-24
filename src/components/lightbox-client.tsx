'use client'

import { useRef } from 'react'
import { LightboxWrapper } from '@/components/lightbox/lightbox-wrapper'

interface LightboxClientProps {
  children: React.ReactNode
}

export function LightboxClient({ children }: LightboxClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef}>
      {children}
      <LightboxWrapper containerRef={containerRef} />
    </div>
  )
}
