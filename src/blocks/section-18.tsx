import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Quote,
} from '@/components'

export default function Section18() {
  return (
    <Section className="bg-body py-30">
      <Columns
        align="items-start"
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
            alt="Lorem Ipsum Consectetur"
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
            Excepteur qui nisi velit cupidatat fugiat
          </Heading>
          <Heading
            as="h4"
            styleAs="h2"
          >
            In consectetur
          </Heading>
          <Paragraph>
            Incididunt commodo fugiat dolor in sed nulla quis est velit dolore
            voluptate laboris cupidatat sit tempor quis anim dolore anim eiusmod
            dolor dolore elit culpa aliqua est incididunt do sed et veniam
            eiusmod exercitation nostrud minim ut exercitation esse adipiscing
            officia velit dolore reprehenderit mollit quis amet sed esse ex
            proident ad magna qui excepteur non veniam fugiat
          </Paragraph>
          <Paragraph>
            Fugiat pariatur nulla amet laborum occaecat pariatur sunt tempor
            mollit laborum do cupidatat occaecat do culpa qui ullamco nostrud
            deserunt et id amet magna culpa nostrud officia commodo commodo non
            ipsum exercitation sunt magna consectetur minim incididunt et cillum
            exercitation exercitation fugiat proident id esse deserunt
          </Paragraph>
          <Quote>
            Est officia fugiat commodo enim nostrud ipsum commodo officia
            adipiscing ex et nulla qui nulla cillum in sit minim proident
            exercitation dolore exercitation
          </Quote>
        </Column>
      </Columns>
    </Section>
  )
}
