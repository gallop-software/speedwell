import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Historic Brownstone Revival | Victorian Home Restoration',
  description:
    'Meticulous restoration of a 19th-century brownstone blending original architectural details with modern amenities and contemporary design sensibilities.',
  date: '2024-11-05',
  slug: 'historic-brownstone-revival',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1643384.jpg',
  categories: ['Residential', 'Historic Restoration', 'Victorian'],
  alternates: {
    canonical: '/post/historic-brownstone-revival',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Historic Brownstone Revival | Victorian Home Restoration',
    description:
      '19th-century brownstone restoration honoring original details while incorporating modern comfort',
    image: {
      url: '/banner.jpg',
      alt: 'Restored historic brownstone interior with Victorian details',
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
