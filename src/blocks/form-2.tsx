import {
  Section,
  Heading,
  Form,
  FormInput,
  FormTextArea,
  FormButton,
  FormName,
  FormRadioGroup,
  FormCheckboxGroup,
  Image,
  Accent,
} from '@/components'

export default function Form2() {
  return (
    <Section
      id="contact"
      className="py-20 md:py-30 bg-body2 relative"
    >
      <div className="mx-auto max-w-4xl">
        <Heading
          textAlign="text-center"
          as="h1"
        >
          Let's Build Your Brand Together
        </Heading>
        <Form>
          <FormInput
            name="emailSubject"
            defaultValue="Brand Consultation Request"
            label="Email Subject"
            hidden
          />
          <FormName
            name1="firstName"
            name2="lastName"
            placeholder1="First name*"
            placeholder2="Last name*"
            label1="First Name"
            label2="Last Name"
            requiredFirst
            requiredSecond
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email*"
            label="Email"
            required
          />
          <FormInput
            name="company"
            type="text"
            placeholder="Company/Business Name"
            label="Company"
          />
          <FormInput
            name="phone"
            type="tel"
            placeholder="Phone"
            label="Phone"
          />
          <FormCheckboxGroup
            heading="What services are you interested in?"
            name="services"
            options={[
              'Brand Strategy',
              'Logo Design',
              'Visual Identity',
              'Marketing Consulting',
              'Website Design',
              'Social Media / Digital Marketing',
              'Packaging Design',
              'Print Materials',
            ]}
            label="Services"
          />
          <FormRadioGroup
            heading="What is your estimated budget?"
            name="budget"
            options={[
              'Under $5,000',
              '$5,000 - $10,000',
              '$10,000 - $25,000',
              '$25,000 - $50,000',
              '$50,000+',
              'Not sure yet',
            ]}
            label="Budget"
          />
          <FormRadioGroup
            heading="What is your timeline?"
            name="timeline"
            options={['ASAP', '1-2 weeks', '1 month', '2-3 months', 'Flexible']}
            label="Timeline"
          />
          <FormTextArea
            name="message"
            placeholder="Tell us about your project, goals, and any challenges you're facing*"
            rows={4}
            label="Message"
            required
          />
          <FormButton label="Send Message" />
        </Form>
      </div>
    </Section>
  )
}
