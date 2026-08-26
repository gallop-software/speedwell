import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Executive Workspace | Professional Home Office Design',
  description:
    'Sophisticated home office featuring custom millwork, ergonomic furnishings, and professional design for executive productivity and virtual meetings.',
  date: '2025-02-14',
  slug: 'executive-workspace',
  featuredImage: '/portfolio/pexels-mikhail-nilov-6707628.jpg',
  categories: ['Home Office', 'Contemporary', 'Professional'],
  alternates: {
    canonical: '/post/executive-workspace',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Executive Workspace | Professional Home Office Design',
    description:
      'Professional home office with custom millwork and executive furnishings',
    image: {
      url: '/banner.jpg',
      alt: 'Executive home office with built-in shelving',
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
