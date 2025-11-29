import { Cover, Accent } from '@/components'

export default function Cover1() {
  return (
    <Cover
      imageSrc="/images/portfolio/pexels-jworks1124-342800.jpg"
      imageAlt="Nulla est cillum"
      imageClassName=""
    >
      <Accent
        className="text-center"
        size="medium"
        color="text-white"
      >
        timeless elegance
      </Accent>
    </Cover>
  )
}
