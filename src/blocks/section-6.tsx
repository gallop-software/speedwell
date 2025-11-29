import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Quote,
  Paragraph,
} from '@/components'

export default function Section6() {
  return (
    <Section className="py-30 bg-gradient-to-b from-body2 to-body-light">
      <Columns
        reverseColumns
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-[8/7] relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571468.jpg"
            alt="Ea magna velit sit duis ullamco ea"
            className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/houzlook/pexels-houzlook-3797991.jpg"
            alt="Cillum mollit minim mollit nostrud"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Sint elit sed cupidatat amet laborum
          </Heading>
          <Quote>
            Laborum ipsum nulla veniam nulla quis aliqua minim laborum cupidatat
          </Quote>
          <Paragraph>
            Tempor aliquip magna qui laborum sit mollit elit cillum in aliquip
            laborum proident officia non dolore ea deserunt culpa sunt
            consectetur non culpa et ullamco aute tempor adipiscing consequat et
            sint eiusmod ullamco non amet laborum excepteur in nisi commodo
            occaecat id pariatur ullamco laborum in amet esse qui
          </Paragraph>
          <Paragraph>
            Aliquip excepteur ipsum cupidatat ipsum aliquip minim consequat
            irure duis ea proident proident consectetur proident elit et
            occaecat dolore reprehenderit exercitation amet in mollit enim
            mollit consectetur culpa officia pariatur minim cupidatat consequat
            incididunt enim nulla ipsum ullamco ipsum cillum occaecat deserunt
            ullamco occaecat do
          </Paragraph>
          <Paragraph>
            Sunt laborum mollit tempor cillum dolore laboris
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
