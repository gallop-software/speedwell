import Cover4 from '@/blocks/cover-4'
import Section33 from '@/blocks/section-33'
import Section34 from '@/blocks/section-34'
import Profile1 from '@/blocks/profile-1'
import Profile2 from '@/blocks/profile-2'
import Profile3 from '@/blocks/profile-3'
import Profile4 from '@/blocks/profile-4'
import Profile5 from '@/blocks/profile-5'
import { Navbar } from '@/components'

export default function Content() {
  return (
    <>
      <Navbar />
      <Cover4 />
      <Section33 />
      <Section34 />
      <Profile1 />
      <Profile2 />
      <Profile3 />
      <Profile4 />
      <Profile5 />
    </>
  )
}

export const metadata = {
  title: 'Meet Our Team | Interior Design Experts in Real Estate',
  description:
    'Meet the talented interior designers and specialists at Timmerman. Learn about our experienced team dedicated to transforming residential and commercial spaces with creativity and expertise.',
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
      'Meet our experienced interior designers and specialists at Timmerman. Discover the talented professionals who bring your design vision to life with creativity and expertise.',
    image: {
      url: '/images/portfolio/pexels-jworks1124-342800.jpg',
      alt: 'Timmerman interior design team',
    },
  },
}
