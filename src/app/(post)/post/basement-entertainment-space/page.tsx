import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Basement Entertainment Space | Home Theater & Game Room Design',
  description:
    'Multi-functional finished basement featuring home theater, game area, bar, and lounge with industrial design and smart space planning.',
  date: '2025-02-28',
  slug: 'basement-entertainment-space',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/houzlook/pexels-houzlook-3797991-lg.jpg',
    width: 1400,
    height: 1050,
  },
  categories: ['Residential', 'Entertainment', 'Renovation'],
  alternates: {
    canonical: '/post/basement-entertainment-space',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Basement Entertainment Space | Home Theater & Game Room Design',
    description: 'Finished basement with home theater and entertainment zones',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Basement entertainment space with theater seating',
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
