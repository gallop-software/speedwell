import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Tech Startup Brand Launch | SaaS Company Branding',
  description:
    'Bold brand identity for innovative SaaS startup featuring vibrant gradients, custom iconography, and scalable design system for growth.',
  date: '2024-11-15',
  slug: 'modern-medical-office',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/layout-1/pexels-pixabay-221185-lg.jpg',
    width: 1400,
    height: 933,
  },
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
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
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
