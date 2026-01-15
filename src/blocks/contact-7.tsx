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
  Paragraph,
} from '@/components'

export default function Contact7() {
  return (
    <Section className="py-20 md:py-30 bg-body relative">
      <Columns
        reverseColumns={false}
        align="items-center"
      >
        <Column className="mb-10">
          <Heading
            as="h2"
            margin="mb-2"
          >
            Make a Reservation
          </Heading>
          <Paragraph className="mb-4 text-body-muted text-sm">
            Experience exceptional dining in our thoughtfully designed space.
            Book your table today and let us create an unforgettable culinary
            experience for you.
          </Paragraph>
          <Form classname="space-y-2">
            <FormInput
              name="emailSubject"
              defaultValue="Reservation Request"
              label="Email Subject"
              hidden
            />
            <FormInput
              name="name"
              type="text"
              placeholder="Full Name*"
              label="Name"
              required
              className="!p-2.5 text-sm"
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email*"
              label="Email"
              required
              className="!p-2.5 text-sm"
            />
            <FormInput
              name="phone"
              type="tel"
              placeholder="Phone Number*"
              label="Phone"
              required
              className="!p-2.5 text-sm"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <FormInput
                name="date"
                type="date"
                placeholder="Reservation Date*"
                label="Date"
                required
                className="!p-2.5 text-sm"
              />
              <FormInput
                name="time"
                type="time"
                placeholder="Preferred Time*"
                label="Time"
                required
                className="!p-2.5 text-sm"
              />
            </div>
            <FormInput
              name="guests"
              type="number"
              placeholder="Number of Guests*"
              label="Guests"
              required
              className="!p-2.5 text-sm"
            />
            <FormTextArea
              name="message"
              placeholder="Special requests or dietary requirements"
              rows={2}
              label="Special Requests"
              className="!p-2.5 text-sm"
            />
            <FormButton label="Request Reservation" />
          </Form>
        </Column>
        <Column className="aspect-[8/9] relative flex items-center">
          <div className="relative w-full">
            <Image
              src="/images/layout-4/pexels-reneterp-1581384.jpg"
              alt="Elegant restaurant interior dining space"
              className="object-cover w-full h-full rounded-2xl"
              size="large"
              lazy={false}
            />
            <Accent
              className="absolute -top-[5%] lg:-top-[10%] right-[5%] lg:right-[5%] xl:-right-[10%] z-30 -rotate-[10deg] text-body2"
              size="large"
            >
              Reserve Your Table
            </Accent>
          </div>
        </Column>
      </Columns>
    </Section>
  )
}
