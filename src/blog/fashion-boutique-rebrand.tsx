import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

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
        curated aesthetic and commitment to sustainable fashion, inspired by the
        principles we applied in our{' '}
        <Link href="/post/boutique-retail-design" prefetch={true}>
          boutique retail design
        </Link>{' '}
        work. We designed a sophisticated visual identity that balances timeless
        elegance with contemporary edge. The logo features refined letterforms
        with fashion-forward styling, while the color palette evokes luxury and
        sustainability. Brand applications span from shopping bags and tags to
        window displays and social media templates. The cohesive system
        positions the boutique as a destination for conscious consumers seeking
        unique, high-quality pieces—an approach that shares DNA with our{' '}
        <Link href="/post/wellness-brand-identity" prefetch={true}>
          wellness brand identity
        </Link>{' '}
        project.
      </P>
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
