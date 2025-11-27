import { Paragraph, Heading, Button, ButtonPlay, Buttons, Blog, Section, Grid, Card1, Card2, FancyHeading, VimeoAutoPlayer, Columns, Column, Accent, Gradient, Navbar, Container, Image } from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'
import playCircleIcon from '@iconify/icons-lucide/play-circle'

<Gradient className="relative rounded-4xl ring-1 ring-black/5 ring-inset overflow-hidden m-2">
  <Navbar className="-mt-2" />
  <div className="mx-auto max-w-[1600px] relative">
    <div
      className="absolute top-0 left-0 w-[70%] lg:w-[40%] h-[524px] lg:h-[100%] z-0 opacity-30 bg-cover bg-no-repeat bg-left-top bg-[url('/images/leaf2.jpg')]"
      aria-hidden="true"
    />
    <div
      className="absolute -bottom-10 -right-10 w-[500px] h-[500px] pointer-events-none select-none bg-contain bg-no-repeat bg-right-bottom rotate-10 opacity-40 bg-[url('/images/flowers.png')]"
      aria-hidden="true"
    />
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
        <Accent className="transform -rotate-12 lg:-ml-64 -top-14 relative">inspiration</Accent>
        <Heading as="h1">Where Elegance Meets Function</Heading>
        <Paragraph
          className="max-w-lg"
          color="text-contrast"
        >
          Discover the art of refined living through timeless design and meticulous attention to detail. We create bespoke interiors that reflect your unique style while elevating every moment of your daily life.
        </Paragraph>
        <Buttons className="lg:-ml-40">
          <Button
            href="#learn-more"
            icon={arrowDownIcon}
            iconPlacement="after"
          >
            Explore Our Design Philosophy
          </Button>
          <ButtonPlay
            variant="secondary"
            href="#video"
            icon={playCircleIcon}
            iconPlacement="after"
          >
            Watch Portfolio
          </ButtonPlay>
        </Buttons>
      </Column>
    </Columns>
  </div>
</Gradient>
