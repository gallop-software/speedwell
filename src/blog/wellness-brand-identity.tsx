import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Wellness Studio Brand Identity'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-diva-plavalaguna-6937932.jpg"
        alt="Modern wellness studio brand identity with calming design elements"
        size="large"
        wrap={true}
      />

      <P>
        This holistic wellness studio required a brand that embodied tranquility
        and modern mindfulness. We created a serene visual identity featuring
        soft color palettes, organic shapes, and minimalist typography that
        reflects their approach to wellness. For another example of brand
        transformation in the lifestyle space, see our{' '}
        <Link
          href="/post/fashion-boutique-rebrand"
          prefetch={true}
        >
          Fashion Boutique Rebrand
        </Link>{' '}
        project. The brand system includes studio signage, class schedules,
        promotional materials, and a cohesive digital presence. Custom icons
        represent different wellness practices from yoga to meditation. Every
        touchpoint was designed to create a calm, welcoming atmosphere that
        resonates with clients seeking balance and wellbeing in their busy
        lives. To see how we translated similar wellness principles into
        physical space design, explore our{' '}
        <Link
          href="/post/wellness-spa-design"
          prefetch={true}
        >
          Wellness Spa Design
        </Link>
        .
      </P>

      <P>
        Brand identity in the wellness sector must communicate authenticity and
        intention at every touchpoint. The visual language we develop draws from
        the same design philosophies that inform serene physical spaces:
        balanced compositions, natural color palettes, and thoughtful negative
        space. For an inspiring example of how these principles manifest in
        interior design, see our{' '}
        <Link
          href="/post/japanese-zen-retreat"
          prefetch={true}
        >
          Japanese zen retreat
        </Link>{' '}
        project.
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
  title: 'Wellness Studio Brand Identity | Holistic Design',
  description:
    'Serene brand identity for wellness studio featuring soft palettes, organic shapes, and mindful design that creates calm, welcoming experiences.',
  date: '2024-10-22',
  slug: 'wellness-brand-identity',
  featuredImage: '/images/layout-1/pexels-diva-plavalaguna-6937932.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Wellness'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/wellness-brand-identity',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Wellness Studio Brand Identity | Holistic Design',
    description:
      'Mindful brand identity creating serene experiences for wellness seekers',
    image: {
      url: '/images/banner.jpg',
      alt: 'Wellness studio brand materials',
    },
  },
}
