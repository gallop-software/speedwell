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
            alt="Professional installation and styling"
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
            Phase 3
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Installation & Styling
          </Heading>
          <Paragraph>
            The final phase brings your design vision to life. Our team oversees
            the installation of all furnishings, fixtures, and décor elements
            with meticulous attention to detail. We coordinate specialty
            contractors for custom work, ensure proper placement and assembly,
            and conduct thorough quality checks at every stage.
          </Paragraph>
          <Paragraph>
            Once installations are complete, our designers perform final
            styling, adding the finishing touches that make your space truly
            exceptional. We conduct a comprehensive walkthrough with you,
            ensuring every element meets your expectations. Our detailed punch
            list process addresses any final adjustments needed before project
            completion.
          </Paragraph>
          <Quote>
            The final details make all the difference – we perfect every element
            to ensure your complete satisfaction
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
