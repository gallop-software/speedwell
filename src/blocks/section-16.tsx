import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Section16() {
  return (
    <Section className="bg-body py-30">
      <Columns reverseColumns>
        <Column className="aspect-4/5 relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg"
            alt="Lorem ipsum dolor sit amet"
            className="absolute bottom-0 right-0 z-10 w-[75%]! object-cover"
            lazy={false}
          />
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-4450337.jpg"
            alt="Eiusmod quis aliqua"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column className="py-0 lg:py-10">
          <Heading
            id="learn-more"
            as="h2"
          >
            Do excepteur incididunt eiusmod
          </Heading>
          <Paragraph>
            Veniam velit eiusmod mollit veniam officia est ut do amet ad eiusmod
            laboris ea enim dolor et amet proident ex quis aliqua excepteur
            veniam consectetur veniam commodo non laboris aliquip esse tempor
            deserunt quis officia exercitation voluptate nulla aute do laboris
            sit lorem velit enim laborum minim aliquip sed qui sunt quis
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
