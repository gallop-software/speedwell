import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Content from './_blocks/content'
import About from './_blocks/about'
import CallToAction from './_blocks/call-to-action'

function Blocks() {
  return (
    <>
      <Hero />
      <Content />
      <About />
      <CallToAction />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Before & After Transformations | Interior Design Portfolio',
  description:
    'Explore stunning before and after transformations by Timmerman. See how our expert interior designers transform residential and commercial spaces with creative vision and meticulous attention to detail.',
  slug: 'before-after',
  featuredImage: '/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg',
  focusKeyword: 'before after interior design',
  readingTimeMinutes: 6,
  publishDate: '2024-09-15T00:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/before-after',
  },
  openGraph: {
    title: 'Before & After Transformations | Interior Design Success Stories',
    description:
      'Discover remarkable interior design transformations by Timmerman. Browse our before and after gallery showcasing residential and commercial projects that demonstrate our creative expertise.',
    image: {
      url: '/banner.jpg',
      alt: 'Before and after interior design transformation',
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
