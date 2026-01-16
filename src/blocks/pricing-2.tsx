import {
  Section,
  Heading,
  Paragraph,
  Button,
  Grid,
  List,
  Li,
  Chip,
} from '@/components'
import checkIcon from '@iconify/icons-heroicons/check-20-solid'

export default function Pricing2() {
  return (
    <Section className="py-30 bg-gradient-to-b from-body to-body-light relative">

        <div className="text-center mb-20">
          <Heading
            as="h2"
            margin="mb-6"
          >
            Planning Services Tailored to You
          </Heading>
          <Paragraph fontSize="text-lg" className="max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we offer
            comprehensive planning packages designed to make your event
            stress-free and unforgettable.
          </Paragraph>
        </div>

        <Grid cols="grid-cols-1 md:grid-cols-3" gap="gap-8" className="max-w-7xl mx-auto">
          {/* Essentials Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col relative z-0">
            <div className="mb-6">
              <Heading as="h4" margin="mb-2">Essentials</Heading>
              <Paragraph color="text-body-muted" margin="mb-4">
                Perfect for intimate celebrations
              </Paragraph>
              <Heading className="flex items-baseline" margin="mb-0">
                <span className="text-4xl font-bold text-accent2">$2,500</span>
              </Heading>
            </div>

            <List variant="unstyled" spacing="loose" className="mb-6 flex-grow">
              <Li icon={checkIcon}>Up to 50 guests</Li>
              <Li icon={checkIcon}>Venue recommendations</Li>
              <Li icon={checkIcon}>Vendor coordination (3 vendors)</Li>
              <Li icon={checkIcon}>Event timeline creation</Li>
              <Li icon={checkIcon}>Day-of coordination (6 hours)</Li>
            </List>

            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Get Started
            </Button>
          </div>

          {/* Premier Package - Featured */}
          <div className="bg-gradient-to-br from-accent to-accent/90 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 relative flex flex-col scale-105 border-4 border-accent/20 z-10">
            <Chip className="absolute -top-5 left-1/2 -translate-x-1/2 shadow-lg z-100">
              Most Popular
            </Chip>
            <div className="mb-6">
              <Heading as="h4" margin="mb-2" color="text-white">Premier</Heading>
              <Paragraph color="text-white/90" margin="mb-4">
                For unforgettable celebrations
              </Paragraph>
              <Heading className="flex items-baseline" margin="mb-0">
                <span className="text-4xl font-bold text-white">$6,500</span>
              </Heading>
            </div>

            <List variant="unstyled" spacing="loose" color="text-white" className="mb-6 flex-grow">
              <Li icon={checkIcon}>Up to 150 guests</Li>
              <Li icon={checkIcon}>Venue sourcing & negotiation</Li>
              <Li icon={checkIcon}>Full vendor management</Li>
              <Li icon={checkIcon}>Custom event design & styling</Li>
              <Li icon={checkIcon}>Budget management</Li>
              <Li icon={checkIcon}>Full day-of coordination (12 hours)</Li>
            </List>

            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Get Started
            </Button>
          </div>

          {/* Luxury Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col relative z-0">
            <div className="mb-6">
              <Heading as="h4" margin="mb-2">Luxury</Heading>
              <Paragraph color="text-body-muted" margin="mb-4">For extraordinary events</Paragraph>
              <Heading className="flex items-baseline" margin="mb-0">
                <span className="text-4xl font-bold text-accent">$12,000</span>
              </Heading>
            </div>

            <List variant="unstyled" spacing="loose" className="mb-6 flex-grow">
              <Li icon={checkIcon}>Unlimited guests</Li>
              <Li icon={checkIcon}>Exclusive venue access</Li>
              <Li icon={checkIcon}>Premium vendor curation</Li>
              <Li icon={checkIcon}>Bespoke event design</Li>
              <Li icon={checkIcon}>Custom decor & installations</Li>
              <Li icon={checkIcon}>Multi-day coordination</Li>
            </List>

            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Get Started
            </Button>
        </div>
      </Grid>
    </Section>
  )
}
