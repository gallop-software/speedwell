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
  title: 'Startup Page | Modern Tech Platform Solution',
  description:
    'Discover our innovative tech platform designed for modern startups. Powerful features, seamless collaboration, and scalable solutions for your growing business.',
  keywords: [
    'startup platform',
    'tech solution',
    'collaboration tools',
    'business software',
    'saas platform',
  ],
  focusKeyword: ['startup platform', 'tech solution', 'collaboration tools'],
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
    title: 'Startup Page | Modern Tech Platform Solution',
    description:
      'Discover our innovative tech platform designed for modern startups. Powerful features, seamless collaboration, and scalable solutions for your growing business.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Modern tech startup platform',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@speedwelldesign',
    creator: '@speedwelldesign',
    title: 'Startup Page | Modern Tech Platform Solution',
    description:
      'Discover our innovative tech platform designed for modern startups. Powerful features, seamless collaboration, and scalable solutions for your growing business.',
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
          name: 'Startup Page',
          item: 'https://speedwell.gallop.software/layout-2',
        },
      ],
    },
  ],
}
