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

export default function Hero7() {
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
                alt="Sint eiusmod nisi ut ex cillum ea elit lorem cillum"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                ea sint
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Est culpa cillum mollit lorem
              </Heading>
              <Paragraph>
                Ea elit cillum in ut enim pariatur exercitation nulla proident
                ut reprehenderit ex qui occaecat sint deserunt nisi magna
                reprehenderit eiusmod ipsum in irure occaecat cillum aliqua
                adipiscing magna eiusmod minim labore lorem esse exercitation ad
                aliqua laborum reprehenderit qui enim laboris eiusmod do ea
                occaecat ea excepteur magna qui
              </Paragraph>
              <Paragraph>
                Cillum proident quis qui sed laborum amet eiusmod ut sunt
                exercitation lorem enim anim cillum sunt aliquip ullamco
                excepteur quis non reprehenderit cillum anim fugiat veniam sunt
                pariatur
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Voluptate deserunt velit ipsum minim
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
