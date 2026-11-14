import { Cover } from '@/components/cover'
import { Accent } from '@/components/accent'

export default function Banner() {
  return (
    <Cover
      imageSrc="https://speedwell-cdn.gallop.software/images/portfolio/pexels-jworks1124-342800.jpg"
      imageWidth={2560}
      imageHeight={1999}
      imageAlt="Speedwell interior design team workspace"
      imageClassName=""
    >
      <Accent
        textAlign="text-center"
        size="medium"
        color="text-overlay-text"
      >
        meet our team
      </Accent>
    </Cover>
  )
}
