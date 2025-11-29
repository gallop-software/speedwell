import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Quote,
  Paragraph,
  Buttons,
  Button,
} from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function Section7() {
  return (
    <Section className="py-30 bg-body-dark">
      <Columns
        reverseColumns={false}
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/pexels-pixabay-161758.jpg"
            alt="Quis labore et irure sint"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
            alt="Labore non non et mollit aute"
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
            Eiusmod in
          </Heading>
          <Quote>
            Sed dolore enim occaecat laboris nulla eiusmod mollit et est quis
            lorem
          </Quote>
          <Paragraph>
            Sint fugiat anim magna fugiat do excepteur in eiusmod pariatur qui
            aute amet qui labore adipiscing velit minim veniam tempor incididunt
            amet dolor aliqua occaecat nisi culpa nostrud sit officia veniam
            ullamco ut occaecat dolore non quis elit exercitation officia labore
            cillum aliqua duis do consectetur anim velit magna nisi cillum qui
            excepteur sint ut qui enim est fugiat adipiscing aliquip
          </Paragraph>
          <Paragraph>
            Ea do lorem labore proident aliqua dolor labore et commodo velit non
            officia aliqua id et ea dolor veniam nostrud qui duis incididunt
            aute sunt ex duis occaecat quis amet sit ut dolor nisi fugiat
            laborum qui proident ex tempor irure cillum deserunt consectetur sit
          </Paragraph>
          <Paragraph>
            Voluptate cillum ut adipiscing sunt anim occaecat cillum tempor sed
            mollit ullamco enim nulla ea consectetur sunt excepteur velit aute
            incididunt voluptate nostrud exercitation nisi voluptate minim
            aliquip dolore aute dolor mollit ut reprehenderit lorem incididunt
            sit proident ut dolor nostrud dolore velit qui aute eiusmod nisi
            amet minim labore amet minim
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/laboris-nisi"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Cillum ex laborum id nulla
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
