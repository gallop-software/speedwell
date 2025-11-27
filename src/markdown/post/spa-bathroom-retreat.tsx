import { Button, Image, PageHeader , P } from '@/components'

export default function Content() {
  return (
    <>
<PageHeader>Spa Bathroom Retreat</PageHeader>

<Image
  src="/images/portfolio/pexels-pixabay-269218.jpg"
  size="large"
  wrap={true}
/>

<P>This master bathroom transformation creates a tranquil spa experience with luxurious materials and thoughtful design. A spacious walk-in shower features rainfall and handheld showerheads, body jets, and a built-in bench clad in the same porcelain tile. The freestanding soaking tub is positioned to capture natural light while maintaining privacy. A floating double vanity in warm walnut provides ample storage with integrated lighting.</P>

<P>Heated marble floors, towel warmers, and a steam function in the shower elevate the daily routine into a wellness ritual. The neutral color palette of soft grays and warm whites creates serenity, while brass fixtures add warmth and sophistication. Thoughtful storage solutions keep counters clutter-free, and dimmable lighting allows for customizable ambiance from energizing morning light to relaxing evening glow.</P>

<Button
  href="/post/spa-bathroom-retreat"
  wrap={true}
>
  View Full Project
</Button>
    </>
  )
}

export const metadata = {
  title: 'Spa Bathroom Retreat | Luxury Bathroom Interior Design',
  description: 'Tranquil spa-inspired bathroom featuring steam shower, soaking tub, heated floors, and luxurious finishes for ultimate relaxation.',
  date: '2024-05-28',
  slug: 'spa-bathroom-retreat',
  featuredImage: '/images/portfolio/pexels-pixabay-269218.jpg',
  categories: ['Bathroom Design', 'Luxury', 'Contemporary'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/spa-bathroom-retreat',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Spa Bathroom Retreat | Luxury Bathroom Interior Design',
    description: 'Luxurious spa bathroom with steam shower and soaking tub',
    image: {
      url: '/images/portfolio/pexels-pixabay-269218.jpg',
      alt: 'Spa-inspired bathroom with modern fixtures and natural light',
    },
  },
}
