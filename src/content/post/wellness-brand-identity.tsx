import { Button, Image, PageHeader, P, Heading } from '@/components'

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
        This holistic wellness studio required a brand that embodied tranquility and modern mindfulness. We created a serene visual identity featuring soft color palettes, organic shapes, and minimalist typography that reflects their approach to wellness. The brand system includes studio signage, class schedules, promotional materials, and a cohesive digital presence. Custom icons represent different wellness practices from yoga to meditation. Every touchpoint was designed to create a calm, welcoming atmosphere that resonates with clients seeking balance and wellbeing in their busy lives.
      </P>

      <Button
        href="/post/wellness-brand-identity"
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
  title: 'Wellness Studio Brand Identity | Holistic Design',
  description:
    'Serene brand identity for wellness studio featuring soft palettes, organic shapes, and mindful design that creates calm, welcoming experiences.',
  date: '2024-10-22',
  slug: 'wellness-brand-identity',
  featuredImage: '/images/layout-1/pexels-diva-plavalaguna-6937932.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Wellness'],
  alternates: {
    canonical:
      'https://speedwell.gallop.software/post/wellness-brand-identity',
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
