import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Laundry Room Transformation | Functional Utility Room Design',
  description:
    'Efficient laundry room featuring smart storage, folding counter, and charming farmhouse design that makes chores more pleasant.',
  date: '2024-02-14',
  slug: 'laundry-room-transformation',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-279719-lg.jpg',
    width: 1400,
    height: 875,
  },
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
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
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
