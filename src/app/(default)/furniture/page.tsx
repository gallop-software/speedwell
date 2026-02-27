import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Overview from './_blocks/overview'
import CallToAction from './_blocks/call-to-action'
import Banner from './_blocks/banner'
import Testimonial from './_blocks/testimonial'

function Content() {
  return (
    <>
      <Hero />
      <Overview />
      <CallToAction />
      <Banner />
      <Testimonial />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Furniture Selection Services | Curated Interior Furnishings',
  description:
    'Expert furniture selection services that curate the perfect pieces for your space. We source quality furnishings that combine style, comfort, and durability to create cohesive, beautiful interiors.',
  keywords: [
    'furniture selection services',
    'interior furniture design',
    'custom furniture selection',
    'furniture consultant',
    'home furnishings expert',
    'furniture styling',
    'furniture sourcing',
    'designer furniture selection',
    'residential furniture design',
    'commercial furniture selection',
    'furniture curation',
    'interior furnishing services',
    'furniture specification',
  ],
  slug: 'furniture',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg',
  focusKeyword: 'furniture selection services',
  readingTimeMinutes: 4,
  publishDate: '2024-07-10T11:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/furniture',
  },
  authors: [{ name: 'Speedwell Design Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://speedwell.gallop.software/furniture',
    siteName: 'Speedwell Interior Design',
    title: 'Furniture Selection Services | Curated Interior Furnishings',
    description:
      'Expert furniture selection that curates perfect pieces for your space. Quality furnishings combining style, comfort, and durability for beautiful interiors.',
    image: {
      url: '/banner.jpg',
      alt: 'Beautifully curated interior furniture selection',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furniture Selection Services | Curated Interior Furnishings',
    description:
      'Expert furniture selection services. Curate perfect pieces combining style, comfort, and durability for cohesive, beautiful interiors.',
    image: '/banner.jpg',
  },
}

export const generateMetadata = () => generatePageMetadata(metadata)
export default function Page() {
  return (
    <PageWrapper metadata={metadata}>
      <Content />
    </PageWrapper>
  )
}
