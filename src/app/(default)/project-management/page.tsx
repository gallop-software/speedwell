import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Hero10 from '@/blocks/hero-10'
import Content25 from '@/blocks/content-25'
import Content26 from '@/blocks/content-26'
import Content27 from '@/blocks/content-27'
import Content28 from '@/blocks/content-28'
import Content29 from '@/blocks/content-29'
import Content30 from '@/blocks/content-30'
import Content31 from '@/blocks/content-31'
import Content32 from '@/blocks/content-32'

function Content() {
  return (
    <>
      <Hero10 />
      <Content25 />
      <Content26 />
      <Content27 />
      <Content28 />
      <Content29 />
      <Content30 />
      <Content31 />
      <Content32 />
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
