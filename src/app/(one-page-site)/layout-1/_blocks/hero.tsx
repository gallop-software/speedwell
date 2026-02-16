import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Accent } from '@/components/accent'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'

export default function Hero() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full xl:w-2/3 bg-body2 z-0"></div>
        <div className="px-6 mx-auto max-w-[1600px] relative">
          <Columns
            reverseColumns={false}
            className="bg-body2"
            cols="grid-cols-1 xl:grid-cols-2"
            gap="gap-0 xl:gap-20"
          >
            <Column className="mx-auto max-w-2xl lg:max-w-7xl py-24 max-xl:order-2">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Building Brands That Stand Out
              </Heading>
              <Paragraph className="max-w-2xl">
                We are a branding and creative agency specializing in brand
                identity, visual design, and strategic positioning. From logo
                design and brand guidelines to website development and marketing
                campaigns, we help businesses tell their story and connect with
                their audience in meaningful ways.
              </Paragraph>
            </Column>
            <Column className="relative -mx-6 flex items-center flex-row-reverse h-full  max-xl:order-1">
              <Image
                className="w-2/3 h-full relative object-cover object-center"
                src="/layout-1/pexels-anna-nekrashevich-7552446.jpg"
                alt="Labore voluptate enim aliquip eiusmod occaecat"
                rounded="rounded-none"
                size="large"
                lazy={false}
              />
              <div className="absolute h-auto top-30 bottom-30 w-3/7 left-0">
                <Image
                  className="width-full h-full object-cover object-top"
                  aspect="aspect-none"
                  src="/layout-1/pexels-ron-lach-8760891.jpg"
                  alt="Labore voluptate enim aliquip eiusmod occaecat"
                  rounded="rounded-none"
                  size="large"
                  lazy={false}
                />
              </div>
              <Accent
                color="text-overlay-text"
                className="absolute hidden lg:block -bottom-8 xl:top-0 left-6 xl:-left-30 transform -rotate-12"
              >
                make impact
              </Accent>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
