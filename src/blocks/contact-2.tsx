import {
  Section,
  Columns,
  Column,
  Heading,
  Paragraph,
  Grid,
  CardContact,
} from '@/components'
import phoneIcon from '@iconify/icons-lucide/phone'
import starIcon from '@iconify/icons-lucide/star'
import mapPinIcon from '@iconify/icons-lucide/map-pin'
import printerIcon from '@iconify/icons-lucide/printer'

export default function Contact2() {
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
            We'd love to hear about your design project. Whether you're looking
            to transform a single room or redesign your entire home, our team is
            here to bring your vision to life. Schedule a consultation at our
            Design District studio, give us a call, or send us a message. We
            typically respond within 24 hours and offer complimentary initial
            consultations for new clients.
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
              text="Visit Our Location"
              icon={mapPinIcon}
            />
            <CardContact
              href="tel:5559876543"
              heading="Fax"
              text="(555) 987-6543"
              icon={printerIcon}
            />
          </Grid>
        </Column>
      </Columns>
    </Section>
  )
}
