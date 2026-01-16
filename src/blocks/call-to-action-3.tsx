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
        Ready to Transform Your Commercial Space?
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Let's create a commercial environment that drives your business forward.
        Schedule a consultation today to discover how our strategic design
        approach can enhance productivity, strengthen your brand, and create
        spaces your team and clients will love.
      </Paragraph>
      <Buttons className="mt-8 justify-center">
        <Button
          size="medium"
          href="/contact"
          variant="primary"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Start Your Project
        </Button>
      </Buttons>
    </Cover>
  )
}
