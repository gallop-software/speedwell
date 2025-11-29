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

export default function Hero2() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-accent3 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/pexels-alex-qian-1180283-2343465.jpg"
                alt="Cupidatat consequat anim adipiscing sint est culpa"
                rounded="rounded-none"
                size="large"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                dolor sit
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Aliqua duis in culpa labore
              </Heading>
              <Paragraph>
                Culpa dolor dolore nisi non consequat elit aliquip pariatur aute
                cillum fugiat mollit occaecat aute sed sunt ut esse
              </Paragraph>
              <Paragraph>
                Magna veniam magna velit exercitation fugiat sunt elit
                reprehenderit velit exercitation deserunt sint aute fugiat ea
                est commodo id lorem incididunt ea adipiscing qui ipsum officia
                magna ullamco do sed lorem est occaecat ut ex consequat cillum
                exercitation ex et
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Ullamco ad irure incididunt est
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </div>
  )
}
