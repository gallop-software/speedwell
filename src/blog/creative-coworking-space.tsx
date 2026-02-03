import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Creative Coworking Space Brand'

function Details() {
  return (
    <>
      <Image
        src="/layout-1/pexels-mareklevak-2265482.jpg"
        alt="Modern coworking space brand identity with creative design"
        size="large"
        wrap={true}
      />

      <P>
        This innovative coworking space for creatives needed a brand that
        fostered community and inspired collaboration, much like our{' '}
        <Link
          href="/post/industrial-office-conversion"
          prefetch={true}
        >
          industrial office conversion
        </Link>{' '}
        project. We developed a dynamic visual identity featuring bold colors,
        geometric patterns, and versatile typography that reflects the diverse
        creative community. The brand system includes wayfinding signage, member
        materials, event collateral, and digital platforms. Custom illustrations
        celebrate different creative disciplines while maintaining brand unity.
        From the reception area to private studios, every brand element
        reinforces the space's mission to connect creative professionals and
        spark meaningful partnerships—an approach that also informed our{' '}
        <Link
          href="/post/creative-agency-workspace"
          prefetch={true}
        >
          creative agency workspace
        </Link>{' '}
        design.
      </P>

      <P>
        The success of any coworking space hinges on creating an environment
        where people want to spend their days. Beyond aesthetics, we focused on
        acoustics, lighting quality, and ergonomic furniture to support
        productivity and well-being. These same principles guided our work on
        the{' '}
        <Link
          href="/post/tech-startup-headquarters"
          prefetch={true}
        >
          tech startup headquarters
        </Link>
        , where employee comfort directly impacts innovation and retention.
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
  title: 'Creative Coworking Space Brand | Community-Driven Design',
  description:
    'Dynamic brand identity for coworking space featuring bold design that fosters creative community and inspires collaboration among professionals.',
  date: '2024-12-03',
  slug: 'creative-coworking-space',
  featuredImage: '/layout-1/pexels-mareklevak-2265482.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Workspace'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/creative-coworking-space',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Creative Coworking Space Brand | Community-Driven Design',
    description:
      'Vibrant brand connecting creative professionals through inspired design',
    image: {
      url: '/banner.jpg',
      alt: 'Coworking space brand materials',
    },
  },
}
