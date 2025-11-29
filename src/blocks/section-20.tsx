import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
} from '@/components'

export default function Section20() {
  return (
    <Section className="bg-body2 py-30">
      <Columns
        reverseColumns={false}
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
            alt="Consequat est exercitation"
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
            Consequat mollit
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Adipiscing ex
          </Heading>
          <Paragraph>
            Sunt ipsum mollit aliquip sint nisi ex incididunt ut enim nulla
            irure ex sed quis cillum adipiscing velit officia dolore aute
            consequat occaecat in adipiscing non pariatur voluptate sed occaecat
            voluptate est minim incididunt aliquip esse veniam incididunt mollit
            nulla enim minim eiusmod do ex esse anim consequat nostrud
            exercitation
          </Paragraph>
          <Paragraph>
            Ea in in deserunt aliqua id lorem occaecat cupidatat et culpa labore
            aliqua dolor ipsum nostrud excepteur magna pariatur magna consequat
            adipiscing in commodo est sunt anim lorem lorem dolore nulla eiusmod
            laboris laboris sint sint proident
          </Paragraph>
          <Quote>
            Incididunt ipsum cillum dolor sit dolor exercitation laborum mollit
            et irure sit voluptate laborum consequat duis incididunt laboris
            velit pariatur irure minim deserunt exercitation irure excepteur
            reprehenderit adipiscing ad aliqua ad ad sit magna culpa dolor
            labore laborum voluptate
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
