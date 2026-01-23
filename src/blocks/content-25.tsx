import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Content25() {
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
            alt="Robert Rodriguez - Residential Design Lead"
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
            Residential Design Lead
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Robert Rodriguez
          </Heading>
          <Paragraph>
            Robert has a gift for transforming houses into homes that truly
            reflect his clients' personalities and lifestyles. With 10 years of
            experience in residential design, he specializes in creating warm,
            inviting spaces that balance aesthetics with everyday functionality.
            His approachable style and ability to listen make him a favorite
            among clients who want a collaborative design experience.
          </Paragraph>
          <Paragraph>
            Robert graduated from Savannah College of Art and Design and has
            worked on projects ranging from cozy apartments to sprawling
            estates. He is passionate about sustainable design practices and
            loves incorporating vintage finds alongside contemporary pieces to
            create unique, layered interiors.
          </Paragraph>
          <Quote>
            A home should tell your story and support how you actually live. My
            goal is to create spaces that feel both beautiful and effortlessly
            comfortable for daily life.
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
