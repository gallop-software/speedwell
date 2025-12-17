import {
  Section,
  Subheading,
  Heading,
  Paragraph,
  Columns,
  Column,
  Icon,
  Card4,
  Accent,
} from '@/components'
import usersIcon from '@iconify/icons-heroicons/users'
import chartBarIcon from '@iconify/icons-heroicons/chart-bar'
import checkBadgeIcon from '@iconify/icons-heroicons/check-badge'

export default function Section36() {
  return (
    <Section className="my-30 bg-body">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <Subheading className="mb-6">Our Working Process</Subheading>
        <Heading as="h2">
          Find out everything you need to know about creating a business process
          model
        </Heading>
      </div>
      <Columns
        cols="grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
        gap="gap-16 lg:gap-16"
      >
        <Column>
          <Card4>
            <span className="font-accent text-6xl leading-0 w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-8">
              <span className="relative -top-3">1</span>
            </span>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-8"
            >
              Collect Ideas
            </Heading>
            <Paragraph margin="mb-0">
              Etiam porta malesuada magna mollis euismod consectetur leo elit
            </Paragraph>
          </Card4>
        </Column>
        <Column>
          <Card4>
            <span className="font-accent text-6xl leading-0 w-20 h-20 rounded-full bg-accent2/10 flex items-center justify-center mb-8">
              <span className="relative -top-3">2</span>
            </span>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-8"
            >
              Data Analysis
            </Heading>
            <Paragraph margin="mb-0">
              Etiam porta malesuada magna mollis euismod consectetur leo elit
            </Paragraph>
          </Card4>
        </Column>
        <Column>
          <Card4>
            <span className="font-accent text-6xl leading-0 w-20 h-20 rounded-full bg-accent2/10 flex items-center justify-center mb-8">
              <span className="relative -top-3">3</span>
            </span>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-8"
            >
              Finalize Product
            </Heading>
            <Paragraph margin="mb-0">
              Etiam porta malesuada magna mollis euismod consectetur leo elit
            </Paragraph>
          </Card4>
        </Column>
      </Columns>
    </Section>
  )
}
