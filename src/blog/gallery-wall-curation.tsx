import { Button } from '@/components/button'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Gallery Wall Curation'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This thoughtfully curated gallery wall transforms a large living room
        wall into a dynamic focal point that tells the client's story through
        art and photography. We combined original artworks, family photographs,
        vintage finds, and collected pieces from travels in a sophisticated
        salon-style arrangement. The eclectic mix is unified through consistent
        black frames and strategic spacing that creates visual rhythm.
      </P>

      <P>
        We began with a paper template layout on the floor to perfect the
        composition before installation, ensuring proper balance between large
        anchor pieces and smaller works. The arrangement extends from floor to
        ceiling, drawing the eye upward and making the room feel more spacious.
        Layered picture lights add drama and highlight favorite pieces. The
        result is a personal, museum-quality display that evolves as the
        collection grows.
      </P>

      <Button
        href="/post/gallery-wall-curation"
        wrap={true}
      >
        View Full Project
      </Button>
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
  title: 'Gallery Wall Curation | Art Display Interior Design',
  description:
    'Sophisticated salon-style gallery wall featuring curated art collection, family photographs, and strategic arrangement for maximum visual impact.',
  date: '2024-05-10',
  slug: 'gallery-wall-curation',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg',
  categories: ['Art Display', 'Residential', 'Styling'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/gallery-wall-curation',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Gallery Wall Curation | Art Display Interior Design',
    description:
      'Curated gallery wall with personal art collection and professional arrangement',
    image: {
      url: '/images/banner.jpg',
      alt: 'Gallery wall with curated art and family photographs',
    },
  },
}
