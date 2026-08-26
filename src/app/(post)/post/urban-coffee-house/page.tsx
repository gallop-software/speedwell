import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Farm-to-Table Restaurant Brand | Sustainable Dining Identity',
  description:
    'Warm restaurant brand identity celebrating local agriculture with hand-lettered typography, seasonal design, and community-focused visual storytelling.',
  date: '2024-09-05',
  slug: 'urban-coffee-house',
  featuredImage: '/layout-1/pexels-enginakyurt-1435894.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Hospitality'],
  alternates: {
    canonical: '/post/urban-coffee-house',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Farm-to-Table Restaurant Brand | Sustainable Dining Identity',
    description:
      'Community-focused restaurant brand celebrating local farmers and seasonal ingredients',
    image: {
      url: '/banner.jpg',
      alt: 'Farm-to-table restaurant branding',
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
