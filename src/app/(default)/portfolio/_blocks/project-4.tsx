import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function Project4() {
  return (
    <Section className="py-30 bg-body">
      <Columns reverseColumns={true}>
        <Column className="aspect-[6/8] relative">
          <Image
            src="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1668860-lg.jpg"
            width={1400}
            height={935}
            alt="Occaecat duis consequat aute minim"
            className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
          />
          <Image
            src="https://speedwell-cdn.gallop.software/images/portfolio/jvdm/pexels-jvdm-1457844-lg.jpg"
            width={1400}
            height={2100}
            alt="Consectetur nulla ullamco"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            styleAs="h3"
            color="text-contrast-light"
            margin="mb-4"
          >
            Whole Home Design
          </Heading>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Complete Home Transformation from Concept to Completion
          </Heading>
          <Paragraph>
            This full-service residential project exemplifies comprehensive
            design coordination featuring cohesive color palettes custom
            furnishings curated artwork strategic lighting layered textiles
            architectural details refined finishes thoughtful accessories
            seamless transitions between spaces creating unified aesthetic
            throughout entire home reflecting client lifestyle personal taste
            design aspirations
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/contact"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Schedule Consultation
            </Button>
          </Buttons>
        </Column>
      </Columns>
      <Gallery
        columns={5}
        align="none"
        className="mt-20"
      >
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-burst-545012-lg.jpg"
          width={1400}
          height={933}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-burst-545012.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-clickerhappy-584399-lg.jpg"
          width={1400}
          height={926}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-clickerhappy-584399.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/falling4utah/pexels-falling4utah-1080721-lg.jpg"
          width={1400}
          height={933}
          href="https://speedwell-cdn.gallop.software/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1669799-lg.jpg"
          width={1400}
          height={935}
          href="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1668860-lg.jpg"
          width={1400}
          height={935}
          href="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-269252-lg.jpg"
          width={1400}
          height={1107}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-269252.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571453-lg.jpg"
          width={1400}
          height={935}
          href="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571468-lg.jpg"
          width={1400}
          height={935}
          href="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571468.jpg"
        />
        <GalleryItem
          src="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-259962-lg.jpg"
          width={1400}
          height={930}
          href="https://speedwell-cdn.gallop.software/images/portfolio/pexels-pixabay-259962.jpg"
        />
      </Gallery>
    </Section>
  )
}
