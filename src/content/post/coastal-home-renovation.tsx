import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Coastal Home Renovation'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/pexels-burst-545012.jpg"
        alt="Renovated coastal home with ocean-inspired design"
        size="large"
        wrap={true}
      />

      <P>
        This stunning coastal residence received a complete interior makeover
        that celebrates its beachfront location. We embraced a fresh, airy
        aesthetic with a soft color palette of whites, blues, and natural
        textures. The renovation included opening up the main living areas to
        capture ocean views, installing custom built-in cabinetry for seamless
        storage, and selecting durable yet elegant materials that can withstand
        the coastal climate. Shiplap walls, whitewashed oak floors, and linen
        furnishings create a relaxed sophistication perfect for seaside living.
      </P>

      <P>
        Our design incorporated sustainable materials and energy-efficient
        systems while maintaining the home's timeless appeal. Every detail was
        considered to enhance the connection between indoor and outdoor spaces.
      </P>

      <Button
        href="/post/coastal-home-renovation"
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
  title: 'Coastal Home Renovation | Beach House Interior Design',
  description:
    'Complete renovation of a beachfront home featuring airy coastal design, custom built-ins, and seamless indoor-outdoor living spaces with ocean views.',
  date: '2025-04-15',
  slug: 'coastal-home-renovation',
  featuredImage: '/images/portfolio/pexels-burst-545012.jpg',
  categories: ['Residential', 'Coastal Design', 'Renovation'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/coastal-home-renovation',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Coastal Home Renovation | Beach House Interior Design',
    description:
      'Fresh, airy beachfront home renovation with ocean views and coastal-inspired interiors',
    image: {
      url: '/images/portfolio/pexels-burst-545012.jpg',
      alt: 'Coastal living room with ocean views and light airy design',
    },
  },
}
