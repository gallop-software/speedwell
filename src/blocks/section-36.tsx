import {
  Section,
  Subheading,
  Heading,
  Paragraph,
  Columns,
  Column,
  Icon,
} from '@/components'
import usersIcon from '@iconify/icons-heroicons/users'
import chartBarIcon from '@iconify/icons-heroicons/chart-bar'
import checkBadgeIcon from '@iconify/icons-heroicons/check-badge'

export default function Section36() {
  return (
    <Section className="py-30 bg-body">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <Subheading className="mb-6">Our Working Process</Subheading>
        <Heading
          as="h2"
          className="mb-0"
        >
          Find out everything you need to know about creating a business process
          model
        </Heading>
      </div>
      <Columns
        cols="grid-cols-1 md:grid-cols-3"
        gap="gap-10 lg:gap-16"
      >
        <Column className="text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Icon
                icon={usersIcon}
                className="w-10 h-10 text-accent"
              />
            </div>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-0"
              fontSize="text-2xl"
            >
              1. Collect Ideas
            </Heading>
          </div>
          <Paragraph
            textAlign="text-center"
            margin="mb-0"
          >
            Etiam porta malesuada magna mollis euismod consectetur leo elit
          </Paragraph>
        </Column>
        <Column className="text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-accent2/10 flex items-center justify-center mb-4">
              <Icon
                icon={chartBarIcon}
                className="w-10 h-10 text-accent2"
              />
            </div>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-0"
              fontSize="text-2xl"
            >
              2. Data Analysis
            </Heading>
          </div>
          <Paragraph
            textAlign="text-center"
            margin="mb-0"
          >
            Etiam porta malesuada magna mollis euismod consectetur leo elit
          </Paragraph>
        </Column>
        <Column className="text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-accent3/10 flex items-center justify-center mb-4">
              <Icon
                icon={checkBadgeIcon}
                className="w-10 h-10 text-accent3"
              />
            </div>
            <Heading
              as="h3"
              styleAs="h4"
              margin="mb-0"
              fontSize="text-2xl"
            >
              3. Finalize Product
            </Heading>
          </div>
          <Paragraph
            textAlign="text-center"
            margin="mb-0"
          >
            Etiam porta malesuada magna mollis euismod consectetur leo elit
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
