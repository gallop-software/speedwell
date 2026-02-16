import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Content from './_blocks/content'
import Content2 from './_blocks/content-2'
import Content3 from './_blocks/content-3'
import CallToAction from './_blocks/call-to-action'
import Cover from './_blocks/cover'
import Testimonial from './_blocks/testimonial'

function Blocks() {
  return (
    <>
      <Hero />
      <Content />
      <Content2 />
      <Content3 />
      <CallToAction />
      <Cover />
      <Testimonial />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Professional Color Consultation Services | Interior Design',
  description:
    "Expert color consultation services to transform your space with the perfect palette. Our designers help you choose colors that enhance your home's beauty, reflect your personality, and create the perfect ambiance.",
  keywords: [
    'color consultation',
    'interior color design',
    'paint color selection',
    'color palette design',
    'professional color advice',
    'home color schemes',
    'paint consultation services',
    'color coordination',
    'interior paint colors',
    'color design expert',
    'custom color palettes',
    'room color planning',
    'color psychology design',
  ],
  slug: 'color-consultation',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg',
  focusKeyword: 'color consultation services',
  readingTimeMinutes: 5,
  publishDate: '2024-03-05T10:30:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/color-consultation',
  },
  authors: [{ name: 'Speedwell Design Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/color-consultation',
    siteName: 'Speedwell Interior Design',
    title: 'Professional Color Consultation Services | Interior Design',
    description:
      'Transform your space with expert color consultation services. Our designers help you select the perfect color palette that enhances beauty and reflects your unique style.',
    image: {
      url: '/banner.jpg',
      alt: 'Beautiful interior space showcasing professional color coordination and design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Color Consultation Services | Interior Design',
    description:
      'Expert color consultation to transform your space. Choose colors that enhance beauty, reflect personality, and create the perfect ambiance.',
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
