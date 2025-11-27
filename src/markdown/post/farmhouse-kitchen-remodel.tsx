import { Button, Gallery, GalleryItem, PageHeader, P } from '@/components'

export default function Content() {
  return (
    <>
      <PageHeader>Farmhouse Kitchen Remodel</PageHeader>

      <Gallery>
        <GalleryItem
          src="/images/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/jvdm/pexels-jvdm-1457844.jpg"
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
        kitchen's focal point. We added a generous center island with seating
        for casual dining and baking projects. Brass fixtures, glass-front upper
        cabinets, and open shelving displaying curated dishware complete the
        welcoming country aesthetic. Modern appliances are cleverly integrated
        to maintain the traditional feel while ensuring contemporary
        functionality.
      </P>

      <Button
        href="/post/farmhouse-kitchen-remodel"
        wrap={true}
      >
        View Full Project
      </Button>
    </>
  )
}

export const metadata = {
  title: 'Farmhouse Kitchen Remodel | Rustic Country Kitchen Design',
  description:
    'Charming farmhouse kitchen renovation featuring Shaker cabinets, butcher block counters, and rustic details with modern amenities.',
  date: '2024-06-12',
  slug: 'farmhouse-kitchen-remodel',
  featuredImage:
    '/images/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg',
  categories: ['Kitchen Design', 'Farmhouse', 'Traditional'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/farmhouse-kitchen-remodel',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Farmhouse Kitchen Remodel | Rustic Country Kitchen Design',
    description:
      'Charming farmhouse kitchen with Shaker cabinets and rustic character',
    image: {
      url: '/images/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg',
      alt: 'Farmhouse kitchen with sage green cabinets and rustic details',
    },
  },
}
