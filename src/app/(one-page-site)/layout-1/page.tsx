import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Content from './_blocks/content'
import Content2 from './_blocks/content-2'
import Content3 from './_blocks/content-3'
import Cover from './_blocks/cover'
import About from './_blocks/about'
import Process from './_blocks/process'
import Archive from './_blocks/archive'
import Form from './_blocks/form'
import Section from './_blocks/section'
import Testimonial from './_blocks/testimonial'

function Blocks() {
  return (
    <>
      <Hero />
      <Content />
      <Content2 />
      <Process />
      <Content3 />
      <About />
      <Cover />
      <Archive />
      <Testimonial />
      <Form />
      <Section />
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
  featuredImage: '/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: '/layout-1',
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
      url: '/banner.jpg',
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
    image: '/banner.jpg',
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
      <Blocks />
    </PageWrapper>
  )
}
