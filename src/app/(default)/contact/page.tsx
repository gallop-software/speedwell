import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'

import Form1 from '@/blocks/form-1'
import Section7 from '@/blocks/section-7'

function Content() {
  return (
    <>
      <Form1 />
      <Section7 />
    </>
  )
}

const metadata: PageMetadata = {
  title: 'Contact Us - Interior Design Consultation',
  description:
    'Get in touch with our interior design team for a complimentary consultation. Located in the Design District, we specialize in residential and commercial design projects.',
  slug: 'contact',
  featuredImage: '/images/portfolio/pexels-pixabay-161758.jpg',
  focusKeyword: 'contact interior design',
  readingTimeMinutes: 2,
  publishDate: '2025-09-18T00:00:00Z',
  modifiedDate: '2025-11-27T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/contact',
  },
  openGraph: {
    title: 'Contact Us - Interior Design Studio',
    description:
      'Schedule your complimentary design consultation today. Our award-winning team is ready to transform your space.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Modern interior design studio',
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
