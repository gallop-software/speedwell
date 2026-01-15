import { Section, Heading, Paragraph, Accent, Image } from '@/components'

export default function About4() {
  return (
    <Section className="py-20 md:py-30 bg-body relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-20 right-0 w-1/3 h-96 bg-accent/5 rounded-l-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-1/2 h-80 bg-accent2/5 rounded-r-full blur-3xl"></div>

      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Accent
            margin="mb-4"
            color="text-accent"
            size="small"
          >
            Our Story
          </Accent>
          <Heading
            as="h2"
            margin="mb-6"
          >
            A Culinary Journey Rooted in Tradition
          </Heading>
          <Paragraph fontSize="text-lg">
            For over two decades, we've been crafting unforgettable dining
            experiences that celebrate the perfect marriage of time-honored
            techniques and innovative gastronomy. Each dish tells a story, each
            ingredient is chosen with care, and every meal becomes a memory.
          </Paragraph>
        </div>

        {/* Three column features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-accent/10 rounded-lg hover:bg-accent/20 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-2xl font-serif text-accent">I</span>
            </div>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-3"
            >
              Master Chefs
            </Heading>
            <Paragraph fontSize="text-sm">
              Award-winning culinary artists with decades of experience across
              Michelin-starred kitchens worldwide
            </Paragraph>
          </div>

          <div className="text-center p-8 bg-accent/10 rounded-lg hover:bg-accent/20 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-2xl font-serif text-accent">II</span>
            </div>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-3"
            >
              Farm to Table
            </Heading>
            <Paragraph fontSize="text-sm">
              Partnering with local farms and artisans to bring you the freshest
              seasonal ingredients at their peak
            </Paragraph>
          </div>

          <div className="text-center p-8 bg-accent/10 rounded-lg hover:bg-accent/20 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-2xl font-serif text-accent">III</span>
            </div>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-3"
            >
              Artisan Approach
            </Heading>
            <Paragraph fontSize="text-sm">
              Every dish is meticulously crafted with passion, precision, and an
              unwavering commitment to excellence
            </Paragraph>
          </div>
        </div>
      </div>
    </Section>
  )
}
