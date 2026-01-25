import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Chef Kitchen Upgrade'

function Details() {
  return (
    <>
      <Image
        src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
        alt="Professional chef's kitchen with high-end appliances"
        size="large"
        wrap={true}
      />

      <P>
        This serious cook's kitchen upgrade focuses on professional-grade
        performance and efficiency. We installed a 48-inch dual-fuel range with
        six burners and griddle, paired with a powerful ventilation system. The
        expansive island includes prep sink, abundant workspace, and elevated
        seating for guests to keep the chef company. A butler's pantry houses
        small appliances and provides additional prep space.
      </P>

      <P>
        Professional-grade refrigeration, a pot-filler faucet at the range, and
        a dedicated spice drawer near the cooktop enhance workflow. Open
        shelving displays copper pots and frequently-used items, while deep
        drawers accommodate large cookware. For more kitchen inspiration, see
        our{' '}
        <Link
          href="/post/farmhouse-kitchen-remodel"
          prefetch={true}
        >
          Farmhouse Kitchen Remodel
        </Link>{' '}
        or the sleek{' '}
        <Link
          href="/post/minimalist-kitchen-redesign"
          prefetch={true}
        >
          Minimalist Kitchen Redesign
        </Link>
        . Explore our{' '}
        <Link
          href="/kitchen-bath"
          prefetch={true}
        >
          Kitchen & Bath services
        </Link>
        .
      </P>

      <P>
        A well-designed chef's kitchen borrows heavily from commercial culinary
        spaces, where every element serves a purpose and workflow reigns
        supreme. The same principles that guide professional restaurant
        kitchens—strategic station placement, durable materials, and efficient
        ventilation—translate beautifully to residential settings. Discover how
        we apply these concepts in commercial hospitality in our{' '}
        <Link
          href="/post/restaurant-interior-design"
          prefetch={true}
        >
          Restaurant Interior Design
        </Link>{' '}
        project, where function and aesthetics unite to create exceptional
        culinary environments.
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
  title: 'Chef Kitchen Upgrade | Professional Home Kitchen Design',
  description:
    "Serious cook's kitchen featuring professional-grade appliances, abundant prep space, and restaurant-quality functionality for home.",
  date: '2025-04-05',
  slug: 'chef-kitchen-upgrade',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg',
  categories: ['Kitchen Design', 'Professional', 'Gourmet'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/chef-kitchen-upgrade',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Chef Kitchen Upgrade | Professional Home Kitchen Design',
    description:
      'Professional chef kitchen with restaurant-grade appliances and functionality',
    image: {
      url: '/images/banner.jpg',
      alt: 'Chef kitchen with professional appliances and large island',
    },
  },
}
