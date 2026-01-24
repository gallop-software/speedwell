import { Button } from '@/components/button'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Artisan Coffee Brand Identity'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-blanca-isela-2156722885-35240180.jpg"
        alt="Artisan coffee brand identity with packaging and logo design"
        size="large"
        wrap={true}
      />

      <P>
        We crafted a complete brand identity for this specialty coffee roaster
        that honors their commitment to sustainability and craft. The visual
        system features earthy tones, hand-drawn illustrations, and custom
        typography that evokes warmth and authenticity. The packaging design
        showcases each coffee's origin story through unique color coding and
        illustrated maps. From business cards to bags, every touchpoint
        reinforces the brand's artisanal approach and environmental values,
        helping them stand out in the competitive specialty coffee market.
      </P>

      <Button
        href="/post/boutique-retail-design"
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
  title: 'Artisan Coffee Brand Identity | Specialty Roaster Branding',
  description:
    'Complete brand identity for specialty coffee roaster featuring sustainable packaging design, custom illustrations, and authentic visual storytelling.',
  date: '2024-12-10',
  slug: 'boutique-retail-design',
  featuredImage: '/images/layout-1/pexels-blanca-isela-2156722885-35240180.jpg',
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
      url: '/images/banner.jpg',
      alt: 'Artisan coffee brand packaging',
    },
  },
}
