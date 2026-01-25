import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Library Study Design'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/pexels-pixabay-276724.jpg"
        alt="Home library and study with built-in bookshelves"
        size="large"
        wrap={true}
      />

      <P>
        This traditional library study creates an intimate sanctuary for reading
        and contemplation. Floor-to-ceiling custom bookcases in rich walnut
        display an extensive book collection while providing concealed storage
        for office supplies. A rolling library ladder adds both function and
        classic elegance. The room centers around a leather Chesterfield sofa
        positioned before a marble fireplace.
      </P>

      <P>
        Layered lighting includes table lamps, wall sconces, and discreet LED
        strips that illuminate bookshelves without glare. The color palette of
        deep greens, burgundy, and warm wood tones creates a cocoon-like
        atmosphere. For a more modern take on home offices, see our{' '}
        <Link
          href="/post/executive-workspace"
          prefetch={true}
        >
          Executive Workspace
        </Link>{' '}
        project. If you're interested in traditional design, explore our{' '}
        <Link
          href="/post/historic-brownstone-revival"
          prefetch={true}
        >
          Historic Brownstone Revival
        </Link>
        .
      </P>

      <P>
        The principles of thoughtful library design—curated collections,
        comfortable seating, and ambient lighting—extend beyond urban studies to
        country estates where reading rooms become treasured retreats. In rural
        settings, these spaces often connect to wine cellars or tasting rooms
        that share the same appreciation for craftsmanship and leisure. See how
        we created such harmonious spaces in our{' '}
        <Link
          href="/post/wine-country-estate"
          prefetch={true}
        >
          Wine Country Estate
        </Link>{' '}
        project, where traditional elegance meets relaxed sophistication.
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
  title: 'Library Study Design | Traditional Home Library Interior',
  description:
    'Classic library study featuring floor-to-ceiling bookcases, leather furnishings, and sophisticated traditional design for reading and contemplation.',
  date: '2025-03-12',
  slug: 'library-study-design',
  featuredImage: '/images/portfolio/pexels-pixabay-276724.jpg',
  categories: ['Library Design', 'Traditional', 'Home Office'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/library-study-design',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Library Study Design | Traditional Home Library Interior',
    description:
      'Traditional library with custom bookcases and leather furnishings',
    image: {
      url: '/images/banner.jpg',
      alt: 'Library study with floor-to-ceiling bookshelves and reading nook',
    },
  },
}
