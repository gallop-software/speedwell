import { Cover, Accent } from '@/components'

export default function Cover6() {
  return (
    <Cover
      imageSrc="/images/layout-3/pexels-cesar-o-neill-26650613-35240283.jpg"
      imageAlt="Creative workspace with design materials"
      imageClassName=""
      parallax={true}
    >
      <Accent className="text-center" color="text-white" size="medium">
        Capturing Moments That Last Forever
      </Accent>
    </Cover>
  )
}
