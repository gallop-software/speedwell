import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Boutique Hotel Design'

function Details() {
  return (
    <>
      <Image
        src="/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
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
        opens to a private courtyard garden. For similar hospitality work, see
        our{' '}
        <Link
          href="/post/restaurant-interior-design"
          prefetch={true}
        >
          Restaurant Interior Design
        </Link>{' '}
        project. We selected durable, high-quality materials that will age
        gracefully while maintaining a residential feel. Attention to acoustics,
        lighting controls, and thoughtful amenities ensure guest comfort. The
        design celebrates the property's heritage while establishing a
        contemporary boutique hotel identity. Our{' '}
        <Link
          href="/post/wellness-spa-design"
          prefetch={true}
        >
          Wellness Spa Design
        </Link>{' '}
        demonstrates similar attention to guest experience.
      </P>

      <P>
        The guest suites draw inspiration from the finest residential design
        principles, with each room offering a private sanctuary that feels like
        a home away from home. Custom headboards, premium bedding, and
        thoughtfully appointed bathrooms elevate the overnight experience. For
        insights into crafting luxurious bedroom environments, explore our{' '}
        <Link
          href="/post/luxury-master-suite"
          prefetch={true}
        >
          Luxury Master Suite
        </Link>{' '}
        project, which showcases similar attention to comfort and refinement.
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
  title: 'Boutique Hotel Design | Luxury Hospitality Interior Design',
  description:
    'Intimate boutique hotel featuring unique guest rooms, curated public spaces, and sophisticated design blending historic charm with modern luxury.',
  date: '2025-01-08',
  slug: 'boutique-hotel-design',
  featuredImage:
    '/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg',
  categories: ['Commercial', 'Hospitality', 'Luxury'],
  alternates: {
    canonical: '/post/boutique-hotel-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Boutique Hotel Design | Luxury Hospitality Interior Design',
    description:
      'Sophisticated boutique hotel with unique rooms and curated public spaces',
    image: {
      url: '/banner.jpg',
      alt: 'Boutique hotel lobby with sophisticated furnishings',
    },
  },
}
