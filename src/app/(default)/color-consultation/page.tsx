import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero6 from '@/blocks/hero-6'
import Content11 from '@/blocks/content-11'
import Content12 from '@/blocks/content-12'
import Content13 from '@/blocks/content-13'
import CallToAction2 from '@/blocks/call-to-action-2'
import Cover2 from '@/blocks/cover-2'
import Testimonial2 from '@/blocks/testimonial-2'

function Content() {
  return (
    <>
      <Hero6 />
      <Content11 />
      <Content12 />
      <Content13 />
      <CallToAction2 />
      <Cover2 />
      <Testimonial2 />
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
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg',
  focusKeyword: 'color consultation services',
  readingTimeMinutes: 5,
  publishDate: '2024-03-05T10:30:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/color-consultation',
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
      url: '/images/banner.jpg',
      alt: 'Beautiful interior space showcasing professional color coordination and design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Color Consultation Services | Interior Design',
    description:
      'Expert color consultation to transform your space. Choose colors that enhance beauty, reflect personality, and create the perfect ambiance.',
    image: '/images/banner.jpg',
  },
}

export const generateMetadata = () => generatePageMetadata(metadata)
export default function Page() {
  return (
    <PageWrapper metadata={metadata}>
      <Content />
    </PageWrapper>
  )
}
