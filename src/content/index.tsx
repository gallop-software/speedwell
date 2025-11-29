import Hero1 from '@/blocks/hero-1'
import Section1 from '@/blocks/section-1'
import Section2 from '@/blocks/section-2'
import Section3 from '@/blocks/section-3'
import SectionBlog from '@/blocks/section-blog'

export default function Content() {
  return (
    <>
      <Hero1 />
      <Section1 />
      <Section2 />
      <Section3 />
      <SectionBlog />
    </>
  )
}

export const metadata = {
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
  focusKeyword: ['interior design', 'residential design', 'home interiors'],
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  lastModified: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/',
    siteName: 'Speedwell Interior Design',
    title: 'Expert Interior Design Services | Transform Your Space',
    description:
      'Award-winning interior design studio specializing in residential and commercial projects. We create beautiful, functional spaces that reflect your unique style and enhance your daily living experience.',
    image: {
      url: '/images/portfolio/pexels-pixabay-259962.jpg',
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
    image: '/images/portfolio/houzlook/pexels-houzlook-3797991.jpg',
  },
  category: 'Interior Design',
  applicationName: 'Speedwell Interior Design',
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
