import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Midcentury Modern Refresh'

function Details() {
  return (
    <>
      <Image
        src="/portfolio/fotoaibe/pexels-fotoaibe-1571462.jpg"
        alt="Midcentury modern home with clean lines and retro furnishings"
        size="large"
        wrap={true}
      />

      <P>
        This 1960s home received a thoughtful refresh that honors its midcentury
        modern architecture while updating finishes and functionality for
        contemporary living. We restored original features including terrazzo
        floors, picture windows, and the dramatic floating staircase,
        complementing them with period-appropriate furnishings and lighting
        fixtures. The color palette of warm woods, burnt orange, and avocado
        green pays homage to the era.
      </P>

      <P>
        We updated the kitchen and bathrooms with modern fixtures that respect
        the home's aesthetic, including walnut cabinetry and geometric tile
        patterns. The open floor plan was enhanced with new built-in storage and
        a reconstructed fireplace feature wall. Iconic furniture pieces from
        Eames, Saarinen, and Wegner complete the authentic midcentury feel while
        providing comfortable, functional living spaces. For more examples of
        clean, timeless design, explore our{' '}
        <Link
          href="/post/scandinavian-apartment"
          prefetch={true}
        >
          Scandinavian apartment
        </Link>{' '}
        and{' '}
        <Link
          href="/post/contemporary-family-home"
          prefetch={true}
        >
          contemporary family home
        </Link>{' '}
        projects.
      </P>

      <P>
        One of the hallmarks of midcentury modern design is its seamless
        connection between indoor and outdoor spaces. In this project, we
        restored the original sliding glass doors and created a cohesive
        transition to the newly landscaped patio, extending the living area
        beyond the home's footprint. This indoor-outdoor flow is something we
        also explored in our{' '}
        <Link
          href="/post/urban-penthouse-makeover"
          prefetch={true}
        >
          urban penthouse makeover
        </Link>
        , where terrace integration was essential to the design.
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
  title: 'Midcentury Modern Refresh | 1960s Home Renovation',
  description:
    'Authentic midcentury modern home renovation preserving original architecture with updated finishes and period-appropriate furnishings.',
  date: '2024-10-03',
  slug: 'midcentury-modern-refresh',
  featuredImage: '/portfolio/fotoaibe/pexels-fotoaibe-1571462.jpg',
  categories: ['Residential', 'Midcentury Modern', 'Renovation'],
  alternates: {
    canonical: '/post/midcentury-modern-refresh',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Midcentury Modern Refresh | 1960s Home Renovation',
    description:
      '1960s home renovation with authentic midcentury modern design and furnishings',
    image: {
      url: '/banner.jpg',
      alt: 'Midcentury modern living room with period furnishings',
    },
  },
}
