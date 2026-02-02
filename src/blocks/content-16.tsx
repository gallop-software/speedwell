import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Quote } from '@/components/quote'

export default function Content16() {
  return (
    <Section className="bg-body py-30">
      <Columns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
            alt="Detailed project planning and scheduling"
            className="w-full object-cover shadow-2xl max-w-lg mx-auto"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h3"
            margin="mb-2"
            fontSize="text-3xl"
            color="text-accent5"
          >
            Phase 1
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Planning & Design Development
          </Heading>
          <Paragraph>
            Every successful project begins with thorough planning. We work
            closely with you to refine the design concept, establish realistic
            timelines, and create detailed budgets. Our team prepares
            comprehensive specifications, coordinates with architects and
            engineers, and ensures all design elements are perfectly aligned
            before moving forward.
          </Paragraph>
          <Paragraph>
            During this phase, we finalize material selections, secure vendor
            quotes, and develop a detailed project schedule. We obtain necessary
            permits, coordinate with your HOA if applicable, and ensure all
            stakeholders understand their roles and responsibilities. This
            meticulous preparation sets the foundation for smooth execution.
          </Paragraph>
          <Quote>
            Proper planning prevents problems – we invest time upfront to ensure
            flawless execution throughout your project
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
