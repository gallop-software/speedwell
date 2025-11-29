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

export default function Section4() {
  return (
    <Section className="py-30 bg-body-light">
      <Columns reverseColumns>
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/fotoaibe/pexels-fotoaibe-1643384.jpg"
            alt="Quis aliquip magna proident incididunt"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
            alt="Culpa in adipiscing culpa"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
        </Column>
        <Column>
          <Heading as="h2">
            Pariatur velit labore fugiat voluptate enim reprehenderit
          </Heading>
          <Paragraph>
            Deserunt quis lorem ipsum tempor non enim occaecat est fugiat nulla
            et mollit cillum consectetur minim sed est nisi adipiscing ea qui
            qui mollit esse id cupidatat sit commodo nostrud amet lorem non nisi
            deserunt voluptate ullamco est est cupidatat lorem irure elit veniam
            ipsum laborum est ut cillum non aliquip ullamco ex aliqua qui dolor
            ipsum
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/eiusmod-tempor"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Minim esse commodo consectetur minim
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
