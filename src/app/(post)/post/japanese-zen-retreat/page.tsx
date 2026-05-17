import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Japanese Zen Retreat | Minimalist Japanese Interior Design',
  description:
    'Serene residential space inspired by Japanese aesthetics featuring natural materials, minimal design, and mindful living principles.',
  date: '2024-12-12',
  slug: 'japanese-zen-retreat',
  featuredImage: '/portfolio/jvdm/pexels-jvdm-1454804.jpg',
  categories: ['Residential', 'Japanese', 'Zen'],
  alternates: {
    canonical: '/post/japanese-zen-retreat',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Japanese Zen Retreat | Minimalist Japanese Interior Design',
    description:
      'Minimalist Japanese-inspired home with natural materials and Zen principles',
    image: {
      url: '/banner.jpg',
      alt: 'Japanese Zen interior with minimal design and natural materials',
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
