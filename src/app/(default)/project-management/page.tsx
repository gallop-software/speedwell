import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Intro from './_blocks/intro'
import Philosophy from './_blocks/philosophy'
import Phase from './_blocks/phase'
import Phase2 from './_blocks/phase-2'
import Phase3 from './_blocks/phase-3'
import Budget from './_blocks/budget'
import Quality from './_blocks/quality'
import Partnership from './_blocks/partnership'

function Content() {
  return (
    <>
      <Hero />
      <Intro />
      <Philosophy />
      <Phase />
      <Phase2 />
      <Phase3 />
      <Budget />
      <Quality />
      <Partnership />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Professional Project Management | Interior Design Services',
  description:
    'Seamless interior design project management from concept to completion. We coordinate all aspects of your project with precision, ensuring on-time delivery, budget adherence, and exceptional quality.',
  slug: 'project-management',
  featuredImage: '/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg',
  focusKeyword: 'interior design project management',
  readingTimeMinutes: 6,
  publishDate: '2024-04-15T11:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/project-management',
  },
  openGraph: {
    title: 'Professional Project Management | Interior Design Services',
    description:
      'Expert project management for your interior design needs. We handle every detail from planning to execution, ensuring your project is completed on time, on budget, and beyond expectations.',
    image: {
      url: '/banner.jpg',
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
