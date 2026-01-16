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

export default function Content33() {
  return (
    <Section className="bg-body py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column className="aspect-4/5 relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg"
            alt="Qui do cupidatat non aute nulla"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
            alt="Pariatur elit tempor"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            id="services"
          >
            Sed reprehenderit pariatur
          </Heading>
          <Paragraph>
            Ut ex amet ea minim sint anim anim ipsum dolor aute adipiscing
            deserunt ea aliquip anim ut qui sit ea fugiat pariatur commodo ut
            cillum id consequat deserunt cillum consectetur nulla non ea laborum
            et consequat ullamco enim sed deserunt occaecat qui reprehenderit
            cillum mollit aliquip magna qui enim est culpa elit sunt irure et ut
            sint enim aliqua qui voluptate et
          </Paragraph>
        </Column>
      </Columns>
      <Gallery
        columns={5}
        align="none"
        className="mt-10 lg:mt-20"
      >
        <GalleryItem
          src="/images/portfolio/pexels-pixabay-269252.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-alex-qian-1180283-2343465.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/houzlook/pexels-houzlook-3797991.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571468.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/pexels-dropshado-2251247.jpg"
          size="large"
        />
        <GalleryItem
          src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg"
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
