import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Modern Nursery Design | Contemporary Baby Room Interior',
  description:
    'Serene gender-neutral nursery featuring sustainable materials, convertible furniture, and thoughtful design that grows with your child.',
  date: '2024-12-20',
  slug: 'modern-nursery-design',
  featuredImage: '/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg',
  categories: ['Nursery Design', 'Contemporary', 'Family Home'],
  alternates: {
    canonical: '/post/modern-nursery-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Modern Nursery Design | Contemporary Baby Room Interior',
    description:
      'Modern nursery with sustainable materials and convertible furniture',
    image: {
      url: '/banner.jpg',
      alt: 'Modern nursery with soft colors and natural materials',
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
