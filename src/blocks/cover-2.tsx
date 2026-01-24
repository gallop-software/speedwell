import { Cover } from '@/components/cover'
import { Accent } from '@/components/accent'

export default function Cover2() {
  return (
    <Cover
      imageSrc="/images/portfolio/pexels-clickerhappy-584399.jpg"
      imageAlt="Beautiful interior design space"
      imageClassName=""
    >
      <Accent
        textAlign="text-center"
        color="text-white"
        size="medium"
      >
        Transform Your Space
      </Accent>
    </Cover>
  )
}
