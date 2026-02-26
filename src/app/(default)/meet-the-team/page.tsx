import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Banner from './_blocks/banner'
import Intro from './_blocks/intro'
import Philosophy from './_blocks/philosophy'
import Profile from './_blocks/profile'
import Profile2 from './_blocks/profile-2'
import Profile3 from './_blocks/profile-3'
import Profile4 from './_blocks/profile-4'
import Profile5 from './_blocks/profile-5'

function Content() {
  return (
    <>
      <Banner />
      <Intro />
      <Philosophy />
      <Profile />
      <Profile2 />
      <Profile3 />
      <Profile4 />
      <Profile5 />
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
      <Content />
    </PageWrapper>
  )
}
