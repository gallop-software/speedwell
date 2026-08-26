import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Intro from './_blocks/intro'
import Vendor from './_blocks/vendor'
import Vendor2 from './_blocks/vendor-2'

function Content() {
  return (
    <>
      <Intro />
      <Vendor />
      <Vendor2 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Our Design Partners',
  description:
    'We collaborate with exceptional craftsmen, artisans, and suppliers to bring your interior design vision to life. Meet the trusted partners who help us deliver outstanding results.',
  slug: 'partners',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg',
  focusKeyword: 'interior design partners',
  readingTimeMinutes: 3,
  publishDate: '2025-10-13T00:00:00Z',
  modifiedDate: '2025-10-13T00:00:00Z',
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: 'Our Design Partners',
    description:
      'We collaborate with exceptional craftsmen, artisans, and suppliers to bring your interior design vision to life.',
    image: {
      url: '/banner.jpg',
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
