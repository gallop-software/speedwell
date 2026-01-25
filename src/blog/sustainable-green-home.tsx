import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Sustainable Green Home'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This eco-conscious home design prioritizes sustainability without
        compromising style or comfort. We specified reclaimed wood flooring,
        low-VOC paints, and furnishings from certified sustainable sources.
        Energy-efficient systems include solar panels, smart thermostats, LED
        lighting throughout, and high-performance windows that minimize heat
        transfer. A whole-home water filtration system and low-flow fixtures
        reduce water consumption.
      </P>

      <P>
        Natural materials including cork, bamboo, and organic textiles create a
        healthy indoor environment while reducing the home's carbon footprint.
        We incorporated abundant natural light, strategic cross-ventilation, and
        a living plant wall that improves air quality. These principles also
        guided our{' '}
        <Link
          href="/post/contemporary-family-home"
          prefetch={true}
        >
          contemporary family home
        </Link>{' '}
        project. The design demonstrates that environmental responsibility and
        beautiful, livable interiors are not mutually exclusive. For another
        example of thoughtful material selection, see our{' '}
        <Link
          href="/post/minimalist-kitchen-redesign"
          prefetch={true}
        >
          minimalist kitchen redesign
        </Link>
        .
      </P>

      <P>
        Sustainable design principles translate beautifully across different
        architectural styles and settings. Whether adapting historic structures
        or building new, the same commitment to eco-conscious materials and
        energy efficiency can guide every decision. See how we applied these
        values in a coastal setting with our{' '}
        <Link
          href="/post/coastal-cottage-refresh"
          prefetch={true}
        >
          coastal cottage refresh
        </Link>{' '}
        project, where natural ventilation and locally-sourced materials created
        a home in harmony with its environment.
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
  title: 'Sustainable Green Home | Eco-Friendly Interior Design',
  description:
    'Environmentally conscious home featuring sustainable materials, energy-efficient systems, and healthy living spaces with minimal carbon footprint.',
  date: '2024-08-30',
  slug: 'sustainable-green-home',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg',
  categories: ['Residential', 'Sustainable', 'Contemporary'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/sustainable-green-home',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Sustainable Green Home | Eco-Friendly Interior Design',
    description:
      'Eco-friendly home with sustainable materials and energy-efficient design',
    image: {
      url: '/images/banner.jpg',
      alt: 'Sustainable home interior with natural materials',
    },
  },
}
