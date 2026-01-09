import { Section, Columns, Column, Image, Heading, Paragraph, Button, Buttons } from '@/components'

export default function ProductCta1() {
  return (
    <Section id="purchase" className="py-24 md:py-32 bg-body relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-body2/50 -skew-x-12 origin-top-right"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Columns
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-16 lg:gap-24"
          reverseColumns={true}
        >
          {/* Product Image */}
          <Column className="relative flex items-center justify-center">
            <div className="relative w-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-150"></div>
              
              <Image
                src="/images/layout-6/pexels-roman-odintsov-5837002.jpg"
                alt="Veloria Botanical Elixir bottle"
                className="relative z-10 max-w-2xl mx-auto w-full"
                size="large"
              />
            </div>
          </Column>

          {/* Content */}
          <Column className="flex flex-col justify-center">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Limited Release
            </p>

            <Heading as="h2" margin="mb-6">
              Bring Veloria Home
            </Heading>

            <Paragraph className="text-lg mb-8 text-body-contrast/80">
              Each bottle is individually numbered and crafted with exceptional care. 
              Experience the culmination of six generations of 
              botanical craftsmanship.
            </Paragraph>

            {/* Product details */}
            <div className="space-y-4 mb-10 pb-10 border-b border-body-dark/20">
              <div className="flex justify-between items-center">
                <span className="text-body-contrast/60">Volume</span>
                <span className="font-medium">750ml</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-body-contrast/60">Alcohol</span>
                <span className="font-medium">0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-body-contrast/60">Origin</span>
                <span className="font-medium">Scottish Highlands</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-body-contrast/60">Batch</span>
                <span className="font-medium">No. 847</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                <div className="text-sm text-body-contrast/50 mb-1">Price</div>
                <div className="text-4xl font-heading text-accent">$89</div>
              </div>
              
              <Buttons className="flex-1 sm:justify-end">
                <Button
                  href="#"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Add to Cart
                </Button>
              </Buttons>
            </div>
          </Column>
        </Columns>
      </div>
    </Section>
  )
}
