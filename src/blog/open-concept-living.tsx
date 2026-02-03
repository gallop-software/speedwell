import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Open Concept Living'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/portfolio/houzlook/pexels-houzlook-3356416.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This whole-home renovation centered on removing walls to create a
        flowing open-concept layout perfect for modern family living. The
        kitchen, dining, and living areas now form one cohesive space with
        distinct zones defined by furniture placement, lighting, and material
        changes. A large kitchen island serves as the central hub, providing
        seating, storage, and workspace while maintaining visual connection
        throughout.
      </P>

      <P>
        We maintained spatial definition through a consistent design language
        while varying textures and ceiling treatments. The result is an airy,
        light-filled space that feels generous yet intimate. Floor-to-ceiling
        windows and glass doors were added to enhance the indoor-outdoor
        connection. Strategic built-in storage and concealed utility areas keep
        the open space organized and clutter-free. For more whole-home
        transformations, explore our{' '}
        <Link
          href="/post/contemporary-family-home"
          prefetch={true}
        >
          contemporary family home
        </Link>{' '}
        and{' '}
        <Link
          href="/post/modern-loft-transformation"
          prefetch={true}
        >
          modern loft transformation
        </Link>{' '}
        projects.
      </P>

      <P>
        The kitchen anchors this open layout with a streamlined design that
        complements the flowing spaces. Clean lines, integrated appliances, and
        thoughtful storage ensure the cooking area feels part of the living
        space rather than separate from it. Our{' '}
        <Link
          href="/post/minimalist-kitchen-redesign"
          prefetch={true}
        >
          minimalist kitchen redesign
        </Link>{' '}
        offers additional inspiration for creating kitchens that embrace
        simplicity while maximizing functionality in open floor plans.
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
  title: 'Open Concept Living | Modern Home Renovation Design',
  description:
    'Whole-home renovation creating flowing open-concept space with defined zones for kitchen, dining, and living areas with indoor-outdoor connection.',
  date: '2024-04-16',
  slug: 'open-concept-living',
  featuredImage: '/portfolio/houzlook/pexels-houzlook-3356416.jpg',
  categories: ['Residential', 'Renovation', 'Contemporary'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/open-concept-living',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Open Concept Living | Modern Home Renovation Design',
    description: 'Flowing open-concept renovation with connected living spaces',
    image: {
      url: '/banner.jpg',
      alt: 'Open concept living space with kitchen and dining areas',
    },
  },
}
