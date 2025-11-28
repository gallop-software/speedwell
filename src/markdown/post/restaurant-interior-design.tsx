import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Restaurant Interior Design'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg"
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
        and warm neutrals complements the seasonal menu concept. We collaborated
        closely with the chef and operations team to ensure the front-of-house
        design supports back-of-house workflow while creating memorable guest
        experiences.
      </P>

      <Button
        href="/post/restaurant-interior-design"
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
      url: '/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg',
      alt: 'Upscale restaurant interior with rich materials',
    },
  },
}
