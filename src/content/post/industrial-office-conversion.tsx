import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Industrial Office Conversion'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
        alt="Industrial office space with exposed brick and modern furnishings"
        size="large"
        wrap={true}
      />

      <P>
        A former warehouse space was transformed into a stunning creative office
        environment that celebrates its industrial heritage while providing
        modern workplace functionality. We preserved exposed brick walls,
        original wood beams, and concrete floors, complementing them with
        contemporary furnishings and state-of-the-art technology. Large factory
        windows flood the space with natural light, while new HVAC systems and
        acoustic treatments ensure comfort.
      </P>

      <P>
        The open-plan workspace includes flexible collaboration areas, phone
        booths for privacy, and a central kitchen that serves as the social hub.
        Industrial-style pendant lighting, metal accents, and reclaimed wood
        furniture reinforce the aesthetic. We incorporated biophilic design
        elements with living plant walls and natural materials to balance the
        hard industrial surfaces.
      </P>

      <Button
        href="/post/industrial-office-conversion"
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
  title: 'Industrial Office Conversion | Warehouse to Workplace Design',
  description:
    'Creative office space conversion from warehouse featuring exposed brick, original beams, and modern workplace amenities.',
  date: '2024-08-14',
  slug: 'industrial-office-conversion',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg',
  categories: ['Commercial', 'Industrial', 'Office Design'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/industrial-office-conversion',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Industrial Office Conversion | Warehouse to Workplace Design',
    description:
      'Modern creative office in converted warehouse with industrial character',
    image: {
      url: '/images/banner.jpg',
      alt: 'Industrial office space with exposed brick and modern furnishings',
    },
  },
}
