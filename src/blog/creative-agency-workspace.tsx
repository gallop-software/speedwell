import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Organic Skincare Rebrand'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-cottonbro-4154192.jpg"
        alt="Natural organic skincare brand identity with minimalist packaging"
        size="large"
        wrap={true}
      />

      <P>
        This established skincare line needed a refresh to compete in the
        growing clean beauty market. We created a sophisticated, minimalist
        brand identity that emphasizes purity and transparency, drawing
        inspiration from our{' '}
        <Link href="/post/executive-workspace" prefetch={true}>
          executive workspace
        </Link>{' '}
        project. The design features soft botanical illustrations, a calming
        earth-tone palette, and clean typography that communicates luxury
        without pretension. Packaging redesign prioritizes sustainability with
        recyclable materials and refillable options. The updated brand
        guidelines include photography direction, social media templates, and
        retail display standards that maintain consistency across all customer
        touchpoints—similar to the cohesive approach we took with our{' '}
        <Link href="/post/tech-startup-headquarters" prefetch={true}>
          tech startup headquarters
        </Link>{' '}
        branding.
      </P>

      <P>
        Rebranding an established product line requires balancing respect for
        existing customer loyalty with the need to attract new audiences. We
        worked closely with the skincare company's team to evolve—not
        erase—their heritage while positioning them competitively in the clean
        beauty space. Ready to refresh your brand?{' '}
        <Link href="/contact" prefetch={true}>
          Contact us
        </Link>{' '}
        to discuss your vision.
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
  title: 'Organic Skincare Rebrand | Clean Beauty Brand Identity',
  description:
    'Minimalist rebrand for organic skincare line featuring botanical elements, sustainable packaging, and sophisticated visual identity for clean beauty market.',
  date: '2024-10-20',
  slug: 'creative-agency-workspace',
  featuredImage: '/images/layout-1/pexels-cottonbro-4154192.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Packaging Design'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/creative-agency-workspace',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Organic Skincare Rebrand | Clean Beauty Brand Identity',
    description:
      'Sustainable rebrand for organic skincare with minimalist design',
    image: {
      url: '/images/banner.jpg',
      alt: 'Organic skincare brand packaging',
    },
  },
}
