import { Section, Accent, Heading, Paragraph } from '@/components'

export default function Section10() {
  return (
    <Section className="relative py-30">
      <div className="absolute inset-0 opacity-30 sm:opacity-50 bg-repeat bg-left-top bg-[length:700px] bg-[url('/images/geometric-1400x809.jpg')]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent [background-image:linear-gradient(to_right,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_100%),linear-gradient(to_bottom,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_100%),linear-gradient(to_top,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_70%)]"></div>
      <Accent
        className="absolute left-[120%] sm:left-full top-30 transform rotate-90 origin-top-left z-0 whitespace-nowrap opacity-5 sm:opacity-10"
        color="text-accent"
        fontSize="text-[10rem] lg:text-[12rem]"
        overflowFix="p-4 -ml-4"
      >
        culpa
      </Accent>
      <div className="relative">
        <Heading
          id="learn-more"
          as="h1"
          className="max-w-2xl"
        >
          Nostrud qui quis
        </Heading>
        <Paragraph className="max-w-lg">
          Mollit consequat et irure commodo do nostrud commodo nostrud enim
          exercitation sunt in excepteur culpa et sunt quis laboris in amet
          ullamco ex nulla cupidatat nulla officia dolore quis ipsum cupidatat
          ea irure sunt magna sed ad esse sunt irure sint fugiat voluptate amet
          consectetur deserunt excepteur eiusmod do consequat ea dolor laboris
          consequat sint veniam veniam
        </Paragraph>
        <Paragraph
          className="max-w-lg"
          margin="pb-0"
        >
          Elit tempor sed adipiscing duis laborum sit velit duis laborum do
          ullamco cupidatat eiusmod deserunt ad exercitation laborum id
          exercitation magna voluptate adipiscing voluptate pariatur dolore
          nostrud in anim minim eiusmod eiusmod ea sed exercitation labore enim
          ex id officia ex labore incididunt quis
        </Paragraph>
      </div>
    </Section>
  )
}
