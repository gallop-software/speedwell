import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Mountain Chalet Interior'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/portfolio/pexels-jworks1124-342800.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This alpine retreat interior captures the warmth and coziness of
        traditional mountain architecture while providing modern luxury.
        Reclaimed barn wood walls, exposed timber beams, and a grand stone
        fireplace create authentic mountain character. Floor-to-ceiling windows
        frame spectacular peak views while filling spaces with natural light.
        Rich leather furniture, plush textiles, and layered rugs invite
        relaxation after a day on the slopes.
      </P>

      <P>
        The great room's vaulted ceiling adds drama, while intimate nooks with
        built-in seating create cozy reading spots. We incorporated rustic
        elements like antler chandeliers and wrought iron details alongside
        modern conveniences including radiant floor heating and a
        state-of-the-art entertainment system. The warm color palette of deep
        reds, forest greens, and natural wood tones complements the spectacular
        mountain setting. For more retreat-style interiors, see our{' '}
        <Link
          href="/post/wine-country-estate"
          prefetch={true}
        >
          wine country estate
        </Link>{' '}
        or discover the rustic warmth of our{' '}
        <Link
          href="/post/farmhouse-kitchen-remodel"
          prefetch={true}
        >
          farmhouse kitchen remodel
        </Link>
        .
      </P>

      <P>
        The tranquil atmosphere of this mountain retreat shares design
        philosophies with vacation homes that embrace their natural
        surroundings. Both require careful consideration of how light, texture,
        and comfort work together to create an escape from everyday life. For
        another example of retreat-style design that celebrates its location,
        explore our{' '}
        <Link
          href="/post/coastal-cottage-refresh"
          prefetch={true}
        >
          coastal cottage refresh
        </Link>{' '}
        which brings similar principles to a seaside setting.
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
  title: 'Mountain Chalet Interior | Alpine Luxury Home Design',
  description:
    'Warm mountain chalet featuring reclaimed wood, stone fireplace, and rustic luxury design with spectacular alpine views and modern amenities.',
  date: '2024-01-15',
  slug: 'mountain-chalet-interior',
  featuredImage: '/portfolio/pexels-jworks1124-342800.jpg',
  categories: ['Residential', 'Mountain', 'Luxury'],
  alternates: {
    canonical: '/post/mountain-chalet-interior',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Mountain Chalet Interior | Alpine Luxury Home Design',
    description:
      'Cozy mountain chalet with rustic luxury and spectacular views',
    image: {
      url: '/banner.jpg',
      alt: 'Mountain chalet interior with exposed beams and stone fireplace',
    },
  },
}
