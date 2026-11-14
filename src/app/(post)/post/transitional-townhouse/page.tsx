import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Transitional Townhouse | Historic Home Modern Update',
  description:
    'Urban townhouse blending historic architecture with contemporary design through transitional style, honoring character while updating for modern living.',
  date: '2024-08-02',
  slug: 'transitional-townhouse',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034-lg.jpg',
    width: 1400,
    height: 935,
  },
  categories: ['Residential', 'Transitional', 'Townhouse'],
  alternates: {
    canonical: '/post/transitional-townhouse',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Transitional Townhouse | Historic Home Modern Update',
    description:
      'Historic townhouse with transitional design blending old and new',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Transitional townhouse with classic and contemporary elements',
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
