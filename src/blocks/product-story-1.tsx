import { Section, Columns, Column, Image, Heading, Paragraph } from '@/components'

export default function ProductStory1() {
  return (
    <Section id="discover" className="py-24 md:py-32 bg-body relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Columns
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-16 lg:gap-24"
          reverseColumns={false}
        >
          {/* Image Column */}
          <Column className="relative">
            <div className="relative">
              {/* Main product image */}
              <div className="relative z-10">
                <Image
                  src="/images/layout-6/pexels-daka-12360528.jpg"
                  alt="Veloria Botanical Elixir bottle"
                  className="w-full object-cover rounded-sm"
                  size="large"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-accent/20 rounded-sm -z-0"></div>
            </div>
          </Column>

          {/* Content Column */}
          <Column className="flex flex-col justify-center">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Our Story
            </p>

            <Heading as="h2" margin="mb-6">
              Born from Tradition, Refined by Time
            </Heading>

            <Paragraph className="text-lg mb-6 leading-relaxed">
              In the mist-covered hills of the Scottish Highlands, where ancient 
              rivers meet untouched wilderness, we discovered the inspiration for 
              Veloria. Our master blenders have spent decades perfecting the art 
              of botanical infusion, honoring techniques passed down through 
              generations.
            </Paragraph>

            <Paragraph className="mb-8 text-body-contrast/70">
              Each bottle represents over 200 hours of careful craftsmanship—from 
              hand-selecting the finest botanicals at dawn to the slow cold-press 
              extraction that captures every nuanced flavor. We source our 
              ingredients from family farms across three continents, ensuring only 
              the most exceptional botanicals make their way into your glass.
            </Paragraph>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-body-dark/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading text-accent mb-2">1847</div>
                <div className="text-sm text-body-contrast/60 tracking-wide">Year Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading text-accent mb-2">12</div>
                <div className="text-sm text-body-contrast/60 tracking-wide">Botanicals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading text-accent mb-2">6th</div>
                <div className="text-sm text-body-contrast/60 tracking-wide">Generation</div>
              </div>
            </div>
          </Column>
        </Columns>
      </div>
    </Section>
  )
}
