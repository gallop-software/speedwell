import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
} from '@/components'

export default function Section22() {
  return (
    <Section className="bg-body-light py-30">
      <Columns
        reverseColumns={false}
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
            alt="Quality assurance and inspection"
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
            Quality Assurance
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Uncompromising Standards
          </Heading>
          <Paragraph>
            Quality is never compromised on our projects. We maintain rigorous standards at every stage, conducting regular inspections and quality checks to ensure all work meets our exacting specifications. Our experienced eye catches details others might miss, and we address any issues immediately to maintain project momentum and protect your investment.
          </Paragraph>
          <Paragraph>
            We work exclusively with licensed, insured contractors and craftspeople who share our commitment to excellence. Every material is inspected upon delivery, every installation is scrutinized for perfection, and every finished surface is evaluated against our quality standards. This meticulous approach ensures your completed project exceeds expectations and stands the test of time.
          </Paragraph>
          <Quote>
            Excellence in execution is our promise – we accept nothing less than perfection in every detail
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
