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
            alt="Christopher Thompson - Color and Materials Specialist"
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
            Color & Materials Specialist
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Christopher Thompson
          </Heading>
          <Paragraph>
            Christopher has an exceptional eye for color theory and material composition. His expertise in selecting the perfect palette and finishes elevates every project, creating cohesive designs that feel both harmonious and dynamic. With a background in fine arts and interior design, Christopher brings a unique perspective to color consultation, helping clients move beyond safe choices to discover palettes that truly resonate.
          </Paragraph>
          <Paragraph>
            He stays at the forefront of material innovation, constantly researching new textiles, finishes, and sustainable options. His knowledge of how materials interact with light and space ensures that every selection not only looks beautiful but performs well over time.
          </Paragraph>
          <Quote>
            Color has the power to transform not just a space, but how you feel when you are in it. The right palette can energize, calm, or inspire depending on what you need.
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
