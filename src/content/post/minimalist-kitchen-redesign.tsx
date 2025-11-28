import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Minimalist Kitchen Redesign'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
        size="large"
        wrap={true}
      />

      <P>
        This compact urban kitchen was transformed into a masterpiece of
        minimalist design that maximizes both function and style. We removed
        upper cabinets on one wall to create an open, airy feel and installed
        floor-to-ceiling pantry storage to compensate. Handleless cabinetry in
        matte white paired with waterfall-edge quartz countertops creates a
        seamless, sophisticated look.
      </P>

      <P>
        Integrated appliances maintain the clean aesthetic, while under-cabinet
        LED lighting adds both ambiance and task illumination. The monochromatic
        palette is warmed by natural oak flooring and accented with black
        fixtures for subtle contrast. Every element was carefully selected to
        eliminate visual clutter while ensuring maximum functionality for daily
        cooking and entertaining.
      </P>

      <Button
        href="/post/minimalist-kitchen-redesign"
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
  title: 'Minimalist Kitchen Redesign | Modern Kitchen Interior Design',
  description:
    'Sleek minimalist kitchen featuring handleless cabinetry, waterfall countertops, and integrated appliances for a clutter-free culinary space.',
  date: '2024-09-18',
  slug: 'minimalist-kitchen-redesign',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg',
  categories: ['Kitchen Design', 'Minimalist', 'Contemporary'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/minimalist-kitchen-redesign',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Minimalist Kitchen Redesign | Modern Kitchen Interior Design',
    description:
      'Clean minimalist kitchen with integrated appliances and seamless design',
    image: {
      url: '/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg',
      alt: 'Minimalist kitchen with white cabinetry and waterfall countertops',
    },
  },
}
