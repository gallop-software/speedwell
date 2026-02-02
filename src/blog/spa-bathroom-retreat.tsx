import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Spa Bathroom Retreat'

function Details() {
  return (
    <>
      <Image
        src="/portfolio/pexels-pixabay-269218.jpg"
        alt="Spa-like bathroom retreat with luxurious fixtures and calming design"
        size="large"
        wrap={true}
      />

      <P>
        This master bathroom transformation creates a tranquil spa experience
        with luxurious materials and thoughtful design. A spacious walk-in
        shower features rainfall and handheld showerheads, body jets, and a
        built-in bench clad in the same porcelain tile. The freestanding soaking
        tub is positioned to capture natural light while maintaining privacy. A
        floating double vanity in warm walnut provides ample storage with
        integrated lighting.
      </P>

      <P>
        Heated marble floors, towel warmers, and a steam function in the shower
        elevate the daily routine into a wellness ritual. This bathroom pairs
        beautifully with our{' '}
        <Link
          href="/post/luxury-master-suite"
          prefetch={true}
        >
          luxury master suite
        </Link>{' '}
        designs. The neutral color palette of soft grays and warm whites creates
        serenity, while brass fixtures add warmth and sophistication. Thoughtful
        storage solutions keep counters clutter-free, and dimmable lighting
        allows for customizable ambiance from energizing morning light to
        relaxing evening glow. For similar wellness-focused design, see our{' '}
        <Link
          href="/post/wellness-spa-design"
          prefetch={true}
        >
          wellness spa design
        </Link>{' '}
        project.
      </P>

      <P>
        Creating a spa-like bathroom retreat requires thoughtful consideration
        of all the senses: the warmth of heated surfaces underfoot, the gentle
        sound of water, and the visual calm of uncluttered surfaces. This
        philosophy of mindful, sensory design connects deeply with Eastern
        aesthetics. Discover how we embraced similar principles of tranquility
        and intentional simplicity in our{' '}
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
  title: 'Spa Bathroom Retreat | Luxury Bathroom Interior Design',
  description:
    'Tranquil spa-inspired bathroom featuring steam shower, soaking tub, heated floors, and luxurious finishes for ultimate relaxation.',
  date: '2024-05-28',
  slug: 'spa-bathroom-retreat',
  featuredImage: '/portfolio/pexels-pixabay-269218.jpg',
  categories: ['Bathroom Design', 'Luxury', 'Contemporary'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/spa-bathroom-retreat',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Spa Bathroom Retreat | Luxury Bathroom Interior Design',
    description: 'Luxurious spa bathroom with steam shower and soaking tub',
    image: {
      url: '/banner.jpg',
      alt: 'Spa-inspired bathroom with modern fixtures and natural light',
    },
  },
}
