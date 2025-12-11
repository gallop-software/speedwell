import Cover1 from '@/blocks/cover-1'
import Section16 from '@/blocks/section-16'
import Section17 from '@/blocks/section-17'
import About2 from '@/blocks/about-2'
import { Navbar } from '@/components'

export default function Content() {
  return (
    <>
      <Navbar />
      <Cover1 />
      <Section16 />
      <Section17 />
      <About2 />
    </>
  )
}

export const metadata = {
  title: 'Meet Our Team | Interior Design Experts in Real Estate',
  description:
    'Meet the talented interior designers and specialists at Speedwell. Learn about our experienced team dedicated to transforming residential and commercial spaces with creativity and expertise.',
  slug: 'meet-the-team',
  featuredImage: '/images/portfolio/pexels-jworks1124-342800.jpg',
  focusKeyword: 'interior design team',
  readingTimeMinutes: 5,
  publishDate: '2024-07-01T10:00:00Z',
  lastModified: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/meet-the-team',
  },
  openGraph: {
    title: 'Meet Our Team | Interior Design Experts',
    description:
      'Meet our experienced interior designers and specialists at Speedwell. Discover the talented professionals who bring your design vision to life with creativity and expertise.',
    image: {
      url: '/images/portfolio/pexels-jworks1124-342800.jpg',
      alt: 'Speedwell interior design team',
    },
  },
}
