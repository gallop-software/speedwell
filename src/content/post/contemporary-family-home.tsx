import { Button, Image, PageHeader, P, Heading } from '@/components'

const TITLE = 'Contemporary Family Home'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
        alt="Contemporary family home with modern, functional design"
        size="large"
        wrap={true}
      />

      <P>
        This spacious suburban family home received a complete contemporary
        redesign to accommodate a growing family's needs. We created an
        open-plan living space that seamlessly connects the kitchen, dining, and
        family room areas, promoting interaction while maintaining distinct
        zones for different activities. Custom millwork throughout provides
        ample storage while maintaining clean lines and a minimalist aesthetic.
      </P>

      <P>
        The color palette features warm neutrals accented with bold pops of
        color in artwork and textiles. Large-format tiles, natural oak flooring,
        and sleek fixtures contribute to the modern feel. We incorporated smart
        home technology, energy-efficient lighting, and durable, family-friendly
        materials that don't sacrifice style.
      </P>

      <Button
        href="/post/contemporary-family-home"
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
  title: 'Contemporary Family Home | Modern Residential Interior Design',
  description:
    'Open-plan family home renovation featuring contemporary design, custom millwork, and smart home integration for comfortable modern living.',
  date: '2024-11-10',
  slug: 'contemporary-family-home',
  featuredImage:
    '/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg',
  categories: ['Residential', 'Contemporary', 'Family Home'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/contemporary-family-home',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Contemporary Family Home | Modern Residential Interior Design',
    description:
      'Open-plan contemporary home with custom millwork and smart home features',
    image: {
      url: '/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg',
      alt: 'Contemporary family home with open-plan living spaces',
    },
  },
}
