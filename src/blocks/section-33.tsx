import {
  Section,
  Heading,
  Paragraph,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Section16() {
  return (
    <Section className="bg-body py-30">
      <Columns reverseColumns>
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/pexels-pixabay-276724.jpg"
            alt="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tmp"
            className="absolute bottom-0 right-0 z-10 !w-[75%] object-cover aspect-[16/9]"
            lazy={false}
          />
          <Image
            src="/images/portfolio/pexels-karola-g-5942742.jpg"
            alt="Lorem ipsum dolor sit amet consectetur adipiscing elit magna"
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
            Passionate Designers, Exceptional Results
          </Heading>
          <Paragraph>
            Our team brings together diverse talents, perspectives, and
            expertise to create interiors that truly transform how you live and
            work. Each member of Timmerman contributes unique skills and
            creative vision, united by a shared commitment to excellence and a
            passion for thoughtful design. We believe that great design comes
            from collaboration, listening, and understanding what makes each
            space and client unique.
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
