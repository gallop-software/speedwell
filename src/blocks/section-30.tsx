import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Section30() {
  return (
    <Section className="py-30 bg-body2">
      <Columns
        reverseColumns={false}
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg"
            alt="Id id magna officia in sint cillum"
            className="object-cover"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Nisi esse reprehenderit eiusmod
          </Heading>
          <Paragraph>
            Pariatur minim duis proident nostrud velit esse qui occaecat
            voluptate irure sit et enim qui nulla velit dolor officia amet qui
            fugiat officia deserunt consequat exercitation nostrud dolor
            pariatur
          </Paragraph>
          <Paragraph>
            Anim sint amet cupidatat aute magna in nostrud deserunt fugiat nisi
            dolore laborum excepteur proident proident ex tempor enim labore
            proident velit commodo proident non magna aute dolore enim dolore
            consectetur ipsum ad velit
          </Paragraph>
          <Paragraph>
            Incididunt in aliqua et dolor cillum officia ipsum dolore ad nostrud
            pariatur cupidatat ea officia ex qui pariatur
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
