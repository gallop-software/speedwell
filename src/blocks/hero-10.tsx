import { Navbar, Cover, Heading, Accent } from '@/components'

export default function Hero10() {
  return (
    <>
      <Navbar />
      <Cover
        imageSrc="/images/portfolio/pexels-burst-545012.jpg"
        imageAlt="Lorem ipsum dolor sit amet"
        overlayColor="bg-accent4/90"
        height="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <div className="flex flex-col gap-0 justify-center items-center text-center">
          <Heading
            as="h1"
            color="text-accent"
            margin="0"
          >
            Elit laborum nulla
          </Heading>
          <Accent
            size="medium"
            color="text-accent"
          >
            adipiscing elit
          </Accent>
        </div>
      </Cover>
    </>
  )
}
