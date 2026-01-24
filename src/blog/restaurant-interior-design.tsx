import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Restaurant Interior Design'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg"
        alt="Restaurant interior with inviting atmosphere and stylish design"
        size="large"
        wrap={true}
      />

      <P>
        This upscale restaurant interior balances sophisticated dining
        atmosphere with operational efficiency. The design incorporates distinct
        zones: an intimate bar area with custom millwork, a main dining room
        with varied seating configurations, and a semi-private dining space for
        groups. Rich materials including walnut paneling, leather banquettes,
        and polished concrete floors create an elevated yet approachable
        ambiance.
      </P>

      <P>
        Strategic lighting design allows mood adjustment throughout service
        periods, while acoustic treatments ensure comfortable conversation
        despite full capacity. The color palette of deep greens, brass accents,
        and warm neutrals complements the seasonal menu concept. This attention
        to hospitality design is also reflected in our{' '}
        <Link href="/post/boutique-hotel-design" prefetch={true}>
          boutique hotel design
        </Link>{' '}
        work. We collaborated closely with the chef and operations team to
        ensure the front-of-house design supports back-of-house workflow while
        creating memorable guest experiences, much like our approach with the{' '}
        <Link href="/post/urban-coffee-house" prefetch={true}>
          urban coffee house
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
  title: 'Restaurant Interior Design | Upscale Dining Experience',
  description:
    'Sophisticated restaurant featuring custom millwork, varied dining zones, and elevated design that balances ambiance with operational needs.',
  date: '2024-11-28',
  slug: 'restaurant-interior-design',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg',
  categories: ['Commercial', 'Hospitality', 'Restaurant'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/restaurant-interior-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Restaurant Interior Design | Upscale Dining Experience',
    description:
      'Upscale restaurant with sophisticated ambiance and thoughtful design',
    image: {
      url: '/images/banner.jpg',
      alt: 'Upscale restaurant interior with rich materials',
    },
  },
}
