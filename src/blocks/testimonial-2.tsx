import { Section } from '@/components/section'
import { FancyHeading } from '@/components/fancy-heading'
import { Swiper } from '@/components/swiper'
import { CardTestimonial1 } from '@/components/card-testimonial-1'
import { Quote } from '@/components/quote'

export default function Testimonial2() {
  return (
    <Section className="bg-body2 py-20">
      <FancyHeading
        text="Client Success Stories"
        accent="what our clients say"
      />
      <Swiper>
        <CardTestimonial1
          img="/images/profiles/pexels-nkhajotia-1516680.jpg"
          cite="James Mitchell"
        >
          <Quote>
            Working with this team was an absolute dream. They transformed our
            outdated living room into a modern, sophisticated space that
            perfectly reflects our style. Their attention to detail and ability
            to understand our vision made the entire process seamless. We
            couldn't be happier with the results!
          </Quote>
        </CardTestimonial1>
        <CardTestimonial1
          img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
          cite="Michael Chen"
        >
          <Quote>
            Our restaurant needed a complete redesign to attract a younger
            clientele while maintaining our established charm. The interior
            design team exceeded our expectations with a fresh, inviting
            atmosphere that has significantly increased foot traffic. Their
            commercial design expertise and project management skills were
            outstanding. Highly recommended!
          </Quote>
        </CardTestimonial1>
        <CardTestimonial1
          img="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
          cite="Jennifer Bradley"
        >
          <Quote>
            From our initial consultation to the final reveal, every step was
            professional and exciting. They helped us reimagine our entire home,
            creating functional spaces that are also beautiful. The color
            consultation alone was worth it – our home has never felt more
            cohesive and welcoming. We've already referred them to friends!
          </Quote>
        </CardTestimonial1>
        <CardTestimonial1
          img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
          cite="David Park"
        >
          <Quote>
            As a first-time homeowner, I was overwhelmed by the possibilities.
            The design team listened to my needs, respected my budget, and
            delivered a stunning space that maximizes every square foot of my
            urban condo. Their furniture selection and space planning expertise
            turned my small space into a comfortable, stylish home. Thank you!
          </Quote>
        </CardTestimonial1>
      </Swiper>
    </Section>
  )
}
