import {
  Section,
  Heading,
  Paragraph,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Section16() {
  return (
    <Section className="bg-body py-30">
      <Columns reverseColumns>
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/pexels-amelia-hallsworth-5461644.jpg"
            alt="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tmp"
            className="absolute bottom-0 right-0 z-10 !w-[75%] object-cover"
            lazy={false}
          />
          <Image
            src="/images/portfolio/pexels-karola-g-5942742.jpg"
            alt="Lorem ipsum dolor sit amet consectetur adipiscing elit magna"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column className="py-0 lg:py-10">
          <Heading
            id="learn-more"
            as="h2"
          >
            Lorem ipsum dolor sit amet
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua quis nostrud ex
            exercitation ullamco. Laboris nisi ut aliquip commodo consequat ex
            ea duis aute irure dolor—in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat.
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
