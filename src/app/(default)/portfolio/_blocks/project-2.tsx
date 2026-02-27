import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'

export default function Project2() {
  return (
    <Section className="py-30 bg-body-dark">
      <Columns reverseColumns={false}>
        <Column className="aspect-auto relative">
          <Image
            src="/portfolio/pexels-pixabay-276724.jpg"
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
          src="/portfolio/houzlook/pexels-houzlook-3356416.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/jvdm/pexels-jvdm-1454804.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/pexels-clickerhappy-584399.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/pexels-burst-545012.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/houzlook/pexels-houzlook-3797991.jpg"
          size="large"
        />
        <GalleryItem
          src="/portfolio/pexels-mikhail-nilov-6707628.jpg"
          size="large"
        />
      </Gallery>
    </Section>
  )
}
