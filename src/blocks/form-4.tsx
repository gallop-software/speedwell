import {
  Section,
  Heading,
  Paragraph,
  Form,
  FormInput,
  FormTextArea,
  FormButton,
} from '@/components'

export default function Form4() {
  return (
    <Section className="py-20 md:py-30 bg-white">
      <div className="max-w-3xl mx-auto">
        <Heading
          as="h2"
          margin="mb-6"
          textAlign="text-center"
        >
          Request Photography Pricing
        </Heading>
        <Paragraph textAlign="text-center" color="text-body-muted" margin="mb-12">
          For more information please get in touch using the form below:
        </Paragraph>

        <Form>
          <FormInput
            name="emailSubject"
            defaultValue="Photography Pricing Request"
            label="Email Subject"
            hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FormInput
              name="name"
              type="text"
              placeholder="Name *"
              label="Name"
              required
              className="!bg-accent/5"
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email *"
              label="Email"
              required
              className="!bg-accent/5"
            />
          </div>
          <FormTextArea
            name="message"
            placeholder="Message *"
            rows={6}
            label="Message"
            required
            className="!bg-accent/5"
          />
          <div className="flex justify-center mt-8">
            <FormButton label="Send message" />
          </div>
        </Form>
      </div>
    </Section>
  )
}
