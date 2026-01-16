import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Content48() {
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
            alt="James Mitchell - Principal Designer and Founder"
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
            Principal Designer & Founder
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            James Mitchell
          </Heading>
          <Paragraph>
            With over 15 years of experience in residential and commercial
            design, James founded Timmerman with a vision to create spaces that
            are both beautiful and deeply personal. His philosophy centers on
            listening first, understanding his clients' lifestyles, and
            translating their dreams into functional, stunning realities.
            James's work has been featured in numerous design publications, and
            he has earned a reputation for his attention to detail and
            collaborative approach.
          </Paragraph>
          <Paragraph>
            James holds a degree in Interior Architecture from Rhode Island
            School of Design and is a certified member of ASID. When he is not
            designing, you can find him exploring antique markets, traveling for
            design inspiration, or mentoring young designers entering the field.
          </Paragraph>
          <Quote>
            Great design is not about following trends—it is about creating
            timeless spaces that truly enhance how people live and work every
            single day.
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
