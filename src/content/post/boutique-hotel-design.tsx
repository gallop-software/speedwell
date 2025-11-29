import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Boutique Hotel Design'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
        alt="Boutique hotel interior with elegant design details"
        size="large"
        wrap={true}
      />

      <P>
        This intimate boutique hotel design creates a memorable guest experience
        through carefully curated interiors that blend local character with
        sophisticated comfort. Each of the twelve guest rooms features unique
        layouts and custom furnishings that reflect the building's historic
        architecture while providing modern luxury. Rich textiles, statement
        lighting, and original artwork create distinct personalities for each
        space.
      </P>

      <P>
        Public areas include a cozy lobby lounge with a curated library, an
        intimate cocktail bar with custom millwork, and a breakfast room that
        opens to a private courtyard garden. We selected durable, high-quality
        materials that will age gracefully while maintaining a residential feel.
        Attention to acoustics, lighting controls, and thoughtful amenities
        ensure guest comfort. The design celebrates the property's heritage
        while establishing a contemporary boutique hotel identity.
      </P>

      <Button
        href="/post/boutique-hotel-design"
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
  title: 'Boutique Hotel Design | Luxury Hospitality Interior Design',
  description:
    'Intimate boutique hotel featuring unique guest rooms, curated public spaces, and sophisticated design blending historic charm with modern luxury.',
  date: '2025-01-08',
  slug: 'boutique-hotel-design',
  featuredImage:
    '/images/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg',
  categories: ['Commercial', 'Hospitality', 'Luxury'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/boutique-hotel-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Boutique Hotel Design | Luxury Hospitality Interior Design',
    description:
      'Sophisticated boutique hotel with unique rooms and curated public spaces',
    image: {
      url: '/images/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg',
      alt: 'Boutique hotel lobby with sophisticated furnishings',
    },
  },
}
