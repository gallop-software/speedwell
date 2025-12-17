import Hero17 from '@/blocks/hero-17'
import About4 from '@/blocks/about-4'
import Showcase8 from '@/blocks/showcase-8'
import Section1 from '@/blocks/section-1'
import Section2 from '@/blocks/section-2'
import Section3 from '@/blocks/section-3'
import Blog1 from '@/blocks/blog-1'
import { Navbar } from '@/components'

export default function Content() {
  return (
    <>
      <Navbar />
      <Hero17 />
      <About4 />
      <Showcase8 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Blog1 />
    </>
  )
}

export const metadata = {
  title: 'Layout 4 | Full-Width Carousel Presentation Style',
  description:
    'Experience our full-width carousel presentation style. Perfect for showcasing featured content and creating engaging visual narratives.',
  keywords: [
    'layout design',
    'carousel',
    'presentation',
    'full-width design',
    'visual storytelling',
  ],
  focusKeyword: ['layout design', 'carousel', 'presentation'],
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  lastModified: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-4',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-4',
    siteName: 'Speedwell',
    title: 'Layout 4 | Full-Width Carousel Presentation Style',
    description:
      'Experience our full-width carousel presentation style. Perfect for showcasing featured content and creating engaging visual narratives.',
    image: {
      url: '/images/portfolio/pexels-pixabay-259962.jpg',
      alt: 'Full-width carousel layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 4 | Full-Width Carousel Presentation Style',
    description:
      'Experience our full-width carousel presentation style. Perfect for showcasing featured content and creating engaging visual narratives.',
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
          name: 'Layout 4',
          item: 'https://speedwell.gallop.software/layout-4',
        },
      ],
    },
  ],
}
