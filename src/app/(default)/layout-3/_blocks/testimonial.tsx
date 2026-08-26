import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Grid } from '@/components/grid'
import { CardTestimonial3 } from '@/components/card-testimonial-3'

export default function Testimonial() {
  return (
    <Section className="py-30 bg-linear-to-b from-body-light to-body2">
      <Heading
        as="h2"
        margin="mb-16"
        textAlign="text-center"
      >
        Happy Customers
      </Heading>
      <Grid gap="gap-8">
        <CardTestimonial3
          name="Emily Richardson"
          title="Bride"
          review="Our wedding photos are absolutely breathtaking! Every moment was captured with such artistry and emotion. The photographer made us feel so comfortable and the results exceeded our wildest dreams. These photos will be treasured for generations."
          rating={5}
          image="/images/profiles/pexels-ekaterina-bolovtsova-5393594.jpg"
        />
        <CardTestimonial3
          name="Marcus Johnson"
          title="Corporate Client"
          review="Professional, creative, and efficient. The headshots and team photos turned out incredible. The attention to lighting and composition made everyone look their absolute best. Highly recommend for any business photography needs."
          rating={5}
          image="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
        />
        <CardTestimonial3
          name="Sarah Chen"
          title="Expecting Mother"
          review="The maternity shoot was magical! Every angle was perfectly captured with such care and creativity. The photographer made me feel beautiful and confident. The photos are stunning works of art that celebrate this special time in my life."
          rating={5}
          image="/images/profiles/pexels-maide-arslan-128712163-31750448.jpg"
        />
        <CardTestimonial3
          name="David Martinez"
          title="Small Business Owner"
          review="The product photography transformed our online store. Sales increased immediately after updating our photos. The quality and attention to detail is exceptional. Every shot perfectly showcases our products in the best possible light."
          rating={5}
          image="/images/profiles/pexels-retamozo-gonzalo-454802313-26926485.jpg"
        />
        <CardTestimonial3
          name="Jennifer Walsh"
          title="Family Portrait Client"
          review="Our family photos are absolutely perfect! The photographer captured the genuine love and connection between us all. Even our toddler cooperated thanks to their patience and fun approach. These portraits will hang in our home forever."
          rating={5}
          image="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
        />
        <CardTestimonial3
          name="Robert Thompson"
          title="High School Senior"
          review="My senior portraits are amazing! The photographer helped me feel relaxed and brought out my personality in every shot. The variety of locations and poses gave me so many great options to choose from. Best decision ever!"
          rating={5}
          image="/images/profiles/pexels-linkedin-2182970.jpg"
        />
      </Grid>
    </Section>
  )
}
