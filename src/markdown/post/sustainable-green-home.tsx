import { Button, Gallery, GalleryItem, PageHeader, P } from '@/components'

export default function Content() {
  return (
    <>
      <PageHeader>Sustainable Green Home</PageHeader>

      <Gallery>
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This eco-conscious home design prioritizes sustainability without
        compromising style or comfort. We specified reclaimed wood flooring,
        low-VOC paints, and furnishings from certified sustainable sources.
        Energy-efficient systems include solar panels, smart thermostats, LED
        lighting throughout, and high-performance windows that minimize heat
        transfer. A whole-home water filtration system and low-flow fixtures
        reduce water consumption.
      </P>

      <P>
        Natural materials including cork, bamboo, and organic textiles create a
        healthy indoor environment while reducing the home's carbon footprint.
        We incorporated abundant natural light, strategic cross-ventilation, and
        a living plant wall that improves air quality. The design demonstrates
        that environmental responsibility and beautiful, livable interiors are
        not mutually exclusive. Every material and system was selected to
        minimize environmental impact while maximizing longevity and
        performance.
      </P>

      <Button
        href="/post/sustainable-green-home"
        wrap={true}
      >
        View Full Project
      </Button>
    </>
  )
}

export const metadata = {
  title: 'Sustainable Green Home | Eco-Friendly Interior Design',
  description:
    'Environmentally conscious home featuring sustainable materials, energy-efficient systems, and healthy living spaces with minimal carbon footprint.',
  date: '2024-08-30',
  slug: 'sustainable-green-home',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg',
  categories: ['Residential', 'Sustainable', 'Contemporary'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/sustainable-green-home',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Sustainable Green Home | Eco-Friendly Interior Design',
    description:
      'Eco-friendly home with sustainable materials and energy-efficient design',
    image: {
      url: '/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg',
      alt: 'Sustainable home interior with natural materials',
    },
  },
}
