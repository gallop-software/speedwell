import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  List,
  Li,
} from '@/components'

export default function Section15() {
  return (
    <Section className="bg-body py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column>
          <Image
            src="/images/portfolio/houzlook/pexels-houzlook-3797991.jpg"
            alt="Esse commodo enim nostrud"
            className="w-full object-cover"
            size="large"
          />
        </Column>
        <Column>
          <Heading as="h2">Consectetur ullamco do</Heading>
          <Paragraph>
            Aliqua sit irure ad deserunt sit eiusmod nisi adipiscing
          </Paragraph>
          <List>
            <Li>Velit velit consequat mollit fugiat cillum elit</Li>
            <Li>Duis lorem aliqua ullamco proident eiusmod veniam</Li>
            <Li>
              Ipsum nostrud aliqua incididunt qui ullamco aliquip reprehenderit
            </Li>
            <Li>Laboris esse ea minim ut ipsum aliqua</Li>
          </List>
          <Paragraph className="mt-6">
            Excepteur enim velit consectetur fugiat dolore aliqua reprehenderit
            deserunt sed consequat mollit veniam laborum nostrud ex
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
