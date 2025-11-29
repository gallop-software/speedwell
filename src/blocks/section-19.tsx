import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
} from '@/components'

export default function Section19() {
  return (
    <Section className="bg-body-light py-30">
      <Columns
        reverseColumns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column className="relative">
          <Image
            src="/images/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg"
            alt="Tempor lorem enim"
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
            Non dolore esse veniam id id
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            Ea aliqua
          </Heading>
          <Paragraph>
            Sit sed eiusmod ipsum deserunt nulla pariatur magna sit est ullamco
            velit amet aliquip do voluptate in consequat non officia
            exercitation veniam veniam ad esse aute aute aute ut enim deserunt
            proident consectetur sunt sit ut quis aliqua minim culpa consectetur
            non exercitation elit qui nulla voluptate mollit ut ipsum cupidatat
            do velit cupidatat velit
          </Paragraph>
          <Paragraph>
            Sed sunt quis sint non adipiscing ullamco excepteur anim sit in
            exercitation excepteur esse magna consequat mollit ullamco velit
            sunt reprehenderit aute ullamco quis enim lorem deserunt pariatur
            consequat adipiscing sunt anim pariatur elit veniam elit eiusmod ad
            cupidatat non ut ipsum ex pariatur elit laborum
          </Paragraph>
          <Quote>
            Ipsum reprehenderit mollit aliqua elit consectetur ipsum eiusmod
            cupidatat incididunt dolor consectetur incididunt dolore cillum
            laboris mollit qui laborum ipsum quis aliquip voluptate adipiscing
            excepteur
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
