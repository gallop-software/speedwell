import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Heading } from '@/components/heading'
import { Form, FormInput, FormTextArea, FormButton } from '@/components/form'
import { Image } from '@/components/image'
import { Accent } from '@/components/accent'

export default function Form1() {
  return (
    <Section className="py-20 md:py-30 bg-body2 relative">
      <Columns
        reverseColumns={false}
        align="items-start"
      >
        <Column className="mb-10">
          <Heading as="h1">Let's Create Your Dream Space</Heading>
          <Form>
            <FormInput
              name="emailSubject"
              defaultValue="Contact Form"
              label="Email Subject"
              hidden
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email*"
              label="Email"
              required
            />
            <FormInput
              name="phone"
              type="tel"
              placeholder="Phone*"
              label="Phone"
              required
            />
            <FormInput
              name="subject"
              type="text"
              placeholder="Subject*"
              label="Subject"
              required
            />
            <FormTextArea
              name="message"
              placeholder="Tell us about your project*"
              rows={4}
              label="Message"
              required
            />
            <FormButton
              name="submit"
              label="Send Message"
            />
          </Form>
        </Column>
        <Column className="aspect-[8/9] relative">
          <Image
            src="/portfolio/pexels-pixabay-269218.jpg"
            alt="Beautiful interior design space"
            className="object-cover absolute inset-0 w-full h-full"
            size="large"
            lazy={false}
          />
          <Accent
            className="absolute -top-[5%] lg:-top-[10%] right-[5%] lg:right-[5%] xl:-right-[10%] z-30 -rotate-[10deg]"
            color="text-body"
          >
            connect
          </Accent>
        </Column>
      </Columns>
    </Section>
  )
}
