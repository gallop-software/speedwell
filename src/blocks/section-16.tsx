import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Section16() {
  return (
    <Section className="bg-body py-30">
      <Columns reverseColumns>
        <Column className="aspect-4/5 relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg"
            alt="Beautifully designed interior space"
            className="absolute bottom-0 right-0 z-10 w-[75%]! object-cover"
            lazy={false}
          />
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-4450337.jpg"
            alt="Professional project coordination and planning"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column className="py-0 lg:py-10">
          <Heading
            id="learn-more"
            as="h2"
          >
            Your Vision, Expertly Executed
          </Heading>
          <Paragraph>
            Interior design projects require meticulous coordination, expert oversight, and seamless execution. Our comprehensive project management services ensure your design comes to life exactly as envisioned, on schedule and within budget. From the initial consultation through final installation, we handle every detail with professional precision, keeping you informed and confident throughout the entire process.
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
