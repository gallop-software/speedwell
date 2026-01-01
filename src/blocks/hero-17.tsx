import { Image, Container, Heading, Accent } from '@/components'

export default function Hero17() {
  return (
    <div className="relative w-full overflow-hidden z-0 bg-body2 pt-navbar">
      <Image
        src="/images/layout-4/pexels-pixabay-260922.jpg"
        size="full"
        alt="Layout 4 hero image"
        rounded="rounded-none"
        className="object-cover object-center absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex flex-col justify-center items-center text-center min-h-[700px] py-64">
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
    </div>
  )
}
