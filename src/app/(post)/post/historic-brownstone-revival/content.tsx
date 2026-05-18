import Link from 'next/link'
import { Image } from '@/components/image'
import { PageHeader } from '@/components/page-header'
import { P } from '@/components/paragraph'
import { Heading } from '@/components/heading'

const TITLE = 'Historic Brownstone Revival'

function Details() {
  return (
    <>
      <Image
        src="/portfolio/fotoaibe/pexels-fotoaibe-1643384.jpg"
        size="large"
        wrap={true}
        alt="Historic brownstone interior with restored architectural details"
      />

      <P>
        This 19th-century brownstone required a delicate balance of historic
        preservation and modern functionality. We meticulously restored original
        architectural details including crown molding, hardwood floors, and
        ornate fireplace mantels while updating the space for contemporary
        living. The design honors the home's Victorian heritage through rich
        jewel tones, vintage-inspired lighting, and carefully selected antique
        pieces, while modern amenities and open sightlines ensure comfort and
        livability. Custom millwork blends seamlessly with original features,
        and a sophisticated color palette highlights the home's architectural
        beauty.
      </P>

      <P>
        Every room tells a story of thoughtful restoration, from the grand
        entrance foyer with its restored staircase to the chef's kitchen that
        respects the home's character while providing state-of-the-art
        functionality. The preservation techniques echo those in our{' '}
        <Link
          href="/post/art-deco-restoration"
          prefetch={true}
        >
          art deco restoration
        </Link>{' '}
        project, while the curated interiors share sensibilities with our{' '}
        <Link
          href="/post/library-study-design"
          prefetch={true}
        >
          library study design
        </Link>
        .
      </P>

      <P>
        Historic properties require designers who understand both the technical
        demands of preservation and the vision to create spaces that feel
        relevant today. This brownstone's primary suite exemplifies how period
        details can coexist with modern luxury—an approach we also bring to our{' '}
        <Link
          href="/post/luxury-master-suite"
          prefetch={true}
        >
          luxury master suite
        </Link>{' '}
        projects where comfort and elegance are paramount.
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
