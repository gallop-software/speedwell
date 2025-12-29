import {
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
      <div className="relative">
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 bg-body-dark z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns={false}>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/pexels-alex-qian-1180283-2343465.jpg"
                alt="Elegant modern living room with contemporary furniture and natural lighting"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 right-auto lg:-top-10 lg:-right-40 transform text-left lg:text-right -rotate-12"
                color="text-white"
              >
                dream homes
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Transform Your House Into Your Dream Home
              </Heading>
              <Paragraph>
                Experience the perfect blend of luxury, comfort, and
                functionality with our bespoke residential interior design
                services. We create personalized living spaces that reflect your
                unique style and enhance your everyday life. From modern
                minimalism to timeless elegance, our expert designers bring your
                vision to life with meticulous attention to detail, premium
                materials, and innovative solutions that maximize both beauty
                and practicality.
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  variant="primary"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Explore Our Services
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
