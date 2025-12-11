import { Cover, Heading, Accent } from '@/components'

export default function Cover4() {
  return (
    <Cover
      imageSrc="/images/portfolio/pexels-pixabay-269218.jpg"
      imageAlt="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod te"
      overlayColor="bg-accent4/90"
      height="h-[400px] md:h-[500px] lg:h-[600px]"
    >
      <div className="flex flex-col gap-0 justify-center items-center text-center">
        <Heading
          as="h1"
          color="text-accent"
          margin="0"
        >
          Lorem Ipsum Do
        </Heading>
        <Accent
          size="medium"
          color="text-accent"
        >
          Lorem ipsum dolor sit amet consectetur
        </Accent>
      </div>
    </Cover>
  )
}
