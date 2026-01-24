import {
  Section,
  Columns,
  Column,
  Heading,
  Paragraph,
  Card3,
} from '@/components'

export default function Section4() {
  return (
    <Section className="py-30">
      <Columns reverseColumns={false}>
        <Column>
          <Heading as="h2">Artisan Woodworks</Heading>
          <Paragraph className="max-w-4xl">
            Founded in 1987, Artisan Woodworks specializes in custom cabinetry
            and millwork for luxury residential projects. Their master craftsmen
            bring generations of expertise to every piece, from hand-carved
            mantels to precision-fitted built-ins. We have partnered with them
            on over 50 projects, and their commitment to sustainable sourcing
            and flawless execution makes them our go-to for bespoke wood
            elements.
          </Paragraph>
        </Column>
        <Column>
          <Card3
            id="case-study-1"
            image="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg"
            alt="Custom cabinetry by Artisan Woodworks"
            href="#"
          />
        </Column>
      </Columns>
    </Section>
  )
}
