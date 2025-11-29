import { Cover, Heading, Paragraph, Buttons, Button } from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction2() {
  return (
    <Cover
      className="py-30 lg:py-50"
      imageSrc="/images/portfolio/pexels-pixabay-276724.jpg"
      imageAlt="Proident non esse"
      overlayColor="bg-accent5/90"
      height="h-auto"
      innerAlign="content"
    >
      <Heading
        as="h3"
        styleAs="h2"
        textAlign="text-center"
      >
        Mollit quis cillum laborum ex ut incididunt qui
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Cillum sed sed minim adipiscing consectetur esse eiusmod laboris officia
        ut et dolore fugiat sit reprehenderit duis ut aliquip ullamco ut esse
        incididunt labore reprehenderit deserunt ut ullamco do laboris dolor
        exercitation mollit quis aute laboris amet magna dolor esse deserunt
        magna aute exercitation dolor
      </Paragraph>
      <Buttons className="mt-8 justify-center">
        <Button
          size="medium"
          href="/sit"
          variant="primary"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Proident pariatur
        </Button>
      </Buttons>
    </Cover>
  )
}
