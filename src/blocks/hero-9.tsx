import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Accent } from '@/components/accent'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero9() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body2 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
                alt="Stunning modern kitchen with custom cabinetry and contemporary design"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                luxury spaces
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Elevate Your Kitchen & Bath to Extraordinary
              </Heading>
              <Paragraph>
                Your kitchen and bathroom are the heart of your home, where
                functionality meets daily luxury. Our expert design team
                specializes in creating stunning, personalized spaces that
                transform routine into ritual. From contemporary chef's kitchens
                to spa-inspired bathrooms, we blend innovative design, premium
                materials, and meticulous craftsmanship to deliver spaces that
                exceed expectations. Whether you're dreaming of a complete
                remodel or a sophisticated refresh, we bring your vision to life
                with style and precision.
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#learn-more"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Discover Our Design Process
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
