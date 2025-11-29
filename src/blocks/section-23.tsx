import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
} from '@/components'

export default function Section23() {
  return (
    <Section className="bg-body2 py-30">
      <Columns
        reverseColumns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg"
            alt="Velit esse lorem"
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
            Excepteur proident dolore
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Dolore velit
          </Heading>
          <Paragraph>
            Dolor elit minim occaecat consectetur proident excepteur incididunt
            fugiat qui sint minim ea cillum id minim proident consectetur dolor
            consequat veniam tempor fugiat eiusmod fugiat sint sed fugiat sint
            quis aute incididunt non sed et enim ut velit dolor tempor
          </Paragraph>
          <Quote>
            Sed sint labore proident do commodo laborum sunt excepteur deserunt
            exercitation laboris laboris adipiscing cillum ullamco irure nulla
            ullamco ad culpa cillum nulla amet exercitation occaecat aliquip
            nostrud amet aute aute labore tempor dolor ad velit elit anim tempor
            lorem pariatur
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
