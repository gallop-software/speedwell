import {
  Section,
  Heading,
  Paragraph,
  Form,
  FormInput,
  FormTextArea,
  FormUpload,
  FormRadioGroup,
  FormCheckboxGroup,
  FormButton,
  FormName,
} from '@/components'

export default function Application1() {
  return (
    <Section className="py-20 md:py-30 bg-body2 relative">
      <Heading
        as="h2"
        className="text-center"
      >
        Officia dolor
      </Heading>
      <Form classname="Non aliqua">
        <FormInput
          name="emailSubject"
          defaultValue="Job Application"
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
          name="phone"
          type="tel"
          placeholder="Phone*"
          label="Phone"
          required
        />
        <FormRadioGroup
          heading="Do you currently live in Lubbock? Planning on relocating to Lubbock?"
          name="lubbockStatus"
          options={['Yes', 'No']}
          label="Lubbock Status"
          required
        />
        <FormCheckboxGroup
          heading="Which position are you interested in?*"
          name="position"
          options={['Midwife', 'Student Midwife', 'Receptionist']}
          label="Position"
        />
        <FormTextArea
          name="defineMidwifery"
          placeholder="Please define what midwifery is"
          label="Definition of Midwifery"
          rows={4}
        />
        <FormTextArea
          name="hearAboutUs"
          placeholder="How did you hear about Speedwell?*"
          label="How Did You Hear About Us?"
          rows={3}
          required
        />
        <FormTextArea
          name="interestReason"
          placeholder="Why are you interested in working with Speedwell?"
          rows={3}
          label="Reason for Interest"
        />
        <FormTextArea
          name="birthExperience"
          placeholder="Describe any previous birth work experience in detail:"
          rows={4}
          label="Previous Birth Experience"
        />
        <FormUpload
          id="files"
          name="files"
          label="Uploaded Files"
          multiple
        />
        <Heading
          as="h3"
          margin="mb-0 mt-8"
        >
          Et ullamco in
        </Heading>
        <Paragraph margin="my-0">
          Laboris minim laborum voluptate non voluptate in enim aliquip anim
          deserunt
        </Paragraph>
        <Heading
          as="h4"
          margin="mb-0"
        >
          Amet laboris quis
        </Heading>
        <FormName
          name1="ref1FirstName"
          name2="ref1LastName"
          placeholder1="First name*"
          placeholder2="Last name*"
          requiredFirst
          requiredSecond
          label1="Reference 1 First Name"
          label2="Reference 1 Last Name"
        />
        <FormInput
          name="ref1Email"
          type="email"
          placeholder="Email*"
          required
          label="Reference 1 Email"
        />
        <FormInput
          name="ref1Phone"
          type="tel"
          placeholder="Phone*"
          required
          label="Reference 1 Phone"
        />
        <Heading
          as="h4"
          margin="mb-0"
        >
          Ex commodo mollit
        </Heading>
        <FormName
          name1="ref2FirstName"
          name2="ref2LastName"
          placeholder1="First name"
          placeholder2="Last name"
          label1="Reference 2 First Name"
          label2="Reference 2 Last Name"
        />
        <FormInput
          name="ref2Email"
          type="email"
          placeholder="Email"
          label="Reference 2 Email"
        />
        <FormInput
          name="ref2Phone"
          type="tel"
          placeholder="Phone"
          label="Reference 2 Phone"
        />
        <Heading
          as="h4"
          margin="mb-0"
        >
          Veniam anim nisi
        </Heading>
        <FormName
          name1="ref3FirstName"
          name2="ref3LastName"
          placeholder1="First name"
          placeholder2="Last name"
          label1="Reference 3 First Name"
          label2="Reference 3 Last Name"
        />
        <FormInput
          name="ref3Email"
          type="email"
          placeholder="Email"
          label="Reference 3 Email"
        />
        <FormInput
          name="ref3Phone"
          type="tel"
          placeholder="Phone"
          label="Reference 3 Phone"
        />
        <FormButton
          label="Submit Application"
          submitMessage="Application submitted."
        />
      </Form>
    </Section>
  )
}
