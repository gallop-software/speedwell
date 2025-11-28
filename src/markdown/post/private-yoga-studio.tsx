import {
  Button,
  Gallery,
  GalleryItem,
  PageHeader,
  P,
  Heading,
} from '@/components'

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
        tranquility. Blackout shades provide darkness for restorative practices,
        while sheer curtains filter natural light beautifully during morning sun
        salutations.
      </P>

      <Button
        href="/post/private-yoga-studio"
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
      url: '/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg',
      alt: 'Private yoga studio with bamboo floors and peaceful ambiance',
    },
  },
}
