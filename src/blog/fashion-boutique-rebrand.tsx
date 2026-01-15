import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Fashion Boutique Rebrand'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-rachel-claire-5490970.jpg"
        alt="Elegant fashion boutique brand identity with sophisticated style"
        size="large"
        wrap={true}
      />

      <P>
        This independent fashion boutique needed a rebrand that captured their
        curated aesthetic and commitment to sustainable fashion. We designed a
        sophisticated visual identity that balances timeless elegance with
        contemporary edge. The logo features refined letterforms with
        fashion-forward styling, while the color palette evokes luxury and
        sustainability. Brand applications span from shopping bags and tags to
        window displays and social media templates. The cohesive system
        positions the boutique as a destination for conscious consumers seeking
        unique, high-quality pieces that stand the test of time.
      </P>

      <Button
        href="/post/fashion-boutique-rebrand"
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
  title: 'Fashion Boutique Rebrand | Sustainable Luxury Design',
  description:
    'Sophisticated rebrand for fashion boutique balancing timeless elegance with sustainability, creating a destination for conscious consumers.',
  date: '2024-11-08',
  slug: 'fashion-boutique-rebrand',
  featuredImage: '/images/layout-1/pexels-rachel-claire-5490970.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Fashion'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/fashion-boutique-rebrand',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Fashion Boutique Rebrand | Sustainable Luxury Design',
    description:
      'Elegant rebrand merging timeless style with sustainable fashion values',
    image: {
      url: '/images/banner.jpg',
      alt: 'Fashion boutique brand identity',
    },
  },
}
