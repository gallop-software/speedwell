import Hero13 from '@/blocks/hero-13'
import Testimonial3 from '@/blocks/testimonial-3'
import Section32 from '@/blocks/section-32'
import About1 from '@/blocks/about-1'

export default function Content() {
  return (
    <>
      <Hero13 />
      <Testimonial3 />
      <Section32 />
      <About1 />
    </>
  )
}

export const metadata = {
  title: 'Client Testimonials | Interior Design Success Stories',
  description:
    'Read what our clients say about their interior design experience with Speedwell. Discover how we have transformed homes and businesses with personalized design solutions that exceed expectations.',
  slug: 'testimonials',
  featuredImage: '/images/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg',
  focusKeyword: 'interior design testimonials',
  readingTimeMinutes: 6,
  publishDate: '2024-08-01T10:00:00Z',
  lastModified: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | Interior Design Success Stories',
    description:
      'Discover what our clients say about working with Speedwell. Real stories of transformed spaces and exceptional design experiences from satisfied homeowners and businesses.',
    image: {
      url: '/images/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg',
      alt: 'Happy clients in their beautifully designed interior space',
    },
  },
}
