import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero17 from '@/blocks/hero-17'
import Content40 from '@/blocks/content-40'
import Cover3 from '@/blocks/cover-3'
import Section1 from '@/blocks/section-1'
import Section9 from '@/blocks/section-9'
import Testimonial7 from '@/blocks/testimonial-7'
import Form5 from '@/blocks/form-5'

function Content() {
  return (
    <>
      <Hero17 />
      <Content40 />
      <Cover3 />
      <Section9 />
      <Section1 />
      <Testimonial7 />
      <Form5 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Layout 4 | Full-Width Carousel Presentation Style',
  description:
    'Experience our full-width carousel presentation style. Perfect for showcasing featured content and creating engaging visual narratives.',
  keywords: [
    'layout design',
    'carousel',
    'presentation',
    'full-width design',
    'visual storytelling',
  ],
  focusKeyword: 'layout design',
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  modifiedDate: '2025-09-28T01:00:00Z',
  featuredImage: '/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: '/layout-4',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-4',
    siteName: 'Speedwell',
    title: 'Layout 4 | Full-Width Carousel Presentation Style',
    description:
      'Experience our full-width carousel presentation style. Perfect for showcasing featured content and creating engaging visual narratives.',
    image: {
      url: '/banner.jpg',
      alt: 'Full-width carousel layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 4 | Full-Width Carousel Presentation Style',
    description:
      'Experience our full-width carousel presentation style. Perfect for showcasing featured content and creating engaging visual narratives.',
    image: '/banner.jpg',
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
          name: 'Layout 4',
          item: 'https://speedwell.gallop.software/layout-4',
        },
      ],
    },
  ],
}

export const generateMetadata = () => generatePageMetadata(metadata)
export default function Page() {
  return (
    <PageWrapper metadata={metadata}>
      <Content />
    </PageWrapper>
  )
}
