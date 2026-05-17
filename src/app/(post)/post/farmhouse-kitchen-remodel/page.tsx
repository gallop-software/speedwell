import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Farmhouse Kitchen Remodel | Rustic Country Kitchen Design',
  description:
    'Charming farmhouse kitchen renovation featuring Shaker cabinets, butcher block counters, and rustic details with modern amenities.',
  date: '2024-06-12',
  slug: 'farmhouse-kitchen-remodel',
  featuredImage: '/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg',
  categories: ['Kitchen Design', 'Farmhouse', 'Traditional'],
  alternates: {
    canonical: '/post/farmhouse-kitchen-remodel',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Farmhouse Kitchen Remodel | Rustic Country Kitchen Design',
    description:
      'Charming farmhouse kitchen with Shaker cabinets and rustic character',
    image: {
      url: '/banner.jpg',
      alt: 'Farmhouse kitchen with sage green cabinets and rustic details',
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
