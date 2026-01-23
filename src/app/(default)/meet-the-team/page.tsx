import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import { Navbar } from '@/components'
import Cover4 from '@/blocks/cover-4'
import Content30 from '@/blocks/content-30'
import Content31 from '@/blocks/content-31'
import Content27 from '@/blocks/content-27'
import Content26 from '@/blocks/content-26'
import Content25 from '@/blocks/content-25'
import Content24 from '@/blocks/content-24'
import Content23 from '@/blocks/content-23'

function Content() {
  return (
    <>
      <Cover4 />
      <Content30 />
      <Content31 />
      <Content27 />
      <Content26 />
      <Content25 />
      <Content24 />
      <Content23 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Meet Our Team | Interior Design Experts in Real Estate',
  description:
    'Meet the talented interior designers and specialists at Timmerman. Learn about our experienced team dedicated to transforming residential and commercial spaces with creativity and expertise.',
  slug: 'meet-the-team',
  featuredImage: '/images/portfolio/pexels-jworks1124-342800.jpg',
  focusKeyword: 'interior design team',
  readingTimeMinutes: 5,
  publishDate: '2024-07-01T10:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/meet-the-team',
  },
  openGraph: {
    title: 'Meet Our Team | Interior Design Experts',
    description:
      'Meet our experienced interior designers and specialists at Timmerman. Discover the talented professionals who bring your design vision to life with creativity and expertise.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Timmerman interior design team',
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
