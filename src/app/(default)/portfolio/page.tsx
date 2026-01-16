import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero2 from '@/blocks/hero-2'
import Content44 from '@/blocks/content-44'
import Content45 from '@/blocks/content-45'
import Content46 from '@/blocks/content-46'
import Content47 from '@/blocks/content-47'
import Content48 from '@/blocks/content-48'
import Content15 from '@/blocks/content-15'
import Cover1 from '@/blocks/cover-1'
import Testimonial1 from '@/blocks/testimonial-1'

function Content() {
  return (
    <>
      <Hero2 />
      <Content44 />
      <Content45 />
      <Content46 />
      <Content47 />
      <Content48 />
      <Content15 />
      <Cover1 />
      <Testimonial1 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Portfolio - Exceptional Interior Design Projects',
  description:
    'Explore our curated collection of residential and commercial interior design projects showcasing timeless elegance and innovative solutions crafted by our expert team',
  keywords: [
    'interior design portfolio',
    'residential design projects',
    'commercial interior design',
    'luxury home interiors',
    'modern space planning',
    'custom furniture design',
    'kitchen and bath design',
    'color consultation services',
    'before and after transformations',
    'designer showcase',
    'award winning interiors',
    'professional design work',
    'interior inspiration gallery',
  ],
  slug: 'portfolio',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1643384.jpg',
  focusKeyword: 'interior design portfolio',
  readingTimeMinutes: 15,
  publishDate: '2019-10-24T07:42:20Z',
  modifiedDate: '2025-11-29T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/portfolio',
  },
  authors: [{ name: 'Timmerman Interior Design' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/portfolio/',
    siteName: 'Timmerman Interior Design',
    title: 'Our Portfolio of Stunning Interior Design Projects',
    description:
      'Browse through our extensive portfolio featuring beautifully designed residential and commercial spaces that reflect sophistication, functionality, and timeless style',
    image: {
      url: '/images/banner.jpg',
      alt: 'Elegant interior design project by Timmerman Interior Design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Portfolio - Transform Your Space',
    description:
      'Discover innovative interior design solutions and stunning transformations from our award-winning team. Each project tells a unique story of style and function',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfolio',
          item: 'https://speedwell.gallop.software/portfolio',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://speedwell.gallop.software/portfolio#webpage',
      url: 'https://speedwell.gallop.software/portfolio',
      name: 'Interior Design Portfolio | Timmerman Interior Design',
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
