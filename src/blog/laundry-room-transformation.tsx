import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Laundry Room Transformation'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/portfolio/pexels-pixabay-279719.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/pexels-clickerhappy-584399.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This once-dreary laundry room became a bright, efficient workspace that
        makes chores more enjoyable. We maximized vertical space with
        floor-to-ceiling cabinets for detergent, cleaning supplies, and seasonal
        storage. A butcher block countertop over the washer and dryer provides
        folding space, while a wall-mounted drying rack handles delicates. The
        farmhouse sink facilitates hand-washing and plant watering.
      </P>

      <P>
        We added practical features including a pull-out ironing board, sorting
        bins for lights and darks, and a rod for hanging clothes fresh from the
        dryer. The cheerful design includes patterned tile flooring, shiplap
        walls painted in soft gray, and brass hardware. Under-cabinet lighting
        and a pretty pendant fixture brighten the windowless space. This
        transformation proves that utility rooms can be both hardworking and
        beautiful—see how we applied similar principles in our{' '}
        <Link
          href="/post/mudroom-organization"
          prefetch={true}
        >
          mudroom organization project
        </Link>
        .
      </P>

      <P>
        Thoughtful design in utility spaces contributes to the overall flow and
        functionality of your home. When every room—including the laundry—is
        designed with intention, daily routines become more efficient and less
        stressful. Learn more about how we approach whole-home design on our{' '}
        <Link
          href="/residential"
          prefetch={true}
        >
          residential services
        </Link>{' '}
        page.
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
  title: 'Laundry Room Transformation | Functional Utility Room Design',
  description:
    'Efficient laundry room featuring smart storage, folding counter, and charming farmhouse design that makes chores more pleasant.',
  date: '2024-02-14',
  slug: 'laundry-room-transformation',
  featuredImage: '/portfolio/pexels-pixabay-279719.jpg',
  categories: ['Laundry Room', 'Organization', 'Farmhouse'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/laundry-room-transformation',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Laundry Room Transformation | Functional Utility Room Design',
    description:
      'Bright laundry room with efficient storage and farmhouse charm',
    image: {
      url: '/banner.jpg',
      alt: 'Laundry room with custom cabinets and folding counter',
    },
  },
}
