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

export default function Hero7() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body2 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/pexels-heyho-6794934.jpg"
                alt="Modern commercial interior design with sophisticated professional style"
                size="large"
                rounded="rounded-none"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                business spaces
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Strategic Commercial Design
              </Heading>
              <Paragraph>
                Your commercial space is more than just a workplace – it's a
                powerful expression of your brand, a driver of employee
                productivity, and a key factor in customer experience. Our
                expert commercial interior design services create inspiring
                environments that enhance your business operations, reflect your
                corporate identity, and leave lasting impressions on clients and
                employees alike.
              </Paragraph>
              <Paragraph>
                From sleek corporate offices to inviting retail spaces and
                sophisticated hospitality venues, we design commercial interiors
                that balance aesthetics with functionality, creating spaces that
                work as hard as you do while elevating your brand presence.
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  Explore Commercial Services
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
