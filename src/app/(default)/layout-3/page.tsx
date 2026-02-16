import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Sidebar from './_blocks/sidebar'
import Section from './_blocks/section'
import Cover from './_blocks/cover'
import Testimonial from './_blocks/testimonial'
import Form from './_blocks/form'

function Blocks() {
  return (
    <>
      <Hero />
      <Sidebar />
      <Section />
      <Cover />
      <Testimonial />
      <Form />
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
  featuredImage: '/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: '/layout-3',
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
      url: '/banner.jpg',
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
      <Blocks />
    </PageWrapper>
  )
}
