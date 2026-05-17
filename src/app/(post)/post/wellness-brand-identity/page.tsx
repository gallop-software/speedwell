import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Wellness Studio Brand Identity | Holistic Design',
  description:
    'Serene brand identity for wellness studio featuring soft palettes, organic shapes, and mindful design that creates calm, welcoming experiences.',
  date: '2024-10-22',
  slug: 'wellness-brand-identity',
  featuredImage: '/layout-1/pexels-diva-plavalaguna-6937932.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Wellness'],
  alternates: {
    canonical: '/post/wellness-brand-identity',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Wellness Studio Brand Identity | Holistic Design',
    description:
      'Mindful brand identity creating serene experiences for wellness seekers',
    image: {
      url: '/banner.jpg',
      alt: 'Wellness studio brand materials',
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
