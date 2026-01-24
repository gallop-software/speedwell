import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Accent } from '@/components/accent'
import { Heading } from '@/components/heading'
import { Quote } from '@/components/quote'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Hero6() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-accent3 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg"
                alt="Beautifully designed interior showcasing expert color coordination and palette selection"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                perfect palette
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Transform Your Space with Expert Color Consultation
              </Heading>
              <Quote>
                The right colors don't just beautify a space – they transform
                how you feel in it every single day
              </Quote>
              <Paragraph>
                Choosing the perfect color palette can be overwhelming with
                thousands of options available. Our professional color
                consultation services guide you through the process with
                confidence, ensuring every room reflects your personality while
                creating the ideal mood and atmosphere. We consider lighting,
                architecture, and your lifestyle to create cohesive schemes that
                work beautifully throughout your home.
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
