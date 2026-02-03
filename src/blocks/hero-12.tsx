import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import { Accent } from '@/components/accent'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero12() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body-dark z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg"
                alt="Professional space planning and interior layout optimization"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12"
                color="text-white"
              >
                smart layouts
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Strategic Space Planning for Better Living
              </Heading>
              <Paragraph>
                Great design starts with thoughtful space planning. Whether
                you're working with a compact urban apartment or a sprawling
                estate, our expert space planning services optimize every square
                foot to create layouts that flow naturally, function
                beautifully, and feel perfectly proportioned. We analyze traffic
                patterns, natural light, views, and how you actually use your
                space to develop strategic solutions that enhance both
                aesthetics and everyday living.
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Discover Our Approach
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
