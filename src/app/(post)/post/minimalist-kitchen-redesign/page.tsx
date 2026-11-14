import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Minimalist Kitchen Redesign | Modern Kitchen Interior Design',
  description:
    'Sleek minimalist kitchen featuring handleless cabinetry, waterfall countertops, and integrated appliances for a clutter-free culinary space.',
  date: '2024-09-18',
  slug: 'minimalist-kitchen-redesign',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746-lg.jpg',
    width: 1400,
    height: 2097,
  },
  categories: ['Kitchen Design', 'Minimalist', 'Contemporary'],
  alternates: {
    canonical: '/post/minimalist-kitchen-redesign',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Minimalist Kitchen Redesign | Modern Kitchen Interior Design',
    description:
      'Clean minimalist kitchen with integrated appliances and seamless design',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Minimalist kitchen with white cabinetry and waterfall countertops',
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
