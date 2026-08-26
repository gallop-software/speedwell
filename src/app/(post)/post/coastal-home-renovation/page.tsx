import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Coastal Home Renovation | Beach House Interior Design',
  description:
    'Complete renovation of a beachfront home featuring airy coastal design, custom built-ins, and seamless indoor-outdoor living spaces with ocean views.',
  date: '2025-04-15',
  slug: 'coastal-home-renovation',
  featuredImage: '/portfolio/pexels-burst-545012.jpg',
  categories: ['Residential', 'Coastal Design', 'Renovation'],
  alternates: {
    canonical: '/post/coastal-home-renovation',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Coastal Home Renovation | Beach House Interior Design',
    description:
      'Fresh, airy beachfront home renovation with ocean views and coastal-inspired interiors',
    image: {
      url: '/banner.jpg',
      alt: 'Coastal living room with ocean views and light airy design',
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
