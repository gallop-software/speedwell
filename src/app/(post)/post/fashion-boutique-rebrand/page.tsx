import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Fashion Boutique Rebrand | Sustainable Luxury Design',
  description:
    'Sophisticated rebrand for fashion boutique balancing timeless elegance with sustainability, creating a destination for conscious consumers.',
  date: '2024-11-08',
  slug: 'fashion-boutique-rebrand',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/layout-1/pexels-rachel-claire-5490970-lg.jpg',
    width: 1400,
    height: 933,
  },
  categories: ['Portfolio', 'Brand Identity', 'Fashion'],
  alternates: {
    canonical: '/post/fashion-boutique-rebrand',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Fashion Boutique Rebrand | Sustainable Luxury Design',
    description:
      'Elegant rebrand merging timeless style with sustainable fashion values',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Fashion boutique brand identity',
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
