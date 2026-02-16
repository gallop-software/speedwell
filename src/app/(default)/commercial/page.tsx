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
  title: 'Commercial Interior Design Services | Office & Retail Spaces',
  description:
    'Transform your commercial space with expert interior design services. We create inspiring work environments, engaging retail experiences, and functional hospitality spaces that elevate your brand and enhance productivity.',
  keywords: [
    'commercial interior design',
    'office design services',
    'retail space design',
    'restaurant interior design',
    'hospitality design',
    'corporate office design',
    'commercial space planning',
    'workplace design',
    'commercial renovation',
    'office interior designers',
    'retail store design',
    'commercial design services',
    'business interior design',
  ],
  slug: 'commercial',
  featuredImage: '/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg',
  focusKeyword: 'commercial interior design',
  readingTimeMinutes: 5,
  publishDate: '2024-05-20T09:30:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/commercial',
  },
  authors: [{ name: 'Speedwell Design Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/commercial',
    siteName: 'Speedwell Interior Design',
    title: 'Commercial Interior Design Services | Office & Retail Spaces',
    description:
      'Expert commercial interior design for offices, retail, restaurants, and hospitality spaces. Create inspiring environments that elevate your brand and drive business success.',
    image: {
      url: '/banner.jpg',
      alt: 'Modern commercial interior design with sophisticated style',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Interior Design Services | Office & Retail Spaces',
    description:
      'Transform your commercial space with expert design. Create inspiring work environments and engaging experiences that elevate your brand.',
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
