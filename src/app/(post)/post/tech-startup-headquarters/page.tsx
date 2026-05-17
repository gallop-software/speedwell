import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Boutique Hotel Rebrand | Luxury Hospitality Brand Identity',
  description:
    'Elegant rebrand for historic boutique hotel blending classic sophistication with modern luxury across all guest touchpoints and digital platforms.',
  date: '2024-08-12',
  slug: 'tech-startup-headquarters',
  featuredImage: '/layout-1/pexels-cottonbro-5379175.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Hospitality'],
  alternates: {
    canonical: '/post/tech-startup-headquarters',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Boutique Hotel Rebrand | Luxury Hospitality Brand Identity',
    description:
      'Sophisticated rebrand honoring heritage while attracting modern luxury travelers',
    image: {
      url: '/banner.jpg',
      alt: 'Boutique hotel brand identity',
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
