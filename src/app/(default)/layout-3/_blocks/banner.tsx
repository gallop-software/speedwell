import { Cover } from '@/components/cover'
import { Accent } from '@/components/accent'

export default function Banner() {
  return (
    <Cover
      imageSrc="/images/layout-3/pexels-cesar-o-neill-26650613-35240283.jpg"
      imageAlt="Creative workspace with design materials"
      imageClassName=""
      parallax={true}
    >
      <Accent
        textAlign="text-center"
        color="text-overlay-text"
        size="medium"
      >
        Capturing Moments That Last Forever
      </Accent>
    </Cover>
  )
}
