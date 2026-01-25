import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Scandinavian Apartment'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/jvdm/pexels-jvdm-1457844.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This compact urban apartment embraces the principles of Scandinavian
        design: simplicity, functionality, and connection to nature. We created
        a light-filled sanctuary using an all-white base palette accented with
        natural wood tones and muted textiles. Clever storage solutions maximize
        the limited square footage without sacrificing the airy, uncluttered
        aesthetic that defines the Nordic style.
      </P>

      <P>
        Multi-functional furniture pieces, including a murphy bed and expandable
        dining table, provide flexibility for daily living and entertaining.
        Large mirrors strategically placed throughout amplify natural light,
        while houseplants bring life and texture. This approach shares
        philosophies with our{' '}
        <Link
          href="/post/japanese-zen-retreat"
          prefetch={true}
        >
          Japanese zen retreat
        </Link>{' '}
        project. The minimalist approach extends to carefully curated decorative
        objects that are both beautiful and purposeful, embodying the
        Scandinavian concept of "lagom" - just the right amount. For another
        take on timeless design, explore our{' '}
        <Link
          href="/post/midcentury-modern-refresh"
          prefetch={true}
        >
          midcentury modern refresh
        </Link>
        .
      </P>

      <P>
        The Scandinavian emphasis on light and openness translates remarkably
        well to urban loft conversions, where industrial bones meet refined
        Nordic sensibilities. Both styles celebrate honest materials and reject
        unnecessary ornamentation. To see how we balanced raw architectural
        elements with warm, livable design in a larger open-plan space, explore
        our{' '}
        <Link
          href="/post/modern-loft-transformation"
          prefetch={true}
        >
          modern loft transformation
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
  title: 'Scandinavian Apartment | Nordic Minimalist Interior Design',
  description:
    'Light-filled apartment featuring Scandinavian design principles with natural materials, multi-functional furniture, and minimalist aesthetic.',
  date: '2024-07-20',
  slug: 'scandinavian-apartment',
  featuredImage: '/images/portfolio/jvdm/pexels-jvdm-1457844.jpg',
  categories: ['Residential', 'Scandinavian', 'Minimalist'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/scandinavian-apartment',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Scandinavian Apartment | Nordic Minimalist Interior Design',
    description:
      'Nordic-inspired apartment with natural materials and minimalist design',
    image: {
      url: '/images/banner.jpg',
      alt: 'Scandinavian apartment with white walls and natural wood accents',
    },
  },
}
