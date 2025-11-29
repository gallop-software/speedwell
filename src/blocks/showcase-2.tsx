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

export default function Showcase2() {
  return (
    <Section className="py-30 bg-gradient-to-b from-body2 to-body-light">
      <Columns reverseColumns>
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/pexels-jworks1124-342800.jpg"
            alt="Nulla lorem commodo"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg"
            alt="Aliquip veniam nostrud"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            styleAs="h3"
            id="birth-suites"
          >
            Cillum fugiat do
          </Heading>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Commodo labore consequat id amet
          </Heading>
          <Paragraph>
            Elit dolor aute aliqua commodo non id in veniam voluptate et dolore
            excepteur cillum eiusmod cupidatat reprehenderit commodo elit velit
            aute excepteur aliquip et commodo consequat aute voluptate cillum
            sint sunt id aliqua laboris officia duis mollit cupidatat irure
            dolore laboris officia officia fugiat ad enim cupidatat laborum
            reprehenderit ea
          </Paragraph>
        </Column>
      </Columns>
      <Gallery
        columns={5}
        align="none"
        className="mt-20"
      >
        <GalleryItem
          src="/images/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-pixabay-161758.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-pixabay-279719.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571462.jpg"
          size="large"
        />
      </Gallery>
    </Section>
  )
}
