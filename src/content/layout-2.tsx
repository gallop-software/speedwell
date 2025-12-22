import Hero15 from '@/blocks/hero-15'
import Showcase7 from '@/blocks/showcase-7'
import Pricing1 from '@/blocks/pricing-1'
import Testimonial5 from '@/blocks/testimonial-5'
import Contact5 from '@/blocks/contact-5'

export default function Content() {
  return (
    <>
      <Hero15 />
      <Showcase7 />
      <Pricing1 />
      <Testimonial5 />
      <Contact5 />
    </>
  )
}

export const metadata = {
  title: 'Navbar Style 2 | Right Aligned Navigation',
  description:
    'Explore the second navbar style featuring right aligned navigation. A clean, modern layout with navigation links positioned on the right side.',
  keywords: [
    'navbar style',
    'navigation design',
    'header layout',
    'centered logo',
    'modern navigation',
  ],
  focusKeyword: ['navbar style', 'navigation design', 'header layout'],
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
    title: 'Navbar Style 2 | Alternate Navigation Layout',
    description:
      'Explore the second navbar style with a clean, modern design. Features a centered logo layout with balanced navigation links on either side.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Navbar style 2 preview',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Navbar Style 2 | Alternate Navigation Layout',
    description:
      'Explore the second navbar style with a clean, modern design. Features a centered logo layout with balanced navigation links on either side.',
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
          name: 'Navbar Style 2',
          item: 'https://speedwell.gallop.software/layout-2',
        },
      ],
    },
  ],
}
