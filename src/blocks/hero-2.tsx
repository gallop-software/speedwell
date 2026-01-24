import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Accent } from '@/components/accent'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero2() {
  return (
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
              design excellence
            </Accent>
          </Column>
          <Column className="mx-auto max-w-2xl lg:max-w-7xl">
            <Heading
              as="h1"
              className="max-w-2xl"
            >
              Our Design Portfolio Speaks Volumes
            </Heading>
            <Paragraph>
              Every space tells a story, and each project showcases our
              dedication to creating beautiful interiors that enhance daily
              living experiences
            </Paragraph>
            <Paragraph>
              From elegant residential transformations to sophisticated
              commercial spaces, our portfolio represents years of expertise
              crafting environments that perfectly balance aesthetics with
              functionality and reflect each client's unique vision while
              maintaining timeless appeal through carefully curated design
              elements that stand the test of time
            </Paragraph>
            <Buttons className="">
              <Button
                href="#services"
                icon={arrowDownIcon}
                iconPlacement="after"
              >
                Explore Our Design Services
              </Button>
            </Buttons>
          </Column>
        </Columns>
      </div>
    </div>
  )
}
