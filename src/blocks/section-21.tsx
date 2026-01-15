import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
} from '@/components'

export default function Section21() {
  return (
    <Section className="bg-body py-30">
      <Columns
        reverseColumns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
            alt="Budget management and financial control"
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
            Budget Management
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Transparent Financial Control
          </Heading>
          <Paragraph>
            We understand that budget management is crucial to project success.
            Our team provides detailed cost estimates upfront and maintains
            rigorous financial tracking throughout your project. We negotiate
            competitive pricing with vendors and contractors, maximizing value
            without compromising quality. Regular budget updates keep you
            informed, and we proactively identify cost-saving opportunities
            while protecting your investment.
          </Paragraph>
          <Paragraph>
            Our transparent approach means no surprises. We present all costs
            clearly, explain pricing decisions, and seek your approval before
            any significant expenditures. If unexpected issues arise, we provide
            options and recommendations to keep your project on track
            financially while maintaining the design integrity you expect.
          </Paragraph>
          <Quote>
            Financial transparency and careful budget management ensure your
            investment delivers maximum value and lasting beauty
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
