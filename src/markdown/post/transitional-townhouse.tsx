import { Button, Image, PageHeader, P } from '@/components'

export default function Content() {
  return (
    <>
      <PageHeader>Transitional Townhouse</PageHeader>

      <Image
        src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg"
        size="large"
        wrap={true}
      />

      <P>
        This urban townhouse renovation bridges traditional architecture with
        contemporary living through transitional design. We honored the home's
        historic bones including crown molding and original hardwood while
        introducing modern elements like clean-lined furniture and updated
        lighting fixtures. The neutral color palette with layers of warm gray,
        cream, and soft blues creates a sophisticated backdrop.
      </P>

      <P>
        Key updates included opening the kitchen to the dining room, updating
        all bathrooms with classic subway tile and modern fixtures, and creating
        a finished basement family room. We mixed traditional elements like
        tufted upholstery and oriental rugs with contemporary art and sleek
        accessories. The result balances the charm of historic architecture with
        the comfort and functionality today's families need, creating timeless
        interiors that won't feel dated.
      </P>

      <Button
        href="/post/transitional-townhouse"
        wrap={true}
      >
        View Full Project
      </Button>
    </>
  )
}

export const metadata = {
  title: 'Transitional Townhouse | Historic Home Modern Update',
  description:
    'Urban townhouse blending historic architecture with contemporary design through transitional style, honoring character while updating for modern living.',
  date: '2024-08-02',
  slug: 'transitional-townhouse',
  featuredImage:
    '/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg',
  categories: ['Residential', 'Transitional', 'Townhouse'],
  alternates: {
    canonical: 'https://speedwell.gallop.software/post/transitional-townhouse',
  },
  authors: [{ name: 'Speedwell Design Studio' }],
  openGraph: {
    title: 'Transitional Townhouse | Historic Home Modern Update',
    description:
      'Historic townhouse with transitional design blending old and new',
    image: {
      url: '/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg',
      alt: 'Transitional townhouse with classic and contemporary elements',
    },
  },
}
