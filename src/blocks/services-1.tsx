import { Section, Columns, Column, Heading, Paragraph, Card1 } from '@/components'

export default function Services1() {
  return (
    <Section className="py-20 bg-body relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <Heading as="h2">Our Services</Heading>
          <Paragraph>
            Built for startups — product design, integrations, analytics, and
            dedicated support to help your team scale.
          </Paragraph>
        </div>
        <Columns cols="grid-cols-1 md:grid-cols-3" gap="gap-8">
          <Column>
            <Card1
              id="service-ux"
              title="Product Design"
              image="/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
              href="#"
              alt="Product design"
            />
          </Column>
          <Column>
            <Card1
              id="service-integrations"
              title="Integrations & API"
              image="/images/portfolio/pexels-pixabay-259962.jpg"
              href="#"
              alt="Integrations"
            />
          </Column>
          <Column>
            <Card1
              id="service-analytics"
              title="Analytics & Insights"
              image="/images/portfolio/pexels-mikhail-nilov-6707628.jpg"
              href="#"
              alt="Analytics"
            />
          </Column>
        </Columns>
      </div>
    </Section>
  )
}
