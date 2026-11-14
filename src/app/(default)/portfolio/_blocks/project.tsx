import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'

export default function Project() {
  return (
    <Section className="py-30 bg-gradient-to-b from-body2 to-body-light">
      <Columns reverseColumns>
        <Column className="aspect-[4/5] relative">
          <Image
            src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-jworks1124-342800-lg.jpg"
            width={1400}
            height={1093}
            alt="Nulla lorem commodo"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
          />
          <Image
            src="https://speedwell-cdn.gallop.software/images/portfolio/charlotte-may/pexels-charlotte-may-5824901-lg.jpg"
            width={1400}
            height={2100}
            alt="Aliquip veniam nostrud"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            styleAs="h3"
            id="birth-suites"
          >
            Featured Project
          </Heading>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Modern Luxury Living Transformation
          </Heading>
          <Paragraph>
            This stunning residential renovation showcases our ability to blend
            contemporary design with classic elegance creating warm inviting
            spaces featuring custom millwork designer lighting carefully
            selected furnishings and rich textural elements throughout
            complemented by neutral palettes accented with sophisticated colors
            resulting in timeless interiors that perfectly balance form function
            beauty practicality comfort style
          </Paragraph>
        </Column>
      </Columns>
      <Gallery
        columns={5}
        align="none"
        className="mt-20"
      >
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/charlotte-may/pexels-charlotte-may-5825398-lg.jpg"
          width={1400}
          height={2100}
          href="https://speedwell-cdn.gallop.software/images/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571452-lg.jpg"
          width={1400}
          height={935}
          href="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/jonathanborba/pexels-jonathanborba-5570224-lg.jpg"
          width={1400}
          height={2100}
          href="https://speedwell-cdn.gallop.software/images/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777-lg.jpg"
          width={1400}
          height={2097}
          href="https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-161758-lg.jpg"
          width={1400}
          height={933}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-161758.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-279719-lg.jpg"
          width={1400}
          height={875}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-279719.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571462-lg.jpg"
          width={1400}
          height={935}
          href="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571462.jpg"
        />
      </Gallery>
    </Section>
  )
}
