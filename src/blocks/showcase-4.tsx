import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Gallery,
  GalleryItem,
} from '@/components'

export default function Showcase4() {
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
            Ut et ea duis commodo
          </Heading>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Cillum anim do mollit non
          </Heading>
          <Paragraph>
            Amet exercitation consequat sunt amet incididunt est ex in cupidatat
            sed duis adipiscing laboris officia laborum fugiat proident
            excepteur ea sit adipiscing ullamco duis tempor magna id labore est
            anim quis cupidatat cupidatat tempor dolor fugiat ut elit
            reprehenderit adipiscing incididunt aute veniam excepteur esse
            ullamco consectetur officia adipiscing consequat adipiscing
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
