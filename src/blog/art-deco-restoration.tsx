import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Art Deco Restoration'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/pexels-pixabay-269252.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This historic apartment restoration celebrates the glamour of Art Deco
        design while incorporating modern systems and amenities. We meticulously
        restored original details including geometric moldings, terrazzo floors,
        and brass fixtures, while introducing period-appropriate elements where
        originals were lost. The color palette of black, gold, emerald, and
        cream evokes the elegance of the 1920s and 30s.
      </P>

      <P>
        Custom furniture pieces feature the bold geometric patterns and
        luxurious materials characteristic of the era, including lacquered wood,
        velvet upholstery, and mirrored surfaces. We sourced vintage light
        fixtures and commissioned reproductions of iconic Art Deco designs. For
        more historic preservation work, see our{' '}
        <Link href="/post/historic-brownstone-revival" prefetch={true}>
          Historic Brownstone Revival
        </Link>
        . Modern conveniences like updated plumbing, electrical, and HVAC were
        seamlessly integrated behind the restored architecture. The result is a
        stunning example of period design that functions beautifully for
        contemporary living. Our{' '}
        <Link href="/post/boutique-hotel-design" prefetch={true}>
          Boutique Hotel Design
        </Link>{' '}
        showcases similar attention to historic detail in a commercial setting.
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
  title: 'Art Deco Restoration | Historic 1920s Interior Design',
  description:
    'Meticulous Art Deco apartment restoration featuring geometric details, period furnishings, and glamorous 1920s design with modern amenities.',
  date: '2024-03-25',
  slug: 'art-deco-restoration',
  featuredImage: '/images/portfolio/pexels-pixabay-269252.jpg',
  categories: ['Restoration', 'Art Deco', 'Historic'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/art-deco-restoration',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Art Deco Restoration | Historic 1920s Interior Design',
    description:
      'Glamorous Art Deco restoration with period details and modern convenience',
    image: {
      url: '/images/banner.jpg',
      alt: 'Art Deco interior with geometric patterns and luxurious finishes',
    },
  },
}
