import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Modern Nursery Design'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg"
        alt="Modern nursery with soft colors and thoughtful design"
        size="large"
        wrap={true}
      />

      <P>
        This gender-neutral nursery design creates a serene, stylish environment
        that will grow with the child. We selected a sophisticated palette of
        soft sage, warm gray, and natural wood tones that feels fresh and
        calming. A convertible crib in light oak can transition to a toddler
        bed, while the custom dresser doubles as a changing station with
        removable topper. Wall-mounted shelving displays books and toys while
        keeping the floor clear for play.
      </P>

      <P>
        Blackout curtains ensure quality sleep, while layered lighting provides
        options for different needs—from midnight feedings to story time. We
        incorporated non-toxic paints, organic textiles, and sustainable
        materials for a healthy environment. Whimsical touches like a cloud
        mobile and illustrated prints add personality without overwhelming the
        peaceful atmosphere. Ample storage solutions keep necessities organized
        and hidden from view.
      </P>

      <Button
        href="/post/modern-nursery-design"
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
  title: 'Modern Nursery Design | Contemporary Baby Room Interior',
  description:
    'Serene gender-neutral nursery featuring sustainable materials, convertible furniture, and thoughtful design that grows with your child.',
  date: '2024-12-20',
  slug: 'modern-nursery-design',
  featuredImage:
    '/images/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg',
  categories: ['Nursery Design', 'Contemporary', 'Family Home'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/modern-nursery-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Modern Nursery Design | Contemporary Baby Room Interior',
    description:
      'Modern nursery with sustainable materials and convertible furniture',
    image: {
      url: '/images/banner.jpg',
      alt: 'Modern nursery with soft colors and natural materials',
    },
  },
}
