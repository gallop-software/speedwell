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

export default function Showcase3() {
  return (
    <Section className="py-30 bg-body-dark">
      <Columns reverseColumns={false}>
        <Column className="aspect-auto relative">
          <Image
            src="/images/portfolio/pexels-pixabay-276724.jpg"
            alt="Magna nostrud deserunt"
            className="object-cover"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            styleAs="h3"
          >
            Lorem incididunt ipsum
          </Heading>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Nulla ex esse aliqua sint
          </Heading>
          <Paragraph>
            Dolore est anim velit duis ut qui veniam eiusmod consectetur veniam
            magna culpa minim duis mollit ad nulla cupidatat qui ut occaecat
            excepteur deserunt aute veniam aliquip incididunt esse qui occaecat
            occaecat ex voluptate consequat tempor anim aliquip irure ullamco
            eiusmod consectetur sunt adipiscing nostrud tempor
          </Paragraph>
        </Column>
      </Columns>
      <Gallery
        columns={5}
        align="none"
        className="mt-20"
      >
        <GalleryItem
          src="/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/jvdm/pexels-jvdm-1454804.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-clickerhappy-584399.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-burst-545012.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/houzlook/pexels-houzlook-3797991.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-mikhail-nilov-6707628.jpg"
          size="large"
        />
      </Gallery>
    </Section>
  )
}
