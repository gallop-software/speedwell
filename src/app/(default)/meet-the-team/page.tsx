import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Cover from './_blocks/cover'
import Content from './_blocks/content'
import Content2 from './_blocks/content-2'
import Content3 from './_blocks/content-3'
import Content4 from './_blocks/content-4'
import Content5 from './_blocks/content-5'
import Content6 from './_blocks/content-6'
import Content7 from './_blocks/content-7'

function Blocks() {
  return (
    <>
      <Cover />
      <Content />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Meet Our Team | Interior Design Experts in Real Estate',
  description:
    'Meet the talented interior designers and specialists at Timmerman. Learn about our experienced team dedicated to transforming residential and commercial spaces with creativity and expertise.',
  slug: 'meet-the-team',
  featuredImage: '/portfolio/pexels-jworks1124-342800.jpg',
  focusKeyword: 'interior design team',
  readingTimeMinutes: 5,
  publishDate: '2024-07-01T10:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/meet-the-team',
  },
  openGraph: {
    title: 'Meet Our Team | Interior Design Experts',
    description:
      'Meet our experienced interior designers and specialists at Timmerman. Discover the talented professionals who bring your design vision to life with creativity and expertise.',
    image: {
      url: '/banner.jpg',
      alt: 'Timmerman interior design team',
    },
  },
}

export const generateMetadata = () => generatePageMetadata(metadata)
export default function Page() {
  return (
    <PageWrapper metadata={metadata}>
      <Blocks />
    </PageWrapper>
  )
}
