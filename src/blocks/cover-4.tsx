import { Cover } from '@/components/cover'
import { Heading } from '@/components/heading'
import { Accent } from '@/components/accent'

export default function Cover4() {
  return (
    <Cover
      imageSrc="/portfolio/pexels-pixabay-269218.jpg"
      imageAlt="Timmerman interior design team workspace"
      overlayColor="bg-accent4/90"
      height="h-[400px] md:h-[500px] lg:h-[600px]"
    >
      <div className="flex flex-col gap-0 justify-center items-center text-center">
        <Heading
          as="h1"
          color="text-accent"
          margin="0"
        >
          Meet Our Team
        </Heading>
        <Accent
          size="medium"
          color="text-accent"
        >
          passionate designers creating exceptional spaces
        </Accent>
      </div>
    </Cover>
  )
}
