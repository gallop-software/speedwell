import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Accent } from '@/components/accent'
import { Image } from '@/components/image'
import { Grid } from '@/components/grid'
import { Span } from '@/components/span'
import { BackgroundGeometry } from '@/components/background-geometry'

const features = [
  {
    numeral: 'I',
    title: 'Master Chefs',
    description:
      'Award-winning culinary artists with decades of experience across Michelin-starred kitchens worldwide',
    image: '/images/layout-4/pexels-metin-mutlu-3305420-8585881.jpg',
  },
  {
    numeral: 'II',
    title: 'Farm to Table',
    description:
      'Partnering with local farms and artisans to bring you the freshest seasonal ingredients at their peak',
    image: '/images/layout-4/pexels-minchephoto-7491887.jpg',
  },
  {
    numeral: 'III',
    title: 'Artisan Approach',
    description:
      'Every dish is meticulously crafted with passion, precision, and an unwavering commitment to excellence',
    image: '/images/layout-4/pexels-valeriya-9266842.jpg',
  },
]

export default function Features() {
  return (
    <Section
      className="py-20 md:py-30 bg-body relative overflow-hidden"
      innerAlign="content"
    >
      <BackgroundGeometry className="top-120 lg:top-130" />

      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <Accent
          color="text-accent"
          size="small"
        >
          Our Story
        </Accent>
        <Heading as="h2">
          A{' '}
          <a
            href="#starters"
            target="_self"
          >
            Culinary
          </a>{' '}
          Journey Rooted in Tradition
        </Heading>
        <Paragraph>
          For over two decades, we've been crafting unforgettable dining
          experiences that celebrate the perfect marriage of time-honored
          techniques and innovative gastronomy. Each dish tells a story, each
          ingredient is chosen with care, and every meal becomes a memory.
        </Paragraph>
      </div>

      {/* Three column features */}
      <Grid
        cols="grid-cols-1 md:grid-cols-3"
        gap="gap-8"
        className="relative z-10 mb-20"
      >
        {features.map((feature) => (
          <div
            key={feature.numeral}
            className="relative text-center p-8 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 min-h-[320px] flex flex-col justify-end"
          >
            {/* Background Image */}
            <Image
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover"
              rounded="rounded-none"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-overlay/80 via-overlay/50 to-overlay/20" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-overlay-text/50 bg-overlay-text/10 backdrop-blur-sm flex items-center justify-center">
                <Span
                  fontSize="text-2xl"
                  className="font-serif"
                  color="text-overlay-text"
                >
                  {feature.numeral}
                </Span>
              </div>
              <Heading
                as="h3"
                styleAs="h4"
                margin="mb-3 mt-auto"
                color="text-overlay-text"
              >
                {feature.title}
              </Heading>
              <Paragraph
                fontSize="text-sm"
                color="text-overlay-text/80"
                margin="mb-0"
              >
                {feature.description}
              </Paragraph>
            </div>
          </div>
        ))}
      </Grid>
    </Section>
  )
}
