import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Coastal Cottage Refresh'

function Details() {
  return (
    <>
      <Image
        src="/portfolio/pexels-pixabay-259962.jpg"
        alt="Coastal cottage interior with bright, airy design"
        size="large"
        wrap={true}
      />

      <P>
        This charming beach cottage received a light, bright refresh that
        celebrates its coastal location and relaxed lifestyle. We updated the
        tired interior with a fresh palette of whites, soft blues, and sandy
        neutrals that reflect the surrounding seascape. Vintage furniture pieces
        were refinished and reupholstered in durable, washable fabrics perfect
        for sandy feet and wet swimsuits. The original hardwood floors were
        restored and whitewashed for a sun-bleached look.
      </P>

      <P>
        Shiplap accent walls, beadboard ceilings, and nautical-inspired details
        honor the cottage's heritage while feeling fresh and current. For a
        larger coastal project, see our{' '}
        <Link
          href="/post/coastal-home-renovation"
          prefetch={true}
        >
          Coastal Home Renovation
        </Link>
        . We maximized natural light with sheer curtains and added coastal
        touches like rope accents, weathered wood frames, and sea glass colors.
        The result is a comfortable, inviting retreat that feels authentically
        beachy without clichés, perfectly suited for lazy summer days and family
        gatherings. You might also appreciate our{' '}
        <Link
          href="/post/scandinavian-apartment"
          prefetch={true}
        >
          Scandinavian Apartment
        </Link>{' '}
        for similar light-filled design inspiration.
      </P>

      <P>
        Sustainability was woven throughout this refresh, with low-VOC paints,
        reclaimed materials, and energy-efficient lighting that honor the
        natural coastal environment. If you're drawn to eco-conscious design
        principles, our{' '}
        <Link
          href="/post/sustainable-green-home"
          prefetch={true}
        >
          sustainable green home
        </Link>{' '}
        project demonstrates how environmental responsibility and beautiful
        design work hand in hand to create spaces that are gentle on both
        inhabitants and the planet.
      </P>
    </>
  )
}

export function Content() {
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
