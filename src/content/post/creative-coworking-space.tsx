import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Creative Coworking Space Brand'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-mareklevak-2265482.jpg"
        alt="Modern coworking space brand identity with creative design"
        size="large"
        wrap={true}
      />

      <P>
        This innovative coworking space for creatives needed a brand that fostered community and inspired collaboration. We developed a dynamic visual identity featuring bold colors, geometric patterns, and versatile typography that reflects the diverse creative community. The brand system includes wayfinding signage, member materials, event collateral, and digital platforms. Custom illustrations celebrate different creative disciplines while maintaining brand unity. From the reception area to private studios, every brand element reinforces the space's mission to connect creative professionals and spark meaningful partnerships.
      </P>

      <Button
        href="/post/creative-coworking-space"
        wrap={true}
      >
        View Full Project
      </Button>
    </>
  )
}

export default function Content() {
  return (
    <>
      <PageHeader>{TITLE}</PageHeader>
      <Details />
    </>
  )
}

export function BlogContent() {
  return (
    <>
      <Heading as="h2">{TITLE}</Heading>
      <Details />
    </>
  )
}

export const metadata = {
  title: 'Creative Coworking Space Brand | Community-Driven Design',
  description:
    'Dynamic brand identity for coworking space featuring bold design that fosters creative community and inspires collaboration among professionals.',
  date: '2024-12-03',
  slug: 'creative-coworking-space',
  featuredImage: '/images/layout-1/pexels-mareklevak-2265482.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Workspace'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/creative-coworking-space',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Creative Coworking Space Brand | Community-Driven Design',
    description:
      'Vibrant brand connecting creative professionals through inspired design',
    image: {
      url: '/images/banner.jpg',
      alt: 'Coworking space brand materials',
    },
  },
}
