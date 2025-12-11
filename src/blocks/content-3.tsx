import { Section, Heading, Paragraph } from '@/components'

export default function Content3() {
  return (
    <Section
      className="bg-body py-30"
      innerAlign="content"
    >
      <Heading
        as="h2"
        id="services"
        className="text-center"
      >
        Personalized Furniture Curation for Every Style
      </Heading>
      <Paragraph>
        Finding furniture that perfectly balances aesthetics, comfort, quality, and value requires expertise and access to the right resources. Our furniture selection services provide both. We work with premium manufacturers, artisan craftspeople, and trusted suppliers to source pieces that meet our exacting standards. Whether you're drawn to contemporary minimalism, classic elegance, rustic charm, or eclectic sophistication, we curate furnishings that align with your vision while ensuring each piece functions beautifully within your space.
      </Paragraph>
      <Paragraph>
        Our process begins with understanding your lifestyle, preferences, and practical needs. We consider room dimensions, traffic patterns, existing architecture, and how you'll use each space. This comprehensive approach ensures we select furniture with proper scale and proportion while maximizing comfort and functionality. We handle all the details—from sourcing and specification to ordering and delivery coordination—making the furnishing process seamless and enjoyable.
      </Paragraph>
    </Section>
  )
}
