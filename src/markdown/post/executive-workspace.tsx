import { Button, Gallery, GalleryItem, PageHeader , P } from '@/components'

export default function Content() {
  return (
    <>
<PageHeader>Executive Workspace</PageHeader>

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

<P>This sophisticated home office design creates a professional yet comfortable environment for executive work and virtual meetings. A custom walnut desk with integrated cable management anchors the space, paired with an ergonomic leather chair that combines support with style. Floor-to-ceiling built-in shelving provides display space for books, awards, and personal collections while offering concealed storage for office supplies.</P>

<P>The refined color palette of navy, cognac leather, and warm woods projects authority and confidence. We incorporated proper task lighting, acoustic panels disguised as art, and a curated backdrop perfect for video calls. A separate seating area with lounge chairs facilitates informal meetings or focused reading. Smart home integration allows seamless control of lighting, temperature, and privacy shades.</P>

<Button
  href="/post/executive-workspace"
  wrap={true}
>
  View Full Project
</Button>
    </>
  )
}

export const metadata = {
  title: 'Executive Workspace | Professional Home Office Design',
  description: 'Sophisticated home office featuring custom millwork, ergonomic furnishings, and professional design for executive productivity and virtual meetings.',
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
    description: 'Professional home office with custom millwork and executive furnishings',
    image: {
      url: '/images/portfolio/pexels-mikhail-nilov-6707628.jpg',
      alt: 'Executive home office with built-in shelving',
    },
  },
}
