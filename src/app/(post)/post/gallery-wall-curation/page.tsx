import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Gallery Wall Curation | Art Display Interior Design',
  description:
    'Sophisticated salon-style gallery wall featuring curated art collection, family photographs, and strategic arrangement for maximum visual impact.',
  date: '2024-05-10',
  slug: 'gallery-wall-curation',
  featuredImage: '/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg',
  categories: ['Art Display', 'Residential', 'Styling'],
  alternates: {
    canonical: '/post/gallery-wall-curation',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Gallery Wall Curation | Art Display Interior Design',
    description:
      'Curated gallery wall with personal art collection and professional arrangement',
    image: {
      url: '/banner.jpg',
      alt: 'Gallery wall with curated art and family photographs',
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
