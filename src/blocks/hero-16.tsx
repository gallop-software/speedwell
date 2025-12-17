import {
  Section,
  Swiper,
  Image,
  Navbar,
} from '@/components'

export default function Hero16() {
  return (
    <>
      <Navbar />
      <Section className="py-0 bg-body relative overflow-hidden">
        <Swiper>
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/layout-1/pexels-edmond-dantes-4344617.jpg"
            alt="Hero slide 1"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
        </div>
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/layout-2/pexels-thirdman-5257759.jpg"
            alt="Hero slide 2"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
        </div>
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
            alt="Hero slide 3"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
        </div>
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/portfolio/pexels-pixabay-259962.jpg"
            alt="Hero slide 4"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
        </div>
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/portfolio/pexels-mikhail-nilov-6707628.jpg"
            alt="Hero slide 5"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
        </div>
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/portfolio/pexels-burst-545012.jpg"
            alt="Hero slide 6"
            className="object-cover w-full h-full"
            size="full"
            lazy={false}
          />
        </div>
      </Swiper>
    </Section>
    </>
  )
}
