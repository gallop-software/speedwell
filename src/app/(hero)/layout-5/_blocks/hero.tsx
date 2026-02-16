import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import BackgroundConfetti from '@/components/background-confetti'
import heartIcon from '@iconify/icons-heroicons/heart'
import sparklesIcon from '@iconify/icons-heroicons/sparkles'

export default function Hero() {
  return (
    <Section className="relative pt-navbar pt-10 pb-24 lg:py-32 bg-gradient-to-br from-body via-accent2/5 to-body overflow-hidden">
      {/* Falling confetti - covers entire hero */}
      <BackgroundConfetti />
      <Columns
        cols="grid-cols-1 lg:grid-cols-2"
        gap="gap-20 lg:gap-16"
        reverseColumns={false}
      >
        <Column>
          <Heading
            as="h1"
            className="max-w-2xl"
          >
            Your Dream Event, Perfectly Planned
          </Heading>
          <Paragraph
            fontSize="text-lg"
            className="max-w-xl"
          >
            From intimate ceremonies to grand celebrations, we bring your vision
            to life with meticulous attention to detail, creative flair, and
            seamless execution. Let us transform your special moments into
            cherished memories that last a lifetime.
          </Paragraph>

          <Buttons className="flex-wrap">
            <Button
              href="#planning-services-tailored-to-you"
              variant="primary"
              icon={heartIcon}
              iconPlacement="after"
            >
              Plan Your Event
            </Button>
            <Button
              href="#moments-weve-crafted"
              variant="secondary"
              icon={sparklesIcon}
              iconPlacement="after"
            >
              View Our Work
            </Button>
          </Buttons>
        </Column>

        <Column className="relative">
          {/* Image grid with elegant overlapping layout */}
          <div className="relative h-[500px] lg:h-[650px]">
            {/* Main large image */}
            <div className="absolute top-0 right-0 w-[70%] h-[60%] z-10">
              <Image
                className="w-full h-full object-cover shadow-2xl"
                src="/images/layout-5/pexels-mat-brown-150387-1395967.jpg"
                alt="Elegant wedding ceremony setup with beautiful floral arrangements"
                size="large"
                rounded="rounded-lg"
                lazy={false}
              />
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-accent/20 rounded-lg -z-10"></div>
            </div>

            {/* Secondary image - bottom left */}
            <div className="absolute bottom-0 left-0 w-[65%] h-[55%] z-20">
              <Image
                className="w-full h-full object-cover shadow-2xl"
                src="/images/layout-5/pexels-thatguycraig000-2306281.jpg"
                alt="Beautiful event decoration with elegant table settings"
                size="large"
                rounded="rounded-lg"
                lazy={false}
              />
            </div>
          </div>
        </Column>
      </Columns>
    </Section>
  )
}
