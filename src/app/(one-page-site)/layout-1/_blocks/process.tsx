import { Section } from '@/components/section'
import { Subheading } from '@/components/subheading'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Columns, Column } from '@/components/columns'
import { Card4 } from '@/components/card-4'
import { Span } from '@/components/span'
import { WhimsicalArrow } from '@/components/whimsical-arrow'

export default function Process() {
  return (
    <Section className="py-30 bg-gradient-to-br from-body-light to-body">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <Subheading className="mb-6">Our Branding Process</Subheading>
        <Heading as="h2">
          A strategic approach to building brands that resonate with your
          audience
        </Heading>
      </div>
      <Columns
        cols="grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
        gap="gap-16 lg:gap-16"
      >
        <Column className="relative">
          <Card4>
            <Span className="font-accent text-6xl leading-0 w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-8">
              <Span className="relative -top-3">1</Span>
            </Span>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-8"
            >
              Discovery & Research
            </Heading>
            <Paragraph margin="mb-0">
              We dive deep into your business, audience, and market to uncover
              unique insights that shape your brand strategy
            </Paragraph>
          </Card4>
          <WhimsicalArrow />
        </Column>
        <Column className="relative">
          <Card4>
            <Span className="font-accent text-6xl leading-0 w-20 h-20 rounded-full bg-accent2/10 flex items-center justify-center mb-8">
              <Span className="relative -top-3">2</Span>
            </Span>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-8"
            >
              Creative Development
            </Heading>
            <Paragraph margin="mb-0">
              Our team crafts compelling visual identities, messaging, and brand
              experiences that connect with your target audience
            </Paragraph>
          </Card4>
          <WhimsicalArrow />
        </Column>
        <Column className="relative">
          <Card4>
            <Span className="font-accent text-6xl leading-0 w-20 h-20 rounded-full bg-accent2/10 flex items-center justify-center mb-8">
              <Span className="relative -top-3">3</Span>
            </Span>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-8"
            >
              Launch & Support
            </Heading>
            <Paragraph margin="mb-0">
              We deliver comprehensive brand guidelines and support your team in
              bringing the brand to life across all touchpoints
            </Paragraph>
          </Card4>
        </Column>
      </Columns>
    </Section>
  )
}
