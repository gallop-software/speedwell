import { Cover } from '@/components/cover'
import { Heading } from '@/components/heading'
import { Accent } from '@/components/accent'

export default function Hero() {
  return (
    <>
      <Cover
        imageSrc="https://speedwell-cdn.gallop.software/images/portfolio/pexels-burst-545012.jpg"
        imageWidth={2560}
        imageHeight={1706}
        imageAlt="Professional interior design project management"
        overlayColor="bg-accent4/90"
        height="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <div className="flex flex-col gap-0 justify-center items-center text-center">
          <Heading
            as="h1"
            color="text-accent"
            margin="0"
          >
            Project Management
          </Heading>
          <Accent
            size="medium"
            color="text-accent"
          >
            Seamless Execution
          </Accent>
        </div>
      </Cover>
    </>
  )
}
