import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
  Accordion,
  Li,
  List,
  Container,
} from '@/components'

export default function Section35() {
  return (
    <Section className="bg-body pt-30">
      <Columns
        className="mb-30"
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/layout-1/pexels-pavel-danilyuk-6925321-1.jpg"
            alt="Creative team collaborating on brand strategy"
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
            Who We Are
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            A Creative Agency Built on Strategy
          </Heading>
          <Paragraph>
            We are a team of designers, strategists, and storytellers passionate about creating brands that resonate. Our approach combines creative excellence with strategic thinking to deliver branding solutions that not only look beautiful but also drive real business results. From startups to established businesses, we partner with clients who are ready to make their mark.
          </Paragraph>
          <Paragraph>
            Our studio thrives on collaboration and innovation. We believe the best brands emerge from deep understanding of your business, audience, and market. By blending research, creativity, and strategic insight, we craft brand identities that are distinctive, memorable, and built to last. Every project we take on is an opportunity to push boundaries and create something exceptional.
          </Paragraph>
          <Quote>
            Great brands are born from the intersection of creativity, strategy, and authentic storytelling
          </Quote>
        </Column>
      </Columns>
      <Container
        align="content"
        padding="px-0"
      >
        <Heading as="h2">What We Do</Heading>
        <Accordion headingText="Brand Identity & Design">
          <Heading as="h4">Our Approach</Heading>
          <Paragraph>
            We create visual identities that capture the essence of your brand. From logo design to complete brand systems, we develop cohesive visual languages that communicate your values and connect with your audience.
          </Paragraph>
          <Heading as="h4">Services Include</Heading>
          <List className="mb-8">
            <Li>Logo design and brand mark development</Li>
            <Li>Brand guidelines and style guides</Li>
            <Li>Color palette and typography systems</Li>
            <Li>Business card and stationery design</Li>
            <Li>Packaging and product design</Li>
            <Li>Brand refresh and evolution</Li>
          </List>
        </Accordion>
        <Accordion headingText="Digital & Web Design">
          <Heading as="h4">Our Approach</Heading>
          <Paragraph>
            We design digital experiences that are both beautiful and functional. Our websites and digital products are crafted to engage users, communicate your message clearly, and drive conversions.
          </Paragraph>
          <Heading as="h4">Services Include</Heading>
          <List className="mb-8">
            <Li>Website design and development</Li>
            <Li>User experience (UX) and interface (UI) design</Li>
            <Li>E-commerce solutions</Li>
            <Li>Mobile app design</Li>
            <Li>Landing page design and optimization</Li>
            <Li>Digital marketing assets</Li>
          </List>
        </Accordion>
        <Accordion headingText="Brand Strategy & Marketing">
          <Heading as="h4">Our Approach</Heading>
          <Paragraph>
            We develop strategic foundations that guide all your branding efforts. Through research, positioning, and messaging development, we help you define who you are and how to communicate it effectively.
          </Paragraph>
          <Heading as="h4">Services Include</Heading>
          <List className="mb-8">
            <Li>Brand strategy and positioning</Li>
            <Li>Market research and competitive analysis</Li>
            <Li>Messaging and brand voice development</Li>
            <Li>Content strategy and creation</Li>
            <Li>Social media strategy and management</Li>
            <Li>Marketing campaign development</Li>
          </List>
        </Accordion>
      </Container>
    </Section>
  )
}
