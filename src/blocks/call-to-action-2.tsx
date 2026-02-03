import { Cover } from '@/components/cover'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction2() {
  return (
    <Cover
      className="py-30 lg:py-50"
      imageSrc="/portfolio/pexels-pixabay-276724.jpg"
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
        Ready to Discover Your Perfect Color Palette?
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Stop second-guessing your color choices and start loving your space. Our
        expert color consultants are ready to help you create a beautiful,
        cohesive home that reflects your unique style and personality. Whether
        you need guidance for a single room or a complete home transformation,
        we'll provide the professional expertise and confidence you need to make
        the perfect color decisions. Schedule your consultation today and
        discover how the right colors can completely transform your living
        experience.
      </Paragraph>
      <Buttons className="mt-8 justify-center">
        <Button
          size="medium"
          href="/contact"
          variant="primary"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Book Your Consultation
        </Button>
      </Buttons>
    </Cover>
  )
}
