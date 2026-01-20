import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero16 from '@/blocks/hero-16'
import Section10 from '@/blocks/section-10'
import Portfolio1 from '@/blocks/portfolio-1'
import Cover6 from '@/blocks/cover-6'
import Testimonial6 from '@/blocks/testimonial-6'
import Form4 from '@/blocks/form-4'

function Content() {
  return (
    <>
      <Hero16 />
      <Section10 />
      <Portfolio1 />
      <Cover6 />
      <Testimonial6 />
      <Form4 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Layout 3 | Multi-Column Content Distribution Design',
  description:
    'Discover our multi-column content distribution design. Ideal for organizing and presenting diverse content in a structured format.',
  keywords: [
    'layout design',
    'multi-column',
    'content distribution',
    'web design',
    'responsive layout',
  ],
  focusKeyword: 'layout design',
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  modifiedDate: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-3',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-3',
    siteName: 'Speedwell',
    title: 'Layout 3 | Multi-Column Content Distribution Design',
    description:
      'Discover our multi-column content distribution design. Ideal for organizing and presenting diverse content in a structured format.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Multi-column layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 3 | Multi-Column Content Distribution Design',
    description:
      'Discover our multi-column content distribution design. Ideal for organizing and presenting diverse content in a structured format.',
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
          name: 'Layout 3',
          item: 'https://speedwell.gallop.software/layout-3',
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
