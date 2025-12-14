import Hero3 from '@/blocks/hero-3'
import Section5 from '@/blocks/section-5'
import Section6 from '@/blocks/section-6'
import Section7 from '@/blocks/section-7'
import Section8 from '@/blocks/section-8'
import Section9 from '@/blocks/section-9'
import PageFooter from '@/template/page-footer'

export default function Content() {
  return (
    <>
      <Hero3 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <PageFooter />
    </>
  )
}

export const metadata = {
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
  featuredImage: '/images/portfolio/pexels-alex-qian-1180283-2343465.jpg',
  focusKeyword: 'residential interior design',
  readingTimeMinutes: 5,
  publishDate: '2024-01-15T10:00:00Z',
  lastModified: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/residential',
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
      url: '/images/portfolio/pexels-alex-qian-1180283-2343465.jpg',
      alt: 'Beautiful modern residential interior design with elegant furniture and natural lighting',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Interior Design Services | Transform Your Home',
    description:
      'Expert residential interior design services that transform houses into dream homes. Personalized designs that reflect your unique style and enhance your daily life.',
    image: '/images/portfolio/pexels-alex-qian-1180283-2343465.jpg',
  },
}
