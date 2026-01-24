import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Luxury Master Suite'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
        alt="Luxury master suite with elegant furnishings and spa-like atmosphere"
        size="large"
        wrap={true}
      />

      <P>
        This expansive master suite renovation created a five-star hotel
        experience within a private residence. We designed a sophisticated
        bedroom retreat with a custom upholstered headboard wall, blackout
        drapery with sheer underlays, and a sitting area perfect for morning
        coffee. Rich jewel tones in navy and emerald are balanced with warm
        metallics and plush textures.
      </P>

      <P>
        The ensuite bathroom features a freestanding soaking tub positioned
        beneath a statement chandelier, a spacious walk-in shower with body
        jets, and dual vanities with backlit mirrors. For more bathroom
        inspiration, explore our{' '}
        <Link href="/post/spa-bathroom-retreat" prefetch={true}>
          Spa Bathroom Retreat
        </Link>
        . Heated marble floors, a built-in sound system, and automated lighting
        complete the spa-like atmosphere. See also our{' '}
        <Link href="/post/bohemian-bedroom-design" prefetch={true}>
          Bohemian Bedroom Design
        </Link>{' '}
        for a different aesthetic approach.
      </P>

      <P>
        Creating a truly luxurious retreat requires the same attention to detail
        found in the finest hospitality spaces. Our approach draws inspiration
        from high-end hotel design, incorporating layered textures, thoughtful
        amenities, and seamless technology integration. To see how we translate
        these principles into commercial settings, explore our{' '}
        <Link href="/post/boutique-hotel-design" prefetch={true}>
          Boutique Hotel Design
        </Link>{' '}
        project, which showcases the sophisticated hospitality aesthetic that
        influences our residential work.
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
  title: 'Luxury Master Suite | High-End Bedroom Interior Design',
  description:
    'Opulent master suite with spa-inspired ensuite bathroom, custom closet, and five-star hotel-quality finishes and amenities.',
  date: '2025-03-22',
  slug: 'luxury-master-suite',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg',
  categories: ['Residential', 'Luxury', 'Bedroom Design'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/luxury-master-suite',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Luxury Master Suite | High-End Bedroom Interior Design',
    description:
      'Five-star master suite with spa bathroom and custom walk-in closet',
    image: {
      url: '/images/banner.jpg',
      alt: 'Luxury master bedroom with sophisticated furnishings',
    },
  },
}
