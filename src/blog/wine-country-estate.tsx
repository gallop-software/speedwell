import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Wine Country Estate'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/pexels-alex-qian-1180283-2343465.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1643384.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This sprawling wine country estate design marries rustic elegance with
        refined comfort, creating a sophisticated retreat for entertaining and
        relaxation. Exposed wood beams, stone fireplaces, and wide-plank oak
        floors establish the foundational character, while custom furnishings in
        rich leathers and natural linens add warmth. The great room opens to
        expansive vineyard views through French doors and oversized windows.
      </P>

      <P>
        A chef's kitchen features professional appliances, a large island for
        casual dining, and a separate butler's pantry—similar to our{' '}
        <Link href="/post/farmhouse-kitchen-remodel" prefetch={true}>
          Farmhouse Kitchen Remodel
        </Link>
        . The wine cellar was custom-designed with climate control and display
        storage for an extensive collection. Throughout the home, we balanced
        the grandeur of the architecture with intimate gathering spaces. For
        another rustic luxury project, explore our{' '}
        <Link href="/post/mountain-chalet-interior" prefetch={true}>
          Mountain Chalet Interior
        </Link>
        .         Natural materials, earth-toned palette, and thoughtful details create
        a seamless connection to the surrounding landscape. See more of our{' '}
        <Link href="/residential" prefetch={true}>
          Residential Design
        </Link>{' '}
        projects.
      </P>

      <P>
        Sustainability played an important role in our material selections and
        design decisions throughout this estate. We sourced reclaimed wood for
        accent walls, specified locally quarried stone, and integrated
        energy-efficient systems that reduce the home's environmental footprint.
        For a deeper exploration of environmentally conscious luxury living, see
        our{' '}
        <Link href="/post/sustainable-green-home" prefetch={true}>
          Sustainable Green Home
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
  title: 'Wine Country Estate | Rustic Elegant Interior Design',
  description:
    "Sophisticated wine country home featuring rustic elegance, chef's kitchen, custom wine cellar, and seamless indoor-outdoor living.",
  date: '2025-01-19',
  slug: 'wine-country-estate',
  featuredImage: '/images/portfolio/pexels-alex-qian-1180283-2343465.jpg',
  categories: ['Residential', 'Luxury', 'Rustic'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/wine-country-estate',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Wine Country Estate | Rustic Elegant Interior Design',
    description: 'Wine country estate with rustic elegance and vineyard views',
    image: {
      url: '/images/banner.jpg',
      alt: 'Wine country estate with exposed beams and vineyard views',
    },
  },
}
