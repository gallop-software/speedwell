import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Library Study Design | Traditional Home Library Interior',
  description:
    'Classic library study featuring floor-to-ceiling bookcases, leather furnishings, and sophisticated traditional design for reading and contemplation.',
  date: '2025-03-12',
  slug: 'library-study-design',
  featuredImage: '/portfolio/pexels-pixabay-276724.jpg',
  categories: ['Library Design', 'Traditional', 'Home Office'],
  alternates: {
    canonical: '/post/library-study-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Library Study Design | Traditional Home Library Interior',
    description:
      'Traditional library with custom bookcases and leather furnishings',
    image: {
      url: '/banner.jpg',
      alt: 'Library study with floor-to-ceiling bookshelves and reading nook',
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
