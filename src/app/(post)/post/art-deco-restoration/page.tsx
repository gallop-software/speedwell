import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Art Deco Restoration | Historic 1920s Interior Design',
  description:
    'Meticulous Art Deco apartment restoration featuring geometric details, period furnishings, and glamorous 1920s design with modern amenities.',
  date: '2024-03-25',
  slug: 'art-deco-restoration',
  featuredImage: '/portfolio/pexels-pixabay-269252.jpg',
  categories: ['Restoration', 'Art Deco', 'Historic'],
  alternates: {
    canonical: '/post/art-deco-restoration',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Art Deco Restoration | Historic 1920s Interior Design',
    description:
      'Glamorous Art Deco restoration with period details and modern convenience',
    image: {
      url: '/banner.jpg',
      alt: 'Art Deco interior with geometric patterns and luxurious finishes',
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
