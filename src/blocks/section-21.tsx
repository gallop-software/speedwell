import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
} from '@/components'

export default function Section21() {
  return (
    <Section className="bg-body py-30">
      <Columns
        reverseColumns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
            alt="Magna quis irure laborum"
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
            Qui reprehenderit ullamco
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Nisi incididunt
          </Heading>
          <Paragraph>
            Elit consectetur elit est excepteur eiusmod id nisi tempor ex nisi
            anim adipiscing in sint exercitation exercitation anim fugiat ut
            cupidatat amet ullamco pariatur lorem non consectetur eiusmod ea ex
            lorem aliqua occaecat commodo laborum deserunt ut aliqua anim mollit
            quis eiusmod voluptate nulla dolor ad eiusmod adipiscing pariatur
            proident enim ipsum dolore adipiscing mollit excepteur reprehenderit
            consectetur sunt nostrud et in do quis dolor elit occaecat ex id sit
            nisi occaecat sit minim
          </Paragraph>
          <Paragraph>
            Lorem magna nisi eiusmod reprehenderit ad ullamco occaecat id
            voluptate sit mollit quis cupidatat culpa occaecat officia elit
            incididunt commodo et mollit nulla deserunt minim dolor veniam
            officia non irure sunt voluptate pariatur in enim dolor ex
          </Paragraph>
          <Quote>
            Minim nisi commodo sit dolore ex sint ut aute ea adipiscing
            consectetur anim anim cupidatat velit nulla culpa esse esse ex id
            reprehenderit enim et culpa et lorem velit officia sit dolor ad quis
            ex enim do deserunt adipiscing cillum ipsum id do id proident est et
            eiusmod laboris velit dolor
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
