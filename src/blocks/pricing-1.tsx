import {
  Columns,
  Column,
  Card4,
  Section,
  Heading,
  Paragraph,
  Button,
  List,
  Li,
} from '@/components'
import checkIcon from '@iconify/icons-heroicons/check-20-solid'

export default function Pricing1() {
  return (
    <Section className="py-30 bg-body relative overflow-hidden">
      <div className="relative">
        <div className="text-center mb-16">
          <Heading
            as="h2"
            margin="mb-4"
          >
            Simple, Transparent Pricing
          </Heading>
          <Paragraph
            fontSize="text-lg"
            className="max-w-2xl mx-auto"
          >
            Choose the perfect plan for your team. Scale as you grow with
            flexible options and premium features.
          </Paragraph>
        </div>
      </div>

      <Columns
        align="items-start"
        cols="grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
        gap="gap-16 lg:gap-16"
      >
        <Column className="relative">
          <Card4>
            <Heading
              as="h4"
              margin="mb-2"
            >
              Starter
            </Heading>
            <Heading
              className="flex items-baseline"
              margin="mb-4"
            >
              <span className="text-5xl font-bold">$29</span>
              <span className="text-xl text-body1/60 ml-2">/mo</span>
            </Heading>
            <Paragraph>Perfect for small teams</Paragraph>

            <List
              variant="unstyled"
              spacing="loose"
              className="mb-8 grow"
            >
              <Li icon={checkIcon}>Up to 5 team members</Li>
              <Li icon={checkIcon}>10GB storage</Li>
              <Li icon={checkIcon}>Basic analytics</Li>
              <Li icon={checkIcon}>Email support</Li>
              <Li icon={checkIcon}>Mobile & web access</Li>
            </List>

            <Button
              href="#contact"
              className="w-full mt-auto"
            >
              Select Plan
            </Button>
          </Card4>
        </Column>

        <Column>
          <Card4 className="relative">
            <Heading
              as="h4"
              margin="mb-2"
            >
              Professional
            </Heading>
            <Heading
              className="flex items-baseline"
              margin="mb-4"
            >
              <span className="text-5xl font-bold">$99</span>
              <span className="text-xl text-body1/60 ml-2">/mo</span>
            </Heading>
            <Paragraph>For growing businesses</Paragraph>

            <List
              variant="unstyled"
              spacing="loose"
              className="mb-8 grow"
            >
              <Li icon={checkIcon}>Up to 25 team members</Li>
              <Li icon={checkIcon}>100GB storage</Li>
              <Li icon={checkIcon}>Advanced analytics</Li>
              <Li icon={checkIcon}>Priority support</Li>
              <Li icon={checkIcon}>Custom integrations</Li>
              <Li icon={checkIcon}>API access</Li>
            </List>

            <Button
              href="#contact"
              className="w-full mt-auto"
            >
              Select Plan
            </Button>
          </Card4>
        </Column>

        <Column>
          <Card4>
            <Heading
              as="h4"
              margin="mb-2"
            >
              Enterprise
            </Heading>
            <Heading
              className="flex items-baseline"
              margin="mb-4"
            >
              <span className="text-5xl font-bold">$299</span>
              <span className="text-xl text-body1/60 ml-2">/mo</span>
            </Heading>
            <Paragraph>For large organizations</Paragraph>

            <List
              variant="unstyled"
              spacing="loose"
              className="mb-8 grow"
            >
              <Li icon={checkIcon}>Unlimited team members</Li>
              <Li icon={checkIcon}>Unlimited storage</Li>
              <Li icon={checkIcon}>Enterprise analytics</Li>
              <Li icon={checkIcon}>24/7 dedicated support</Li>
              <Li icon={checkIcon}>Custom development</Li>
              <Li icon={checkIcon}>SLA guarantee</Li>
            </List>

            <Button
              href="#contact"
              className="w-full mt-auto"
            >
              Select Plan
            </Button>
          </Card4>
        </Column>
      </Columns>
    </Section>
  )
}
