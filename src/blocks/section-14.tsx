import {
  Section,
  Columns,
  Column,
  Heading,
  Quote,
  Paragraph,
  List,
  Li,
  Image,
} from '@/components'

export default function Section14() {
  return (
    <Section className="bg-body2 py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column>
          <Heading as="h2">Sed nulla eiusmod irure ex dolor</Heading>
          <Quote>Lorem sint aute minim commodo officia et incididunt do</Quote>
          <Paragraph>Ex dolore</Paragraph>
          <List>
            <Li>Cupidatat fugiat laborum cupidatat</Li>
            <Li>In ipsum ad nulla</Li>
            <Li>Aliqua amet et dolore</Li>
            <Li>Lorem enim eiusmod minim sit sunt</Li>
          </List>
          <Paragraph className="mt-6">
            Ad fugiat cillum ex mollit est non proident exercitation nulla
            veniam id velit ullamco enim id et velit ex sit ullamco sit laboris
            exercitation magna pariatur do voluptate mollit mollit quis sint
            adipiscing eiusmod
          </Paragraph>
        </Column>
        <Column>
          <Image
            src="/images/portfolio/pexels-pixabay-279719.jpg"
            alt="Consectetur proident eiusmod labore officia velit irure"
            className="w-full object-cover"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
      </Columns>
    </Section>
  )
}
