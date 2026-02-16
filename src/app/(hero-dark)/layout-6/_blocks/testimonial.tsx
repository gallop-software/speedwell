import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Grid } from '@/components/grid'
import { Subheading } from '@/components/subheading'
import { Label } from '@/components/label'
import { Icon } from '@/components/icon'
import { Quote } from '@/components/quote'
import quoteIcon from '@iconify/icons-mdi/format-quote-open'

const testimonials = [
  {
    quote:
      'Veloria represents the pinnacle of botanical craftsmanship. The depth of flavor is simply unmatched in contemporary non-alcoholic beverages.',
    author: 'James Mercer',
    title: 'Beverage Consultant',
    publication: 'Wellness & Lifestyle Review',
  },
  {
    quote:
      "In my thirty years of crafting drinks, few beverages have inspired me quite like Veloria. It's a mixologist's dream for sophisticated mocktails.",
    author: 'Elena Vasquez',
    title: 'Head Mixologist',
    publication: 'The Savoy, London',
  },
  {
    quote:
      'The attention to detail in every bottle is extraordinary. From first sip to final finish, it tells a complete story.',
    author: 'Robert Chen',
    title: 'Beverage Writer',
    publication: 'Modern Drinks Magazine',
  },
]

export default function Testimonial() {
  return (
    <Section className="py-24 md:py-32 bg-contrast relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-overlay/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-overlay/20 to-transparent pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Subheading
          color="text-accent3"
          margin="mb-4"
        >
          Acclaim
        </Subheading>
        <Heading
          as="h2"
          color="text-overlay-text"
          margin="mb-6"
        >
          What the Experts Say
        </Heading>
        <div className="w-16 h-px bg-overlay-text/20 mx-auto"></div>
      </div>

      {/* Testimonials Grid */}
      <Grid
        cols="grid-cols-1 lg:grid-cols-3"
        gap="gap-20 lg:gap-12"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative group flex flex-col h-full"
          >
            {/* Quote mark */}
            <Icon
              icon={quoteIcon}
              className="absolute -top-4 -left-2 w-16 h-16 text-overlay-text/5 select-none"
            />

            {/* Content */}
            <div className="relative pt-14 flex flex-col h-full">
              <Quote
                color="text-overlay-text/80"
                margin="mb-8"
                className="flex-grow"
              >
                {testimonial.quote}
              </Quote>

              {/* Author */}
              <div className="pt-6 border-t border-overlay-text/10">
                <Subheading
                  color="text-overlay-text"
                  margin="mb-1"
                >
                  {testimonial.author}
                </Subheading>
                <Paragraph
                  color="text-overlay-text/50"
                  fontSize="text-sm"
                  margin="mb-0"
                >
                  {testimonial.title}
                </Paragraph>
                <Paragraph
                  color="text-accent3/80"
                  fontSize="text-sm"
                  margin="mt-1"
                >
                  {testimonial.publication}
                </Paragraph>
              </div>
            </div>
          </div>
        ))}
      </Grid>

      {/* Awards bar */}
      <div className="mt-20 mb-8 w-16 h-px bg-overlay-text/20 mx-auto"></div>
      <Grid
        cols="grid-cols-1 lg:grid-cols-3"
        gap="gap-12 lg:gap-20"
      >
        <div className="text-center">
          <Label
            color="text-overlay-text/30"
            margin="mb-2"
          >
            Gold Medal
          </Label>
          <Subheading
            color="text-overlay-text"
            fontSize="text-sm"
            margin="mb-0"
          >
            World Beverage Innovation Awards 2024
          </Subheading>
        </div>
        <div className="text-center">
          <Label
            color="text-overlay-text/30"
            margin="mb-2"
          >
            Best in Class
          </Label>
          <Subheading
            color="text-overlay-text"
            fontSize="text-sm"
            margin="mb-0"
          >
            International Non-Alcoholic Awards
          </Subheading>
        </div>
        <div className="text-center">
          <Label
            color="text-overlay-text/30"
            margin="mb-2"
          >
            Editor's Choice
          </Label>
          <Subheading
            color="text-overlay-text"
            fontSize="text-sm"
            margin="mb-0"
          >
            Mindful Drinking Magazine
          </Subheading>
        </div>
      </Grid>
    </Section>
  )
}
