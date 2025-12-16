import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Gallery,
  GalleryItem,
  CanvasBackground1,
} from '@/components'

export default function Showcase6() {
  return (
    <Section className="py-30 bg-body-dark relative overflow-hidden">
      <CanvasBackground1 className="absolute inset-0 w-full h-full" />
      <div className="relative">
        <Columns
          className="mb-8"
          reverseColumns={true}
        >
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
              resulting professional environments that enhance employee
              wellbeing boost productivity reflect company culture
            </Paragraph>
          </Column>
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
        </Columns>
        <Columns reverseColumns={false}>
          <Column>
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
              resulting professional environments that enhance employee
              wellbeing boost productivity reflect company culture
            </Paragraph>
          </Column>
          <Column className="aspect-[29/28] relative">
            <Image
              src="/images/portfolio/pexels-pixabay-269252.jpg"
              alt="Nostrud ipsum magna"
              className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
              size="large"
            />
            <Image
              src="/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
              alt="Eiusmod enim sint"
              className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
              rounded="rounded-b-none rounded-t-full"
              size="large"
            />
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
      </div>
    </Section>
  )
}
