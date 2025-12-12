import {
  Cover,
  Heading,
  Paragraph,
  Columns,
  Column,
  Button,
} from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction1() {
  return (
    <Cover
      imageSrc="/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg"
      imageAlt="Anim laboris fugiat sit magna non sit minim"
      overlayColor="bg-accent5/90"
      height="h-auto"
      innerAlign="content"
      className="py-20 lg:py-30"
    >
      <Heading
        as="h2"
        styleAs="h2"
        textAlign="text-center"
        color="text-contrast"
        className="mb-6"
      >
        Ready to Transform Your Space?
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
        color="text-contrast"
        className="mb-12"
      >
        These transformations could be yours. Whether you're looking to renovate a single room or redesign your entire property, our team is ready to bring your vision to life. Contact us today to schedule a consultation and discover how we can transform your space into something extraordinary.
      </Paragraph>
      <Columns
        gap="gap-16 lg:gap-16"
        className="mt-12"
      >
        <Column>
          <Heading
            as="h3"
            styleAs="h4"
            textAlign="text-center"
            color="text-contrast"
            margin="mb-4"
          >
            Schedule a Consultation
          </Heading>
          <Paragraph
            textAlign="text-center"
            color="text-contrast-light"
            className="mb-6"
          >
            Meet with our design team to discuss your project goals, budget, and timeline
          </Paragraph>
          <div className="flex justify-center">
            <Button
              size="medium"
              variant="outline"
              href="/contact"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Get Started
            </Button>
          </div>
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h4"
            textAlign="text-center"
            color="text-contrast"
            margin="mb-4"
          >
            View Our Portfolio
          </Heading>
          <Paragraph
            textAlign="text-center"
            color="text-contrast-light"
            className="mb-6"
          >
            Explore more completed projects and see the full range of our capabilities
          </Paragraph>
          <div className="flex justify-center">
            <Button
              size="medium"
              variant="outline"
              href="/portfolio"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              See More Work
            </Button>
          </div>
        </Column>
      </Columns>
    </Cover>
  )
}
