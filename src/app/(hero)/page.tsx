import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero1 from '@/blocks/hero-1'
import Content14 from '@/blocks/content-14'
import Section2 from '@/blocks/section-2'
import Section3 from '@/blocks/section-3'
import Archive1 from '@/blocks/archive-1'

function Content() {
  return (
    <>
      <Hero1 />
      <Content14 />
      <Section2 />
      <Section3 />
      <Archive1 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Speedwell | Premium Next.js Website Template',
  description:
    'A beautifully crafted Next.js template with 100+ customizable blocks, built-in SEO optimization, and modern design patterns. Perfect for agencies, startups, and businesses.',
  keywords: [
    'next.js template',
    'react template',
    'website template',
    'tailwind css',
    'typescript',
    'landing page',
    'business template',
    'startup template',
    'agency template',
    'modern web design',
    'responsive design',
    'seo optimized',
    'component library',
  ],
  publishDate: '2024-01-01T00:00:00Z',
  modifiedDate: '2025-12-22T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software',
  },
  authors: [{ name: 'Gallop Software' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/',
    siteName: 'Speedwell',
    title: 'Speedwell | Premium Next.js Website Template',
    description:
      'Build stunning websites faster with Speedwell. A premium Next.js template featuring 100+ blocks, TypeScript, Tailwind CSS, and built-in SEO optimization.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Speedwell Next.js Template Preview',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gallopsoftware',
    creator: '@gallopsoftware',
    title: 'Speedwell | Premium Next.js Website Template',
    description:
      'Build stunning websites faster with 100+ customizable blocks, TypeScript, Tailwind CSS, and built-in SEO optimization.',
    image: '/images/banner.jpg',
  },
  category: 'Web Development',
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
      ],
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
