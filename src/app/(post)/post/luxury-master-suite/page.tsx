import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Luxury Master Suite | High-End Bedroom Interior Design',
  description:
    'Opulent master suite with spa-inspired ensuite bathroom, custom closet, and five-star hotel-quality finishes and amenities.',
  date: '2025-03-22',
  slug: 'luxury-master-suite',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg',
  categories: ['Residential', 'Luxury', 'Bedroom Design'],
  alternates: {
    canonical: '/post/luxury-master-suite',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Luxury Master Suite | High-End Bedroom Interior Design',
    description:
      'Five-star master suite with spa bathroom and custom walk-in closet',
    image: {
      url: '/banner.jpg',
      alt: 'Luxury master bedroom with sophisticated furnishings',
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
