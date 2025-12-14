import { Cover, Heading, Paragraph, Buttons, Button } from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction5() {
  return (
    <Cover
      className="py-30 lg:py-50"
      imageSrc="/images/portfolio/pexels-burst-545012.jpg"
      imageAlt="Irure nostrud minim"
      overlayColor="bg-accent5/90"
      height="h-auto"
      innerAlign="content"
    >
      <Heading
        as="h3"
        styleAs="h2"
        textAlign="text-center"
      >
        Ready to Create the Kitchen or Bathroom of Your Dreams?
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Let's bring your vision to life. Our expert design team is ready to transform your kitchen and bathroom into stunning, functional spaces that enhance your daily life and add lasting value to your home. With years of experience, a commitment to quality craftsmanship, and a passion for exceptional design, we're your partner in creating spaces you'll love for years to come. Schedule your complimentary consultation today and take the first step toward your dream renovation.
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
