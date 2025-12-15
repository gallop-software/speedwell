import {
  Paragraph,
  Heading,
  Button,
  ButtonPlay,
  Buttons,
  Accent,
  Gradient,
  Navbar,
  Section,
  Columns,
  Column,
  VimeoAutoPlayer,
  HeroCanvasBackground,
  HeroCanvasBackground2,
} from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'
import playCircleIcon from '@iconify/icons-lucide/play-circle'

export default function Hero1() {
  return (
    <>
      <Gradient className="relative rounded-4xl ring-1 ring-black/5 ring-inset overflow-hidden m-2">
        <Navbar className="-mt-2" />
        <div className="mx-auto max-w-[1600px] relative">
          <img
            src="/images/hero-bg.png"
            alt=""
            className="absolute top-0 left-0 w-[95%] sm:w-[60%] lg:w-[40%] h-auto z-0 opacity-10"
          />
          <HeroCanvasBackground2 className="absolute -bottom-10 -right-10 w-[500px] h-[500px] z-0" />
          <Columns
            cols="grid-cols-1 lg:grid-cols-[3fr_2fr]"
            gap="gap-8 lg:gap-8 xl:gap-16"
            className="mx-auto max-w-8xl px-6 lg:px-10 relative"
          >
            <Column className="pt-10">
              <div className="overflow-hidden rounded-t-full relative h-[500px] lg:h-[800px] w-full mx-auto max-w-2xl lg:max-w-none">
                <video
                  src="/videos/hero-op.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Ut eiusmod qui ipsum ullamco ipsum incididunt lorem sed et"
                />
              </div>
            </Column>
            <Column className="py-16 md:py-20">
              <Accent className="transform -rotate-12 lg:-ml-64 -top-14 relative">
                timeless
              </Accent>
              <Heading as="h1">Crafting Spaces That Inspire</Heading>
              <Paragraph
                className="max-w-lg"
                color="text-contrast"
              >
                Transform your home into a sanctuary of style and comfort with
                our award-winning interior design services. We blend
                sophisticated aesthetics with functional layouts to create
                spaces that perfectly reflect your personality and enhance your
                lifestyle.
              </Paragraph>
              <Buttons className="lg:-ml-40">
                <Button
                  href="#learn-more"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Discover Our Approach
                </Button>
                <ButtonPlay
                  variant="secondary"
                  href="#video"
                  icon={playCircleIcon}
                  iconPlacement="after"
                >
                  Watch Our Latest Project
                </ButtonPlay>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </Gradient>
      <Section className="relative py-30">
        <div className="absolute inset-0 opacity-30 sm:opacity-50 bg-repeat bg-left-top bg-[length:700px] bg-[url('/images/geometric-1400x809.jpg')]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%),linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%),linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_70%)]"></div>
        <Accent
          className="absolute left-[120%] sm:left-full top-30 transform rotate-90 origin-top-left z-0 whitespace-nowrap opacity-5 sm:opacity-10"
          color="text-accent"
          fontSize="text-[10rem] lg:text-[12rem]"
          overflowFix="p-4 -ml-4"
        >
          elegance
        </Accent>
        <div className="relative">
          <Heading
            id="learn-more"
            as="h2"
            className="max-w-2xl"
          >
            Design Excellence Tailored to Your Vision
          </Heading>
          <Paragraph className="max-w-lg">
            Every space tells a story, and we're here to help you tell yours.
            Our design philosophy centers on creating harmonious environments
            that balance beauty with practicality, ensuring each room flows
            seamlessly into the next while maintaining its own distinct
            character and purpose throughout your home.
          </Paragraph>
          <Paragraph className="max-w-lg">
            From initial consultation to final installation, we guide you
            through every step of the design process with transparency and
            expertise. Our team collaborates closely with skilled craftsmen and
            trusted suppliers to source the finest materials and furnishings,
            delivering results that exceed expectations and stand the test of
            time in both quality and style.
          </Paragraph>
          <VimeoAutoPlayer
            videoId="1134529903"
            id="video"
            className="mt-16 w-full max-w-5xl"
          />
        </div>
      </Section>
    </>
  )
}
