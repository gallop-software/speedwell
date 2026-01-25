import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Japanese Zen Retreat'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/jvdm/pexels-jvdm-1454804.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This residential design draws inspiration from Japanese aesthetics to
        create a minimalist sanctuary emphasizing simplicity, natural materials,
        and mindful living. Low-profile furniture, clean lines, and an
        uncluttered approach allow beauty to emerge from restraint. Natural
        materials including bamboo, paper, stone, and untreated wood connect
        inhabitants to nature. Shoji screens provide privacy while filtering
        light beautifully.
      </P>

      <P>
        The layout emphasizes flow and transition between spaces, with sliding
        doors that reconfigure rooms as needed, much like our{' '}
        <Link
          href="/post/scandinavian-apartment"
          prefetch={true}
        >
          Scandinavian apartment
        </Link>{' '}
        project. A small interior garden visible from multiple rooms brings
        nature inside and serves as a meditation focal point. The muted color
        palette of blacks, whites, and natural wood tones creates serenity.
        Every object has purpose and place, embodying the Japanese concept of
        "ma"—the space between things. This thoughtful approach to design
        fosters calm, clarity, and contemplation, sharing philosophy with our{' '}
        <Link
          href="/post/minimalist-kitchen-redesign"
          prefetch={true}
        >
          minimalist kitchen redesign
        </Link>
        .
      </P>

      <P>
        The principles of Japanese design extend naturally into wellness spaces,
        where tranquility and mindfulness are paramount. For clients seeking to
        create dedicated areas for relaxation and self-care, our{' '}
        <Link
          href="/post/wellness-spa-design"
          prefetch={true}
        >
          wellness spa design
        </Link>{' '}
        project applies similar philosophies of natural materials, soft
        lighting, and intentional simplicity to craft spaces that nurture both
        body and spirit.
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
  title: 'Japanese Zen Retreat | Minimalist Japanese Interior Design',
  description:
    'Serene residential space inspired by Japanese aesthetics featuring natural materials, minimal design, and mindful living principles.',
  date: '2024-12-12',
  slug: 'japanese-zen-retreat',
  featuredImage: '/images/portfolio/jvdm/pexels-jvdm-1454804.jpg',
  categories: ['Residential', 'Japanese', 'Zen'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/japanese-zen-retreat',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Japanese Zen Retreat | Minimalist Japanese Interior Design',
    description:
      'Minimalist Japanese-inspired home with natural materials and Zen principles',
    image: {
      url: '/images/banner.jpg',
      alt: 'Japanese Zen interior with minimal design and natural materials',
    },
  },
}
