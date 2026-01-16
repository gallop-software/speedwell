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

export default function Content22() {
  return (
    <Section className="bg-body py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column>
          <Image
            src="/images/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg"
            alt="Interior space showcasing professional color coordination"
            className="w-full object-cover"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            id="services"
          >
            Comprehensive Color Services
          </Heading>
          <Quote>
            Every color tells a story – let us help you tell yours with
            confidence and style
          </Quote>
          <Paragraph>Our color consultation services include:</Paragraph>
          <List>
            <Li>Personalized color palette development for entire homes</Li>
            <Li>Room-by-room color coordination and flow planning</Li>
            <Li>Paint brand and finish recommendations</Li>
            <Li>Accent color selection for décor and accessories</Li>
            <Li>Lighting analysis and color rendering assessment</Li>
          </List>
        </Column>
      </Columns>
    </Section>
  )
}
