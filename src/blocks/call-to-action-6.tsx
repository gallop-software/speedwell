import { Cover } from '@/components/cover'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction6() {
  return (
    <Cover
      className="py-30 lg:py-50"
      imageSrc="/portfolio/pexels-burst-545012.jpg"
      imageAlt="Qui sunt magna"
      overlayColor="bg-accent5/90"
      height="h-auto"
      innerAlign="content"
    >
      <Heading
        as="h3"
        styleAs="h2"
        textAlign="text-center"
      >
        Ready to Optimize Your Space?
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Let us help you create a layout that works beautifully for your
        lifestyle. Our expert space planning services ensure every square foot
        is maximized for function, flow, and style. Contact us today to get
        started.
      </Paragraph>
      <Buttons className="mt-8 justify-center">
        <Button
          size="medium"
          href="/contact"
          variant="primary"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Schedule Consultation
        </Button>
      </Buttons>
    </Cover>
  )
}
