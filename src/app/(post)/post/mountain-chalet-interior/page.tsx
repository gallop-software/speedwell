import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Mountain Chalet Interior | Alpine Luxury Home Design',
  description:
    'Warm mountain chalet featuring reclaimed wood, stone fireplace, and rustic luxury design with spectacular alpine views and modern amenities.',
  date: '2024-01-15',
  slug: 'mountain-chalet-interior',
  featuredImage: '/portfolio/pexels-jworks1124-342800.jpg',
  categories: ['Residential', 'Mountain', 'Luxury'],
  alternates: {
    canonical: '/post/mountain-chalet-interior',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Mountain Chalet Interior | Alpine Luxury Home Design',
    description:
      'Cozy mountain chalet with rustic luxury and spectacular views',
    image: {
      url: '/banner.jpg',
      alt: 'Mountain chalet interior with exposed beams and stone fireplace',
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
