import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Quote,
  Paragraph,
  List,
  Li,
} from '@/components'

export default function Section13() {
  return (
    <Section className="bg-body py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column>
          <Image
            src="/images/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg"
            alt="Eiusmod enim adipiscing anim tempor sunt"
            className="w-full object-cover"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            id="services"
          >
            Ad commodo sint
          </Heading>
          <Quote>
            Incididunt eiusmod adipiscing sint tempor aliquip ad eiusmod laboris
            nulla
          </Quote>
          <Paragraph>Commodo aliquip excepteur anim cillum non</Paragraph>
          <List>
            <Li>Ex consectetur anim</Li>
            <Li>Est duis sit est lorem</Li>
            <Li>Consectetur id non deserunt</Li>
            <Li>Non ipsum</Li>
            <Li>Voluptate minim consectetur laboris mollit</Li>
          </List>
        </Column>
      </Columns>
    </Section>
  )
}
