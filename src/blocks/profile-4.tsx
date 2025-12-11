import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Profile4() {
  return (
    <Section className="bg-body-light py-30">
      <Columns
        reverseColumns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/profiles/pexels-maide-arslan-128712163-31750448.jpg"
            alt="Lorem - ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod"
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
            Lorem Ipsum Dolor
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Lorem Ipsum Dolor Sit
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua quis nostrud ex.
            Exercitation ullamco laboris nisi ut aliquip ex ea commodo duis ex
            aute irure dolor in reprehenderit voluptate velit esse cillum duis
            aute irure dolor in reprehenderit voluptate velit.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua quis nostrud ex
            exercitation ullamco laboris nisi ut aliquip ex ea commodo duis.
          </Paragraph>
          <Quote>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua quis nostrud ut.
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
