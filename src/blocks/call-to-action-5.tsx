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
        Magna incididunt laboris mollit quis et anim occaecat culpa cupidatat
        excepteur
      </Heading>
      <Paragraph
        variant="large"
        textAlign="text-center"
      >
        Ad occaecat sunt nulla minim sunt culpa anim lorem mollit do anim ipsum
        magna magna fugiat non sed exercitation deserunt magna ad labore velit
        adipiscing sint ipsum veniam est ea aliqua magna non voluptate culpa
        dolor labore incididunt fugiat lorem quis duis nostrud sint id ullamco
        cillum est aliqua ea labore reprehenderit
      </Paragraph>
      <Buttons className="mt-8 justify-center">
        <Button
          size="medium"
          href="/sit"
          variant="primary"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Veniam non
        </Button>
      </Buttons>
    </Cover>
  )
}
