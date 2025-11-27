import { Button, Gallery, GalleryItem, PageHeader , P } from '@/components'

export default function Content() {
  return (
    <>
<PageHeader>Wellness Spa Design</PageHeader>

<Gallery>
  <GalleryItem
    src="/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg"
    size="large"
  />
  <GalleryItem
    src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
    size="large"
  />
</Gallery>

<P>This boutique wellness spa design creates a holistic sanctuary for rejuvenation and self-care. The entrance sequence gradually transitions guests from the outside world through carefully orchestrated sensory experiences. Natural materials including stone, wood, and water features establish immediate tranquility. Treatment rooms feature adjustable lighting, sound systems, and temperature controls for personalized comfort.</P>

<P>The design incorporates separate zones for different services: massage therapy rooms with heated tables, an infrared sauna, a meditation lounge, and a tea bar with healthy refreshments. A calming color palette of sage, sand, and soft whites combined with organic textures creates a restorative atmosphere. Thoughtful details like aromatherapy, soft robes, and comfortable waiting areas ensure guests feel pampered from arrival to departure. The space demonstrates how interior design can actively contribute to wellness and healing.</P>

<Button
  href="/post/wellness-spa-design"
  wrap={true}
>
  View Full Project
</Button>
    </>
  )
}

export const metadata = {
  title: 'Wellness Spa Design | Holistic Health Spa Interior',
  description: 'Tranquil boutique spa featuring treatment rooms, meditation lounge, and holistic design creating a sanctuary for rejuvenation and self-care.',
  date: '2025-01-30',
  slug: 'wellness-spa-design',
  featuredImage: '/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg',
  categories: ['Commercial', 'Wellness', 'Spa Design'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/wellness-spa-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Wellness Spa Design | Holistic Health Spa Interior',
    description: 'Boutique wellness spa with treatment rooms and holistic design',
    image: {
      url: '/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg',
      alt: 'Wellness spa with tranquil treatment rooms',
    },
  },
}
