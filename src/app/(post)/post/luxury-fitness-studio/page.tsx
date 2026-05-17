import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Craft Brewery Brand Identity | Beer Label Design',
  description:
    'Bold brewery brand featuring custom illustrations, vibrant label designs, and cohesive identity system that stands out in craft beer market.',
  date: '2024-07-18',
  slug: 'luxury-fitness-studio',
  featuredImage: '/layout-1/pexels-elevate-1267700.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Packaging Design'],
  alternates: {
    canonical: '/post/luxury-fitness-studio',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Craft Brewery Brand Identity | Beer Label Design',
    description:
      'Distinctive brewery brand with custom illustrations and bold packaging',
    image: {
      url: '/banner.jpg',
      alt: 'Craft brewery brand labels',
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
