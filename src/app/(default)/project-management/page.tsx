import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero10 from '@/blocks/hero-10'
import Section16 from '@/blocks/section-16'
import Section17 from '@/blocks/section-17'
import Section18 from '@/blocks/section-18'
import Section19 from '@/blocks/section-19'
import Section20 from '@/blocks/section-20'
import Section21 from '@/blocks/section-21'
import Section22 from '@/blocks/section-22'
import Section23 from '@/blocks/section-23'

function Content() {
  return (
    <>
      <Hero10 />
      <Section16 />
      <Section17 />
      <Section18 />
      <Section19 />
      <Section20 />
      <Section21 />
      <Section22 />
      <Section23 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Professional Project Management | Interior Design Services',
  description:
    'Seamless interior design project management from concept to completion. We coordinate all aspects of your project with precision, ensuring on-time delivery, budget adherence, and exceptional quality.',
  slug: 'project-management',
  featuredImage:
    '/images/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg',
  focusKeyword: 'interior design project management',
  readingTimeMinutes: 6,
  publishDate: '2024-04-15T11:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/project-management',
  },
  openGraph: {
    title: 'Professional Project Management | Interior Design Services',
    description:
      'Expert project management for your interior design needs. We handle every detail from planning to execution, ensuring your project is completed on time, on budget, and beyond expectations.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Professional interior design project in progress',
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
