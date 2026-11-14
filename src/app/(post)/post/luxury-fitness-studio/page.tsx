import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Craft Brewery Brand Identity | Beer Label Design',
  description:
    'Bold brewery brand featuring custom illustrations, vibrant label designs, and cohesive identity system that stands out in craft beer market.',
  date: '2024-07-18',
  slug: 'luxury-fitness-studio',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/layout-1/pexels-elevate-1267700-lg.jpg',
    width: 1400,
    height: 2096,
  },
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
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
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
