import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Wine Country Estate | Rustic Elegant Interior Design',
  description:
    "Sophisticated wine country home featuring rustic elegance, chef's kitchen, custom wine cellar, and seamless indoor-outdoor living.",
  date: '2025-01-19',
  slug: 'wine-country-estate',
  featuredImage: '/portfolio/pexels-alex-qian-1180283-2343465.jpg',
  categories: ['Residential', 'Luxury', 'Rustic'],
  alternates: {
    canonical: '/post/wine-country-estate',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Wine Country Estate | Rustic Elegant Interior Design',
    description: 'Wine country estate with rustic elegance and vineyard views',
    image: {
      url: '/banner.jpg',
      alt: 'Wine country estate with exposed beams and vineyard views',
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
