import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Guest Suite Makeover | Boutique Hotel Style Guest Room',
  description:
    'Welcoming guest suite featuring hotel-quality amenities, comfortable furnishings, and thoughtful details for the ultimate guest experience.',
  date: '2024-09-22',
  slug: 'guest-suite-makeover',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-4450337-lg.jpg',
    width: 1400,
    height: 2097,
  },
  categories: ['Guest Room', 'Residential', 'Bedroom Design'],
  alternates: {
    canonical: '/post/guest-suite-makeover',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Guest Suite Makeover | Boutique Hotel Style Guest Room',
    description:
      'Hotel-style guest suite with thoughtful amenities and welcoming design',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Guest suite with comfortable bed and hotel-quality amenities',
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
