import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Buttons } from '@/components/buttons'
import { Button } from '@/components/button'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

export default function Content8() {
  return (
    <Section className="py-30 bg-body">
      <Columns
        reverseColumns={true}
        gap="gap-10 lg:gap-20"
      >
        <Column>
          <Image
            src="/portfolio/pexels-jworks1124-342800.jpg"
            alt="Contemporary residential space with thoughtful design details"
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
            From Concept to Completion: Our Seamless Process
          </Heading>
          <Paragraph>
            We've refined our design process to make your experience as smooth
            and enjoyable as possible. Starting with an in-depth consultation,
            we move through concept development, detailed planning, and
            meticulous execution. Throughout the project, we maintain clear
            communication and provide regular updates, ensuring you're involved
            at every stage while we handle all the complex details. Our
            established relationships with trusted contractors and suppliers
            mean we can deliver exceptional results on time and within budget.
          </Paragraph>
          <Buttons>
            <Button
              variant="primary"
              href="/contact"
              icon={arrowRightIcon}
              iconPlacement="after"
            >
              Schedule Your Consultation
            </Button>
          </Buttons>
        </Column>
      </Columns>
    </Section>
  )
}
