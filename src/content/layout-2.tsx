import Hero15 from '@/blocks/hero-15'
import Showcase7 from '@/blocks/showcase-7'
import Pricing1 from '@/blocks/pricing-1'
import Testimonial5 from '@/blocks/testimonial-5'
import Section3 from '@/blocks/section-3'
import Blog1 from '@/blocks/blog-1'

export default function Content() {
  return (
    <>
      <Hero15 />
      <Showcase7 />
      <Pricing1 />
      <Testimonial5 />
      <Section3 />
      <Blog1 />
    </>
  )
}

export const metadata = {
  title: 'Layout 2 | Modern Grid-Based Card Layout System',
  description:
    'Explore our modern grid-based card layout system. Perfect for showcasing content in an organized and visually appealing way.',
  keywords: [
    'layout design',
    'grid system',
    'card layout',
    'modern design',
    'responsive design',
  ],
  focusKeyword: ['layout design', 'grid system', 'card layout'],
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  lastModified: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-2',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-2',
    siteName: 'Speedwell',
    title: 'Layout 2 | Modern Grid-Based Card Layout System',
    description:
      'Explore our modern grid-based card layout system. Perfect for showcasing content in an organized and visually appealing way.',
    image: {
      url: '/images/portfolio/pexels-pixabay-259962.jpg',
      alt: 'Modern grid-based layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 2 | Modern Grid-Based Card Layout System',
    description:
      'Explore our modern grid-based card layout system. Perfect for showcasing content in an organized and visually appealing way.',
    image: '/images/portfolio/houzlook/pexels-houzlook-3797991.jpg',
  },
  category: 'Layout Design',
  applicationName: 'Speedwell',
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
          name: 'Layout 2',
          item: 'https://speedwell.gallop.software/layout-2',
        },
      ],
    },
  ],
}
