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
              {/* Falling confetti */}
              <div className="absolute -inset-x-20 inset-y-0 z-40 pointer-events-none overflow-hidden">
                {/* Row 1 - spread across */}
                <div className="absolute top-[2%] left-[5%] w-3 h-3 bg-pink-400 rounded-sm animate-fall-slow opacity-80 rotate-45"></div>
                <div className="absolute top-[5%] left-[20%] w-2 h-4 bg-yellow-400 rounded-sm animate-fall-medium opacity-75 rotate-12"></div>
                <div className="absolute top-[3%] left-[35%] w-4 h-2 bg-purple-400 rounded-sm animate-fall-fast opacity-85 -rotate-12"></div>
                <div className="absolute top-[6%] left-[50%] w-3 h-3 bg-teal-400 rounded-sm animate-fall-slow opacity-70 rotate-45"></div>
                <div className="absolute top-[4%] left-[65%] w-2 h-3 bg-orange-400 rounded-sm animate-fall-medium opacity-80 -rotate-45"></div>
                <div className="absolute top-[2%] left-[80%] w-4 h-2 bg-rose-400 rounded-sm animate-fall-fast opacity-75 rotate-12"></div>
                <div className="absolute top-[5%] left-[95%] w-2 h-4 bg-sky-400 rounded-sm animate-fall-slow opacity-80 -rotate-12"></div>
                
                {/* Row 2 - offset */}
                <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-lime-400 rounded-full animate-fall-medium opacity-70"></div>
                <div className="absolute top-[12%] left-[28%] w-3 h-2 bg-fuchsia-400 rounded-sm animate-fall-fast opacity-75 rotate-45"></div>
                <div className="absolute top-[8%] left-[42%] w-2 h-3 bg-amber-400 rounded-sm animate-fall-slow opacity-80 -rotate-12"></div>
                <div className="absolute top-[11%] left-[58%] w-4 h-2 bg-pink-400 rounded-sm animate-fall-medium opacity-75 rotate-12"></div>
                <div className="absolute top-[9%] left-[72%] w-3 h-3 bg-yellow-400 rounded-sm animate-fall-fast opacity-80 -rotate-45"></div>
                <div className="absolute top-[13%] left-[88%] w-2 h-4 bg-purple-400 rounded-sm animate-fall-slow opacity-70 rotate-45"></div>
                
                {/* Row 3 - more spread */}
                <div className="absolute top-[16%] left-[3%] w-2 h-3 bg-teal-400 rounded-sm animate-fall-fast opacity-75 -rotate-12"></div>
                <div className="absolute top-[18%] left-[18%] w-3 h-2 bg-orange-400 rounded-sm animate-fall-slow opacity-80 rotate-45"></div>
                <div className="absolute top-[15%] left-[33%] w-2 h-2 bg-rose-400 rounded-full animate-fall-medium opacity-70"></div>
                <div className="absolute top-[19%] left-[48%] w-4 h-3 bg-sky-400 rounded-sm animate-fall-fast opacity-85 rotate-12"></div>
                <div className="absolute top-[17%] left-[62%] w-2 h-4 bg-lime-400 rounded-sm animate-fall-slow opacity-75 -rotate-45"></div>
                <div className="absolute top-[14%] left-[78%] w-3 h-2 bg-fuchsia-400 rounded-sm animate-fall-medium opacity-80 rotate-45"></div>
                <div className="absolute top-[20%] left-[92%] w-2 h-2 bg-amber-400 rounded-full animate-fall-fast opacity-70"></div>
              </div>

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
      </div>
    </div>
  )
}
