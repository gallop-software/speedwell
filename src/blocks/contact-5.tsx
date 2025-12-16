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

export default function Contact5() {
  return (
    <Section className="py-20 md:py-30 bg-accent4 relative" id="contact">
      <Columns
        gap="gap-10 lg:gap-20"
        cols="grid-cols-1 lg:grid-cols-[2fr_3fr]"
        reverseColumns={false}
        align="items-start"
      >
        <Column>
          <Heading as="h2">Get In Touch</Heading>
          <Paragraph>
            Ready to transform your workflow? Whether you're looking to streamline operations, boost team productivity, or scale your business, our platform is designed to help you succeed. Reach out to our team for a personalized demo, schedule a consultation, or explore how our solution can work for you. We typically respond within a few hours and offer free trials for qualified businesses.
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
              heading="Sales"
              text="(555) 123-4567"
              icon={phoneIcon}
              iconColor="text-accent bg-accent3 group-hover:bg-accent3-dark"
            />
            <CardContact
              href="https://customerreviews.google.com/"
              heading="Customer Reviews"
              text="Read Success Stories"
              icon={starIcon}
            />
            <CardContact
              href="https://www.google.com/maps"
              heading="Our Office"
              text="Visit Our Location"
              icon={mapPinIcon}
            />
            <CardContact
              href="mailto:support@example.com"
              heading="Support"
              text="support@example.com"
              icon={printerIcon}
            />
          </Grid>
        </Column>
      </Columns>
    </Section>
  )
}
