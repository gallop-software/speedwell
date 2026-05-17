import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Artisan Coffee Brand Identity | Specialty Roaster Branding',
  description:
    'Complete brand identity for specialty coffee roaster featuring sustainable packaging design, custom illustrations, and authentic visual storytelling.',
  date: '2024-12-10',
  slug: 'boutique-retail-design',
  featuredImage: '/layout-1/pexels-blanca-isela-2156722885-35240180.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Packaging Design'],
  alternates: {
    canonical: '/post/boutique-retail-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Artisan Coffee Brand Identity | Specialty Roaster Branding',
    description:
      'Sustainable brand identity and packaging design for artisan coffee roaster',
    image: {
      url: '/banner.jpg',
      alt: 'Artisan coffee brand packaging',
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
