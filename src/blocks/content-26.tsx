import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Content26() {
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
            alt="Emily Chen - Senior Commercial Designer"
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
            Senior Commercial Designer
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Emily Chen
          </Heading>
          <Paragraph>
            Emily specializes in creating innovative commercial spaces that
            balance brand identity with employee wellbeing. With a background in
            corporate design and workplace strategy, she has transformed
            offices, retail spaces, and hospitality venues for clients ranging
            from tech startups to established corporations. Her designs are
            known for maximizing natural light, promoting collaboration, and
            incorporating sustainable materials.
          </Paragraph>
          <Paragraph>
            A graduate of Parsons School of Design, Emily brings a strategic
            mindset to every project. She stays current with workplace trends
            and ergonomic research to create environments that boost
            productivity and employee satisfaction. Her portfolio includes
            award-winning office designs that have been featured in
            Architectural Digest and Interior Design Magazine.
          </Paragraph>
          <Quote>
            The best commercial spaces inspire people to do their best work
            while reflecting the unique culture and values of the organization.
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
