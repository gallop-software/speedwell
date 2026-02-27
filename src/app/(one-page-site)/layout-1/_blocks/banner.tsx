import { Cover } from '@/components/cover'
import { Accent } from '@/components/accent'

export default function Banner() {
  return (
    <Cover
      imageSrc="/layout-1/pexels-ivan-s-8117415.jpg"
      imageAlt="Creative workspace with design materials"
      imageClassName=""
      parallax={true}
    >
      <Accent
        textAlign="text-center"
        color="text-overlay-text"
        size="medium"
      >
        Strategy Meets Creativity
      </Accent>
    </Cover>
  )
}
