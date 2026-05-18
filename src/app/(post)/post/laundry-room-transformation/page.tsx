import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Laundry Room Transformation | Functional Utility Room Design',
  description:
    'Efficient laundry room featuring smart storage, folding counter, and charming farmhouse design that makes chores more pleasant.',
  date: '2024-02-14',
  slug: 'laundry-room-transformation',
  featuredImage: '/portfolio/pexels-pixabay-279719.jpg',
  categories: ['Laundry Room', 'Organization', 'Farmhouse'],
  alternates: {
    canonical: '/post/laundry-room-transformation',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Laundry Room Transformation | Functional Utility Room Design',
    description:
      'Bright laundry room with efficient storage and farmhouse charm',
    image: {
      url: '/banner.jpg',
      alt: 'Laundry room with custom cabinets and folding counter',
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
