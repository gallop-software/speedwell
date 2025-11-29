import { Cover, Heading, Paragraph, Buttons, Button } from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction3() {
  return (
    <Cover
      className="py-30 lg:py-50"
      imageSrc="/images/portfolio/pexels-mikhail-nilov-6707628.jpg"
      imageAlt="Ex sunt laboris"
      overlayColor="bg-accent5/90"
      height="h-auto"
      innerAlign="content"
    >
      <Heading
        as="h3"
        styleAs="h2"
        textAlign="text-center"
      >
        Eiusmod in qui sed labore reprehenderit cillum consequat
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Esse pariatur velit ut et lorem ut et ut excepteur enim cupidatat do
        consequat ullamco id nisi laborum dolore
      </Paragraph>
      <Buttons className="mt-8 justify-center">
        <Button
          size="medium"
          href="/sit"
          variant="primary"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Est nostrud
        </Button>
      </Buttons>
    </Cover>
  )
}
