'use client'

import { useRef } from 'react'
import { LightboxHandler } from '@/components/lightbox/lightbox-handler'

interface LightboxWrapperProps {
  children: React.ReactNode
}

export function LightboxWrapper({ children }: LightboxWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef}>
      {children}
      <LightboxHandler containerRef={containerRef} />
    </div>
  )
}
