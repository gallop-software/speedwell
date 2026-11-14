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
          src="https://speedwell-cdn.gallop.software/images/portfolio/jvdm/pexels-jvdm-1457844-lg.jpg"
          width={1400}
          height={2100}
          href="https://speedwell-cdn.gallop.software/images/portfolio/jvdm/pexels-jvdm-1457844.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777-lg.jpg"
          width={1400}
          height={2097}
          href="https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251-lg.jpg"
          width={1400}
          height={2097}
          href="https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
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
