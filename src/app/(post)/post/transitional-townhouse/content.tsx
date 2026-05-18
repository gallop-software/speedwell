import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Transitional Townhouse'

function Details() {
  return (
    <>
      <Image
        src="/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg"
        alt="Transitional townhouse blending traditional and contemporary design"
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
        a finished basement family room. This approach is similar to our{' '}
        <Link
          href="/post/contemporary-family-home"
          prefetch={true}
        >
          contemporary family home
        </Link>{' '}
        project. We mixed traditional elements like tufted upholstery and
        oriental rugs with contemporary art and sleek accessories. The result
        balances the charm of historic architecture with the comfort and
        functionality today's families need, much like our{' '}
        <Link
          href="/post/historic-brownstone-revival"
          prefetch={true}
        >
          historic brownstone revival
        </Link>
        , creating timeless interiors that won't feel dated.
      </P>

      <P>
        Transitional design offers remarkable flexibility, allowing homeowners
        to incorporate pieces from different eras without conflict. This
        approach works particularly well when introducing midcentury modern
        elements—their clean lines and organic forms complement traditional
        architecture while adding contemporary flair. For those drawn to this
        aesthetic, our{' '}
        <Link
          href="/post/midcentury-modern-refresh"
          prefetch={true}
        >
          Midcentury Modern Refresh
        </Link>{' '}
        demonstrates how iconic design from the 1950s and 60s can feel fresh and
        relevant in today's homes.
      </P>
    </>
  )
}

export function Content() {
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
