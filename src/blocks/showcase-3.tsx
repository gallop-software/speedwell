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
            Commercial Excellence
          </Heading>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Professional Office Suite Redesign
          </Heading>
          <Paragraph>
            This commercial transformation demonstrates expertise in creating
            productive inspiring workspaces through strategic layout
            optimization ergonomic furniture selections sophisticated finishes
            modern lighting solutions branded elements cohesive color schemes
            smart storage systems flexible meeting areas collaborative zones
            resulting professional environments that enhance employee wellbeing
            boost productivity reflect company culture
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
