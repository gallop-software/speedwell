import Script from 'next/script'
import { defaultStructuredData } from '@/app/metadata'
import { GalleryPopup } from '@/components/lightbox/gallery-popup'
import type { ReactNode } from 'react'
import type { PageMetadata } from '@/utils/page-helpers'

interface PageWrapperProps {
  children: ReactNode
  metadata?: PageMetadata
}

export function PageWrapper({ children, metadata }: PageWrapperProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [...defaultStructuredData, ...(metadata?.structuredData || [])],
  }

  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <main className="[&>.content-wrapper]:px-6 [&>.content-wrapper]:lg:px-8 [&>.content-wrapper]:mx-auto [&>.content-wrapper]:max-w-3xl [&>.aligncontent]:px-6 [&>.aligncontent]:lg:px-8 [&>.aligncontent]:mx-auto [&>.aligncontent]:max-w-3xl [&>*:last-child:not(div):not(section)]:mb-40 [&>*:last-child:is(.content-wrapper)]:mb-40">
        {children}
        <GalleryPopup />
      </main>
    </>
  )
}
