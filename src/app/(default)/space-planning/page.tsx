import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Content from './_blocks/content'
import CallToAction from './_blocks/call-to-action'
import Cover from './_blocks/cover'
import Testimonial from './_blocks/testimonial'

function Blocks() {
  return (
    <>
      <Hero />
      <Content />
      <CallToAction />
      <Cover />
      <Testimonial />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Space Planning Services | Optimize Your Interior Layout',
  description:
    'Expert space planning services that maximize functionality and flow. Our strategic approach optimizes every square foot, creating efficient, beautiful layouts that enhance how you live and work.',
  keywords: [
    'space planning services',
    'interior space planning',
    'floor plan design',
    'layout optimization',
    'room planning',
    'space design consultant',
    'furniture layout planning',
    'architectural space planning',
    'residential space planning',
    'commercial space planning',
    'efficient space design',
    'interior layout design',
    'space utilization',
  ],
  slug: 'space-planning',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg',
  focusKeyword: 'space planning services',
  readingTimeMinutes: 4,
  publishDate: '2024-06-15T10:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/space-planning',
  },
  authors: [{ name: 'Speedwell Design Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/space-planning',
    siteName: 'Speedwell Interior Design',
    title: 'Space Planning Services | Optimize Your Interior Layout',
    description:
      'Expert space planning that maximizes functionality and flow. Strategic layouts that optimize every square foot for beautiful, efficient living and working spaces.',
    image: {
      url: '/banner.jpg',
      alt: 'Professional space planning and interior layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Planning Services | Optimize Your Interior Layout',
    description:
      'Expert space planning services that maximize functionality and flow. Create efficient, beautiful layouts that enhance how you live and work.',
    image: '/banner.jpg',
  },
}

export const generateMetadata = () => generatePageMetadata(metadata)
export default function Page() {
  return (
    <PageWrapper metadata={metadata}>
      <Blocks />
    </PageWrapper>
  )
}
