import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import { Navbar } from '@/components'
import Cover4 from '@/blocks/cover-4'
import Section33 from '@/blocks/section-33'
import Section34 from '@/blocks/section-34'
import Content7 from '@/blocks/content-7'
import Content8 from '@/blocks/content-8'
import Content9 from '@/blocks/content-9'
import Content10 from '@/blocks/content-10'
import Content11 from '@/blocks/content-11'

function Content() {
  return (
    <>
      <Navbar />
      <Cover4 />
      <Section33 />
      <Section34 />
      <Content7 />
      <Content8 />
      <Content9 />
      <Content10 />
      <Content11 />
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
export default () => (
  <PageWrapper metadata={metadata}>
    <Content />
  </PageWrapper>
)
