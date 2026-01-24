import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Quote } from '@/components/quote'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function Content7() {
  return (
    <Section className="py-30 bg-body-dark">
      <Columns
        reverseColumns={false}
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-[4/5] relative">
          <Image
            src="/images/portfolio/pexels-pixabay-161758.jpg"
            alt="Elegant dining room with sophisticated decor"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
            alt="Stylish home office with functional design"
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
            Sustainable & Smart Design Solutions
          </Heading>
          <Quote>
            Creating beautiful spaces that are as sustainable as they are
            stunning
          </Quote>
          <Paragraph>
            We're committed to designing homes that not only look beautiful but
            also contribute to a healthier planet. Our team carefully selects
            eco-friendly materials, energy-efficient lighting, and sustainable
            furnishings whenever possible. We believe that responsible design
            doesn't mean compromising on style or quality – in fact, many of the
            most beautiful materials available today are also the most
            sustainable.
          </Paragraph>
          <Paragraph>
            Smart home integration is another area where we excel. From
            automated lighting and climate control to integrated entertainment
            systems, we seamlessly incorporate technology that enhances your
            comfort and convenience. Our designs ensure that all technical
            elements are thoughtfully concealed, maintaining the aesthetic
            integrity of your space while providing modern functionality.
          </Paragraph>
          <Paragraph>
            We also prioritize durability and timeless design principles that
            ensure your investment stands the test of time. By selecting
            high-quality materials and classic design elements with contemporary
            touches, we create interiors that remain relevant and beautiful for
            decades. Our approach focuses on creating spaces that grow with you,
            adapting to your changing needs while maintaining their fundamental
            appeal.
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/portfolio"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              View Our Portfolio
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
