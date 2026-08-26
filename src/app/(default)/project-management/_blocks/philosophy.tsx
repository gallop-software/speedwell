import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'

export default function Philosophy() {
  return (
    <Section className="bg-body-light py-30">
      <Columns>
        <Column className="aspect-4/5 relative">
          <Image
            src="/portfolio/pexels-pixabay-269218.jpg"
            alt="Quality craftsmanship and attention to detail"
            className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
            size="large"
          />
          <Image
            src="/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
            alt="Professional contractor coordination"
            className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
            rounded="rounded-t-full"
            size="large"
          />
        </Column>
        <Column className="py-0 lg:py-10">
          <Heading as="h2">Experience Meets Innovation</Heading>
          <Paragraph>
            With decades of combined experience in residential and commercial
            design, our team has the expertise to handle projects of any scale
            and complexity. We stay current with the latest design trends,
            materials, and technologies while honoring timeless principles of
            beauty, function, and craftsmanship. This balance allows us to
            create spaces that feel both fresh and enduring.
          </Paragraph>
          <Paragraph>
            From initial concepts through final installation, our collaborative
            approach ensures every project benefits from multiple perspectives
            and specialized knowledge. Whether you are renovating a single room
            or designing an entire property, you will work with dedicated
            professionals who are invested in your success and satisfaction. We
            are not just designers, we are your partners in creating spaces that
            enhance your life.
          </Paragraph>
        </Column>
      </Columns>
    </Section>
  )
}
