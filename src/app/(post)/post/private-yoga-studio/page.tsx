import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Private Yoga Studio | Home Wellness Room Design',
  description:
    'Tranquil home yoga studio with bamboo floors, soft lighting, and minimalist design for meditation and daily practice.',
  date: '2024-11-05',
  slug: 'private-yoga-studio',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg',
  categories: ['Wellness', 'Home Gym', 'Minimalist'],
  alternates: {
    canonical: '/post/private-yoga-studio',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Private Yoga Studio | Home Wellness Room Design',
    description:
      'Serene home yoga studio with natural materials and calming design',
    image: {
      url: '/banner.jpg',
      alt: 'Private yoga studio with bamboo floors and peaceful ambiance',
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
