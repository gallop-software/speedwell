import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Bohemian Bedroom Design | Eclectic Global Style Interior',
  description:
    'Layered bohemian bedroom featuring global textiles, vintage finds, abundant plants, and eclectic mix of patterns and cultural elements.',
  date: '2024-09-07',
  slug: 'bohemian-bedroom-design',
  featuredImage: '/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg',
  categories: ['Bedroom Design', 'Bohemian', 'Eclectic'],
  alternates: {
    canonical: '/post/bohemian-bedroom-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Bohemian Bedroom Design | Eclectic Global Style Interior',
    description:
      'Bohemian bedroom with global textiles and eclectic vintage finds',
    image: {
      url: '/banner.jpg',
      alt: 'Bohemian bedroom with layered textiles and plants',
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
