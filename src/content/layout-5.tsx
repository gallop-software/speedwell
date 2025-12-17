import Hero18 from '@/blocks/hero-18'
import Showcase10 from '@/blocks/showcase-10'
import Section36 from '@/blocks/section-36'

export default function Content() {
  return (
    <>
      <Hero18 />
      <Showcase10 />
      <Section36 />
    </>
  )
}

export const metadata = {
  title: 'Layout 5 | Split-Screen with Fixed Left Panel',
  description:
    'Check out our split-screen layout with fixed left panel. Great for highlighting key information while providing detailed content.',
  keywords: [
    'layout design',
    'split-screen',
    'fixed panel',
    'dual-pane layout',
    'modern design',
  ],
  focusKeyword: ['layout design', 'split-screen', 'fixed panel'],
  readingTimeMinutes: 12,
  publishDate: '2019-10-23T06:12:20Z',
  lastModified: '2025-09-28T01:00:00Z',
  featuredImage: '/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  alternates: {
    canonical: 'https://speedwell.gallop.software/layout-5',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/layout-5',
    siteName: 'Speedwell',
    title: 'Layout 5 | Split-Screen with Fixed Left Panel',
    description:
      'Check out our split-screen layout with fixed left panel. Great for highlighting key information while providing detailed content.',
    image: {
      url: '/images/portfolio/pexels-pixabay-259962.jpg',
      alt: 'Split-screen layout design',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Layout 5 | Split-Screen with Fixed Left Panel',
    description:
      'Check out our split-screen layout with fixed left panel. Great for highlighting key information while providing detailed content.',
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
          name: 'Layout 5',
          item: 'https://speedwell.gallop.software/layout-5',
        },
      ],
    },
  ],
}
