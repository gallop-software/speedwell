import { Cover, Accent } from '@/components'

export default function Cover1() {
  return (
    <Cover
      imageSrc="/images/portfolio/pexels-jworks1124-342800.jpg"
      imageAlt="Speedwell interior design team workspace"
      imageClassName=""
    >
      <Accent
        className="text-center"
        size="medium"
        color="text-white"
      >
        meet our team
      </Accent>
    </Cover>
  )
}
