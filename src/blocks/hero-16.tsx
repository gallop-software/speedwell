import { Swiper, Image, Heading, Accent } from '@/components'

export default function Hero16() {
  return (
    <>
      <div className="relative w-full">
        <Swiper>
          <Image
            src="/images/layout-1/pexels-edmond-dantes-4344617.jpg"
            alt="Hero slide 1"
            className="object-cover w-full h-full"
            size="large"
            lazy={false}
          />
          <Image
            src="/images/layout-2/pexels-thirdman-5257759.jpg"
            alt="Hero slide 2"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
          <Image
            src="/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
            alt="Hero slide 3"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
          <Image
            src="/images/portfolio/pexels-pixabay-259962.jpg"
            alt="Hero slide 4"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
          <Image
            src="/images/portfolio/pexels-mikhail-nilov-6707628.jpg"
            alt="Hero slide 5"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
          <Image
            src="/images/portfolio/pexels-burst-545012.jpg"
            alt="Hero slide 6"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
        </Swiper>
        <div className="absolute inset-0 bg-/90 flex bg-black/50 items-center justify-center z-10 pointer-events-none">
          <div className="flex flex-col gap-0 justify-center items-center text-center">
            <Heading
              as="h1"
              color="text-white"
              margin="0"
            >
              Photographer Portfolio
            </Heading>
            <Accent
              size="medium"
              color="text-white"
            >
              capturing moments that tell your story
            </Accent>
          </div>
        </div>
      </div>
    </>
  )
}
