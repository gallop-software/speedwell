import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
} from '@/components'

export default function Section22() {
  return (
    <Section className="bg-body-light py-30">
      <Columns
        reverseColumns={false}
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
            alt="Sint irure irure"
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
            Sit velit
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Laboris excepteur
          </Heading>
          <Paragraph>
            Consequat nulla elit amet duis consequat id velit dolor sed non
            proident dolor minim in aute exercitation velit dolor irure aliquip
            magna consectetur in ipsum veniam irure ad non nulla proident dolore
            magna laborum culpa sunt est laborum adipiscing ea eiusmod est enim
            reprehenderit tempor adipiscing culpa officia adipiscing voluptate
            et aute
          </Paragraph>
          <Paragraph>
            Aute in pariatur consequat esse quis culpa enim excepteur adipiscing
            elit culpa officia consectetur esse sed sint nulla voluptate aliquip
            amet mollit sunt ad commodo sint nulla qui id enim adipiscing aliqua
            adipiscing non ea nulla non reprehenderit consectetur elit elit
            voluptate veniam laborum ex irure quis
          </Paragraph>
          <Quote>
            Nulla veniam incididunt ut commodo sint est magna sint do dolor
            minim aliquip deserunt reprehenderit consequat ea excepteur laboris
            irure pariatur elit consectetur laboris do cupidatat laboris culpa
            laborum enim culpa ex reprehenderit minim
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
