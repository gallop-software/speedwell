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
import { clsx } from 'clsx'

const pricingPlans = [
  {
    name: 'Essentials',
    description: 'Perfect for intimate celebrations',
    price: '$2,500',
    priceColor: 'text-accent',
    featured: false,
    features: [
      'Up to 50 guests',
      'Venue recommendations',
      'Vendor coordination (3 vendors)',
      'Event timeline creation',
      'Day-of coordination (6 hours)',
    ],
  },
  {
    name: 'Premier',
    description: 'For unforgettable celebrations',
    price: '$6,500',
    priceColor: 'text-white',
    featured: true,
    features: [
      'Up to 150 guests',
      'Venue sourcing & negotiation',
      'Full vendor management',
      'Custom event design & styling',
      'Budget management',
      'Full day-of coordination (12 hours)',
    ],
  },
  {
    name: 'Luxury',
    description: 'For extraordinary events',
    price: '$12,000',
    priceColor: 'text-accent',
    featured: false,
    features: [
      'Unlimited guests',
      'Exclusive venue access',
      'Premium vendor curation',
      'Bespoke event design',
      'Custom decor & installations',
      'Multi-day coordination',
    ],
  },
]

export default function Pricing2() {
  return (
    <Section className="py-30 bg-gradient-to-b from-body to-body-light relative overflow-hidden">
      <div className="text-center mb-20">
        <Heading as="h2" margin="mb-6">
          Planning Services Tailored to You
        </Heading>
        <Paragraph fontSize="text-lg" className="max-w-2xl mx-auto">
          From intimate gatherings to grand celebrations, we offer
          comprehensive planning packages designed to make your event
          stress-free and unforgettable.
        </Paragraph>
      </div>

      <Grid cols="grid-cols-1 xl:grid-cols-3" gap="gap-16 xl:gap-8" className="max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={clsx(
              'p-8 rounded-2xl transition-all duration-300 flex flex-col relative',
              plan.featured
                ? 'bg-gradient-to-br from-accent to-accent/90 shadow-2xl hover:shadow-3xl hover:-translate-y-2 xl:scale-105 border-4 border-accent/20'
                : 'bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1'
            )}
          >
            {plan.featured && (
              <Chip bgColor="bg-accent-light" color="text-accent-contrast" className="absolute -top-5 left-1/2 -translate-x-1/2 shadow-lg">
                Most Popular
              </Chip>
            )}
            <div className="mb-6">
              <Heading
                as="h4"
                margin="mb-2"
                color={plan.featured ? 'text-white' : undefined}
              >
                {plan.name}
              </Heading>
              <Paragraph
                color={plan.featured ? 'text-white/90' : 'text-body-muted'}
                margin="mb-4"
              >
                {plan.description}
              </Paragraph>
              <Heading className="flex items-baseline" margin="mb-0">
                <span className={clsx('text-4xl font-bold', plan.priceColor)}>
                  {plan.price}
                </span>
              </Heading>
            </div>

            <List
              variant="unstyled"
              spacing="loose"
              color={plan.featured ? 'text-white' : undefined}
              className="mb-6"
            >
              {plan.features.map((feature) => (
                <Li key={feature} icon={checkIcon}>
                  {feature}
                </Li>
              ))}
            </List>

            <Button href="#contact" variant="secondary" className="w-full mt-auto">
              Get Started
            </Button>
          </div>
        ))}
      </Grid>
    </Section>
  )
}
