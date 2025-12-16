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
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
            alt="Detailed project planning and scheduling"
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
            Phase 1
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Planning & Design Development
          </Heading>
          <Paragraph>
            Every successful project begins with thorough planning. We work
            closely with you to refine the design concept, establish realistic
            timelines, and create detailed budgets. Our team prepares
            comprehensive specifications, coordinates with architects and
            engineers, and ensures all design elements are perfectly aligned
            before moving forward.
          </Paragraph>
          <Paragraph>
            During this phase, we finalize material selections, secure vendor
            quotes, and develop a detailed project schedule. We obtain necessary
            permits, coordinate with your HOA if applicable, and ensure all
            stakeholders understand their roles and responsibilities. This
            meticulous preparation sets the foundation for smooth execution.
          </Paragraph>
          <Quote>
            Proper planning prevents problems – we invest time upfront to ensure
            flawless execution throughout your project
          </Quote>
        </Column>
      </Columns>
      <Container
        align="content"
        padding="px-0"
      >
        <Heading as="h2">Current Openings</Heading>
        <Accordion headingText="Interior Designer">
          <Heading as="h4">Responsibilities</Heading>
          <List className="mb-8">
            <Li>
              Develop creative design concepts for residential and commercial
              projects
            </Li>
            <Li>
              Create detailed space plans, elevations, and design presentations
            </Li>
            <Li>
              Collaborate with clients to understand their vision and
              requirements
            </Li>
            <Li>Select furniture, finishes, fabrics, and accessories</Li>
            <Li>Coordinate with contractors, vendors, and craftspeople</Li>
            <Li>Manage multiple projects from concept through installation</Li>
          </List>
          <Heading as="h4">Qualifications</Heading>
          <List className="mb-8">
            <Li>Degree in Interior Design or related field</Li>
            <Li>3-5 years of professional experience</Li>
            <Li>Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite</Li>
            <Li>
              Strong understanding of building codes and industry standards
            </Li>
            <Li>Excellent communication and presentation skills</Li>
            <Li>Portfolio demonstrating creative design solutions</Li>
          </List>
          <Heading as="h4">What We Offer</Heading>
          <List className="mb-8">
            <Li>Competitive salary based on experience</Li>
            <Li>Health, dental, and vision insurance</Li>
            <Li>Professional development and continuing education</Li>
            <Li>Collaborative studio environment with talented team</Li>
          </List>
        </Accordion>
        <Accordion headingText="Project Manager">
          <Heading as="h4">Responsibilities</Heading>
          <List className="mb-8">
            <Li>
              Oversee design projects from initial consultation to completion
            </Li>
            <Li>Coordinate schedules, budgets, and timelines</Li>
            <Li>Communicate with clients, contractors, and vendors</Li>
            <Li>Ensure quality standards and project specifications are met</Li>
            <Li>Problem-solve and address challenges proactively</Li>
            <Li>Manage procurement and installation processes</Li>
          </List>
          <Heading as="h4">Qualifications</Heading>
          <List className="mb-8">
            <Li>Project management experience in design or construction</Li>
            <Li>Strong organizational and multitasking abilities</Li>
            <Li>Excellent communication and leadership skills</Li>
            <Li>PMP certification preferred but not required</Li>
          </List>
          <Heading as="h4">What We Offer</Heading>
          <List className="mb-8">
            <Li>Opportunity to manage diverse, high-profile projects</Li>
            <Li>Competitive compensation package</Li>
            <Li>Work with experienced design team</Li>
            <Li>Professional growth opportunities</Li>
          </List>
        </Accordion>
        <Accordion headingText="Design Intern">
          <Heading as="h4">Responsibilities</Heading>
          <List className="mb-8">
            <Li>
              Assist senior designers with project research and development
            </Li>
            <Li>
              Create mood boards, material boards, and design presentations
            </Li>
            <Li>Support space planning and furniture selection</Li>
            <Li>Participate in client meetings and site visits</Li>
            <Li>Help maintain design library and resource materials</Li>
          </List>
          <Heading as="h4">Qualifications</Heading>
          <List className="mb-8">
            <Li>
              Currently enrolled in Interior Design program or recent graduate
            </Li>
            <Li>Basic knowledge of design software</Li>
            <Li>Passion for design and eagerness to learn</Li>
            <Li>Strong work ethic and attention to detail</Li>
            <Li>Portfolio showing creative potential</Li>
          </List>
          <Heading as="h4">What We Offer</Heading>
          <List className="mb-8">
            <Li>Hands-on experience with real projects</Li>
            <Li>Mentorship from experienced designers</Li>
            <Li>Exposure to residential and commercial design</Li>
            <Li>Potential for full-time employment after internship</Li>
          </List>
        </Accordion>
      </Container>
    </Section>
  )
}
