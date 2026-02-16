import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Content from './_blocks/content'
import Section from './_blocks/section'
import Testimonial from './_blocks/testimonial'
import Pricing from './_blocks/pricing'

function Blocks() {
  return (
    <>
      <Hero />
      <Content />
      <Section />
      <Testimonial />
      <Pricing />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Layout 5 | Split-Screen with Fixed Left Panel',
  description:
    'Check out our split-screen layout with fixed left panel. Great for highlighting key information while providing detailed content.',
  keywords: [
    'layout design',
    'split-screen',
    'fixed panel',
    'dual-pane layout',
    'modern design',
  ],
  focusKeyword: 'layout design',
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  modifiedDate: '2025-09-28T01:00:00Z',
  featuredImage: '/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: '/layout-5',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-5',
    siteName: 'Speedwell',
    title: 'Layout 5 | Split-Screen with Fixed Left Panel',
    description:
      'Check out our split-screen layout with fixed left panel. Great for highlighting key information while providing detailed content.',
    image: {
      url: '/banner.jpg',
      alt: 'Split-screen layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 5 | Split-Screen with Fixed Left Panel',
    description:
      'Check out our split-screen layout with fixed left panel. Great for highlighting key information while providing detailed content.',
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
          name: 'Layout 5',
          item: 'https://speedwell.gallop.software/layout-5',
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
