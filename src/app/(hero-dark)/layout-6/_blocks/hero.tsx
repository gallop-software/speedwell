import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Span } from '@/components/span'
import { Button } from '@/components/button'
import { Buttons } from '@/components/buttons'

export default function Hero() {
  return (
    <div className="relative h-screen max-h-[1200px] min-h-[900px] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-overlay/50 via-overlay/60 to-overlay/70 z-10"></div>

      {/* Background image */}
      <Image
        src="/images/layout-6/pexels-roman-odintsov-5837002.jpg"
        alt="Premium botanical beverage"
        className="absolute inset-0 w-full h-full object-cover"
        size="full"
        rounded="rounded-none"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 pt-navbar">
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
            color="text-overlay-text"
            margin="mb-6"
            fontSize="text-5xl md:text-6xl lg:text-7xl"
          >
            Veloria Botanical Elixir
          </Heading>

          {/* Tagline */}
          <Paragraph
            color="text-overlay-text/80"
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 my-10 text-overlay-text/80 text-sm tracking-wider">
            <Span color="text-inherit">0% Alcohol</Span>
            <span className="w-1 h-1 bg-overlay-text/40 rounded-full"></span>
            <Span color="text-inherit">750ml</Span>
            <span className="w-1 h-1 bg-overlay-text/40 rounded-full"></span>
            <Span color="text-inherit">Small Batch</Span>
          </div>

          {/* CTA Buttons */}
          <Buttons
            className="justify-center"
            margin="mb-0"
          >
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
