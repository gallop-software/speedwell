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
            Experience The Timmerman Difference in Every Detail
          </Heading>
          <Paragraph>
            Working with our team means personalized service creative expertise
            proven processes seamless coordination trusted vendor relationships
            quality craftsmanship meticulous attention transparent communication
            realistic timelines budget management stress-free experience
            beautiful results functional spaces elevated aesthetics lasting
            value increased property appeal enhanced daily living exceptional
            design solutions tailored perfectly
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/eiusmod-tempor"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Start Your Design Journey Today
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
