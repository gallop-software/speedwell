import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Boutique Hotel Rebrand'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-cottonbro-5379175.jpg"
        alt="Luxury boutique hotel brand identity with elegant design"
        size="large"
        wrap={true}
      />

      <P>
        This historic boutique hotel needed a rebrand that honored its heritage
        while attracting modern travelers. We crafted an elegant visual identity
        that blends classic sophistication with contemporary luxury. The logo
        features refined typography with custom letterforms, while the color
        palette draws from the hotel's architectural details. Brand collateral
        includes guest room directories, restaurant menus, key cards, and
        signage that create a cohesive luxury experience. Digital applications
        maintain the elegant aesthetic across the website and social media,
        positioning the hotel as a destination for discerning travelers seeking
        authentic local experiences.
      </P>

      <Button
        href="/post/tech-startup-headquarters"
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
  title: 'Boutique Hotel Rebrand | Luxury Hospitality Brand Identity',
  description:
    'Elegant rebrand for historic boutique hotel blending classic sophistication with modern luxury across all guest touchpoints and digital platforms.',
  date: '2024-08-12',
  slug: 'tech-startup-headquarters',
  featuredImage: '/images/layout-1/pexels-cottonbro-5379175.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Hospitality'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/tech-startup-headquarters',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Boutique Hotel Rebrand | Luxury Hospitality Brand Identity',
    description:
      'Sophisticated rebrand honoring heritage while attracting modern luxury travelers',
    image: {
      url: '/images/banner.jpg',
      alt: 'Boutique hotel brand identity',
    },
  },
}
