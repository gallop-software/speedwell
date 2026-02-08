import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Content10 from '@/blocks/content-10'
import Accordion1 from '@/blocks/accordion-1'
import Form3 from '@/blocks/form-3'

function Content() {
  return (
    <>
      <Content10 />
      <Accordion1 />
      <Form3 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Join our Team | Interior Design Careers',
  description:
    'Explore career opportunities at Timmerman. We are looking for talented interior designers, project managers, and design professionals passionate about creating exceptional spaces. Join our award-winning team.',
  slug: 'join-our-team',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg',
  focusKeyword: 'interior design careers',
  readingTimeMinutes: 5,
  publishDate: '2024-06-01T10:00:00Z',
  modifiedDate: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: '/join-our-team',
  },
  openGraph: {
    title: 'Join our Team | Interior Design Careers',
    description:
      'Join our talented team of interior designers and specialists. Explore career opportunities at Timmerman where creativity meets expertise in residential and commercial design.',
    image: {
      url: '/banner.jpg',
      alt: 'Timmerman design team collaboration',
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
