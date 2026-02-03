import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Craft Brewery Brand Identity'

function Details() {
  return (
    <>
      <Image
        src="/layout-1/pexels-elevate-1267700.jpg"
        alt="Craft brewery brand identity with bold labels and packaging"
        size="large"
        wrap={true}
      />

      <P>
        This independent brewery needed a distinctive brand to stand out in the
        crowded craft beer market. We developed a bold, memorable identity
        system featuring custom illustrations, vibrant colors, and playful
        typography that reflects their experimental approach to brewing. Each
        beer variety has its own unique label design while maintaining brand
        cohesion through consistent elements. The taproom experience includes
        branded glassware, coasters, merchandise, and environmental graphics
        designed with the same attention to wellness we brought to our{' '}
        <Link
          href="/post/private-yoga-studio"
          prefetch={true}
        >
          private yoga studio
        </Link>{' '}
        and{' '}
        <Link
          href="/post/wellness-spa-design"
          prefetch={true}
        >
          wellness spa design
        </Link>{' '}
        projects.
      </P>

      <P>
        Creating a memorable brand identity requires understanding both the
        product and the audience. For this brewery, we immersed ourselves in
        their brewing process, tasted every variety, and spent time with their
        community to capture the spirit of experimentation that defines their
        craft. If you're ready to develop a distinctive identity for your
        business,{' '}
        <Link
          href="/contact"
          prefetch={true}
        >
          get in touch
        </Link>{' '}
        to start the conversation.
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
  title: 'Craft Brewery Brand Identity | Beer Label Design',
  description:
    'Bold brewery brand featuring custom illustrations, vibrant label designs, and cohesive identity system that stands out in craft beer market.',
  date: '2024-07-18',
  slug: 'luxury-fitness-studio',
  featuredImage: '/layout-1/pexels-elevate-1267700.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Packaging Design'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/luxury-fitness-studio',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Craft Brewery Brand Identity | Beer Label Design',
    description:
      'Distinctive brewery brand with custom illustrations and bold packaging',
    image: {
      url: '/banner.jpg',
      alt: 'Craft brewery brand labels',
    },
  },
}
