import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Sustainable Green Home | Eco-Friendly Interior Design',
  description:
    'Environmentally conscious home featuring sustainable materials, energy-efficient systems, and healthy living spaces with minimal carbon footprint.',
  date: '2024-08-30',
  slug: 'sustainable-green-home',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg',
  categories: ['Residential', 'Sustainable', 'Contemporary'],
  alternates: {
    canonical: '/post/sustainable-green-home',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Sustainable Green Home | Eco-Friendly Interior Design',
    description:
      'Eco-friendly home with sustainable materials and energy-efficient design',
    image: {
      url: '/banner.jpg',
      alt: 'Sustainable home interior with natural materials',
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
