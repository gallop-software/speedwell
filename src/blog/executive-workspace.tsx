import Link from 'next/link'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Executive Workspace'

function Details() {
  return (
    <>
      <Gallery>
        <GalleryItem
          src="/images/portfolio/pexels-mikhail-nilov-6707628.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
          size="large"
        />
      </Gallery>

      <P>
        This sophisticated home office design creates a professional yet
        comfortable environment for executive work and virtual meetings. A
        custom walnut desk with integrated cable management anchors the space,
        paired with an ergonomic leather chair that combines support with style.
        Floor-to-ceiling built-in shelving provides display space for books,
        awards, and personal collections while offering concealed storage for
        office supplies.
      </P>

      <P>
        The refined color palette of navy, cognac leather, and warm woods
        projects authority and confidence. We incorporated proper task lighting,
        acoustic panels disguised as art, and a curated backdrop perfect for
        video calls. A separate seating area with lounge chairs facilitates
        informal meetings or focused reading. For more workspace inspiration,
        explore our{' '}
        <Link href="/post/creative-agency-workspace" prefetch={true}>
          Creative Agency Workspace
        </Link>{' '}
        or the expansive{' '}
        <Link href="/post/tech-startup-headquarters" prefetch={true}>
          Tech Startup Headquarters
        </Link>
        . Smart home integration allows seamless control of lighting,
        temperature, and privacy shades.{' '}
        <Link href="/contact" prefetch={true}>
          Contact us
        </Link>{' '}
        to discuss your home office project.
      </P>

      <P>
        The principles of thoughtful workspace design extend beyond the
        traditional home office into how we approach living spaces as a whole.
        Creating dedicated zones for focus, collaboration, and relaxation helps
        homeowners achieve better work-life balance. Our{' '}
        <Link href="/post/modern-loft-transformation" prefetch={true}>
          Modern Loft Transformation
        </Link>{' '}
        showcases how open floor plans can be designed to support both
        productivity and comfortable living.
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
  title: 'Executive Workspace | Professional Home Office Design',
  description:
    'Sophisticated home office featuring custom millwork, ergonomic furnishings, and professional design for executive productivity and virtual meetings.',
  date: '2025-02-14',
  slug: 'executive-workspace',
  featuredImage: '/images/portfolio/pexels-mikhail-nilov-6707628.jpg',
  categories: ['Home Office', 'Contemporary', 'Professional'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/executive-workspace',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Executive Workspace | Professional Home Office Design',
    description:
      'Professional home office with custom millwork and executive furnishings',
    image: {
      url: '/images/banner.jpg',
      alt: 'Executive home office with built-in shelving',
    },
  },
}
