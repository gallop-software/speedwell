import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Quote } from '@/components/quote'

export default function Content21() {
  return (
    <Section className="bg-body2 py-30">
      <Columns
        reverseColumns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg"
            alt="Client communication and support"
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
            Client Experience
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Partnership & Communication
          </Heading>
          <Paragraph>
            We believe great project management means great client
            communication. You'll have a dedicated project manager as your
            single point of contact, available to answer questions, provide
            updates, and address concerns promptly. Regular progress reports
            keep you informed, while our responsive approach ensures you're
            never left wondering about your project's status.
          </Paragraph>
          <Quote>
            Your peace of mind is our priority – clear communication, proactive
            updates, and responsive support throughout your entire project
            journey
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
