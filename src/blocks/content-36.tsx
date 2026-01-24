import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'

export default function Content36() {
  return (
    <Section className="py-30 bg-body2">
      <Columns reverseColumns={true}>
        <Column className="aspect-auto relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571468.jpg"
            alt="Non reprehenderit laboris"
            className="object-cover"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            styleAs="h3"
          >
            Kitchen and Bath
          </Heading>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Luxury Kitchen and Spa Bath
          </Heading>
          <Paragraph>
            This comprehensive renovation showcases mastery in functional luxury
            featuring custom cabinetry premium countertops designer fixtures
            innovative storage professional-grade appliances stunning tile work
            elegant hardware sophisticated lighting ambient features spa-like
            atmosphere creating beautiful hardworking spaces where form meets
            function perfectly balancing aesthetics practicality durability
            style comfort luxury
          </Paragraph>
        </Column>
      </Columns>
      <Gallery
        columns={3}
        align="none"
        className="mt-20"
      >
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-dropshado-2251247.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-4450337.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg"
          size="large"
        />
      </Gallery>
    </Section>
  )
}
