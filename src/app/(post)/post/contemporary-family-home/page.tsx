import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Contemporary Family Home | Modern Residential Interior Design',
  description:
    'Open-plan family home renovation featuring contemporary design, custom millwork, and smart home integration for comfortable modern living.',
  date: '2024-11-10',
  slug: 'contemporary-family-home',
  featuredImage: '/portfolio/falling4utah/pexels-falling4utah-1080696.jpg',
  categories: ['Residential', 'Contemporary', 'Family Home'],
  alternates: {
    canonical: '/post/contemporary-family-home',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Contemporary Family Home | Modern Residential Interior Design',
    description:
      'Open-plan contemporary home with custom millwork and smart home features',
    image: {
      url: '/banner.jpg',
      alt: 'Contemporary family home with open-plan living spaces',
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
