import {
  Section,
  Columns,
  Column,
  Heading,
  Paragraph,
  Card3,
} from '@/components'

export default function Section12() {
  return (
    <Section className="pb-30">
      <Columns reverseColumns={false}>
        <Column>
          <Heading as="h2">Voluptate labore</Heading>
          <Paragraph className="max-w-4xl">
            Sunt anim ipsum elit veniam pariatur cupidatat mollit laborum
            reprehenderit dolor nisi ad elit in tempor occaecat quis voluptate
            sunt cillum ex pariatur incididunt consectetur laboris elit duis
            veniam aute velit et aliqua excepteur et esse laborum sit sed sit
            exercitation pariatur officia consectetur duis non minim excepteur
            velit id anim minim
          </Paragraph>
        </Column>
        <Column>
          <Card3
            id="case-study-1"
            image="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg"
            alt="Anim consequat mollit aliqua et fugiat fugiat sint ea excepteur pariatur id duis"
            href="https://napiermidwiferybilling.com/contact/"
          />
        </Column>
      </Columns>
    </Section>
  )
}
