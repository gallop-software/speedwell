import {
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
            className="mb-4"
          >
            Simple, Transparent Pricing
          </Heading>
          <Paragraph className="text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your team. Scale as you grow with
            flexible options and premium features.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
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
              className="w-full"
            >
              Select Plan
            </Button>
          </Card4>

          {/* Professional Plan - Featured */}
          <div className="bg-body backdrop-blur-sm p-8 rounded-lg border border-body1/10 hover:border-accent/40 transition-all hover:shadow-xl relative flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-xl text-body1/60 ml-2">/mo</span>
              </div>
              <p className="text-body1/70">For growing businesses</p>
            </div>

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
              className="w-full"
            >
              Contact Us
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-body backdrop-blur-sm p-8 rounded-lg border border-body1/10 hover:border-accent/40 transition-all hover:shadow-xl flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">$299</span>
                <span className="text-xl text-body1/60 ml-2">/mo</span>
              </div>
              <p className="text-body1/70">For large organizations</p>
            </div>

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
              variant="secondary"
              className="w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
