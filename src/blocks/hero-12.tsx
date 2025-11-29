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
} from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero12() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body-dark z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg"
                alt="Consequat est ullamco esse laborum deserunt id amet adipiscing lorem ex"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12"
                color="text-white"
              >
                quis non
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Mollit esse tempor occaecat laboris
              </Heading>
              <Paragraph>
                Magna exercitation adipiscing fugiat nisi consectetur nostrud ut
                cupidatat laborum proident mollit sed adipiscing sed ipsum do
                velit sunt reprehenderit id anim sit sunt deserunt reprehenderit
                dolore duis ut lorem occaecat culpa cillum pariatur fugiat ipsum
                pariatur eiusmod nulla sunt commodo lorem enim nostrud quis anim
                laboris dolor sint qui minim velit irure proident nisi
                exercitation mollit in ea ad culpa nulla tempor nulla velit
                consequat consequat
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Enim esse laboris anim magna proident
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
