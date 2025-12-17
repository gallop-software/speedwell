import { Section, Heading, Grid } from '@/components'

interface TestimonialCardProps {
  name: string
  title: string
  review: string
  rating?: number
}

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-accent"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function TestimonialCard({
  name,
  title,
  review,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} />
        ))}
      </div>

      {/* Review */}
      <p className="text-body-muted mb-6 leading-relaxed flex-grow">{review}</p>

      {/* Author */}
      <div className="mt-auto">
        <p className="font-semibold text-lg text-body-dark">{name}</p>
        <p className="text-sm text-body-muted">{title}</p>
      </div>
    </div>
  )
}

export default function Testimonial6() {
  return (
    <Section className="py-20 bg-gradient-to-b from-body-light to-body2">
      <Heading
        as="h2"
        margin="mb-16"
        className="text-center"
      >
        Happy Customers
      </Heading>
      <Grid gap="gap-8">
        <TestimonialCard
          name="Emily Richardson"
          title="Bride"
          review="Our wedding photos are absolutely breathtaking! Every moment was captured with such artistry and emotion. The photographer made us feel so comfortable and the results exceeded our wildest dreams. These photos will be treasured for generations."
          rating={5}
        />
        <TestimonialCard
          name="Marcus Johnson"
          title="Corporate Client"
          review="Professional, creative, and efficient. The headshots and team photos turned out incredible. The attention to lighting and composition made everyone look their absolute best. Highly recommend for any business photography needs."
          rating={5}
        />
        <TestimonialCard
          name="Sarah Chen"
          title="Expecting Mother"
          review="The maternity shoot was magical! Every angle was perfectly captured with such care and creativity. The photographer made me feel beautiful and confident. The photos are stunning works of art that celebrate this special time in my life."
          rating={5}
        />
        <TestimonialCard
          name="David Martinez"
          title="Small Business Owner"
          review="The product photography transformed our online store. Sales increased immediately after updating our photos. The quality and attention to detail is exceptional. Every shot perfectly showcases our products in the best possible light."
          rating={5}
        />
        <TestimonialCard
          name="Jennifer Walsh"
          title="Family Portrait Client"
          review="Our family photos are absolutely perfect! The photographer captured the genuine love and connection between us all. Even our toddler cooperated thanks to their patience and fun approach. These portraits will hang in our home forever."
          rating={5}
        />
        <TestimonialCard
          name="Robert Thompson"
          title="High School Senior"
          review="My senior portraits are amazing! The photographer helped me feel relaxed and brought out my personality in every shot. The variety of locations and poses gave me so many great options to choose from. Best decision ever!"
          rating={5}
        />
      </Grid>
    </Section>
  )
}
