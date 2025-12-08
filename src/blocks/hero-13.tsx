import {
  Navbar,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Buttons,
  Button,
  Accent,
  ProBlock,
} from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero13() {
  return (
    <>
      <Navbar />
      <div className="bg-accent3 pt-10 ">
        <div className="mx-auto max-w-[1600px] relative">
          <div
            className="absolute top-0 left-0 w-[70%] lg:w-[40%] h-[524px] lg:h-full z-0 opacity-30 bg-cover bg-no-repeat bg-top-left bg-[url('/images/leaf1.jpg')]"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -right-10 w-[500px] h-[500px] pointer-events-none select-none bg-contain bg-no-repeat bg-bottom-right rotate-10 opacity-40 bg-[url('/images/flowers.png')]"
            aria-hidden="true"
          />
          <Columns
            cols="grid-cols-1 lg:grid-cols-[3fr_2fr]"
            gap="gap-8 lg:gap-8 xl:gap-16"
            className="mx-auto max-w-8xl px-6 lg:px-10 relative"
          >
            <Column className="pt-10">
              <div className="overflow-hidden rounded-t-full relative h-[500px] lg:h-[800px] w-full mx-auto max-w-2xl lg:max-w-none">
                <Image
                  rounded="rounded-none"
                  src="/images/portfolio/charlotte-may/pexels-charlotte-may-5825527.jpg"
                  alt="Fugiat cillum sit in adipiscing eiusmod"
                  className="w-full h-full object-cover"
                  size="large"
                  lazy={false}
                />
              </div>
            </Column>
            <Column className="py-16 md:py-20">
              <Accent className="transform -rotate-12 lg:-ml-64 -top-14 relative">
                nostrud irure
              </Accent>
              <Heading as="h1">Ipsum sed cillum pariatur</Heading>
              <Paragraph
                className="max-w-lg"
                color="text-contrast"
              >
                Adipiscing veniam elit fugiat duis fugiat consequat sed occaecat
                sit reprehenderit irure aliqua irure officia velit aliquip sit
                dolore ea enim in cupidatat magna elit excepteur
              </Paragraph>
              <Buttons className="lg:-ml-40">
                <Button
                  href="#learn-more"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Cillum veniam tempor
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
