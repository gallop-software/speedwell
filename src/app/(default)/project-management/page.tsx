import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero10 from '@/blocks/hero-10'
import Content14 from '@/blocks/content-14'
import Content15 from '@/blocks/content-15'
import Content16 from '@/blocks/content-16'
import Content17 from '@/blocks/content-17'
import Content18 from '@/blocks/content-18'
import Content19 from '@/blocks/content-19'
import Content20 from '@/blocks/content-20'
import Content21 from '@/blocks/content-21'

function Content() {
  return (
    <>
      <Hero10 />
      <Content14 />
      <Content15 />
      <Content16 />
      <Content17 />
      <Content18 />
      <Content19 />
      <Content20 />
      <Content21 />
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
