import { Section, Heading, Grid, Paragraph } from '@/components'

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
      <Paragraph
        color="text-body-muted"
        margin="mb-6"
        lineHeight="leading-relaxed"
        className="flex-grow"
      >
        {review}
      </Paragraph>

      {/* Author */}
      <div className="mt-auto">
        <Paragraph
          fontWeight="font-semibold"
          fontSize="text-lg"
          color="text-body-dark"
          margin="mb-0"
        >
          {name}
        </Paragraph>
        <Paragraph
          fontSize="text-sm"
          color="text-body-muted"
          margin="mb-0"
        >
          {title}
        </Paragraph>
      </div>
    </div>
  )
}

export default function Testimonial8() {
  return (
    <Section className="py-20 bg-gradient-to-b from-body-light to-body2">
      <Heading
        as="h2"
        margin="mb-16"
        textAlign="text-center"
      >
        What Our Clients Say
      </Heading>
      <Grid gap="gap-8">
        <TestimonialCard
          name="Jessica & Michael Anderson"
          title="Wedding, June 2024"
          review="Our wedding day was absolutely perfect thanks to this incredible team! Every detail was flawlessly executed, from the ceremony setup to the reception. They handled everything with such professionalism and grace, allowing us to truly enjoy our special day without any stress. We couldn't have asked for better planners!"
          rating={5}
        />
        <TestimonialCard
          name="Thomas Reynolds"
          title="Corporate Gala"
          review="Outstanding event coordination for our annual company gala. The team managed 300 guests seamlessly, creating an elegant atmosphere that impressed our clients and employees. The attention to detail, vendor management, and timeline execution were impeccable. Highly recommend for corporate events!"
          rating={5}
        />
        <TestimonialCard
          name="Rachel Martinez"
          title="50th Birthday Celebration"
          review="They transformed my birthday vision into reality beyond my wildest dreams! The decor was stunning, the flow of the evening was perfect, and my guests are still talking about what an amazing celebration it was. Their creativity and organizational skills made this milestone truly unforgettable."
          rating={5}
        />
        <TestimonialCard
          name="David & Lauren Chen"
          title="Engagement Party"
          review="From our first meeting to the final goodbye, this team was exceptional. They listened to our ideas, offered creative suggestions, and brought everything together beautifully. The venue looked magical, the timeline ran smoothly, and we were able to focus on celebrating with our loved ones."
          rating={5}
        />
        <TestimonialCard
          name="Michelle Thompson"
          title="Nonprofit Fundraiser"
          review="Our fundraising gala was the most successful event we've ever hosted, thanks to their expert planning and execution. They coordinated with all our vendors, managed the auction seamlessly, and created an elegant atmosphere that honored our mission. The attention to detail was remarkable!"
          rating={5}
        />
        <TestimonialCard
          name="Sarah & James Wilson"
          title="Wedding, September 2024"
          review="We cannot thank this team enough for making our wedding day absolutely perfect! Every moment flowed effortlessly, the design was breathtaking, and they anticipated needs before we even knew we had them. Their calm presence and expertise made our celebration stress-free and magical. Worth every penny!"
          rating={5}
        />
      </Grid>
    </Section>
  )
}
