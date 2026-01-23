import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Content54 from '@/blocks/content-54'
import Section4 from '@/blocks/section-4'
import Section8 from '@/blocks/section-8'

function Content() {
  return (
    <>
      <Content54 />
      <Section4 />
      <Section8 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Our Design Partners',
  description:
    'We collaborate with exceptional craftsmen, artisans, and suppliers to bring your interior design vision to life. Meet the trusted partners who help us deliver outstanding results.',
  slug: 'partners',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg',
  focusKeyword: 'interior design partners',
  readingTimeMinutes: 3,
  publishDate: '2025-10-13T00:00:00Z',
  modifiedDate: '2025-10-13T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/partners',
  },
  openGraph: {
    title: 'Our Design Partners',
    description:
      'We collaborate with exceptional craftsmen, artisans, and suppliers to bring your interior design vision to life.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Interior design partner showcase',
    },
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
