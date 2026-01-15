import {
  Section,
  Container,
  Heading,
  Paragraph,
  Accent,
  Image,
  Button,
} from '@/components'

export default function Showcase8() {
  return (
    <Section className="relative py-0 overflow-hidden bg-body-dark px-0">
      {/* Full-width image section with parallax effect */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full">
        {/* Background image with overlay */}
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/layout-4/pexels-jonathanborba-2878738.jpg"
            alt="Signature dish"
            className="w-full h-full object-cover"
            size="full"
          />
          {/* Gradient overlay for text readability - covers full image */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content overlay */}
        <div className="relative h-full flex items-center justify-center max-w-8xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl py-20 md:py-24 text-center">
            <Heading
              as="h2"
              color="text-white"
              margin="mb-6"
            >
              Our Signature Dish
            </Heading>
            <Paragraph className="text-white/90 text-lg mb-4">
              Introducing our renowned Prime Aged Ribeye with Truffle-Infused
              Mashed Potatoes and Roasted Seasonal Vegetables. A masterful
              composition of premium beef, velvety potatoes, and garden-fresh
              accompaniments that represents the pinnacle of steakhouse
              excellence.
            </Paragraph>
            <Paragraph className="text-white/80 mb-8">
              Featuring 28-day dry-aged USDA Prime ribeye, hand-selected for its
              exceptional marbling and tenderness. Our silky mashed potatoes are
              enriched with black truffle oil and European butter, while
              seasonal vegetables are roasted to caramelized perfection. Each
              component showcases our dedication to quality and craftsmanship.
            </Paragraph>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white text-sm font-semibold mb-1">
                  Preparation
                </div>
                <div className="text-white/80 text-xs">
                  Wood-fired grill with butter basting technique
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white text-sm font-semibold mb-1">
                  Wine Pairing
                </div>
                <div className="text-white/80 text-xs">
                  2018 Napa Valley Cabernet Sauvignon
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white text-sm font-semibold mb-1">
                  Chef's Note
                </div>
                <div className="text-white/80 text-xs">
                  Recommended medium-rare for optimal flavor
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white text-sm font-semibold mb-1">
                  Accolades
                </div>
                <div className="text-white/80 text-xs">
                  Best Steak Award 2024 - Culinary Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-body-dark to-transparent pointer-events-none"></div>
    </Section>
  )
}
