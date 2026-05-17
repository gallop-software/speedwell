import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Boutique Hotel Design | Luxury Hospitality Interior Design',
  description:
    'Intimate boutique hotel featuring unique guest rooms, curated public spaces, and sophisticated design blending historic charm with modern luxury.',
  date: '2025-01-08',
  slug: 'boutique-hotel-design',
  featuredImage: '/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg',
  categories: ['Commercial', 'Hospitality', 'Luxury'],
  alternates: {
    canonical: '/post/boutique-hotel-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Boutique Hotel Design | Luxury Hospitality Interior Design',
    description:
      'Sophisticated boutique hotel with unique rooms and curated public spaces',
    image: {
      url: '/banner.jpg',
      alt: 'Boutique hotel lobby with sophisticated furnishings',
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
