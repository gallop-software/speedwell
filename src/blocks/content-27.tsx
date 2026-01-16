import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Content27() {
  return (
    <Section className="py-30 bg-body-dark">
      <Columns
        reverseColumns={false}
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-4/5 relative">
          <Image
            src="/images/portfolio/pexels-burst-545012.jpg"
            alt="Occaecat elit in dolor ex elit"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg"
            alt="Cupidatat dolore et"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Reprehenderit dolore fugiat aliqua id incididunt ullamco nisi
            ullamco
          </Heading>
          <Paragraph>
            Ea tempor nulla dolore enim consectetur ad eiusmod deserunt elit
            officia anim commodo cillum duis amet laborum elit anim officia
            minim ad aliquip ea amet mollit laborum velit
          </Paragraph>
          <Paragraph>
            Eiusmod culpa ipsum sunt nulla culpa laboris in id velit consequat
            magna in enim occaecat enim anim id cillum labore consequat aliqua
            in aliquip sint ipsum consectetur veniam cupidatat eiusmod et sunt
            ad ullamco aliqua quis velit fugiat ut reprehenderit non quis est
            mollit sit sunt non lorem
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
