import { Section, Heading, Paragraph } from '@/components'

const ingredients = [
  {
    name: 'Wild Juniper',
    origin: 'Scottish Highlands',
    description:
      'Hand-picked from ancient groves, imparting a crisp, piney essence with subtle citrus undertones.',
  },
  {
    name: 'Orris Root',
    origin: 'Tuscany, Italy',
    description:
      'Aged for three years to develop its distinctive violet and earthy character.',
  },
  {
    name: 'Coriander Seeds',
    origin: 'Morocco',
    description:
      'Sun-dried to perfection, adding warm, spicy notes with hints of lemon.',
  },
  {
    name: 'Angelica Root',
    origin: 'Belgium',
    description:
      'The binding botanical that harmonizes all flavors into a cohesive symphony.',
  },
]

export default function ProductFeatures1() {
  return (
    <Section className="py-24 md:py-32 bg-body2 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            The Craft
          </p>
          <Heading
            as="h2"
            margin="mb-6"
          >
            A Symphony of Botanicals
          </Heading>
          <Paragraph className="text-lg text-body-contrast/70">
            Twelve carefully selected botanicals, each contributing its unique
            character to create a spirit of extraordinary depth and complexity.
          </Paragraph>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-body-dark/10">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-body2 p-10 md:p-12 group hover:bg-body transition-colors duration-500"
            >
              {/* Number */}
              <div className="text-6xl font-heading text-accent/10 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <Heading
                as="h3"
                styleAs="h4"
                margin="mb-2"
              >
                {ingredient.name}
              </Heading>

              <div className="text-sm text-accent tracking-wide mb-4">
                {ingredient.origin}
              </div>

              <Paragraph className="text-body-contrast/70">
                {ingredient.description}
              </Paragraph>

              {/* Decorative line */}
              <div className="mt-8 w-12 h-px bg-accent/30 group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
