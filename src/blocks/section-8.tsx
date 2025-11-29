import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Buttons,
  Button,
} from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function Section8() {
  return (
    <Section className="py-30 bg-body">
      <Columns
        reverseColumns={true}
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/images/portfolio/pexels-jworks1124-342800.jpg"
            alt="Cupidatat reprehenderit qui eiusmod id laboris excepteur"
            className="object-cover"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Do magna eiusmod quis laborum elit proident
          </Heading>
          <Paragraph>
            Minim anim nostrud nostrud id ea quis in non proident cupidatat
            consequat fugiat anim dolore lorem veniam magna proident aliquip et
            laboris ex sit aliquip irure consequat duis aliqua quis esse enim
            magna voluptate ipsum enim elit cupidatat adipiscing reprehenderit
            consequat enim sunt fugiat sit irure in consectetur eiusmod proident
            excepteur reprehenderit
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/adipiscing-elit-sed"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Minim laboris adipiscing et aliqua veniam
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
