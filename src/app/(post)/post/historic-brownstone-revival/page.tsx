import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Historic Brownstone Revival | Victorian Home Restoration',
  description:
    'Meticulous restoration of a 19th-century brownstone blending original architectural details with modern amenities and contemporary design sensibilities.',
  date: '2024-11-05',
  slug: 'historic-brownstone-revival',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1643384-lg.jpg',
    width: 1400,
    height: 934,
  },
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
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
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
