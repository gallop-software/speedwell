import {
  Navbar3,
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

export default function Hero15() {
  return (
    <>
      <Navbar3 />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body2 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/layout-2/pexels-thirdman-5257759.jpg"
                alt="Innovative tech product demonstration"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12"
                color="text-white"
              >
                innovation
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Revolutionary Technology for Modern Solutions
              </Heading>
              <Paragraph>
                Experience the future of productivity with our cutting-edge
                platform. Built for teams who demand excellence, our solution
                combines powerful features with intuitive design to transform
                how you work. From seamless collaboration to advanced analytics,
                we've created a tool that adapts to your workflow, scales with
                your growth, and delivers results that matter.
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#features"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Explore Features
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
