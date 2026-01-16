import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Accent,
} from '@/components'

export default function Content40() {
  return (
    <Section className="py-20 md:py-30 bg-body2 relative">
      <div className="absolute w-[50%] border-r border-b border-black left-0 -top-20 bottom-auto h-[500px] sm:h-[600px] md:h-[700px] lg:bottom-60 lg:h-auto pointer-events-none"></div>
      <Columns reverseColumns={false}>
        <Column className="aspect-8/9 relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
            alt="Beautiful residential interior design transformation"
            className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/jvdm/pexels-jvdm-1457844.jpg"
            alt="Modern commercial office space design"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
          <Accent
            className="absolute bottom-[35%] left-4 z-30"
            color="text-white"
          >
            real results
          </Accent>
        </Column>
        <Column className="mb-10">
          <Heading
            as="h3"
            styleAs="h2"
          >
            Building Lasting Relationships
          </Heading>
          <Paragraph fontStyle="italic">
            Our greatest achievement is not just beautiful spaces, but the
            lasting relationships we build with our clients. Many return to us
            for additional projects, refer their friends and family, and become
            true advocates for our work. This trust is earned through consistent
            communication, respect for your vision and budget, and an unwavering
            commitment to exceeding expectations. We believe that exceptional
            design is a collaborative journey, and we are honored to be your
            partner in creating spaces that truly enhance your life.
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
