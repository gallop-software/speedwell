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
            src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-276724-lg.jpg"
            width={1400}
            height={788}
            alt="Magna nostrud deserunt"
            className="object-cover"
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
          src="https://speedwell-cdn.gallop.software/images/portfolio/houzlook/pexels-houzlook-3356416-lg.jpg"
          width={1400}
          height={1759}
          href="https://speedwell-cdn.gallop.software/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-leah-newhouse-50725-6480707-lg.jpg"
          width={1400}
          height={933}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/jvdm/pexels-jvdm-1454804-lg.jpg"
          width={1400}
          height={879}
          href="https://speedwell-cdn.gallop.software/images/portfolio/jvdm/pexels-jvdm-1454804.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-clickerhappy-584399-lg.jpg"
          width={1400}
          height={926}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-clickerhappy-584399.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-burst-545012-lg.jpg"
          width={1400}
          height={933}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-burst-545012.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/falling4utah/pexels-falling4utah-1080696-lg.jpg"
          width={1400}
          height={2100}
          href="https://speedwell-cdn.gallop.software/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/houzlook/pexels-houzlook-3797991-lg.jpg"
          width={1400}
          height={1050}
          href="https://speedwell-cdn.gallop.software/images/portfolio/houzlook/pexels-houzlook-3797991.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-mikhail-nilov-6707628-lg.jpg"
          width={1400}
          height={933}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-mikhail-nilov-6707628.jpg"
        />
      </Gallery>
    </Section>
  )
}
