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

export default function Content33() {
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
            Comprehensive Residential and Commercial Design Solutions
          </Heading>
          <Paragraph>
            Our full-service interior design approach transforms ordinary spaces
            into extraordinary environments through thoughtful planning expert
            execution and meticulous attention to every detail
          </Paragraph>
        </Column>
      </Columns>
      <Columns
        reverseColumns
        className="mt-30"
      >
        <Column className="aspect-[29/28] relative">
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
          <Heading as="h3">What We Offer Clients</Heading>
          <List className="mb-8">
            <Li>Complete space planning and layout optimization</Li>
            <Li>
              Custom furniture selection and bespoke piece design for perfect
              integration
            </Li>
            <Li>Expert color consultation services</Li>
            <Li>
              Kitchen and bathroom design featuring premium materials and
              innovative storage solutions
            </Li>
            <Li>
              Full project management from initial concept through final
              installation and styling
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
          <Heading as="h3">Our Design Philosophy</Heading>
          <Paragraph>
            We believe great design enhances daily living through thoughtful
            space planning beautiful materials and personalized details that
            reflect your lifestyle and aspirations
          </Paragraph>
          <Paragraph>
            Each project receives dedicated attention collaborative
            communication and creative solutions tailored to your specific needs
            budget timeline ensuring exceptional results that exceed
            expectations
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="#birth-suites"
              icon={arrowDownIcon}
              iconPlacement="after"
            >
              View Our Featured Projects
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
