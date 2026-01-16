import {
  Section,
  Heading,
  Paragraph,
  Quote,
  Columns,
  Column,
  Image,
} from '@/components'

export default function Content63() {
  return (
    <Section className="bg-body2 py-30">
      <Columns
        reverseColumns={false}
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
            alt="Marcus Foster - Project Manager"
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
            Project Manager
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Marcus Foster
          </Heading>
          <Paragraph>
            Marcus is the backbone of every Timmerman project, ensuring seamless
            execution from concept to completion. With his PMP certification and
            years of experience coordinating complex design projects, he keeps
            timelines on track, budgets in check, and communication flowing
            between all parties. Clients appreciate his proactive approach and
            ability to solve problems before they become issues.
          </Paragraph>
          <Quote>
            Great design deserves flawless execution. My job is to handle all
            the logistics so our clients can focus on the exciting part—watching
            their vision come to life. Every detail matters, and I make sure
            nothing falls through the cracks.
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
