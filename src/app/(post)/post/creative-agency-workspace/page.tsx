import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Organic Skincare Rebrand | Clean Beauty Brand Identity',
  description:
    'Minimalist rebrand for organic skincare line featuring botanical elements, sustainable packaging, and sophisticated visual identity for clean beauty market.',
  date: '2024-10-20',
  slug: 'creative-agency-workspace',
  featuredImage: '/layout-1/pexels-cottonbro-4154192.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Packaging Design'],
  alternates: {
    canonical: '/post/creative-agency-workspace',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Organic Skincare Rebrand | Clean Beauty Brand Identity',
    description:
      'Sustainable rebrand for organic skincare with minimalist design',
    image: {
      url: '/banner.jpg',
      alt: 'Organic skincare brand packaging',
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
