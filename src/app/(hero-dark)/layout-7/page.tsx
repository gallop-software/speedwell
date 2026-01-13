import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero20 from '@/blocks/hero-20'
import Section37 from '@/blocks/section-37'
import Archive1 from '@/blocks/archive-1'
import Section38 from '@/blocks/section-38'
import PodcastTestimonials1 from '@/blocks/podcast-testimonials-1'
import PodcastCta1 from '@/blocks/podcast-cta-1'

function Content() {
  return (
    <>
      <Hero20 />
      <Section37 />
      <Archive1 />
      <Section38 />
      <PodcastTestimonials1 />
      <PodcastCta1 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'The Mindshift Podcast | Conversations That Change Perspectives',
  description:
    'Join host Sarah Chen for intimate conversations with thought leaders, innovators, and everyday people making extraordinary impacts. New episodes every Wednesday.',
  keywords: [
    'mindshift podcast',
    'personal growth',
    'self improvement',
    'inspiring conversations',
    'Sarah Chen',
    'thought leadership',
  ],
  focusKeyword: 'mindshift podcast',
  readingTimeMinutes: 10,
  publishDate: '2019-10-23T06:12:20Z',
  modifiedDate: '2026-01-06T01:00:00Z',
  featuredImage: '/images/layout-7/hero-bg.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-7',
  },
  authors: [{ name: 'The Mindshift Podcast' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-7',
    siteName: 'The Mindshift',
    title: 'The Mindshift Podcast | Conversations That Change Perspectives',
    description:
      'Join host Sarah Chen for intimate conversations with thought leaders, innovators, and everyday people making extraordinary impacts. New episodes every Wednesday.',
    image: {
      url: '/images/layout-7/hero-bg.jpg',
      alt: 'The Mindshift Podcast with Sarah Chen',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mindshiftpod',
    creator: '@sarahchen',
    title: 'The Mindshift Podcast | Conversations That Change Perspectives',
    description:
      'Join host Sarah Chen for intimate conversations with thought leaders, innovators, and everyday people making extraordinary impacts. New episodes every Wednesday.',
    image: '/images/layout-7/hero-bg.jpg',
  },
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'PodcastSeries',
      name: 'The Mindshift Podcast',
      description:
        'Conversations that challenge perspectives and inspire personal growth',
      url: 'https://speedwell.gallop.software/layout-7',
      author: {
        '@type': 'Person',
        name: 'Sarah Chen',
      },
    },
  ],
}

export const generateMetadata = () => generatePageMetadata(metadata)
export default () => (
  <PageWrapper metadata={metadata}>
    <Content />
  </PageWrapper>
)
