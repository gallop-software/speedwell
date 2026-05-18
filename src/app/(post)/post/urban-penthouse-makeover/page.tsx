import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Urban Penthouse Makeover | Luxury City Living Interior Design',
  description:
    'Sophisticated penthouse renovation featuring open-plan living, city views, and contemporary design with smart home integration.',
  date: '2024-12-05',
  slug: 'urban-penthouse-makeover',
  featuredImage: '/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg',
  categories: ['Residential', 'Luxury', 'Contemporary'],
  alternates: {
    canonical: '/post/urban-penthouse-makeover',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Urban Penthouse Makeover | Luxury City Living Interior Design',
    description:
      'Sophisticated downtown penthouse with panoramic city views and contemporary design',
    image: {
      url: '/banner.jpg',
      alt: 'Urban penthouse with city views and contemporary design',
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
