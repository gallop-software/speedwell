import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Urban Penthouse Makeover'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This downtown penthouse underwent a dramatic transformation to maximize
        its breathtaking city views and create a sophisticated urban sanctuary.
        We opened up the floor plan by removing non-structural walls, creating
        sweeping sight lines from the entrance through to the floor-to-ceiling
        windows. A neutral palette of grays, blacks, and warm whites provides a
        refined backdrop for the owner's contemporary art collection. For
        similar open-concept urban living, explore our{' '}
        <Link
          href="/post/modern-loft-transformation"
          prefetch={true}
        >
          Modern Loft Transformation
        </Link>{' '}
        project.
      </P>

      <P>
        Custom built-in shelving and a statement fireplace anchor the living
        space, while the kitchen features high-gloss cabinetry and
        professional-grade appliances. We incorporated motorized window
        treatments, integrated lighting controls, and a whole-home audio system.
        The master suite includes a spa-inspired bathroom with city views from
        the soaking tub. See how we extended these design principles to outdoor
        spaces in our{' '}
        <Link
          href="/post/rooftop-terrace-design"
          prefetch={true}
        >
          Rooftop Terrace Design
        </Link>
        .
      </P>

      <P>
        The master suite became a particular focus, with custom closets,
        integrated charging stations, and a reading nook that capitalizes on the
        stunning cityscape. For clients seeking similar luxury bedroom
        transformations, our{' '}
        <Link
          href="/post/luxury-master-suite"
          prefetch={true}
        >
          luxury master suite
        </Link>{' '}
        project showcases how we create serene, sophisticated retreats within
        urban residences. Every detail is considered to elevate daily living
        into an exceptional experience.
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
  title: 'Urban Penthouse Makeover | Luxury City Living Interior Design',
  description:
    'Sophisticated penthouse renovation featuring open-plan living, city views, and contemporary design with smart home integration.',
  date: '2024-12-05',
  slug: 'urban-penthouse-makeover',
  featuredImage:
    '/images/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg',
  categories: ['Residential', 'Luxury', 'Contemporary'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/urban-penthouse-makeover',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Urban Penthouse Makeover | Luxury City Living Interior Design',
    description:
      'Sophisticated downtown penthouse with panoramic city views and contemporary design',
    image: {
      url: '/images/banner.jpg',
      alt: 'Urban penthouse with city views and contemporary design',
    },
  },
}
