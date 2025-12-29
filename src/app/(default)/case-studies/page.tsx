import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero5 from '@/blocks/hero-5'
import Section12 from '@/blocks/section-12'
import Partners1 from '@/blocks/partners-1'

function Content() {
  return (
    <>
      <Hero5 />
      <Section12 />
      <Partners1 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Voluptate non deserunt veniam',
  description:
    'Eiusmod eiusmod sint dolor anim minim id sint reprehenderit ullamco pariatur nostrud sit aliquip laboris velit consequat eiusmod duis non labore non ut voluptate',
  slug: 'case-studies',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg',
  focusKeyword: 'aenean commodo resources',
  readingTimeMinutes: 3,
  publishDate: '2025-10-13T00:00:00Z',
  modifiedDate: '2025-10-13T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/case-studies',
  },
  openGraph: {
    title: 'Amet ut non fugiat',
    description:
      'Non esse mollit adipiscing ad exercitation id dolor enim reprehenderit laboris aute sed reprehenderit sed nostrud eiusmod exercitation laborum commodo sit ad excepteur mollit',
    image: {
      url: '/images/banner.jpg',
      alt: 'Consectetur elit anim in aliqua lorem minim',
    },
  },
}

export const generateMetadata = () => generatePageMetadata(metadata)
export default () => (
  <PageWrapper metadata={metadata}>
    <Content />
  </PageWrapper>
)
