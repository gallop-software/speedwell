import { Section, Heading, Grid } from '@/components'
import { Testimonial3 } from '@/components/testimonial-card'

export default function Testimonial8() {
  return (
    <Section className="py-30 bg-gradient-to-b from-body-light to-body2">
      <Heading
        as="h2"
        textAlign="text-center"
      >
        What Our Clients Say
      </Heading>
      <Grid gap="gap-8">
        <Testimonial3
          name="Jessica & Michael Anderson"
          title="Wedding, June 2024"
          review="Our wedding day was absolutely perfect thanks to this incredible team! Every detail was flawlessly executed, from the ceremony setup to the reception. They handled everything with such professionalism and grace, allowing us to truly enjoy our special day without any stress. We couldn't have asked for better planners!"
          rating={5}
        />
        <Testimonial3
          name="Thomas Reynolds"
          title="Corporate Gala"
          review="Outstanding event coordination for our annual company gala. The team managed 300 guests seamlessly, creating an elegant atmosphere that impressed our clients and employees. The attention to detail, vendor management, and timeline execution were impeccable. Highly recommend for corporate events!"
          rating={5}
        />
        <Testimonial3
          name="Rachel Martinez"
          title="50th Birthday Celebration"
          review="They transformed my birthday vision into reality beyond my wildest dreams! The decor was stunning, the flow of the evening was perfect, and my guests are still talking about what an amazing celebration it was. Their creativity and organizational skills made this milestone truly unforgettable."
          rating={5}
        />
        <Testimonial3
          name="David & Lauren Chen"
          title="Engagement Party"
          review="From our first meeting to the final goodbye, this team was exceptional. They listened to our ideas, offered creative suggestions, and brought everything together beautifully. The venue looked magical, the timeline ran smoothly, and we were able to focus on celebrating with our loved ones."
          rating={5}
        />
        <Testimonial3
          name="Michelle Thompson"
          title="Nonprofit Fundraiser"
          review="Our fundraising gala was the most successful event we've ever hosted, thanks to their expert planning and execution. They coordinated with all our vendors, managed the auction seamlessly, and created an elegant atmosphere that honored our mission. The attention to detail was remarkable!"
          rating={5}
        />
        <Testimonial3
          name="Sarah & James Wilson"
          title="Wedding, September 2024"
          review="We cannot thank this team enough for making our wedding day absolutely perfect! Every moment flowed effortlessly, the design was breathtaking, and they anticipated needs before we even knew we had them. Their calm presence and expertise made our celebration stress-free and magical. Worth every penny!"
          rating={5}
        />
      </Grid>
    </Section>
  )
}
