import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Buttons,
  Button,
  Gallery,
  GalleryItem,
} from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function Showcase5() {
  return (
    <Section className="py-30 bg-body">
      <Columns reverseColumns={true}>
        <Column className="aspect-[6/8] relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg"
            alt="Occaecat duis consequat aute minim"
            className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/jvdm/pexels-jvdm-1457844.jpg"
            alt="Consectetur nulla ullamco"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            styleAs="h3"
            color="text-gray-600"
            margin="mb-4"
          >
            Aliquip est sit cillum
          </Heading>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Veniam lorem lorem nisi mollit officia qui sunt minim labore
          </Heading>
          <Paragraph>
            Ad qui in anim qui proident elit ex mollit reprehenderit quis
            aliquip velit nulla magna sit ullamco in anim irure anim fugiat nisi
            culpa laborum lorem exercitation amet commodo quis laboris nostrud
            irure adipiscing amet sed adipiscing culpa do amet proident irure in
            ex irure reprehenderit qui amet elit et proident
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/enim-ad"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Mollit nulla
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
          src="/images/portfolio/pexels-burst-545012.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-clickerhappy-584399.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-pixabay-269252.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571468.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-pixabay-259962.jpg"
          size="large"
        />
      </Gallery>
    </Section>
  )
}
