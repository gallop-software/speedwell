import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import {
  Form as FormComponent,
  FormInput,
  FormTextArea,
  FormRadioGroup,
  FormButton,
  DatePickerInput,
  TimePickerInput,
} from '@/components/form'
import { Grid } from '@/components/grid'

export default function Form() {
  return (
    <Section className="py-30 bg-body">
      <div className="max-w-3xl mx-auto">
        <Heading
          as="h2"
          margin="mb-6"
          textAlign="text-center"
        >
          Request Photography Pricing
        </Heading>
        <Paragraph
          textAlign="text-center"
          color="text-body-muted"
          margin="mb-12"
        >
          For more information please get in touch using the form below:
        </Paragraph>

        <FormComponent>
          <FormInput
            name="emailSubject"
            defaultValue="Photography Pricing Request"
            label="Email Subject"
            hidden
          />
          <FormInput
            name="name"
            type="text"
            placeholder="Name *"
            label="Name"
            required
            className="bg-accent/5!"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email *"
            label="Email"
            required
            className="bg-accent/5!"
          />
          <FormRadioGroup
            heading="Select a Package"
            name="package"
            label="Package"
            options={[
              'Essential - $299 (1-hour session, 10 photos)',
              'Professional - $599 (3-hour session, 40 photos)',
              'Premium - $1,499 (Full day, 150+ photos)',
            ]}
            defaultValue="Professional - $599 (3-hour session, 40 photos)"
            required
          />
          <Grid
            cols="grid-cols-1 md:grid-cols-2"
            gap="gap-6"
          >
            <DatePickerInput
              name="preferredDate"
              placeholder="Select a date"
              label="Preferred Date"
              required
              className="bg-accent/5!"
            />
            <TimePickerInput
              name="preferredTime"
              placeholder="Select a time"
              label="Preferred Time"
              minHour={9}
              maxHour={17}
              interval={30}
              required
              className="bg-accent/5!"
            />
          </Grid>
          <FormTextArea
            name="message"
            placeholder="Message *"
            rows={6}
            label="Message"
            required
            className="bg-accent/5!"
          />
          <div className="flex justify-center mt-8">
            <FormButton
              name="submit"
              className="w-full"
              label="Send message"
            />
          </div>
        </FormComponent>
      </div>
    </Section>
  )
}
