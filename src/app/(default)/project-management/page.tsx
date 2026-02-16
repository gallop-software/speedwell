import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero from './_blocks/hero'
import Content from './_blocks/content'
import Content2 from './_blocks/content-2'
import Content3 from './_blocks/content-3'
import Content4 from './_blocks/content-4'
import Content5 from './_blocks/content-5'
import Content6 from './_blocks/content-6'
import Content7 from './_blocks/content-7'
import Content8 from './_blocks/content-8'

function Blocks() {
  return (
    <>
      <Hero />
      <Content />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
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
      <Blocks />
    </PageWrapper>
  )
}
