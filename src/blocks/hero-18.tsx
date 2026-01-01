import {
  Columns,
  Column,
  Image,
  Accent,
  Heading,
  Paragraph,
  Buttons,
  Button,
} from '@/components'
import heartIcon from '@iconify/icons-heroicons/heart'
import sparklesIcon from '@iconify/icons-heroicons/sparkles'

export default function Hero18() {
  return (
    <div className="relative bg-gradient-to-br from-body via-accent2/5 to-body overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent2/10 rounded-full blur-3xl"></div>

      <div className="pt-20 pb-24 lg:py-32 px-6 mx-auto max-w-[1600px] relative">
        <Columns
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-12 lg:gap-16"
          reverseColumns={false}
        >
          <Column className="flex flex-col justify-center space-y-8">
            <div>
              <Heading
                as="h1"
                className="max-w-2xl"
                margin="mb-6"
              >
                Your Dream Event, Perfectly Planned
              </Heading>
              <Paragraph className="text-lg max-w-xl">
                From intimate ceremonies to grand celebrations, we bring your
                vision to life with meticulous attention to detail, creative
                flair, and seamless execution. Let us transform your special
                moments into cherished memories that last a lifetime.
              </Paragraph>
            </div>

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
                {/* Decorative accent */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">✦</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute top-1/3 left-1/4 z-30 bg-white px-6 py-4 rounded-full shadow-xl transform -rotate-6">
                <div className="text-center">
                  <div className="font-accent text-sm text-accent mb-1">
                    Award Winning
                  </div>
                  <div className="text-xs text-body-dark/60">
                    Event Planners
                  </div>
                </div>
              </div>
            </div>
          </Column>
        </Columns>
      </div>
    </div>
  )
}
