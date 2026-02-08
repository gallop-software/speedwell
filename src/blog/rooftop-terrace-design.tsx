import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Rooftop Terrace Design'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/portfolio/pexels-dropshado-2251247.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This urban rooftop transformation created an outdoor oasis with
        panoramic city views. We designed multiple zones including a dining area
        with pergola for shade, a lounge space with weather-resistant sectional
        seating, and a compact kitchenette for outdoor entertaining. Composite
        decking provides a low-maintenance surface that withstands the elements
        while maintaining a natural wood appearance.
      </P>

      <P>
        Container gardens with native plants add greenery and privacy screening
        without requiring extensive infrastructure. String lights and lanterns
        create magical evening ambiance, while a portable fire feature extends
        the usable season. This project shares design sensibilities with our{' '}
        <Link
          href="/post/urban-penthouse-makeover"
          prefetch={true}
        >
          urban penthouse makeover
        </Link>
        . Weatherproof storage benches conceal cushions and accessories when not
        in use. The design maximizes every square foot of this premium outdoor
        space while addressing wind, sun exposure, and building regulations,
        complementing the indoor living concepts explored in our{' '}
        <Link
          href="/post/modern-loft-transformation"
          prefetch={true}
        >
          modern loft transformation
        </Link>
        .
      </P>

      <P>
        Rooftop terraces offer a unique opportunity to blur the boundaries
        between indoor and outdoor living, creating seamless transitions that
        extend the home's footprint into the sky. The principles of durable
        materials, weather-conscious planning, and multi-functional spaces apply
        equally to ground-level outdoor projects. For a different take on
        creating inviting outdoor environments,{' '}
        <Link
          href="/contact"
          prefetch={true}
        >
          contact us
        </Link>{' '}
        to discuss your project vision.
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
  title: 'Rooftop Terrace Design | Urban Outdoor Living Space',
  description:
    'Urban rooftop terrace featuring multiple zones, container gardens, and weather-resistant design for year-round outdoor entertaining.',
  date: '2024-06-25',
  slug: 'rooftop-terrace-design',
  featuredImage: '/portfolio/pexels-dropshado-2251247.jpg',
  categories: ['Outdoor Living', 'Urban Design', 'Terrace'],
  alternates: {
    canonical: '/post/rooftop-terrace-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Rooftop Terrace Design | Urban Outdoor Living Space',
    description:
      'Urban rooftop oasis with dining, lounge areas, and city views',
    image: {
      url: '/banner.jpg',
      alt: 'Rooftop terrace with outdoor furniture and city views',
    },
  },
}
