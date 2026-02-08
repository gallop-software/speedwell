import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero3 from '@/blocks/hero-3'
import Content5 from '@/blocks/content-5'
import Content6 from '@/blocks/content-6'
import Content7 from '@/blocks/content-7'
import Content8 from '@/blocks/content-8'
import Content9 from '@/blocks/content-9'
import Cover2 from '@/blocks/cover-2'
import Testimonial2 from '@/blocks/testimonial-2'

function Content() {
  return (
    <>
      <Hero3 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <Content9 />
      <Cover2 />
      <Testimonial2 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Residential Interior Design Services | Transform Your Home',
  description:
    'Expert residential interior design services that transform houses into dream homes. From concept to completion, we create personalized living spaces that reflect your unique style and enhance your daily life.',
  keywords: [
    'residential interior design',
    'home interior design',
    'custom home design',
    'luxury home interiors',
    'modern residential design',
    'interior design services',
    'home renovation design',
    'residential space planning',
    'custom furniture design',
    'home styling services',
    'interior design consultation',
    'residential designers',
    'home makeover services',
  ],
  slug: 'residential',
  featuredImage: '/portfolio/pexels-alex-qian-1180283-2343465.jpg',
  focusKeyword: 'residential interior design',
  readingTimeMinutes: 5,
  publishDate: '2024-01-15T10:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/residential',
  },
  authors: [{ name: 'Speedwell Design Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/residential',
    siteName: 'Speedwell Interior Design',
    title: 'Residential Interior Design Services | Transform Your Home',
    description:
      'Create the home of your dreams with our expert residential interior design services. We specialize in personalized designs that blend style, functionality, and comfort for modern living.',
    image: {
      url: '/banner.jpg',
      alt: 'Beautiful modern residential interior design with elegant furniture and natural lighting',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Interior Design Services | Transform Your Home',
    description:
      'Expert residential interior design services that transform houses into dream homes. Personalized designs that reflect your unique style and enhance your daily life.',
    image: '/banner.jpg',
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
