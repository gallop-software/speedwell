import { Navbar, Cover, Heading, Accent } from '@/components'

export default function Hero17() {
  return (
    <Cover
      imageSrc="/images/layout-4/pexels-pixabay-260922.jpg"
      imageAlt="Layout 4 hero image"
      overlayColor="bg-black/40"
      height="h-[600px] md:h-[750px] lg:h-[900px]"
    >
      <Navbar dark />
      <div className="flex flex-col gap-0 justify-center items-center text-center">
        <Heading
          as="h1"
          color="text-white"
          margin="0"
        >
          Artisan Dining Experience
        </Heading>
        <Accent
          size="medium"
          color="text-white"
        >
          where flavor meets elegance
        </Accent>
      </div>
    </Cover>
  )
}
