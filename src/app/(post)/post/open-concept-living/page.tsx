import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Open Concept Living | Modern Home Renovation Design',
  description:
    'Whole-home renovation creating flowing open-concept space with defined zones for kitchen, dining, and living areas with indoor-outdoor connection.',
  date: '2024-04-16',
  slug: 'open-concept-living',
  featuredImage: '/portfolio/houzlook/pexels-houzlook-3356416.jpg',
  categories: ['Residential', 'Renovation', 'Contemporary'],
  alternates: {
    canonical: '/post/open-concept-living',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Open Concept Living | Modern Home Renovation Design',
    description: 'Flowing open-concept renovation with connected living spaces',
    image: {
      url: '/banner.jpg',
      alt: 'Open concept living space with kitchen and dining areas',
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
