import {
  Paragraph,
  Heading,
  Button,
  ButtonPlay,
  Buttons,
  Blog,
  Section,
  Grid,
  Card1,
  Card2,
  FancyHeading,
  VimeoAutoPlayer,
  Columns,
  Column,
  Accent,
  Form,
  FormInput,
  FormTextArea,
  FormUpload,
  FormRadioGroup,
  FormCheckboxGroup,
  FormButton,
  FormName,
  Navbar,
  CardContact,
  Image,
} from '@/components'
import phoneIcon from '@iconify/icons-lucide/phone'
import starIcon from '@iconify/icons-lucide/star'
import mapPinIcon from '@iconify/icons-lucide/map-pin'
import printerIcon from '@iconify/icons-lucide/printer'

export default function Content() {
  return (
    <>
      <Navbar />

      {/* Contact Form */}
      <Section className="py-20 md:py-30 bg-body2 relative">
        <Columns
          reverseColumns={false}
          align="items-start"
        >
          <Column className="mb-10">
            <Heading as="h1">Let's Create Your Dream Space</Heading>
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
                placeholder="Tell us about your project*"
                rows={4}
                label="Message"
                required
              />
              <FormButton label="Send Message" />
            </Form>
          </Column>
          <Column className="aspect-[8/9] relative">
            <Image
              src="/images/portfolio/pexels-pixabay-269218.jpg"
              alt="Beautiful interior design space"
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

      {/* Contact Details */}
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
              We'd love to hear about your design project. Whether you're
              looking to transform a single room or redesign your entire home,
              our team is here to bring your vision to life. Schedule a
              consultation at our Design District studio, give us a call, or
              send us a message. We typically respond within 24 hours and offer
              complimentary initial consultations for new clients.
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
                href="https://www.google.com/search?q=webplantmedia+lubbock&sca_esv=fbaa7d3b9c35fdd6&sxsrf=AE3TifPIizRDUI9FeRONIBEaFbM4rTiR2A%3A1761044847022&ei=b2n3aK-WAbigwN4PjsDUqAo&oq=webpla&gs_lp=Egxnd3Mtd2l6LXNlcnAiBndlYnBsYSoCCAAyBBAjGCcyBBAjGCcyEBAAGIAEGLEDGEMYgwEYigUyBxAAGIAEGAoyBRAAGIAEMgUQABiABDIHEAAYgAQYCjIFEAAYgAQyBRAAGIAEMgUQABiABEjVHVD1B1jxC3ADeAGQAQCYAW2gAbMEqgEDMy4zuAEByAEA-AEBmAIJoALcBMICBxAjGLADGCfCAgoQABiwAxjWBBhHwgILEAAYgAQYkQIYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAuGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAgoQIxiABBgnGIoFwgIKEAAYgAQYQxiKBcICERAuGIAEGJECGMcBGIoFGK8BwgIQEC4YgAQYQxjHARiKBRivAcICDRAAGIAEGLEDGEMYigXCAhEQABiABBiRAhixAxiDARiKBcICCxAAGIAEGLEDGIMBmAMAiAYBkAYJkgcDNi4zoAe3P7IHAzMuM7gHzgTCBwUwLjUuNMgHHg&sclient=gws-wiz-serp#mpd=~7629446733757655296/customers/reviews"
                heading="Google Reviews"
                text="See What Our Customers Are Saying"
                icon={starIcon}
              />
              <CardContact
                href="https://maps.app.goo.gl/c8y1wdDrV9quTUSh7"
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
    </>
  )
}

export const metadata = {
  title: 'Contact Us - Interior Design Consultation',
  description:
    'Get in touch with our interior design team for a complimentary consultation. Located in the Design District, we specialize in residential and commercial design projects.',
  slug: 'contact',
  featuredImage: '/images/portfolio/pexels-pixabay-161758.jpg',
  focusKeyword: 'contact interior design',
  readingTimeMinutes: 2,
  publishDate: '2025-09-18T00:00:00Z',
  lastModified: '2025-11-27T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/contact',
  },
  openGraph: {
    title: 'Contact Us - Interior Design Studio',
    description:
      'Schedule your complimentary design consultation today. Our award-winning team is ready to transform your space.',
    image: {
      url: '/images/portfolio/pexels-alex-qian-1180283-2343465.jpg',
      alt: 'Modern interior design studio',
    },
    imageAlt: 'Contact Our Interior Design Studio',
  },
}
