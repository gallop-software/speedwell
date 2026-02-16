import { Section } from '@/components/section'
import { FancyHeading } from '@/components/fancy-heading'
import { Swiper } from '@/components/swiper'
import { CardTestimonial2 } from '@/components/card-testimonial-2'
import { Quote } from '@/components/quote'

export default function Testimonial() {
  return (
    <Section
      id="testimonials"
      className="bg-accent4 py-20"
    >
      <FancyHeading
        text="Client Success Stories"
        accent="what our clients say"
      />
      <Swiper
        layout="slider"
        columns={2}
      >
        <CardTestimonial2
          img="/images/profiles/pexels-nkhajotia-1516680.jpg"
          cite="James Mitchell"
        >
          <Quote>
            Working with this team was an absolute game-changer for our startup.
            They transformed our vague ideas into a bold, cohesive brand
            identity that perfectly captures our mission. Their strategic
            approach and creative execution helped us stand out in a crowded
            market. We couldn't be happier with the results!
          </Quote>
        </CardTestimonial2>
        <CardTestimonial2
          img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
          cite="Michael Chen"
        >
          <Quote>
            Our restaurant needed a complete rebrand to attract a younger
            clientele while maintaining our established reputation. The creative
            team exceeded our expectations with a fresh, modern brand identity
            that has significantly increased customer engagement. Their branding
            expertise and strategic thinking were outstanding. Highly
            recommended!
          </Quote>
        </CardTestimonial2>
        <CardTestimonial2
          img="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
          cite="Jennifer Bradley"
        >
          <Quote>
            From our initial consultation to the final brand launch, every step
            was professional and exciting. They helped us reimagine our entire
            brand, creating a visual identity that truly resonates with our
            audience. The brand strategy and messaging alone were worth it – our
            company has never felt more cohesive and authentic. We've already
            referred them to colleagues!
          </Quote>
        </CardTestimonial2>
        <CardTestimonial2
          img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
          cite="David Park"
        >
          <Quote>
            As a first-time business owner, I was overwhelmed by the branding
            process. The creative team listened to my vision, respected my
            budget, and delivered a stunning brand identity that positions us
            perfectly in our market. Their design expertise and strategic
            guidance gave me confidence to launch. Thank you!
          </Quote>
        </CardTestimonial2>
      </Swiper>
    </Section>
  )
}
