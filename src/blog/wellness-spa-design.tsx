import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Wellness Spa Design'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/portfolio/falling4utah/pexels-falling4utah-1080721.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This boutique wellness spa design creates a holistic sanctuary for
        rejuvenation and self-care. The entrance sequence gradually transitions
        guests from the outside world through carefully orchestrated sensory
        experiences. Natural materials including stone, wood, and water features
        establish immediate tranquility. Treatment rooms feature adjustable
        lighting, sound systems, and temperature controls for personalized
        comfort.
      </P>

      <P>
        The design incorporates separate zones for different services: massage
        therapy rooms with heated tables, an infrared sauna, a meditation
        lounge, and a tea bar with healthy refreshments. For a more intimate
        wellness space, see our{' '}
        <Link
          href="/post/private-yoga-studio"
          prefetch={true}
        >
          Private Yoga Studio
        </Link>{' '}
        project. A calming color palette of sage, sand, and soft whites combined
        with organic textures creates a restorative atmosphere. Thoughtful
        details like aromatherapy, soft robes, and comfortable waiting areas
        ensure guests feel pampered from arrival to departure. You might also
        enjoy our{' '}
        <Link
          href="/post/spa-bathroom-retreat"
          prefetch={true}
        >
          Spa Bathroom Retreat
        </Link>{' '}
        for residential wellness inspiration.
      </P>

      <P>
        The design philosophy behind this spa draws heavily from Eastern
        wellness traditions, emphasizing balance, natural elements, and mindful
        space planning. Water features, carefully placed greenery, and
        uncluttered circulation paths guide guests through a journey of
        relaxation. For a residential interpretation of these principles, our{' '}
        <Link
          href="/post/japanese-zen-retreat"
          prefetch={true}
        >
          Japanese Zen Retreat
        </Link>{' '}
        demonstrates how tranquility can be woven into everyday living spaces.
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
  title: 'Wellness Spa Design | Holistic Health Spa Interior',
  description:
    'Tranquil boutique spa featuring treatment rooms, meditation lounge, and holistic design creating a sanctuary for rejuvenation and self-care.',
  date: '2025-01-30',
  slug: 'wellness-spa-design',
  featuredImage: '/portfolio/falling4utah/pexels-falling4utah-1080721.jpg',
  categories: ['Commercial', 'Wellness', 'Spa Design'],
  alternates: {
    canonical: '/post/wellness-spa-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Wellness Spa Design | Holistic Health Spa Interior',
    description:
      'Boutique wellness spa with treatment rooms and holistic design',
    image: {
      url: '/banner.jpg',
      alt: 'Wellness spa with tranquil treatment rooms',
    },
  },
}
