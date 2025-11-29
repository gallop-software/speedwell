import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Accent,
} from '@/components'

export default function Section32() {
  return (
    <Section className="py-20 md:py-30 bg-body2 relative">
      <div className="absolute w-[50%] border-r border-b border-black left-0 -top-20 bottom-auto h-[500px] sm:h-[600px] md:h-[700px] lg:bottom-60 lg:h-auto pointer-events-none"></div>
      <Columns reverseColumns={false}>
        <Column className="aspect-8/9 relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
            alt="Sint aliquip non veniam laborum"
            className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/jvdm/pexels-jvdm-1457844.jpg"
            alt="Culpa aliquip ullamco"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
          <Accent
            className="absolute bottom-[35%] left-4 z-30"
            color="text-white"
          >
            do amet
          </Accent>
        </Column>
        <Column className="mb-10">
          <Heading
            as="h3"
            styleAs="h2"
          >
            Laboris in
          </Heading>
          <Paragraph fontStyle="italic">
            Veniam occaecat excepteur incididunt do velit consectetur voluptate
            laboris anim elit cillum proident excepteur quis adipiscing minim
            consequat officia id ullamco nisi qui incididunt id cupidatat et
            aute anim mollit minim esse et ex quis minim anim est non dolore
            aute fugiat qui esse incididunt aliqua excepteur sed pariatur
            deserunt commodo ea laboris pariatur excepteur id pariatur ullamco
            ut quis laboris est incididunt magna nulla cupidatat laborum sint
            eiusmod aliquip tempor adipiscing pariatur aliquip elit incididunt
            velit cillum est cupidatat esse magna occaecat est nulla labore
            veniam do laboris proident ipsum enim reprehenderit id ut irure
            incididunt consectetur excepteur dolore est cillum labore nisi esse
            mollit proident anim lorem cupidatat et sit
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
