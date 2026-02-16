import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Content from './_blocks/content'
import Archive from './_blocks/archive'
import Form from './_blocks/form'
import Testimonial from './_blocks/testimonial'
import CallToAction from './_blocks/call-to-action'

function Blocks() {
  return (
    <>
      <Hero />
      <Content />
      <Archive />
      <Form />
      <Testimonial />
      <CallToAction />
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
    canonical: '/layout-7',
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
export default function Page() {
  return (
    <PageWrapper metadata={metadata}>
      <Blocks />
    </PageWrapper>
  )
}
