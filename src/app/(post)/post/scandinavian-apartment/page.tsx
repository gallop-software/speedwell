import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Scandinavian Apartment | Nordic Minimalist Interior Design',
  description:
    'Light-filled apartment featuring Scandinavian design principles with natural materials, multi-functional furniture, and minimalist aesthetic.',
  date: '2024-07-20',
  slug: 'scandinavian-apartment',
  featuredImage: '/portfolio/jvdm/pexels-jvdm-1457844.jpg',
  categories: ['Residential', 'Scandinavian', 'Minimalist'],
  alternates: {
    canonical: '/post/scandinavian-apartment',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Scandinavian Apartment | Nordic Minimalist Interior Design',
    description:
      'Nordic-inspired apartment with natural materials and minimalist design',
    image: {
      url: '/banner.jpg',
      alt: 'Scandinavian apartment with white walls and natural wood accents',
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
