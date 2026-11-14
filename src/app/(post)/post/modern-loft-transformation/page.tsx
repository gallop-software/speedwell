import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Modern Loft Transformation | Downtown Industrial Chic',
  description:
    'Discover how we transformed a raw industrial loft into a sophisticated urban retreat featuring exposed brick, custom steel details, and contemporary luxury.',
  date: '2025-05-01',
  slug: 'modern-loft-transformation',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-161758-lg.jpg',
    width: 1400,
    height: 933,
  },
  categories: ['Residential', 'Urban Living', 'Contemporary'],
  alternates: {
    canonical: '/post/modern-loft-transformation',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Modern Loft Transformation | Downtown Industrial Chic',
    description:
      'Raw industrial space transformed into sophisticated urban living with exposed brick and contemporary design',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Modern loft interior with exposed brick and industrial elements',
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
