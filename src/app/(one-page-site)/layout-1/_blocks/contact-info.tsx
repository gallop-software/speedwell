import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Grid } from '@/components/grid'
import { CardContact } from '@/components/card-contact'
import phoneIcon from '@iconify/icons-lucide/phone'
import starIcon from '@iconify/icons-lucide/star'
import mapPinIcon from '@iconify/icons-lucide/map-pin'
import mailIcon from '@iconify/icons-lucide/mail'

export default function ContactInfo() {
  return (
    <Section className="py-20 md:py-30 bg-accent4 relative">
      <Columns
        gap="gap-10 lg:gap-20"
        cols="grid-cols-1 lg:grid-cols-[2fr_3fr]"
        reverseColumns={false}
        align="items-start"
      >
        <Column>
          <Heading as="h2">Get In Touch</Heading>
          <Paragraph>
            We'd love to hear about your brand vision. Whether you're launching
            a new venture or refreshing an established brand, our team is here
            to bring your story to life. Schedule a consultation at our studio,
            give us a call, or send us a message. We typically respond within 24
            hours and offer complimentary initial consultations for new clients
            to discuss your brand goals and explore how we can help.
          </Paragraph>
        </Column>
        <Column>
          <Grid
            cols="grid-cols-1"
            gap="gap-6"
          >
            <CardContact
              className="group"
              href="tel:5551234567"
              heading="Call"
              text="(555) 123-4567"
              icon={phoneIcon}
              iconColor="text-accent bg-accent3 group-hover:bg-accent3-dark"
              copy="5551234567"
            />
            <CardContact
              href="https://customerreviews.google.com/"
              heading="Google Reviews"
              text="See What Our Customers Are Saying"
              icon={starIcon}
            />
            <CardContact
              href="https://www.google.com/maps"
              heading="Get Directions"
              text="123 Brand Street, Suite 400, New York, NY 10001"
              icon={mapPinIcon}
              copy="123 Brand Street, Suite 400, New York, NY 10001"
            />
            <CardContact
              href="mailto:hello@yourbrand.com"
              heading="Email"
              text="hello@yourbrand.com"
              icon={mailIcon}
              copy="hello@yourbrand.com"
            />
          </Grid>
        </Column>
      </Columns>
    </Section>
  )
}
