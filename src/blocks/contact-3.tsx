import {
  Section,
  Columns,
  Column,
  Heading,
  Form,
  FormInput,
  FormTextArea,
  FormButton,
  Image,
  Accent,
} from '@/components'

export default function Contact3() {
  return (
    <Section className="py-20 md:py-30 bg-body2 relative">
      <Columns
        reverseColumns={false}
        align="items-start"
      >
        <Column className="mb-10">
          <Heading as="h1">Let's Build Your Brand Together</Heading>
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
              placeholder="Tell us about your brand*"
              rows={4}
              label="Message"
              required
            />
            <FormButton label="Send Message" />
          </Form>
        </Column>
        <Column className="aspect-[8/9] relative">
          <Image
            src="/images/layout-1/pexels-edmond-dantes-4344617.jpg"
            alt="Creative branding workspace"
            className="object-cover absolute inset-0 w-full h-full"
            size="large"
            lazy={false}
          />
          <Accent
            className="absolute -top-[5%] lg:-top-[10%] right-[5%] lg:right-[5%] xl:-right-[10%] z-30 -rotate-[10deg]"
            color="text-white"
          >
            connect
          </Accent>
        </Column>
      </Columns>
    </Section>
  )
}
