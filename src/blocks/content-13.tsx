import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { List, Li } from '@/components/list'

export default function Content13() {
  return (
    <Section className="bg-body py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column>
          <Image
            src="/portfolio/houzlook/pexels-houzlook-3797991.jpg"
            alt="Contemporary living space with harmonious color scheme"
            className="w-full object-cover"
            size="large"
          />
        </Column>
        <Column>
          <Heading as="h2">Why Choose Professional Color Consultation?</Heading>
          <Paragraph>
            The benefits of working with expert color consultants:
          </Paragraph>
          <List>
            <Li>Save time and money by avoiding costly color mistakes</Li>
            <Li>Create cohesive flow and harmony throughout your home</Li>
            <Li>
              Gain confidence in your color choices with professional guidance
            </Li>
            <Li>Access to industry expertise and insider color knowledge</Li>
          </List>
        </Column>
      </Columns>
    </Section>
  )
}
