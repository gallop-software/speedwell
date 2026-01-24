import { Button } from '@/components/button'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Basement Entertainment Space'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/houzlook/pexels-houzlook-3797991.jpg"
        alt="Basement entertainment space with home theater and game room"
        size="large"
        wrap={true}
      />

      <P>
        This finished basement transformation created a multi-functional
        entertainment hub perfect for family gatherings and movie nights. We
        designed distinct zones including a home theater with tiered seating, a
        game area with pool table and bar, and a cozy lounge with sectional
        seating. Dark painted ceilings help conceal mechanicals while enhancing
        the theater atmosphere, and recessed lighting with dimmer controls sets
        the perfect mood.
      </P>

      <P>
        Careful attention to acoustics ensures great sound without disturbing
        the main floor. We used moisture-resistant materials throughout and
        added a full bathroom for convenience. Built-in storage keeps games,
        media, and bar supplies organized. The industrial-inspired design with
        exposed ductwork, concrete floors with area rugs, and leather
        furnishings creates a stylish, masculine space that's both practical and
        inviting.
      </P>

      <Button
        href="/post/basement-entertainment-space"
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
  title: 'Basement Entertainment Space | Home Theater & Game Room Design',
  description:
    'Multi-functional finished basement featuring home theater, game area, bar, and lounge with industrial design and smart space planning.',
  date: '2025-02-28',
  slug: 'basement-entertainment-space',
  featuredImage: '/images/portfolio/houzlook/pexels-houzlook-3797991.jpg',
  categories: ['Residential', 'Entertainment', 'Renovation'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/basement-entertainment-space',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Basement Entertainment Space | Home Theater & Game Room Design',
    description: 'Finished basement with home theater and entertainment zones',
    image: {
      url: '/images/banner.jpg',
      alt: 'Basement entertainment space with theater seating',
    },
  },
}
