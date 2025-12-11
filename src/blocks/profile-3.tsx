import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Profile3() {
  return (
    <Section className="bg-body2 py-30">
      <Columns
        reverseColumns={false}
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/profiles/pexels-linkedin-2182970.jpg"
            alt="Lorem Ipsum Dolor - sit amet consectetur adipiscing elit sed do eiusmod tempor magna"
            className="w-full object-cover max-w-lg mx-auto"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h3"
            margin="mb-2"
            fontSize="text-3xl"
            color="text-accent5"
          >
            Lorem Ipsum Dolor Sit Amet Consectetur Elit
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Lorem Ipsum Dolor
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis nostrud ex
            exercitation ullamco laboris nisi ut aliquip ex ea commodo duis ex
            aute irure dolor in reprehenderit voluptate velit esse.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua ut enim adipisc
            commodo consequat duis aute.
          </Paragraph>
          <Quote>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua quis nostrud
            exercitation ullamco laboris nisi ut aliquip commodo.
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
