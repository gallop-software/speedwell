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

export default function Section5() {
  return (
    <Section className="bg-body py-30">
      <Columns gap="gap-10 lg:gap-20">
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/pexels-pixabay-279719.jpg"
            alt="Minim nulla fugiat minim ad ea"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
            alt="Mollit amet duis"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading
            as="h2"
            id="services"
          >
            Mollit sint anim consectetur sint ut sed mollit deserunt
          </Heading>
          <Paragraph>
            Cillum qui cillum sed exercitation eiusmod qui ad exercitation
            cillum aliqua consectetur consequat nisi ea pariatur consequat
            officia voluptate ex nisi quis enim laboris amet veniam nisi elit
            consequat elit proident ea pariatur ex qui nulla incididunt
            consectetur cillum reprehenderit mollit enim lorem ipsum magna ea
            aliqua ex esse in aliquip excepteur ex duis labore fugiat laboris
            reprehenderit ullamco adipiscing pariatur tempor fugiat lorem est
            laborum occaecat aliquip enim incididunt ullamco laboris eiusmod
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/lorem-ipsum"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Nostrud esse minim nulla dolor velit
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
