import { Image, Heading, Accent, Button, Buttons } from '@/components'

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
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-navbar">
        <div className="max-w-4xl mx-auto">
          {/* Brand accent */}
          <p className="text-accent3 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Crafted with Purpose
          </p>

          {/* Main heading */}
          <Heading
            as="h1"
            color="text-white"
            margin="mb-6"
            className="text-5xl md:text-6xl lg:text-7xl"
          >
            Veloria Botanical Elixir
          </Heading>

          {/* Tagline */}
          <p className="text-white/80 text-xl md:text-2xl font-light mb-4 max-w-2xl mx-auto leading-relaxed">
            A harmonious blend of rare botanicals and pristine spring water,
            crafted for mindful moments.
          </p>

          {/* Product details */}
          <div className="flex items-center justify-center gap-8 mb-10 text-white/60 text-sm tracking-wider">
            <span>0% Alcohol</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span>750ml</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span>Small Batch</span>
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
