import { Cover } from '@/components/cover'
import { Accent } from '@/components/accent'

export default function Banner() {
  return (
    <Cover
      imageSrc="/portfolio/pexels-clickerhappy-584399.jpg"
      imageAlt="Beautiful interior design space"
      imageClassName=""
    >
      <Accent
        textAlign="text-center"
        color="text-overlay-text"
        size="medium"
      >
        Transform Your Space
      </Accent>
    </Cover>
  )
}
