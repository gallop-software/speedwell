import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Profile1() {
  return (
    <Section
      className="bg-body py-30"
      id="our-team"
    >
      <Columns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/profiles/pexels-anna-nekrashevich-6801642.jpg"
            alt="Lorem Ipsum Dolor - sit amet consectetur adipiscing elit sed do eiusmod"
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
            Lorem Ipsum Dolor Sit Amet Elit
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Lorem Ipsum Dolor
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore magna aliqua quis nostrud exercitation.
            Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            fugiat nulla pariatur excepteur sint occaecat cupidatat. Non duis
            aute irure dolor in reprehenderit in voluptate velit esse culpa qui
            officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor ut labore et dolore magna aliqua ut enim ad minim veniam ex.
            Quis nostrud exercitation ullamco laboris nisi ut aliquip commodo
            consequat duis aute irure dolor in reprehenderit voluptate culpa
            deserunt mollit anim.
          </Paragraph>
          <Quote>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
            veniam quis nostrud exercitation!
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
