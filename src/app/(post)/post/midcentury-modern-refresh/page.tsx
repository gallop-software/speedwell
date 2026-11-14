import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Midcentury Modern Refresh | 1960s Home Renovation',
  description:
    'Authentic midcentury modern home renovation preserving original architecture with updated finishes and period-appropriate furnishings.',
  date: '2024-10-03',
  slug: 'midcentury-modern-refresh',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571462-lg.jpg',
    width: 1400,
    height: 935,
  },
  categories: ['Residential', 'Midcentury Modern', 'Renovation'],
  alternates: {
    canonical: '/post/midcentury-modern-refresh',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Midcentury Modern Refresh | 1960s Home Renovation',
    description:
      '1960s home renovation with authentic midcentury modern design and furnishings',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Midcentury modern living room with period furnishings',
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
