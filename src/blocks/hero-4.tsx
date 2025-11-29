import {
  Navbar,
  Columns,
  Column,
  Image,
  Accent,
  Heading,
  Paragraph,
} from '@/components'

export default function Hero4() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body2 z-0"></div>
        <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
          <Columns reverseColumns>
            <Column className="relative -mx-6">
              <Image
                className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover object-top"
                src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
                alt="Labore voluptate enim aliquip eiusmod occaecat"
                rounded="rounded-none"
                size="large"
                lazy={false}
              />
              <Accent
                color="text-white"
                className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12"
              >
                ad duis
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Ullamco veniam aliquip officia fugiat officia
              </Heading>
              <Paragraph className="max-w-2xl">
                Sunt eiusmod labore nostrud quis laborum enim nisi consectetur
                esse nulla aliquip eiusmod proident cillum minim aliqua eiusmod
                ullamco aute incididunt deserunt et ullamco eiusmod culpa qui
                proident dolor dolor pariatur aute commodo quis incididunt nulla
                aute dolore ad
              </Paragraph>
              <Paragraph className="max-w-2xl">
                In elit est do adipiscing nulla esse mollit aute veniam anim in
                aliquip consectetur qui sunt laborum excepteur quis occaecat
                quis eiusmod enim cillum anim commodo commodo officia enim
                consequat minim excepteur sunt tempor do enim occaecat eiusmod
                deserunt eiusmod aliquip deserunt proident quis est ut cupidatat
                in commodo cillum officia est labore magna adipiscing magna
                minim lorem adipiscing qui commodo irure est sint sit minim
              </Paragraph>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
