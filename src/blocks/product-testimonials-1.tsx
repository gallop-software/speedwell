import { Section, Heading, Paragraph } from '@/components'

const testimonials = [
  {
    quote: "Veloria represents the pinnacle of botanical craftsmanship. The depth of flavor is simply unmatched in contemporary non-alcoholic beverages.",
    author: "James Mercer",
    title: "Beverage Consultant",
    publication: "Wellness & Lifestyle Review",
  },
  {
    quote: "In my thirty years of crafting drinks, few beverages have inspired me quite like Veloria. It's a mixologist's dream for sophisticated mocktails.",
    author: "Elena Vasquez",
    title: "Head Mixologist",
    publication: "The Savoy, London",
  },
  {
    quote: "The attention to detail in every bottle is extraordinary. From first sip to final finish, it tells a complete story.",
    author: "Robert Chen",
    title: "Beverage Writer",
    publication: "Modern Drinks Magazine",
  },
]

export default function ProductTestimonials1() {
  return (
    <Section className="py-24 md:py-32 bg-contrast relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent3 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Acclaim
          </p>
          <Heading as="h2" color="text-white" margin="mb-6">
            What the Experts Say
          </Heading>
          <div className="w-16 h-px bg-white/20 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group flex flex-col h-full"
            >
              {/* Quote mark */}
              <div className="text-8xl font-serif text-white/5 absolute -top-6 -left-2 leading-none select-none">
                "
              </div>

              {/* Content */}
              <div className="relative pt-8 flex flex-col h-full">
                <Paragraph className="text-white/80 text-lg leading-relaxed mb-8 italic flex-grow">
                  "{testimonial.quote}"
                </Paragraph>

                {/* Author */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-white font-medium mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-white/50 text-sm">
                    {testimonial.title}
                  </div>
                  <div className="text-accent3/80 text-sm mt-1">
                    {testimonial.publication}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards bar */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            <div className="text-center">
              <div className="text-white/30 text-xs tracking-[0.2em] uppercase mb-2">Gold Medal</div>
              <div className="text-white text-sm">World Beverage Innovation Awards 2024</div>
            </div>
            <div className="text-center">
              <div className="text-white/30 text-xs tracking-[0.2em] uppercase mb-2">Best in Class</div>
              <div className="text-white text-sm">International Non-Alcoholic Awards</div>
            </div>
            <div className="text-center">
              <div className="text-white/30 text-xs tracking-[0.2em] uppercase mb-2">Editor's Choice</div>
              <div className="text-white text-sm">Mindful Drinking Magazine</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
