import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Craft Brewery Brand Identity'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-elevate-1267700.jpg"
        alt="Craft brewery brand identity with bold labels and packaging"
        size="large"
        wrap={true}
      />

      <P>
        This independent brewery needed a distinctive brand to stand out in the
        crowded craft beer market. We developed a bold, memorable identity
        system featuring custom illustrations, vibrant colors, and playful
        typography that reflects their experimental approach to brewing. Each
        beer variety has its own unique label design while maintaining brand
        cohesion through consistent elements. The taproom experience includes
        branded glassware, coasters, merchandise, and environmental graphics.
        Social media templates and marketing materials help them engage with
        their passionate community of craft beer enthusiasts while attracting
        new customers.
      </P>

      <Button
        href="/post/luxury-fitness-studio"
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
  title: 'Craft Brewery Brand Identity | Beer Label Design',
  description:
    'Bold brewery brand featuring custom illustrations, vibrant label designs, and cohesive identity system that stands out in craft beer market.',
  date: '2024-07-18',
  slug: 'luxury-fitness-studio',
  featuredImage: '/images/layout-1/pexels-elevate-1267700.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Packaging Design'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/luxury-fitness-studio',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Craft Brewery Brand Identity | Beer Label Design',
    description:
      'Distinctive brewery brand with custom illustrations and bold packaging',
    image: {
      url: '/images/banner.jpg',
      alt: 'Craft brewery brand labels',
    },
  },
}
