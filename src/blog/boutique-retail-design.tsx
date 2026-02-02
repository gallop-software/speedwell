import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Artisan Coffee Brand Identity'

function Details() {
  return (
    <>
      <Image
        src="/layout-1/pexels-blanca-isela-2156722885-35240180.jpg"
        alt="Artisan coffee brand identity with packaging and logo design"
        size="large"
        wrap={true}
      />

      <P>
        We crafted a complete brand identity for this specialty coffee roaster
        that honors their commitment to sustainability and craft. The visual
        system features earthy tones, hand-drawn illustrations, and custom
        typography that evokes warmth and authenticity. For related retail
        branding, explore our{' '}
        <Link
          href="/post/fashion-boutique-rebrand"
          prefetch={true}
        >
          Fashion Boutique Rebrand
        </Link>
        . The packaging design showcases each coffee's origin story through
        unique color coding and illustrated maps. From business cards to bags,
        every touchpoint reinforces the brand's artisanal approach and
        environmental values, helping them stand out in the competitive
        specialty coffee market. See also our{' '}
        <Link
          href="/post/urban-coffee-house"
          prefetch={true}
        >
          Urban Coffee House
        </Link>{' '}
        interior design project.
      </P>

      <P>
        Creating a cohesive brand identity requires understanding how visual
        elements translate across different retail environments and customer
        touchpoints. The success of this coffee brand demonstrates how
        thoughtful design can communicate values and build lasting customer
        connections—principles we also applied in our{' '}
        <Link
          href="/post/fashion-boutique-rebrand"
          prefetch={true}
        >
          fashion boutique rebrand
        </Link>{' '}
        where we helped a clothing retailer refresh their visual identity while
        honoring their established customer base.
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
  title: 'Artisan Coffee Brand Identity | Specialty Roaster Branding',
  description:
    'Complete brand identity for specialty coffee roaster featuring sustainable packaging design, custom illustrations, and authentic visual storytelling.',
  date: '2024-12-10',
  slug: 'boutique-retail-design',
  featuredImage: '/layout-1/pexels-blanca-isela-2156722885-35240180.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Packaging Design'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/boutique-retail-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Artisan Coffee Brand Identity | Specialty Roaster Branding',
    description:
      'Sustainable brand identity and packaging design for artisan coffee roaster',
    image: {
      url: '/banner.jpg',
      alt: 'Artisan coffee brand packaging',
    },
  },
}
