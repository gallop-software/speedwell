import {
  Navbar,
  Columns,
  Column,
  Image,
  Accent,
  Heading,
  Paragraph,
  Buttons,
  Button,
} from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero9() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body2 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg"
                alt="Esse velit reprehenderit duis non nostrud cupidatat occaecat lorem"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                ex enim
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Nisi reprehenderit ea pariatur esse sed commodo
              </Heading>
              <Paragraph>
                Culpa lorem cupidatat ipsum minim adipiscing aute mollit aliquip
                laborum dolor dolore non pariatur lorem officia occaecat labore
                qui sint sed eiusmod pariatur ipsum aliqua reprehenderit cillum
                nisi non do sit do in do est occaecat id incididunt anim ex
                nulla amet officia ut minim elit ullamco ad dolor exercitation
                tempor ut qui incididunt culpa culpa aliqua eiusmod fugiat do
                sint do ex aliquip proident tempor minim
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#learn-more"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Ullamco duis non elit laboris occaecat
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
