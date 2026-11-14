import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Rooftop Terrace Design | Urban Outdoor Living Space',
  description:
    'Urban rooftop terrace featuring multiple zones, container gardens, and weather-resistant design for year-round outdoor entertaining.',
  date: '2024-06-25',
  slug: 'rooftop-terrace-design',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/pexels-dropshado-2251247-lg.jpg',
    width: 1400,
    height: 933,
  },
  categories: ['Outdoor Living', 'Urban Design', 'Terrace'],
  alternates: {
    canonical: '/post/rooftop-terrace-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Rooftop Terrace Design | Urban Outdoor Living Space',
    description:
      'Urban rooftop oasis with dining, lounge areas, and city views',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Rooftop terrace with outdoor furniture and city views',
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
