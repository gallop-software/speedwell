import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Quote } from '@/components/quote'
import { Paragraph } from '@/components/paragraph'
import { List, Li } from '@/components/list'

export default function Overview() {
  return (
    <Section className="bg-body py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column>
          <Image
            src="/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg"
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
