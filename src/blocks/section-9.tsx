import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
} from '@/components'

export default function Section9() {
  return (
    <Section className="py-30 bg-body2">
      <Columns
        reverseColumns={false}
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
            alt="Voluptate aute anim cupidatat cupidatat"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg"
            alt="Aliqua exercitation sint eiusmod"
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
            Laboris id nisi cupidatat occaecat officia ad elit
          </Heading>
          <Paragraph>
            Incididunt sint commodo quis officia non do laboris pariatur sint
            enim duis nisi quis aliqua occaecat incididunt reprehenderit
            excepteur reprehenderit amet officia excepteur magna minim lorem
            labore ullamco ullamco duis
          </Paragraph>
          <Paragraph>
            Lorem officia lorem lorem mollit officia tempor duis do cupidatat
            sit id occaecat eiusmod sed irure lorem sit aliqua occaecat minim
            elit ut nostrud est aliqua ea mollit anim nostrud proident labore
            enim magna sunt ullamco fugiat proident minim est officia sit minim
            nisi ad et sunt nostrud esse fugiat ad ipsum aliquip occaecat
            reprehenderit ullamco nisi mollit adipiscing consequat adipiscing
          </Paragraph>
          <Paragraph>
            Veniam labore tempor ea ut quis ullamco culpa laborum est et duis
            ullamco nulla dolor sint nostrud sed ullamco voluptate ut ut minim
            ad ipsum
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
