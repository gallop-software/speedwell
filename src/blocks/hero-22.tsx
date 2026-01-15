import { Image, Heading, Paragraph, Span, Button, Buttons } from '@/components'

export default function Hero22() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-10"></div>

      {/* Background image */}
      <Image
        src="/images/layout-6/pexels-roman-odintsov-5837002.jpg"
        alt="Premium botanical beverage"
        className="absolute inset-0 w-full h-full object-cover"
        size="full"
        rounded="rounded-none"
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-navbar">
        <div className="max-w-4xl mx-auto">
          {/* Brand accent */}
          <Paragraph
            color="text-accent3"
            fontSize="text-sm"
            margin="mb-6"
            fontWeight="font-medium"
            className="tracking-[0.3em] uppercase"
          >
            Crafted with Purpose
          </Paragraph>

          {/* Main heading */}
          <Heading
            as="h1"
            color="text-white"
            margin="mb-6"
            fontSize="text-5xl md:text-6xl lg:text-7xl"
          >
            Veloria Botanical Elixir
          </Heading>

          {/* Tagline */}
          <Paragraph
            color="text-white/80"
            fontSize="text-xl md:text-2xl"
            margin="mb-4"
            lineHeight="leading-relaxed"
            fontWeight="font-light"
            className="max-w-2xl mx-auto"
          >
            A harmonious blend of rare botanicals and pristine spring water,
            crafted for mindful moments.
          </Paragraph>

          {/* Product details */}
          <div className="flex items-center justify-center gap-8 mb-10 text-white/60 text-sm tracking-wider">
            <Span>0% Alcohol</Span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <Span>750ml</Span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <Span>Small Batch</Span>
          </div>

          {/* CTA Buttons */}
          <Buttons className="justify-center">
            <Button
              href="#discover"
              variant="primary"
              dark
            >
              Discover the Craft
            </Button>
            <Button
              href="#purchase"
              variant="outline"
              dark
            >
              Shop Now
            </Button>
          </Buttons>
        </div>
      </div>
    </div>
  )
}
