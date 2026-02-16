import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'

export default function Content5() {
  return (
    <Section className="py-30 bg-body2">
      <Columns
        reverseColumns={false}
        gap="gap-10 lg:gap-20"
      >
        <Column className="aspect-[4/5] relative">
          <Image
            src="/portfolio/pexels-leah-newhouse-50725-6480707.jpg"
            alt="Cozy living space with warm and inviting atmosphere"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg"
            alt="Modern bathroom with spa-like features"
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
            Award-Winning Design Excellence
          </Heading>
          <Paragraph>
            Our commitment to excellence has earned us recognition from leading
            industry organizations and the trust of discerning homeowners. With
            over a decade of experience transforming residential spaces, we've
            built a reputation for delivering designs that exceed expectations
            while respecting timelines and budgets.
          </Paragraph>
          <Paragraph>
            What sets Speedwell apart is our holistic approach to residential
            design. We don't just focus on aesthetics – we consider how you
            live, work, and relax in your space. Our designs enhance natural
            light, improve flow between rooms, and create harmonious
            environments that promote well-being. We collaborate with skilled
            craftspeople and artisans to ensure every element, from custom
            cabinetry to lighting fixtures, is executed to perfection.
          </Paragraph>
          <Paragraph>
            Ready to transform your home? Contact us today to schedule a
            consultation and discover how we can bring your vision to life with
            our comprehensive residential interior design services.
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
