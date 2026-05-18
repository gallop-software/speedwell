import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Guest Suite Makeover'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/portfolio/kseniachernaya/pexels-kseniachernaya-4450337.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This guest suite renovation transformed an underutilized spare room into
        a welcoming retreat that rivals any boutique hotel. We created a calming
        sanctuary with a plush upholstered bed dressed in hotel-quality linens,
        bedside tables with reading lamps, and blackout curtains for quality
        sleep. A cozy seating area by the window provides a spot for morning
        coffee or quiet reading.
      </P>

      <P>
        Thoughtful hospitality details include a luggage rack, full-length
        mirror, empty drawer and closet space, and a beverage station with
        kettle and refreshments. The ensuite bathroom received fresh paint, new
        fixtures, fluffy towels, and quality toiletries—drawing on the same
        attention to detail we brought to our{' '}
        <Link
          href="/post/luxury-master-suite"
          prefetch={true}
        >
          luxury master suite
        </Link>
        . The neutral palette with soft blue accents creates a serene atmosphere
        that makes guests feel truly pampered and welcome, echoing the cozy
        ambiance of our{' '}
        <Link
          href="/post/bohemian-bedroom-design"
          prefetch={true}
        >
          bohemian bedroom design
        </Link>
        .
      </P>

      <P>
        Creating a spa-like retreat within your home extends beyond the bedroom
        to encompass the entire guest experience. The same attention to sensory
        details—soft textures, calming colors, and thoughtful amenities—can
        transform any space into a sanctuary. Discover how we applied these
        principles on a larger scale in our{' '}
        <Link
          href="/post/wellness-spa-design"
          prefetch={true}
        >
          wellness spa design
        </Link>{' '}
        project, where relaxation and rejuvenation guide every design decision.
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
