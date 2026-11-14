import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Coastal Cottage Refresh | Beach House Interior Update',
  description:
    'Charming beach cottage refresh featuring light coastal palette, restored vintage pieces, and authentic seaside style for relaxed living.',
  date: '2024-07-08',
  slug: 'coastal-cottage-refresh',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-259962-lg.jpg',
    width: 1400,
    height: 930,
  },
  categories: ['Residential', 'Coastal Design', 'Cottage'],
  alternates: {
    canonical: '/post/coastal-cottage-refresh',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Coastal Cottage Refresh | Beach House Interior Update',
    description: 'Light and bright beach cottage with coastal charm',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Coastal cottage with whitewashed floors and beach decor',
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
