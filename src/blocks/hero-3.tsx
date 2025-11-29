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

export default function Hero3() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 bg-body-dark z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns={false}>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/pexels-alex-qian-1180283-2343465.jpg"
                alt="Labore ut sint excepteur amet laboris commodo irure anim"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 right-auto lg:-top-20 lg:-right-40 transform text-left lg:text-right -rotate-12"
                color="text-white"
              >
                lorem elit
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Labore incididunt ipsum id commodo voluptate commodo do
                reprehenderit veniam
              </Heading>
              <Paragraph>
                Ipsum amet id dolor laboris voluptate elit aliqua consequat
                consectetur ipsum cillum aliqua cupidatat voluptate laboris
                consectetur minim excepteur qui labore ea cupidatat veniam ipsum
                id incididunt ipsum aliquip nisi pariatur in dolore dolore
                veniam laboris ut proident tempor velit fugiat occaecat mollit
                laboris nisi consequat reprehenderit dolore adipiscing quis ex
                ipsum excepteur quis consequat officia voluptate proident ea qui
                commodo aute labore dolore qui laborum occaecat anim ex sed
                dolor velit irure pariatur sunt ipsum cillum duis culpa est in
                adipiscing pariatur
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  variant="primary"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Ad in mollit laboris enim excepteur tempor
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
