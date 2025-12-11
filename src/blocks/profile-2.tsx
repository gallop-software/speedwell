import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Profile2() {
  return (
    <Section className="bg-body-light py-30">
      <Columns
        reverseColumns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column className="relative">
          <Image
            src="/images/profiles/pexels-ekaterina-bolovtsova-5393594.jpg"
            alt="Lorem Ipsum Dolor - sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            className="w-full object-cover shadow-2xl max-w-lg mx-auto"
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
            tempor incididunt ut labore et dolore magna aliqua quis nostrud ex
            exercitation ullamco laboris nisi ut aliquip ex ea commodo duis ex
            aute irure dolor in reprehenderit voluptate. Velit esse cillum duis
            aute irure dolor in reprehenderit.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua quis nostrud ex
            exercitation ullamco laboris nisi ut aliquip. Commodo consequat ex
            ea duis aute irure dolor in reprehenderit voluptate esse culpa duis
            aute irure dolor in reprehenderit.
          </Paragraph>
          <Quote>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore magna.
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
