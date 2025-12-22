import Hero1 from '@/blocks/hero-1'
import Section1 from '@/blocks/section-1'
import Section2 from '@/blocks/section-2'
import Section3 from '@/blocks/section-3'
import Blog1 from '@/blocks/blog-1'

export default function Content() {
  return (
    <>
      <Hero1 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Blog1 />
    </>
  )
}

export const metadata = {
  title: 'Layout 7 | Vertical Split Content Arrangement',
  description:
    'Discover our vertical split content arrangement. Ideal for balancing text and visuals in an elegant, side-by-side format.',
  keywords: [
    'layout design',
    'vertical split',
    'content arrangement',
    'side-by-side layout',
    'balanced design',
  ],
  focusKeyword: ['layout design', 'vertical split', 'content arrangement'],
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  lastModified: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-7',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-7',
    siteName: 'Speedwell',
    title: 'Layout 7 | Vertical Split Content Arrangement',
    description:
      'Discover our vertical split content arrangement. Ideal for balancing text and visuals in an elegant, side-by-side format.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Vertical split layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 7 | Vertical Split Content Arrangement',
    description:
      'Discover our vertical split content arrangement. Ideal for balancing text and visuals in an elegant, side-by-side format.',
    image: '/images/banner.jpg',
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
          name: 'Layout 7',
          item: 'https://speedwell.gallop.software/layout-7',
        },
      ],
    },
  ],
}
