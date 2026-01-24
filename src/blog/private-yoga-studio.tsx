import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Private Yoga Studio'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/jvdm/pexels-jvdm-1457844.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This dedicated home yoga studio creates a peaceful sanctuary for daily
        practice and meditation. We converted a spare bedroom into a serene
        space with bamboo flooring, sound-dampening wall treatments, and soft
        indirect lighting that can be adjusted for different times of day. Large
        mirrors on one wall allow form checking without being overwhelming,
        while the opposite wall features a calming nature mural.
      </P>

      <P>
        Built-in storage with floating shelves holds yoga props, meditation
        cushions, and sound healing instruments. A compact sound system plays
        guided meditations and ambient music. The minimalist design in natural
        materials and a palette of soft greens and warm woods promotes
        tranquility, similar to our{' '}
        <Link href="/post/wellness-spa-design" prefetch={true}>
          wellness spa design
        </Link>{' '}
        approach. Blackout shades provide darkness for restorative practices,
        while sheer curtains filter natural light beautifully during morning sun
        salutations. For clients seeking a more active home wellness space, see
        our{' '}
        <Link href="/post/luxury-fitness-studio" prefetch={true}>
          luxury fitness studio
        </Link>{' '}
        project.
      </P>

      <P>
        Creating a dedicated wellness space at home has become increasingly
        important for maintaining balance in busy lives. Whether you're
        interested in yoga, meditation, or simply need a quiet retreat, we can
        help design a space tailored to your practice. If sustainability is
        also a priority, our{' '}
        <Link href="/post/sustainable-green-home" prefetch={true}>
          sustainable green home
        </Link>{' '}
        project demonstrates how eco-friendly materials and biophilic design
        principles enhance both wellness and environmental consciousness.
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
  title: 'Private Yoga Studio | Home Wellness Room Design',
  description:
    'Tranquil home yoga studio with bamboo floors, soft lighting, and minimalist design for meditation and daily practice.',
  date: '2024-11-05',
  slug: 'private-yoga-studio',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg',
  categories: ['Wellness', 'Home Gym', 'Minimalist'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/private-yoga-studio',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Private Yoga Studio | Home Wellness Room Design',
    description:
      'Serene home yoga studio with natural materials and calming design',
    image: {
      url: '/images/banner.jpg',
      alt: 'Private yoga studio with bamboo floors and peaceful ambiance',
    },
  },
}
