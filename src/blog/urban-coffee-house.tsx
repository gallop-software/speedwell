import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Farm-to-Table Restaurant Brand'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-enginakyurt-1435894.jpg"
        alt="Farm-to-table restaurant brand identity with rustic design elements"
        size="large"
        wrap={true}
      />

      <P>
        This new farm-to-table restaurant needed a brand that honored local
        agriculture while feeling fresh and contemporary. We developed a warm,
        inviting identity featuring hand-lettered typography, seasonal color
        palettes, and illustrations celebrating regional ingredients. The menu
        design showcases farmer partnerships with beautiful photography and
        storytelling.         From signage to staff uniforms, every brand element reinforces the
        restaurant's commitment to sustainability and community. This project
        shares design philosophies with our{' '}
        <Link href="/post/restaurant-interior-design" prefetch={true}>
          restaurant interior design
        </Link>{' '}
        work. The cohesive visual system creates a memorable dining experience
        that has customers returning and sharing on social media, similar to our{' '}
        <Link href="/post/boutique-retail-design" prefetch={true}>
          boutique retail design
        </Link>{' '}
        approach.
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
  title: 'Farm-to-Table Restaurant Brand | Sustainable Dining Identity',
  description:
    'Warm restaurant brand identity celebrating local agriculture with hand-lettered typography, seasonal design, and community-focused visual storytelling.',
  date: '2024-09-05',
  slug: 'urban-coffee-house',
  featuredImage: '/images/layout-1/pexels-enginakyurt-1435894.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Hospitality'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/urban-coffee-house',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Farm-to-Table Restaurant Brand | Sustainable Dining Identity',
    description:
      'Community-focused restaurant brand celebrating local farmers and seasonal ingredients',
    image: {
      url: '/images/banner.jpg',
      alt: 'Farm-to-table restaurant branding',
    },
  },
}
