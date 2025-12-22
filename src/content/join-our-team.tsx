import { Navbar } from '@/components'
import Section10 from '@/blocks/section-10'
import Accordion1 from '@/blocks/accordion-1'
import Application1 from '@/blocks/application-1'

export default function Content() {
  return (
    <>
      <Navbar className="bg-body2" />
      <Section10 />
      <Accordion1 />
      <Application1 />
    </>
  )
}

export const metadata = {
  title: 'Join our Team | Interior Design Careers',
  description:
    'Explore career opportunities at Timmerman. We are looking for talented interior designers, project managers, and design professionals passionate about creating exceptional spaces. Join our award-winning team.',
  slug: 'join-our-team',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg',
  focusKeyword: 'interior design careers',
  readingTimeMinutes: 5,
  publishDate: '2024-06-01T10:00:00Z',
  lastModified: '2025-12-11T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/join-our-team',
  },
  openGraph: {
    title: 'Join our Team | Interior Design Careers',
    description:
      'Join our talented team of interior designers and specialists. Explore career opportunities at Timmerman where creativity meets expertise in residential and commercial design.',
    image: {
      url: '/images/banner.jpg',
      alt: 'Timmerman design team collaboration',
    },
  },
}
