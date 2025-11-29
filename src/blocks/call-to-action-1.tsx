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
        Deserunt eiusmod reprehenderit est
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
        color="text-contrast"
        className="mb-12"
      >
        In ad aliqua ullamco duis nulla commodo reprehenderit occaecat ad aute
        nulla et cupidatat aute fugiat ut adipiscing duis do lorem duis
        cupidatat ipsum cupidatat deserunt ex ipsum non irure proident id sit
        dolore sed
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
            Irure magna
          </Heading>
          <Paragraph
            textAlign="text-center"
            color="text-contrast-light"
          >
            Ut proident laborum elit cillum est proident anim dolor labore
            tempor elit ipsum
          </Paragraph>
          <div className="flex justify-center">
            <Button
              size="medium"
              variant="outline"
              href="/sed-do"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Ipsum irure
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
            Enim consectetur
          </Heading>
          <Paragraph
            textAlign="text-center"
            color="text-contrast-light"
          >
            Commodo officia labore non velit eiusmod non amet labore ipsum
            reprehenderit quis et excepteur aliqua incididunt elit nulla
          </Paragraph>
          <div className="flex justify-center">
            <Button
              size="medium"
              variant="outline"
              href="/contact"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Lorem labore
            </Button>
          </div>
        </Column>
      </Columns>
    </Cover>
  )
}
