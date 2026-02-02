import { Cover } from '@/components/cover'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction4() {
  return (
    <Cover
      className="py-30 lg:py-50"
      imageSrc="/portfolio/pexels-clickerhappy-584399.jpg"
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
        Ready to Furnish Your Dream Space?
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Let our experts curate the perfect furniture selections for your home or
        business. We'll handle every detail to create a beautifully furnished
        space that reflects your style and enhances your lifestyle. Contact us
        today to get started.
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
