import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Tech Startup Brand Launch'

function Details() {
  return (
    <>
      <Image
        src="/images/layout-1/pexels-pixabay-221185.jpg"
        alt="Modern tech startup brand identity with bold colors and dynamic design"
        size="large"
        wrap={true}
      />

      <P>
        This fast-growing SaaS startup needed a brand that could compete with
        industry giants while showcasing their innovative approach. We developed
        a bold, energetic visual identity featuring vibrant gradients, geometric
        patterns, and modern typography. The brand system scales seamlessly
        across digital and print applications, from website to investor
        presentations. Custom iconography and illustrations communicate complex
        technical concepts with clarity and personality—similar to the
        professional environments we created in our{' '}
        <Link href="/post/executive-workspace" prefetch={true}>
          executive workspace
        </Link>{' '}
        and{' '}
        <Link href="/post/wellness-spa-design" prefetch={true}>
          wellness spa design
        </Link>{' '}
        projects.
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
  title: 'Tech Startup Brand Launch | SaaS Company Branding',
  description:
    'Bold brand identity for innovative SaaS startup featuring vibrant gradients, custom iconography, and scalable design system for growth.',
  date: '2024-11-15',
  slug: 'modern-medical-office',
  featuredImage: '/images/layout-1/pexels-pixabay-221185.jpg',
  categories: ['Portfolio', 'Brand Identity', 'Digital Branding'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/modern-medical-office',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Tech Startup Brand Launch | SaaS Company Branding',
    description:
      'Energetic brand identity for tech startup with bold visuals and scalable system',
    image: {
      url: '/images/banner.jpg',
      alt: 'Tech startup brand identity',
    },
  },
}
