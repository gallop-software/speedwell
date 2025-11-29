import {
  Navbar,
  Cover,
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

export default function Hero11() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body2 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover"
                src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-4450337.jpg"
                alt="Qui occaecat est reprehenderit tempor cillum commodo labore"
                rounded="rounded-none"
                size="large"
                lazy={false}
              />
              <Accent className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12">
                amet sed
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Eiusmod aliquip ullamco ea
              </Heading>
              <Paragraph>
                Sit commodo adipiscing cupidatat in sunt cupidatat voluptate
                adipiscing commodo ea consectetur anim do sit aute incididunt
                ullamco ipsum aliqua aute quis ex commodo aute nulla pariatur
                anim occaecat lorem nostrud adipiscing et consectetur ut sed est
                sed
              </Paragraph>
              <Paragraph>
                Id pariatur magna laborum nulla laboris id culpa est cillum
                dolor esse culpa ullamco exercitation proident nulla veniam duis
                nisi dolor enim sint velit ipsum eiusmod eiusmod
              </Paragraph>
              <Buttons className="">
                <Button
                  href="#services"
                  icon={arrowDownIcon}
                  iconPlacement="after"
                >
                  In quis ea esse
                </Button>
              </Buttons>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
