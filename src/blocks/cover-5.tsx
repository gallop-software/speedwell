import { Cover, Accent } from '@/components'

export default function Cover5() {
  return (
    <Cover
      imageSrc="/images/layout-1/pexels-ivan-s-8117415.jpg"
      imageAlt="Creative workspace with design materials"
      imageClassName=""
    >
      <Accent
        className="text-center"
        color="text-white"
        size="medium"
      >
        Strategy Meets Creativity
      </Accent>
    </Cover>
  )
}
