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

export default function Content26() {
  return (
    <Section className="py-30 bg-body2">
      <Columns
        reverseColumns={true}
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-4/5 relative">
          <Image
            src="/images/portfolio/pexels-pixabay-161758.jpg"
            alt="Adipiscing deserunt ea aliquip ut sint"
            className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
            alt="Ad eiusmod elit aliquip"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h3"
            styleAs="h2"
          >
            Ad ut anim id pariatur
          </Heading>
          <Paragraph>
            Cillum cupidatat officia mollit dolor laboris voluptate occaecat
            elit veniam dolore nisi in id nulla sit aliquip minim consequat
            mollit incididunt sed ea
          </Paragraph>
          <Paragraph>
            Incididunt esse duis laborum nulla labore labore sed do aliqua in in
            cillum dolor laborum anim duis ipsum tempor magna pariatur ad
            cupidatat sed fugiat tempor dolore laboris excepteur duis fugiat
            aliqua minim exercitation amet sint ut incididunt fugiat nulla velit
            duis fugiat amet incididunt pariatur qui officia in id
          </Paragraph>
          <Paragraph>
            Laboris nisi incididunt nostrud mollit fugiat enim fugiat ex laboris
            do velit aliqua nulla laboris est magna ipsum ut non sint nisi
            reprehenderit culpa consectetur excepteur aliqua est aliqua anim
            nisi amet in adipiscing exercitation ut pariatur ex ad sunt ad irure
            sunt exercitation cupidatat
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="https://spinningbabies.com"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Ipsum fugiat nisi laboris
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
