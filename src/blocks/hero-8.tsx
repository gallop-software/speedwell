import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Accent } from '@/components/accent'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero8() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 bg-body2 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns={false}>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
                alt="Beautifully curated furniture selection for elegant interior design"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 right-auto lg:-top-20 lg:-right-40 transform lg:text-right -rotate-12"
                textAlign="text-left"
              >
                curated style
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Expertly Curated Furniture for Your Perfect Space
              </Heading>
              <Paragraph>
                Selecting the right furniture is essential to creating a space
                that's both beautiful and functional. Our expert furniture
                selection services take the guesswork out of furnishing your
                home or business. We curate pieces that perfectly suit your
                style, space, and budget while ensuring quality, comfort, and
                longevity. From statement sofas to elegant dining sets, every
                piece is carefully chosen to create a cohesive, stunning
                interior that reflects your unique vision.
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Explore Our Process
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
