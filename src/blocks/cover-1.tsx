import { Cover } from '@/components/cover'
import { Accent } from '@/components/accent'

export default function Cover1() {
  return (
    <Cover
      imageSrc="/portfolio/pexels-jworks1124-342800.jpg"
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
