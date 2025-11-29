import { Cover, Heading, Paragraph, Buttons, Button } from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction4() {
  return (
    <Cover
      className="py-30 lg:py-50"
      imageSrc="/images/portfolio/pexels-clickerhappy-584399.jpg"
      imageAlt="Culpa nulla minim"
      overlayColor="bg-accent5/90"
      height="h-auto"
      innerAlign="content"
    >
      <Heading
        as="h3"
        styleAs="h2"
        textAlign="text-center"
      >
        Quis commodo sed tempor
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Quis consequat officia nisi ex sint laborum fugiat veniam eiusmod
        nostrud aute nostrud ex eiusmod nulla aliquip officia veniam
        exercitation incididunt est consequat pariatur id sed dolor dolor dolor
      </Paragraph>
      <Buttons className="mt-8 justify-center">
        <Button
          size="medium"
          href="/sit"
          variant="primary"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Exercitation elit
        </Button>
      </Buttons>
    </Cover>
  )
}
