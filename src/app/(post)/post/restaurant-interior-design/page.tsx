import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Restaurant Interior Design | Upscale Dining Experience',
  description:
    'Sophisticated restaurant featuring custom millwork, varied dining zones, and elevated design that balances ambiance with operational needs.',
  date: '2024-11-28',
  slug: 'restaurant-interior-design',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg',
  categories: ['Commercial', 'Hospitality', 'Restaurant'],
  alternates: {
    canonical: '/post/restaurant-interior-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Restaurant Interior Design | Upscale Dining Experience',
    description:
      'Upscale restaurant with sophisticated ambiance and thoughtful design',
    image: {
      url: '/banner.jpg',
      alt: 'Upscale restaurant interior with rich materials',
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
