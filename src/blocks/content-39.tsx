import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Content39() {
  return (
    <Section
      id="features"
      className="py-30 relative overflow-hidden"
    >
      <div className="relative">
        <Columns
          className="mb-8"
          reverseColumns={true}
        >
          <Column>
            <Heading
              as="h3"
              styleAs="h3"
              margin="mb-2"
              fontSize="text-3xl"
              color="text-accent5"
            >
              Product Showcase
            </Heading>
            <Heading
              as="h3"
              styleAs="h2"
            >
              Powerful Features
            </Heading>
            <Paragraph>
              Our platform combines cutting-edge technology with intuitive
              design to deliver exceptional results. From real-time
              collaboration to advanced analytics, every feature is built to
              enhance productivity and streamline workflows. Experience seamless
              integration with your existing tools, robust security, and
              scalable infrastructure that grows with your business.
            </Paragraph>
          </Column>
          <Column className="aspect-[6.75/6] relative">
            <Image
              src="/images/layout-2/pexels-goumbik-577195.jpg"
              alt="Product feature demonstration"
              className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
              size="large"
            />
            <Image
              src="/images/layout-2/pexels-pixabay-38568.jpg"
              alt="Product interface showcase"
              className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
              rounded="rounded-b-none rounded-t-full"
              size="large"
            />
          </Column>
        </Columns>
        <Columns reverseColumns={false}>
          <Column>
            <Heading as="h3">Built for Teams</Heading>
            <Paragraph>
              Empower your team with tools designed for collaboration. Share
              work instantly, provide feedback in real-time, and keep everyone
              aligned with centralized project management. Our platform
              eliminates communication barriers and ensures every team member
              has the context they need to do their best work.
            </Paragraph>
            <Paragraph>
              With advanced permissions, version control, and audit trails, you
              maintain complete control while enabling seamless collaboration.
              Whether your team is remote, hybrid, or in-office, our solution
              adapts to your workflow and scales with your organization's unique
              needs.
            </Paragraph>
          </Column>
          <Column className="aspect-15/14 relative">
            <Image
              src="/images/layout-2/pexels-mikhail-nilov-8284731.jpg"
              alt="Team collaboration features"
              className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
              size="large"
            />
            <Image
              src="/images/layout-2/pexels-ranamatloob567-35203646.jpg"
              alt="Collaborative workspace"
              className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
              rounded="rounded-r-none rounded-l-full"
              size="large"
            />
          </Column>
        </Columns>
      </div>
    </Section>
  )
}
