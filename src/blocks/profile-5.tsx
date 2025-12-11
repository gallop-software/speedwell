import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Profile5() {
  return (
    <Section className="bg-body2 py-30">
      <Columns
        reverseColumns={false}
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
            alt="Lorem Ipsum Dolor - sit amet consectetur adipiscing elit sed do eiusmod magna"
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
            Lorem Ipsum Dolor Sit Amet
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
            exercitation ullamco laboris nisi ut aliquip. Commodo consequat ex
            ea duis aute irure dolor in reprehenderit voluptate esse culpa.
          </Paragraph>
          <Quote>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna. Aliqua quis nostrud ex
            exercitation ullamco laboris nisi ut aliquip ex ea commodo duis ex
            aute irure dolor in reprehenderit voluptate esse culpa qui officia
            deserunt mollit anim!
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
