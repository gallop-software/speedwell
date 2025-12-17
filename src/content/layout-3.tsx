import Hero16 from '@/blocks/hero-16'
import Services1 from '@/blocks/services-1'
import Portfolio1 from '@/blocks/portfolio-1'
import Cover6 from '@/blocks/cover-6'
import Blog1 from '@/blocks/blog-1'

export default function Content() {
  return (
    <>
      <Hero16 />
      <Services1 />
      <Portfolio1 />
      <Cover6 />
      <Blog1 />
    </>
  )
}

export const metadata = {
  title: 'Layout 3 | Multi-Column Content Distribution Design',
  description:
    'Discover our multi-column content distribution design. Ideal for organizing and presenting diverse content in a structured format.',
  keywords: [
    'layout design',
    'multi-column',
    'content distribution',
    'web design',
    'responsive layout',
  ],
  focusKeyword: ['layout design', 'multi-column', 'content distribution'],
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  lastModified: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-3',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-3',
    siteName: 'Speedwell',
    title: 'Layout 3 | Multi-Column Content Distribution Design',
    description:
      'Discover our multi-column content distribution design. Ideal for organizing and presenting diverse content in a structured format.',
    image: {
      url: '/images/portfolio/pexels-pixabay-259962.jpg',
      alt: 'Multi-column layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 3 | Multi-Column Content Distribution Design',
    description:
      'Discover our multi-column content distribution design. Ideal for organizing and presenting diverse content in a structured format.',
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
          name: 'Layout 3',
          item: 'https://speedwell.gallop.software/layout-3',
        },
      ],
    },
  ],
}
