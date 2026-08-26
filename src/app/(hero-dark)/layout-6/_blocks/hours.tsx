import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Grid } from '@/components/grid'
import { Label } from '@/components/label'
import { Subheading } from '@/components/subheading'
import clsx from 'clsx'

// Subtle background opacities for checker effect
const bgOpacities = [
  'bg-accent/[0.02]',
  'bg-accent/[0.04]',
  'bg-accent/[0.06]',
  'bg-accent/[0.08]',
]

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

export default function Hours() {
  return (
    <Section className="py-24 md:py-32 bg-body2 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Subheading margin="mb-4">The Craft</Subheading>
        <Heading
          as="h2"
          margin="mb-6"
        >
          A Symphony of Botanicals
        </Heading>
        <Paragraph
          fontSize="text-lg"
          color="text-body-contrast/70"
        >
          Twelve carefully selected botanicals, each contributing its unique
          character to create a spirit of extraordinary depth and complexity.
        </Paragraph>
      </div>

      {/* Ingredients Grid */}
      <Grid
        cols="grid-cols-1 md:grid-cols-2"
        gap="gap-0"
        className="-mx-6 sm:-mx-0"
      >
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className={clsx(
              'p-10 md:p-12 group hover:bg-body/50 transition-colors duration-500',
              bgOpacities[index]
            )}
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

            <Label
              fontSize="text-sm"
              color="text-accent"
              margin="mb-4"
              className="tracking-wide"
            >
              {ingredient.origin}
            </Label>

            <Paragraph color="text-body-contrast/70">
              {ingredient.description}
            </Paragraph>

            {/* Decorative line */}
            <div className="mt-8 w-12 h-px bg-accent/30 group-hover:w-24 transition-all duration-500"></div>
          </div>
        ))}
      </Grid>
    </Section>
  )
}
