import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Farmhouse Kitchen Remodel'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/jvdm/pexels-jvdm-1457844.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This charming farmhouse kitchen honors rustic traditions while
        incorporating modern conveniences for today's lifestyle. We replaced
        dated cabinets with custom Shaker-style units painted in soft sage
        green, complemented by butcher block countertops and a large farmhouse
        sink. Exposed ceiling beams and reclaimed wood shelving add authentic
        character, while new subway tile backsplash in a herringbone pattern
        provides timeless appeal.
      </P>

      <P>
        A vintage-inspired range with professional capabilities serves as the
        kitchen's focal point, similar to the approach in our{' '}
        <Link
          href="/post/chef-kitchen-upgrade"
          prefetch={true}
        >
          chef kitchen upgrade
        </Link>
        . We added a generous center island with seating for casual dining and
        baking projects. Brass fixtures, glass-front upper cabinets, and open
        shelving displaying curated dishware complete the welcoming country
        aesthetic. Modern appliances are cleverly integrated to maintain the
        traditional feel while ensuring contemporary functionality—a philosophy
        we also embraced in our{' '}
        <Link
          href="/post/minimalist-kitchen-redesign"
          prefetch={true}
        >
          minimalist kitchen redesign
        </Link>
        .
      </P>

      <P>
        Whether you're dreaming of a classic farmhouse aesthetic or something
        more contemporary, a well-designed kitchen becomes the heart of your
        home. We specialize in creating spaces that balance beauty with
        durability, using materials that stand up to daily use while aging
        gracefully. Explore our full range of{' '}
        <Link
          href="/kitchen-bath"
          prefetch={true}
        >
          kitchen and bath services
        </Link>{' '}
        to see how we can transform your space.
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
  title: 'Farmhouse Kitchen Remodel | Rustic Country Kitchen Design',
  description:
    'Charming farmhouse kitchen renovation featuring Shaker cabinets, butcher block counters, and rustic details with modern amenities.',
  date: '2024-06-12',
  slug: 'farmhouse-kitchen-remodel',
  featuredImage: '/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg',
  categories: ['Kitchen Design', 'Farmhouse', 'Traditional'],
  alternates: {
    canonical: '/post/farmhouse-kitchen-remodel',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Farmhouse Kitchen Remodel | Rustic Country Kitchen Design',
    description:
      'Charming farmhouse kitchen with Shaker cabinets and rustic character',
    image: {
      url: '/banner.jpg',
      alt: 'Farmhouse kitchen with sage green cabinets and rustic details',
    },
  },
}
