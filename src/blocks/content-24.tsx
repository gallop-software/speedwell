import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Content24() {
  return (
    <Section className="py-30 bg-body">
      <Columns
        reverseColumns={false}
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-12/11 relative">
          <Image
            src="/images/portfolio/pexels-pixabay-276724.jpg"
            alt="Incididunt est aliqua velit"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
            alt="Sed ut elit ut ea"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Commodo adipiscing nisi incididunt
          </Heading>
          <Paragraph>
            Ut elit aute et id reprehenderit laboris esse sit tempor voluptate
            commodo ut nisi ipsum minim laborum aliqua consectetur veniam culpa
            laboris anim ullamco voluptate nostrud tempor nostrud proident
            cupidatat laborum elit esse qui id excepteur et velit nisi
            incididunt non quis duis laborum commodo ipsum veniam
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
