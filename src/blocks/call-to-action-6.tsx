import { Cover, Heading, Paragraph, Buttons, Button } from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function CallToAction6() {
  return (
    <Cover
      className="py-30 lg:py-50"
      imageSrc="/images/portfolio/pexels-burst-545012.jpg"
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
        Fugiat laboris est
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Ut dolor duis anim nostrud tempor consequat consequat aliquip est
        reprehenderit officia occaecat occaecat enim voluptate adipiscing ad
        excepteur occaecat dolor excepteur consectetur
      </Paragraph>
      <Buttons className="mt-8 justify-center">
        <Button
          size="medium"
          href="/sit"
          variant="primary"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Voluptate enim
        </Button>
      </Buttons>
    </Cover>
  )
}
