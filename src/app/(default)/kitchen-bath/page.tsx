import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero9 from '@/blocks/hero-9'
import Content45 from '@/blocks/content-45'
import CallToAction5 from '@/blocks/call-to-action-5'
import PageFooter from '@/template/page-footer'

function Content() {
  return (
    <>
      <Hero9 />
      <Content45 />
      <CallToAction5 />
      <PageFooter />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Kitchen & Bath Design Services | Custom Remodeling Experts',
  description:
    'Transform your kitchen and bathroom with our expert design and remodeling services. We create beautiful, functional spaces combining luxury, innovation, and timeless design for modern living.',
  keywords: [
    'kitchen design',
    'bathroom design',
    'kitchen remodeling',
    'bathroom renovation',
    'custom kitchen design',
    'luxury bathroom design',
    'modern kitchen cabinets',
    'spa bathroom design',
    'kitchen and bath remodel',
    'custom cabinetry design',
    'contemporary kitchen design',
    'master bathroom design',
    'kitchen renovation services',
  ],
  slug: 'kitchen-bath',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg',
  focusKeyword: 'kitchen and bath design',
  readingTimeMinutes: 4,
  publishDate: '2024-02-10T09:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/kitchen-bath',
  },
  authors: [{ name: 'Speedwell Design Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/kitchen-bath',
    siteName: 'Speedwell Interior Design',
    title: 'Kitchen & Bath Design Services | Custom Remodeling Experts',
    description:
      'Expert kitchen and bathroom design services that blend beauty with functionality. Create stunning spaces that elevate your daily routines with our custom remodeling solutions.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Beautiful modern kitchen with custom cabinetry and contemporary design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen & Bath Design Services | Custom Remodeling Experts',
    description:
      'Transform your kitchen and bathroom with expert design services. Beautiful, functional spaces combining luxury and innovation for modern living.',
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
