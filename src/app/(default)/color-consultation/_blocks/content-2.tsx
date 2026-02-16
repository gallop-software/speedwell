import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Heading } from '@/components/heading'
import { Quote } from '@/components/quote'
import { Paragraph } from '@/components/paragraph'
import { List, Li } from '@/components/list'
import { Image } from '@/components/image'

export default function Content2() {
  return (
    <Section className="bg-body2 py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column>
          <Heading as="h2">Our Proven Color Consultation Process</Heading>
          <Quote>
            From inspiration to implementation – we guide you every step of the
            way
          </Quote>
          <Paragraph>What to expect during your consultation:</Paragraph>
          <List>
            <Li>Initial consultation to understand your style and goals</Li>
            <Li>Assessment of lighting, architecture, and existing elements</Li>
            <Li>Custom color palette creation with multiple options</Li>
            <Li>Detailed paint specifications and application guidance</Li>
          </List>
        </Column>
        <Column>
          <Image
            src="/portfolio/pexels-pixabay-279719.jpg"
            alt="Modern interior with expertly selected color palette"
            className="w-full object-cover"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
      </Columns>
    </Section>
  )
}
