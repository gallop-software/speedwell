import {
  Section,
  Columns,
  Column,
  Image,
  Accent,
  Heading,
  Paragraph,
  Buttons,
  Button,
} from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function Section1() {
  return (
    <Section className="py-20 md:py-30 lg:pb-0 bg-body2 relative">
      <div className="absolute w-[44%] border-r border-b border-black left-0 -top-30 bottom-auto h-[500px] sm:h-[600px] md:h-[700px] lg:bottom-60 lg:h-auto pointer-events-none"></div>
      <Columns reverseColumns={false}>
        <Column className="aspect-[8/9] relative lg:-mb-20">
          <Image
            src="/images/portfolio/pexels-pixabay-276724.jpg"
            alt="Lorem anim pariatur laborum eiusmod labore"
            className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
            alt="Duis tempor duis labore duis"
            className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
            rounded="rounded-b-none rounded-t-full"
            size="large"
          />
          <Accent
            className="absolute bottom-[35%] left-4 z-30"
            color="text-white"
          >
            artistry
          </Accent>
        </Column>
        <Column className="mb-10">
          <Heading as="h2">Residential Design That Feels Like Home</Heading>
          <Paragraph>
            Whether you're renovating a single room or redesigning your entire
            home, our residential design services bring fresh perspective and
            creative solutions to every project. We specialize in creating
            inviting living spaces that combine luxurious comfort with everyday
            functionality, thoughtfully curated to reflect your personal taste
            and lifestyle needs.
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/residential"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              View Portfolio
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
