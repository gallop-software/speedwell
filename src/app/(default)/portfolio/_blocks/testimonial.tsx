import { Section } from '@/components/section'
import { FancyHeading } from '@/components/fancy-heading'
import { Swiper } from '@/components/swiper'
import { CardTestimonial1 } from '@/components/card-testimonial-1'
import { Quote } from '@/components/quote'

export default function Testimonial() {
  return (
    <Section className="bg-body2 py-20">
      <FancyHeading
        text="Client Reviews"
        accent="what our clients say"
      />
      <Swiper>
        <CardTestimonial1
          img="/images/profiles/pexels-linkedin-2182970.jpg"
          cite="Jennifer Martinez"
        >
          <Quote>
            Working with Timmerman Interior Design transformed our home beyond
            expectations. Their attention to detail creative vision professional
            approach made the entire process enjoyable stress-free. From initial
            consultation through final installation every decision was
            thoughtfully considered expertly executed. The team listened
            carefully to our needs lifestyle preferences budget constraints
            delivering stunning results that perfectly reflect our family while
            maintaining exceptional quality timeless style. Our living spaces
            now flow beautifully together creating warm inviting atmosphere we
            love coming home to every single day. The investment was absolutely
            worth it and we continue receiving compliments from everyone who
            visits. Highly recommend their services to anyone seeking
            professional interior design expertise.
          </Quote>
        </CardTestimonial1>
        <CardTestimonial1
          img="/images/profiles/pexels-maide-arslan-128712163-31750448.jpg"
          cite="Michael Thompson"
        >
          <Quote>
            Our office renovation exceeded all expectations thanks to the
            talented team at Timmerman Interior Design. They understood our
            company culture brand identity employee needs creating functional
            beautiful workspace that boosts productivity morale. The design
            process was collaborative transparent with regular updates clear
            communication realistic timelines throughout. Their vendor
            relationships industry expertise ensured smooth coordination quality
            craftsmanship staying within budget parameters. The finished space
            features innovative solutions smart storage ergonomic furniture
            sophisticated finishes natural lighting collaborative zones private
            areas perfectly balanced. Employee feedback has been overwhelmingly
            positive noting improved work environment enhanced creativity better
            collaboration. The investment in professional design services
            delivered measurable returns through increased productivity employee
            satisfaction positive client impressions. We appreciate their
            ongoing support post-project completion truly stand behind their
            work maintaining lasting relationships with clients.
          </Quote>
        </CardTestimonial1>
        <CardTestimonial1
          img="/images/profiles/pexels-maide-arslan-128712163-31750456.jpg"
          cite="Sarah Anderson"
        >
          <Quote>
            The kitchen and master bath renovation orchestrated by Timmerman
            Interior Design completely transformed our daily living experience.
            Their expertise in space planning material selection fixture
            coordination created luxurious functional spaces we enjoy every day.
            The design team provided creative solutions maximizing storage
            improving workflow incorporating modern amenities while respecting
            our home architectural style. Project management was exceptional
            with clear scheduling coordination among contractors tradespeople
            ensuring quality workmanship minimal disruption. The attention to
            finishing details hardware lighting accessories elevated the overall
            result beyond standard renovation. We love our beautiful new spaces
            and appreciate the lasting value added to our home.
          </Quote>
        </CardTestimonial1>
        <CardTestimonial1
          img="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
          cite="David Chen"
        >
          <Quote>
            Timmerman Interior Design helped us create our dream home through
            their comprehensive design services color consultation expertise
            furniture selection guidance. Their ability to blend our personal
            style with current design trends resulted in timeless elegant
            interiors we will enjoy for years to come. The team was professional
            responsive creative throughout entire process making design
            decisions easier more enjoyable. Their established vendor
            relationships provided access to quality furnishings materials
            competitive pricing. The cohesive flow between rooms unified color
            palette carefully selected accessories created sophisticated
            comfortable living environment. We could not be happier with the
            results highly recommend their services to anyone seeking
            professional interior design expertise.
          </Quote>
        </CardTestimonial1>
      </Swiper>
    </Section>
  )
}
