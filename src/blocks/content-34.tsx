import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Content34() {
  return (
    <Section className="py-30 bg-linear-to-b from-body2 to-body-light">
      <Columns
        reverseColumns
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-5/5 relative">
          <Image
            src="/images/portfolio/pexels-jworks1124-342800.jpg"
            alt="Id consectetur consectetur proident dolor ad"
            className="absolute top-0 left-0 z-10 w-[75%] object-cover"
            rounded="rounded-t-full"
            size="large"
          />
          <Image
            src="/images/portfolio/pexels-pixabay-259962.jpg"
            alt="Sed commodo enim nisi excepteur incididunt"
            className="absolute bottom-0 right-0 z-0 w-[75%] object-cover shadow-2xl"
            rounded="rounded-t-none"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Id veniam consequat consequat proident cupidatat duis sunt dolor
          </Heading>
          <Paragraph>
            Nostrud ex consectetur et est minim qui eiusmod consectetur non non
            excepteur consectetur dolor ut commodo amet sint in et nisi cillum
            fugiat aliqua irure qui consequat do fugiat dolor duis deserunt
            ipsum proident sed laboris do qui
          </Paragraph>
          <Paragraph>
            Qui est excepteur excepteur laborum cupidatat velit dolore sunt
            proident deserunt dolor officia deserunt consectetur amet sint est
            adipiscing irure enim minim elit anim excepteur veniam aliquip
            consectetur ipsum ipsum sit sunt officia cupidatat culpa officia
            enim ullamco quis veniam deserunt aliquip dolore non
          </Paragraph>
          <Paragraph>
            Sint sit lorem sit excepteur exercitation laboris dolore proident in
            consequat in incididunt dolor irure anim reprehenderit consectetur
            fugiat id ea sunt consequat culpa culpa nostrud esse laborum anim ut
            sed sit culpa incididunt commodo nulla laboris cupidatat laboris
            consequat deserunt nostrud cupidatat anim excepteur sed ex commodo
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
