import Hero4 from '@/blocks/hero-4'
import Content1 from '@/blocks/content-1'
import About2 from '@/blocks/about-2'
import CallToAction1 from '@/blocks/call-to-action-1'

export default function Content() {
  return (
    <>
      <Hero4 />
      <Content1 />
      <About2 />
      <CallToAction1 />
    </>
  )
}

export const metadata = {
  title: 'Before & After Transformations | Interior Design Portfolio',
  description:
    'Explore stunning before and after transformations by Timmerman. See how our expert interior designers transform residential and commercial spaces with creative vision and meticulous attention to detail.',
  slug: 'before-after',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg',
  focusKeyword: 'before after interior design',
  readingTimeMinutes: 6,
  publishDate: '2024-09-15T00:00:00Z',
  lastModified: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/before-after',
  },
  openGraph: {
    title: 'Before & After Transformations | Interior Design Success Stories',
    description:
      'Discover remarkable interior design transformations by Timmerman. Browse our before and after gallery showcasing residential and commercial projects that demonstrate our creative expertise.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Before and after interior design transformation',
    },
    imageAlt: 'Interior Design Before & After Transformations',
  },
}
