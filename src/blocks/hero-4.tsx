import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Accent } from '@/components/accent'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'

export default function Hero4() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body2 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover object-top"
                src="/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
                alt="Labore voluptate enim aliquip eiusmod occaecat"
                rounded="rounded-none"
                size="large"
                lazy={false}
              />
              <Accent
                color="text-white"
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12"
              >
                transformed
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Before & After Transformations
              </Heading>
              <Paragraph className="max-w-2xl">
                Witness the power of thoughtful interior design through our
                portfolio of stunning transformations. Each project tells a
                story of spaces reimagined, potential realized, and dreams
                brought to life. From outdated rooms to modern masterpieces, see
                how Timmerman transforms ordinary spaces into extraordinary
                environments.
              </Paragraph>
              <Paragraph className="max-w-2xl">
                Our before and after gallery showcases the dramatic impact that
                expert design can have on any space. Whether it's a complete
                home renovation, a commercial office redesign, or a single room
                makeover, these transformations demonstrate our commitment to
                excellence, creativity, and attention to detail. Every project
                begins with understanding your vision and ends with exceeding
                your expectations.
              </Paragraph>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
