import { PageWrapper } from '@/components/page-wrapper'
import { generatePageMetadata, type PageMetadata } from '@/utils/page-helpers'
import { Content } from './content'

const metadata: PageMetadata = {
  title: 'Creative Coworking Space Brand | Community-Driven Design',
  description:
    'Dynamic brand identity for coworking space featuring bold design that fosters creative community and inspires collaboration among professionals.',
  date: '2024-12-03',
  slug: 'creative-coworking-space',
  featuredImage: {
    url: 'https://speedwell-cdn.gallop.software/images/layout-1/pexels-mareklevak-2265482-lg.jpg',
    width: 1400,
    height: 933,
  },
  categories: ['Portfolio', 'Brand Identity', 'Workspace'],
  alternates: {
    canonical: '/post/creative-coworking-space',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Creative Coworking Space Brand | Community-Driven Design',
    description:
      'Vibrant brand connecting creative professionals through inspired design',
    image: {
      url: 'https://speedwell-cdn.gallop.software/images/banner-lg.jpg',
      width: 1400,
      height: 840,
      alt: 'Coworking space brand materials',
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
