import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Mudroom Organization'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This hardworking mudroom transformation maximizes organization for an
        active family of five. Custom built-in cubbies provide dedicated space
        for each family member with hooks for coats, bench seating for shoe
        removal, and open bins for sports gear and backpacks. Durable materials
        including tile flooring, beadboard walls, and painted wood cabinetry
        withstand daily wear while remaining easy to clean.
      </P>

      <P>
        A compact wash sink facilitates cleanup of muddy paws and dirty hands
        before entering the main house. Closed cabinets conceal cleaning
        supplies and seasonal items, while a magnetic chalkboard panel tracks
        schedules and messages. The cheerful design with navy blue lockers and
        brass hooks proves that functional spaces can be stylish—similar to our{' '}
        <Link
          href="/post/laundry-room-transformation"
          prefetch={true}
        >
          laundry room transformation
        </Link>{' '}
        where we created another beautiful, hardworking utility space.
      </P>

      <P>
        Smart organization extends throughout the home, and the mudroom often
        sets the tone for what lies beyond. When paired with a well-designed
        kitchen, these functional spaces create a seamless flow for busy
        families. See how we balanced practicality with character in our{' '}
        <Link
          href="/post/farmhouse-kitchen-remodel"
          prefetch={true}
        >
          farmhouse kitchen remodel
        </Link>
        , which shares the same commitment to durable materials and thoughtful
        storage solutions that make daily routines easier.
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
  title: 'Mudroom Organization | Family Entry Storage Design',
  description:
    'Functional family mudroom featuring custom cubbies, durable materials, and smart organization for coats, shoes, and sports gear.',
  date: '2024-10-18',
  slug: 'mudroom-organization',
  featuredImage: '/portfolio/pexels-leah-newhouse-50725-6480707.jpg',
  categories: ['Organization', 'Family Home', 'Mudroom'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/mudroom-organization',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Mudroom Organization | Family Entry Storage Design',
    description: 'Organized family mudroom with custom storage for everyone',
    image: {
      url: '/banner.jpg',
      alt: 'Mudroom with custom cubbies and family organization',
    },
  },
}
