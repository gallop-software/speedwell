import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Modern Loft Transformation'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/pexels-pixabay-161758.jpg"
        alt="Modern loft transformation with open floor plan and industrial touches"
        size="large"
        wrap={true}
      />

      <P>
        This downtown loft renovation showcases how industrial elements can
        blend seamlessly with contemporary luxury. We transformed a 2,000 square
        foot raw space into a sophisticated urban oasis featuring exposed brick,
        custom steel framing, and carefully curated furnishings. The open floor
        plan maximizes natural light while defining distinct living zones
        through strategic furniture placement and area rugs.
      </P>

      <P>
        A neutral color palette with warm wood accents creates an inviting
        atmosphere, while statement lighting fixtures add dramatic focal points
        throughout the space. For a similar approach in a penthouse setting, see
        our{' '}
        <Link href="/post/urban-penthouse-makeover" prefetch={true}>
          Urban Penthouse Makeover
        </Link>
        . If you're interested in industrial office spaces, check out our{' '}
        <Link href="/post/industrial-office-conversion" prefetch={true}>
          Industrial Office Conversion
        </Link>{' '}
        project.
      </P>

      <P>
        Living in an open loft requires thoughtful consideration of how sound
        travels and how privacy can be achieved without sacrificing the airy
        feel. We incorporated acoustic panels disguised as art installations and
        used floor-to-ceiling drapes to create flexible room divisions when
        needed. This balance of openness and intimacy is something we also
        achieved in our{' '}
        <Link href="/post/scandinavian-apartment" prefetch={true}>
          Scandinavian apartment
        </Link>{' '}
        project, where minimalism meets warmth.
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
  title: 'Modern Loft Transformation | Downtown Industrial Chic',
  description:
    'Discover how we transformed a raw industrial loft into a sophisticated urban retreat featuring exposed brick, custom steel details, and contemporary luxury.',
  date: '2025-05-01',
  slug: 'modern-loft-transformation',
  featuredImage: '/images/portfolio/pexels-pixabay-161758.jpg',
  categories: ['Residential', 'Urban Living', 'Contemporary'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/modern-loft-transformation',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Modern Loft Transformation | Downtown Industrial Chic',
    description:
      'Raw industrial space transformed into sophisticated urban living with exposed brick and contemporary design',
    image: {
      url: '/images/banner.jpg',
      alt: 'Modern loft interior with exposed brick and industrial elements',
    },
  },
}
