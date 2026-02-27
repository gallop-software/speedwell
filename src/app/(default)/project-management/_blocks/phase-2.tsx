import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Quote } from '@/components/quote'

export default function Phase2() {
  return (
    <Section className="bg-body-light py-30">
      <Columns
        reverseColumns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column className="relative">
          <Image
            src="/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg"
            alt="Construction and renovation management"
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
            Phase 2
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Construction & Procurement
          </Heading>
          <Paragraph>
            As construction begins, our project managers maintain constant
            oversight, conducting regular site visits to ensure work meets our
            exacting standards. We coordinate deliveries, manage contractor
            schedules, and address any issues immediately. Our hands-on approach
            means potential problems are identified and resolved before they
            impact your timeline or budget.
          </Paragraph>
          <Paragraph>
            Simultaneously, we manage all procurement activities, tracking
            orders and coordinating deliveries to align perfectly with the
            construction schedule. Our relationships with premium suppliers and
            vendors ensure priority service and competitive pricing. We inspect
            all materials upon arrival and maintain detailed records throughout
            the process.
          </Paragraph>
          <Quote>
            Active oversight and clear communication ensure your project stays
            on track and exceeds quality expectations
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
