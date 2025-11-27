import { Button, Image, PageHeader , P } from '@/components'

export default function Content() {
  return (
    <>
<PageHeader>Coastal Cottage Refresh</PageHeader>

<Image
  src="/images/portfolio/pexels-pixabay-259962.jpg"
  size="large"
  wrap={true}
/>

<P>This charming beach cottage received a light, bright refresh that celebrates its coastal location and relaxed lifestyle. We updated the tired interior with a fresh palette of whites, soft blues, and sandy neutrals that reflect the surrounding seascape. Vintage furniture pieces were refinished and reupholstered in durable, washable fabrics perfect for sandy feet and wet swimsuits. The original hardwood floors were restored and whitewashed for a sun-bleached look.</P>

<P>Shiplap accent walls, beadboard ceilings, and nautical-inspired details honor the cottage's heritage while feeling fresh and current. We maximized natural light with sheer curtains and added coastal touches like rope accents, weathered wood frames, and sea glass colors. The result is a comfortable, inviting retreat that feels authentically beachy without clichés, perfectly suited for lazy summer days and family gatherings.</P>

<Button
  href="/post/coastal-cottage-refresh"
  wrap={true}
>
  View Full Project
</Button>
    </>
  )
}

export const metadata = {
  title: 'Coastal Cottage Refresh | Beach House Interior Update',
  description: 'Charming beach cottage refresh featuring light coastal palette, restored vintage pieces, and authentic seaside style for relaxed living.',
  date: '2024-07-08',
  slug: 'coastal-cottage-refresh',
  featuredImage: '/images/portfolio/pexels-pixabay-259962.jpg',
  categories: ['Residential', 'Coastal Design', 'Cottage'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/coastal-cottage-refresh',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Coastal Cottage Refresh | Beach House Interior Update',
    description: 'Light and bright beach cottage with coastal charm',
    image: {
      url: '/images/portfolio/pexels-pixabay-259962.jpg',
      alt: 'Coastal cottage with whitewashed floors and beach decor',
    },
  },
}
