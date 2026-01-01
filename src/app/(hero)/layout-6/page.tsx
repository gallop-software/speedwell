import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero1 from '@/blocks/hero-1'
import Section1 from '@/blocks/section-1'
import Section2 from '@/blocks/section-2'
import Section3 from '@/blocks/section-3'
import Blog1 from '@/blocks/blog-1'

function Content() {
  return (
    <>
      <Hero1 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Blog1 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Layout 6 | Fullscreen Hero with Minimal Chrome',
  description:
    'Explore our fullscreen hero layout with minimal chrome. Designed for maximum impact with distraction-free presentation.',
  keywords: [
    'layout design',
    'fullscreen hero',
    'minimal design',
    'immersive experience',
    'clean layout',
  ],
  focusKeyword: 'layout design',
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  modifiedDate: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-6',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-6',
    siteName: 'Speedwell',
    title: 'Layout 6 | Fullscreen Hero with Minimal Chrome',
    description:
      'Explore our fullscreen hero layout with minimal chrome. Designed for maximum impact with distraction-free presentation.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Fullscreen hero layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 6 | Fullscreen Hero with Minimal Chrome',
    description:
      'Explore our fullscreen hero layout with minimal chrome. Designed for maximum impact with distraction-free presentation.',
    image: '/images/banner.jpg',
  },
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://speedwell.gallop.software',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Layout 6',
          item: 'https://speedwell.gallop.software/layout-6',
        },
      ],
    },
  ],
}

export const generateMetadata = () => generatePageMetadata(metadata)
export default () => (
  <PageWrapper metadata={metadata}>
    <Content />
  </PageWrapper>
)
