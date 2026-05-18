import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Wellness Spa Design | Holistic Health Spa Interior',
  description:
    'Tranquil boutique spa featuring treatment rooms, meditation lounge, and holistic design creating a sanctuary for rejuvenation and self-care.',
  date: '2025-01-30',
  slug: 'wellness-spa-design',
  featuredImage: '/portfolio/falling4utah/pexels-falling4utah-1080721.jpg',
  categories: ['Commercial', 'Wellness', 'Spa Design'],
  alternates: {
    canonical: '/post/wellness-spa-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Wellness Spa Design | Holistic Health Spa Interior',
    description:
      'Boutique wellness spa with treatment rooms and holistic design',
    image: {
      url: '/banner.jpg',
      alt: 'Wellness spa with tranquil treatment rooms',
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
