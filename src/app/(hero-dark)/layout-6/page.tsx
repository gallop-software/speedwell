import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero22 from '@/blocks/hero-22'
import Content1 from '@/blocks/content-1'
import Section6 from '@/blocks/section-6'
import Cover7 from '@/blocks/cover-7'
import Testimonial10 from '@/blocks/testimonial-10'
import Shopping1 from '@/blocks/shopping-1'

function Content() {
  return (
    <>
      <Hero22 />
      <Content1 />
      <Section6 />
      <Cover7 />
      <Testimonial10 />
      <Shopping1 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Veloria Botanical Elixir | Premium Non-Alcoholic Beverage',
  description:
    'Discover Veloria Botanical Elixir, a premium non-alcoholic beverage crafted from 12 rare botanicals. Six generations of Scottish Highland craftsmanship in every bottle.',
  keywords: [
    'non-alcoholic drink',
    'botanical beverage',
    'craft beverage',
    'Scottish botanicals',
    'luxury non-alcoholic',
    'artisan elixir',
  ],
  focusKeyword: 'botanical elixir',
  readingTimeMinutes: 8,
  publishDate: '2019-10-23T06:12:20Z',
  modifiedDate: '2026-01-06T01:00:00Z',
  featuredImage: '/images/layout-6/pexels-roman-odintsov-5837002.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-6',
  },
  authors: [{ name: 'Veloria Botanicals' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-6',
    siteName: 'Veloria',
    title: 'Veloria Botanical Elixir | Premium Non-Alcoholic Beverage',
    description:
      'Discover Veloria Botanical Elixir, a premium non-alcoholic beverage crafted from 12 rare botanicals. Six generations of Scottish Highland craftsmanship in every bottle.',
    image: {
      url: '/images/layout-6/pexels-roman-odintsov-5837002.jpg',
      alt: 'Veloria Botanical Elixir premium non-alcoholic beverage',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@veloriabotanicals',
    creator: '@veloriadistillery',
    title: 'Veloria Botanical Elixir | Premium Craft Spirit',
    description:
      'Discover Veloria Botanical Elixir, a premium craft spirit distilled from 12 rare botanicals.',
    image: '/images/layout-6/hero-bg.jpg',
  },
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Veloria Botanical Elixir',
      description: 'A premium craft spirit distilled from 12 rare botanicals',
      brand: {
        '@type': 'Brand',
        name: 'Veloria Distillery',
      },
      offers: {
        '@type': 'Offer',
        price: '89.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
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
