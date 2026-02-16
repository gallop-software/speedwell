import { Image } from '@/components/image'
import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Accent } from '@/components/accent'

export default function Hero() {
  return (
    <Section className="relative w-full overflow-hidden z-0 bg-body2 pt-navbar h-auto lg:h-screen lg:max-h-[900px] flex items-center justify-center">
      <Image
        src="/images/layout-4/hero-layout-4.jpg"
        size="full"
        alt="Layout 4 hero image"
        rounded="rounded-none"
        className="object-cover object-center absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-overlay/40"></div>
      <div className="relative flex flex-col justify-center items-center text-center pt-30 pb-50 lg:py-0 lg:-top-20">
        <Heading
          as="h1"
          color="text-overlay-text"
          margin="0"
          fontSize="text-5xl/[1.2] sm:text-5xl/[1.2] lg:text-7xl/[1.2]"
        >
          Artisan Dining Experience
        </Heading>
        <Accent
          size="medium"
          color="text-overlay-text"
        >
          where flavor meets elegance
        </Accent>
      </div>
    </Section>
  )
}
