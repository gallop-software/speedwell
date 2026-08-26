import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Industrial Office Conversion | Warehouse to Workplace Design',
  description:
    'Creative office space conversion from warehouse featuring exposed brick, original beams, and modern workplace amenities.',
  date: '2024-08-14',
  slug: 'industrial-office-conversion',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg',
  categories: ['Commercial', 'Industrial', 'Office Design'],
  alternates: {
    canonical: '/post/industrial-office-conversion',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Industrial Office Conversion | Warehouse to Workplace Design',
    description:
      'Modern creative office in converted warehouse with industrial character',
    image: {
      url: '/banner.jpg',
      alt: 'Industrial office space with exposed brick and modern furnishings',
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
