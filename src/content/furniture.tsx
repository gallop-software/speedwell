import Hero8 from '@/blocks/hero-8'
import Content3 from '@/blocks/content-3'
import CallToAction4 from '@/blocks/call-to-action-4'
import PageFooter from '@/template/page-footer'

export default function Content() {
  return (
    <>
      <Hero8 />
      <Content3 />
      <CallToAction4 />
      <PageFooter />
    </>
  )
}

export const metadata = {
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
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg',
  focusKeyword: 'furniture selection services',
  readingTimeMinutes: 4,
  publishDate: '2024-07-10T11:00:00Z',
  lastModified: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/furniture',
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
      url: '/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg',
      alt: 'Beautifully curated interior furniture selection',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Furniture Selection Services | Curated Interior Furnishings',
    description:
      'Expert furniture selection services. Curate perfect pieces combining style, comfort, and durability for cohesive, beautiful interiors.',
    image: '/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg',
  },
}
