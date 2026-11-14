import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Industrial Office Conversion | Warehouse to Workplace Design',
  description:
    'Creative office space conversion from warehouse featuring exposed brick, original beams, and modern workplace amenities.',
  date: '2024-08-14',
  slug: 'industrial-office-conversion',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571453-lg.jpg',
    width: 1400,
    height: 935,
  },
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
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
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
