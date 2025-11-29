import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Section17() {
  return (
    <Section className="bg-body-light py-30">
      <Columns>
        <Column className="aspect-4/5 relative">
          <Image
            src="/images/portfolio/pexels-pixabay-269218.jpg"
            alt="Tempor ipsum voluptate et non"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
            alt="Anim aute mollit duis consectetur"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column className="py-0 lg:py-10">
          <Heading as="h2">Mollit esse ad magna culpa</Heading>
          <Paragraph>
            Cupidatat qui est eiusmod est veniam enim pariatur irure dolore
            mollit ea adipiscing dolor laborum est eiusmod quis est est nisi
            eiusmod exercitation exercitation excepteur ut velit sed culpa
            deserunt commodo cupidatat laboris qui ipsum fugiat nostrud sunt
            laboris qui qui ullamco sint cillum aute excepteur fugiat duis
          </Paragraph>
          <Paragraph>
            Non ipsum cillum sit elit ut aute dolor cillum velit et
            reprehenderit dolore ex aliquip fugiat commodo mollit dolor ad est
            sint minim est et ut aliquip excepteur ut elit culpa enim ea velit
            reprehenderit voluptate tempor veniam laborum minim sunt ut cillum
            sed elit duis sit veniam ea dolore laboris adipiscing veniam irure
            nulla consequat nostrud esse magna consectetur qui sunt sint sed
            officia aliqua veniam sit amet est sed sit
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
