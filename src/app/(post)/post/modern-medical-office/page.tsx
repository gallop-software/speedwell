import { PageWrapper } from '@/components/page-wrapper'
import {
  generatePageMetadata,
  type PageMetadata,
} from '@/utils/page-helpers'
import { Content } from './preview'

const metadata: PageMetadata = {
  title: 'Tech Startup Brand Launch | SaaS Company Branding',
  description:
    'Bold brand identity for innovative SaaS startup featuring vibrant gradients, custom iconography, and scalable design system for growth.',
  date: '2024-11-15',
  slug: 'modern-medical-office',
  featuredImage: '/layout-1/pexels-pixabay-221185.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Digital Branding'],
  alternates: {
    canonical: '/post/modern-medical-office',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Tech Startup Brand Launch | SaaS Company Branding',
    description:
      'Energetic brand identity for tech startup with bold visuals and scalable system',
    image: {
      url: '/banner.jpg',
      alt: 'Tech startup brand identity',
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
