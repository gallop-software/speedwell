import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Testimonial from './_blocks/testimonial'
import Content from './_blocks/content'
import About from './_blocks/about'

function Blocks() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Content />
      <About />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Client Testimonials | Interior Design Success Stories',
  description:
    'Read what our clients say about their interior design experience with Speedwell. Discover how we have transformed homes and businesses with personalized design solutions that exceed expectations.',
  slug: 'testimonials',
  featuredImage: '/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg',
  focusKeyword: 'interior design testimonials',
  readingTimeMinutes: 6,
  publishDate: '2024-08-01T10:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | Interior Design Success Stories',
    description:
      'Discover what our clients say about working with Speedwell. Real stories of transformed spaces and exceptional design experiences from satisfied homeowners and businesses.',
    image: {
      url: '/banner.jpg',
      alt: 'Happy clients in their beautifully designed interior space',
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
