import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero14 from '@/blocks/hero-14'
import Content43 from '@/blocks/content-43'
import Content6 from '@/blocks/content-6'
import Content49 from '@/blocks/content-49'
import Cover5 from '@/blocks/cover-5'
import About3 from '@/blocks/about-3'
import Process1 from '@/blocks/process-1'
import Archive2 from '@/blocks/archive-2'
import Form2 from '@/blocks/form-2'
import Form3 from '@/blocks/form-3'
import Testimonial4 from '@/blocks/testimonial-4'

function Content() {
  return (
    <>
      <Hero14 />
      <Content43 />
      <Content6 />
      <Process1 />
      <Content49 />
      <About3 />
      <Cover5 />
      <Archive2 />
      <Testimonial4 />
      <Form2 />
      <Form3 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Award-Winning Interior Design Services | Residential & Commercial',
  description:
    'Transform your space with our expert interior design services. We create stunning, functional interiors for homes and businesses, from concept to completion with personalized attention.',
  keywords: [
    'interior design',
    'residential design',
    'commercial design',
    'kitchen design',
    'bathroom design',
    'space planning',
    'color consultation',
    'furniture selection',
    'home staging',
    'interior decorator',
    'luxury interiors',
    'modern design',
    'custom furnishings',
  ],
  focusKeyword: 'interior design',
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  modifiedDate: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-1',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-1',
    siteName: 'Speedwell Interior Design',
    title: 'Expert Interior Design Services | Transform Your Space',
    description:
      'Award-winning interior design studio specializing in residential and commercial projects. We create beautiful, functional spaces that reflect your unique style and enhance your daily living experience.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Beautifully designed modern interior living space',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Transform Your Space | Professional Interior Design Services',
    description:
      'Creating stunning interiors for homes and businesses. Expert design, custom furnishings, and complete project management from concept to completion.',
    image: '/images/banner.jpg',
  },
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://speedwell.gallop.software',
        },
      ],
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
