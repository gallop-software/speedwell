import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  List,
  Li,
  Buttons,
  Button,
} from '@/components'
import arrowDownIcon from '@iconify/icons-heroicons/arrow-down-20-solid'

export default function Showcase1() {
  return (
    <Section className="bg-body py-30">
      <Columns>
        <Column>
          <Image
            src="/images/portfolio/falling4utah/pexels-falling4utah-1080721.jpg"
            alt="Quis consequat cillum"
            className="object-cover"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            id="services"
          >
            Aliqua reprehenderit adipiscing elit irure veniam lorem
          </Heading>
          <Paragraph>
            Aliqua ut ullamco consequat cupidatat velit ut nulla ullamco
            voluptate aute consectetur pariatur sunt lorem officia anim et sit
            elit do adipiscing sed quis ut
          </Paragraph>
        </Column>
      </Columns>
      <Columns
        reverseColumns
        className="mt-30"
      >
        <Column className="aspect-[8/7] relative">
          <Image
            src="/images/portfolio/pexels-pixabay-269252.jpg"
            alt="Nostrud ipsum magna"
            className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
            alt="Eiusmod enim sint"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading as="h3">Enim aliquip aliquip</Heading>
          <List className="mb-8">
            <Li>Sit consectetur commodo magna nulla in sit</Li>
            <Li>
              Aute sit anim adipiscing aliqua occaecat eiusmod magna ea
              consectetur
            </Li>
            <Li>Laboris lorem veniam</Li>
            <Li>
              Incididunt elit ut et sunt nulla pariatur labore ex commodo do
              aliquip occaecat ea in
            </Li>
            <Li>
              Id excepteur et veniam ut excepteur qui velit elit veniam dolor
              dolore sint aliqua
            </Li>
          </List>
        </Column>
      </Columns>
      <Columns className="mt-20">
        <Column className="relative">
          <Image
            src="/images/portfolio/pexels-pixabay-259962.jpg"
            alt="Id ullamco ex"
            className="object-cover"
            rounded="rounded-r-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading as="h3">Dolore ullamco cillum</Heading>
          <Paragraph>
            Ut enim fugiat eiusmod ut ipsum dolore ea magna minim tempor velit
            ex mollit amet velit sit velit lorem amet non fugiat
          </Paragraph>
          <Paragraph>
            Fugiat do consectetur aliqua anim nostrud aliquip minim nulla lorem
            aliqua aliquip laborum proident qui laboris incididunt ipsum in
            magna adipiscing aute non minim aute
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="#birth-suites"
              icon={arrowDownIcon}
              iconPlacement="after"
            >
              Minim cillum aute sint duis
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
