import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Section17() {
  return (
    <Section className="bg-body-light py-30">
      <Columns>
        <Column className="aspect-4/5 relative">
          <Image
            src="/images/portfolio/pexels-pixabay-269218.jpg"
            alt="Quality craftsmanship and attention to detail"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
            alt="Professional contractor coordination"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column className="py-0 lg:py-10">
          <Heading as="h2">Comprehensive Oversight & Coordination</Heading>
          <Paragraph>
            We serve as your single point of contact, coordinating with architects, contractors, vendors, and craftspeople to ensure seamless collaboration. Our established network of trusted professionals and rigorous quality standards guarantee exceptional results at every phase of your project.
          </Paragraph>
          <Paragraph>
            From obtaining necessary permits and managing timelines to overseeing installations and conducting quality inspections, we handle all the complex details. Our proactive communication keeps you informed of progress while our problem-solving expertise ensures any challenges are resolved quickly and effectively, maintaining momentum and protecting your investment.
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
