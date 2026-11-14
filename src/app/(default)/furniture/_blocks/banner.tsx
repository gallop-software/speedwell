import { Cover } from '@/components/cover'
import { Accent } from '@/components/accent'

export default function Banner() {
  return (
    <Cover
      imageSrc="https://speedwell-cdn.gallop.software/images/portfolio/pexels-clickerhappy-584399.jpg"
      imageWidth={2560}
      imageHeight={1693}
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
