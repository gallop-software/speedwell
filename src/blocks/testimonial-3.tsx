import {
  Section,
  FancyHeading,
  Swiper,
  Testimonial1,
  Quote,
} from '@/components'

export default function Testimonial3() {
  return (
    <Section
      imageSrc="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
      imageAlt="Clients sharing their design experience testimonials"
      overlayColor="bg-body/90"
      className="py-30"
    >
      <FancyHeading
        id="learn-more"
        text="Real Stories from Real Clients"
        accent="trusted partners"
      />
      <Swiper>
        <Testimonial1
          img="/images/profiles/pexels-nkhajotia-1516680.jpg"
          cite="James Mitchell"
        >
          <Quote>
            Working with Speedwell was an absolute dream. From our first consultation to the final reveal, their team listened to our vision and brought it to life beyond what we imagined. Our home now reflects our personality while being incredibly functional for our family. The attention to detail and quality of craftsmanship is evident in every corner. We could not be happier with the results and highly recommend them to anyone looking for exceptional interior design.
          </Quote>
        </Testimonial1>
        <Testimonial1
          img="/images/profiles/pexels-retamozo-gonzalo-454802313-26926485.jpg"
          cite="Michael Chen"
        >
          <Quote>
            The Speedwell team completely transformed our office space. They understood our brand identity and created an environment that is both professional and welcoming. Employee feedback has been overwhelmingly positive, and clients are impressed the moment they walk through the door. The project was completed on time and within budget. Their expertise in commercial design is unmatched, and we are already planning our next location with them.
          </Quote>
        </Testimonial1>
        <Testimonial1
          img="/images/profiles/pexels-skildring-12871464.jpg"
          cite="Robert Rodriguez"
        >
          <Quote>
            I was hesitant about hiring a designer, but Speedwell made the entire process effortless. They took the time to understand my lifestyle and aesthetic preferences, then created a space that feels uniquely mine. The color palette is perfect, the furniture selections are both beautiful and comfortable, and every room flows seamlessly. What impressed me most was their ability to work within my budget while still achieving a high-end look. I receive compliments every time someone visits my home.
          </Quote>
        </Testimonial1>
        <Testimonial1
          img="/images/profiles/pexels-anna-nekrashevich-6801642.jpg"
          cite="David Thompson"
        >
          <Quote>
            Speedwell transformed our dated kitchen and bathrooms into modern, functional spaces that have completely changed how we live in our home. Their project management was exceptional, coordinating all trades and ensuring everything stayed on schedule. The design choices they made were smart and practical while being aesthetically stunning. We appreciated their transparency throughout the process and their commitment to quality. This was an investment that has truly enhanced our daily life and home value.
          </Quote>
        </Testimonial1>
      </Swiper>
    </Section>
  )
}
