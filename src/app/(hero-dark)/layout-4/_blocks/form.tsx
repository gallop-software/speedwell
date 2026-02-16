import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Heading } from '@/components/heading'
import { Form as FormComponent, FormInput, FormTextArea, FormButton } from '@/components/form'
import { Image } from '@/components/image'
import { Accent } from '@/components/accent'
import { Paragraph } from '@/components/paragraph'
import { Grid } from '@/components/grid'

export default function Form() {
  return (
    <Section className="py-30 bg-body relative">
      <Columns
        reverseColumns={true}
        align="items-center"
      >
        <Column className="aspect-8/9 relative flex items-center">
          <div className="relative w-full">
            <Image
              src="/images/layout-4/pexels-reneterp-1581384.jpg"
              alt="Elegant restaurant interior dining space"
              className="object-cover w-full h-full"
              rounded="rounded-2xl"
              size="large"
              lazy={false}
            />
            <Accent
              color="text-body2"
              className="absolute -top-[2%] lg:-top-[7%] left-[2%] lg:right-[5%] xl:-right-[10%] z-30 -rotate-10"
              size="large"
            >
              Taste Life
            </Accent>
          </div>
        </Column>
        <Column>
          <Heading as="h2">Make a Reservation</Heading>
          <Paragraph>
            Experience exceptional dining in our thoughtfully designed space.
            Book your table today and let us create an unforgettable culinary
            experience for you.
          </Paragraph>
          <FormComponent classname="space-y-2">
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
              placeholder="Phone Number*"
              label="Phone"
              required
            />
            <Grid
              cols="grid-cols-1 md:grid-cols-2"
              gap="gap-2"
            >
              <FormInput
                name="date"
                type="date"
                placeholder="Reservation Date*"
                label="Date"
                required
                timezone="America/Chicago"
              />
              <FormInput
                name="time"
                type="time"
                placeholder="Preferred Time*"
                label="Time"
                required
                minHour={15}
                maxHour={22}
                maxMinute={0}
                timezone="America/Chicago"
              />
            </Grid>
            <FormInput
              name="guests"
              type="number"
              placeholder="Number of Guests*"
              label="Guests"
              required
            />
            <FormTextArea
              name="message"
              placeholder="Special requests or dietary requirements"
              rows={2}
              label="Special Requests"
            />
            <FormButton
              name="submit"
              label="Request Reservation"
            />
          </FormComponent>
        </Column>
      </Columns>
    </Section>
  )
}
