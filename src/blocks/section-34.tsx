import {
  Section,
  Heading,
  Paragraph,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Section17() {
  return (
    <Section className="bg-body-light py-30">
      <Columns>
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/pexels-lamiko-3754699.jpg"
            alt="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/pexels-maksgelatin-4352247.jpg"
            alt="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incid"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column className="py-0 lg:py-10">
          <Heading as="h2">Lorem ipsum dolor sit amet elit</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua quis. Nostrud ex
            exercitation ullamco laboris nisi ut aliquip commodo consequat duis
            aute irure dolor in reprehenderit voluptate. Velit esse cillum duis
            aute irure dolor in reprehenderit voluptate velit esse cillum dolor
            fugiat nulla pariatur.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet—consectetur adipiscing elit sed do magna
            aliqua ut enim. Ad minim veniam quis nostrud exercitation ullamco ut
            laboris nisi ut aliquip. Ex ea commodo consequat duis aute—irure in
            dolor reprehenderit in voluptate velit esse cillum dolore aliqua ut
            enim ad minim veniam quis nostrud exercitation ullamco laboris amet
            consectetur adipiscing. Elit sed do eiusmod tempor incididunt labor
            magna aliqua ut enim ad minim veniam quis nostrud exercitation amet
            culpa qui officia. Deserunt mollit anim id est laborum magna sit ut
            aliquip commodo.
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
