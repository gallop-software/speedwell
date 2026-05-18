import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Spa Bathroom Retreat | Luxury Bathroom Interior Design',
  description:
    'Tranquil spa-inspired bathroom featuring steam shower, soaking tub, heated floors, and luxurious finishes for ultimate relaxation.',
  date: '2024-05-28',
  slug: 'spa-bathroom-retreat',
  featuredImage: '/portfolio/pexels-pixabay-269218.jpg',
  categories: ['Bathroom Design', 'Luxury', 'Contemporary'],
  alternates: {
    canonical: '/post/spa-bathroom-retreat',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Spa Bathroom Retreat | Luxury Bathroom Interior Design',
    description: 'Luxurious spa bathroom with steam shower and soaking tub',
    image: {
      url: '/banner.jpg',
      alt: 'Spa-inspired bathroom with modern fixtures and natural light',
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
