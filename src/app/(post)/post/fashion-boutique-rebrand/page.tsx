import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Fashion Boutique Rebrand | Sustainable Luxury Design',
  description:
    'Sophisticated rebrand for fashion boutique balancing timeless elegance with sustainability, creating a destination for conscious consumers.',
  date: '2024-11-08',
  slug: 'fashion-boutique-rebrand',
  featuredImage: '/layout-1/pexels-rachel-claire-5490970.jpg',
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
      url: '/banner.jpg',
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
