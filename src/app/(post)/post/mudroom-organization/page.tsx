import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Mudroom Organization | Family Entry Storage Design',
  description:
    'Functional family mudroom featuring custom cubbies, durable materials, and smart organization for coats, shoes, and sports gear.',
  date: '2024-10-18',
  slug: 'mudroom-organization',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/pexels-leah-newhouse-50725-6480707-lg.jpg',
    width: 1400,
    height: 933,
  },
  categories: ['Organization', 'Family Home', 'Mudroom'],
  alternates: {
    canonical: '/post/mudroom-organization',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Mudroom Organization | Family Entry Storage Design',
    description: 'Organized family mudroom with custom storage for everyone',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Mudroom with custom cubbies and family organization',
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
