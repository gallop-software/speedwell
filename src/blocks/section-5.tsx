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
            alt="Modern residential interior with stylish design elements"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
            alt="Contemporary living space with elegant furnishings"
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
            Comprehensive Design Solutions for Every Room
          </Heading>
          <Paragraph>
            Our full-service residential design approach covers every aspect of your home. From initial concept development and space planning to furniture selection and final styling, we handle it all. We specialize in creating cohesive designs that flow seamlessly from room to room while maintaining each space's unique character. Whether you're looking to redesign a single room or transform your entire home, our team works closely with you to ensure every detail aligns with your lifestyle and aesthetic preferences.
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/contact"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Start Your Project Today
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
