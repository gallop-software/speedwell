import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Section27() {
  return (
    <Section className="py-30 bg-body-dark">
      <Columns
        reverseColumns={false}
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/pexels-pixabay-269218.jpg"
            alt="24/7 midwife access for prenatal care"
            className="object-cover"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Nulla ipsum sunt dolore amet
          </Heading>
          <Paragraph>
            Velit exercitation reprehenderit lorem laboris est veniam esse do
            magna irure quis dolore nostrud ullamco non culpa cupidatat eiusmod
            dolor magna aliqua qui enim incididunt incididunt elit labore do ex
            consequat ut
          </Paragraph>
          <Paragraph>
            Aute aute tempor quis enim ad labore ea adipiscing velit laborum qui
            eiusmod in ipsum velit aute ipsum est ea officia esse labore ea
            cillum ex reprehenderit fugiat ut ullamco non aliquip in mollit
            cillum excepteur sunt aliquip labore qui ea dolor aute cillum
            cupidatat
          </Paragraph>
          <Paragraph>
            Pariatur culpa cupidatat est pariatur exercitation adipiscing
            adipiscing incididunt id enim ullamco labore officia amet cillum
            veniam tempor mollit quis
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
