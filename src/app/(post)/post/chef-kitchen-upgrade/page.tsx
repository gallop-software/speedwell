import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Chef Kitchen Upgrade | Professional Home Kitchen Design',
  description:
    "Serious cook's kitchen featuring professional-grade appliances, abundant prep space, and restaurant-quality functionality for home.",
  date: '2025-04-05',
  slug: 'chef-kitchen-upgrade',
  featuredImage: '/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg',
  categories: ['Kitchen Design', 'Professional', 'Gourmet'],
  alternates: {
    canonical: '/post/chef-kitchen-upgrade',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Chef Kitchen Upgrade | Professional Home Kitchen Design',
    description:
      'Professional chef kitchen with restaurant-grade appliances and functionality',
    image: {
      url: '/banner.jpg',
      alt: 'Chef kitchen with professional appliances and large island',
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
