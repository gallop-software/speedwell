import {
  Section,
  FancyHeading,
  Swiper,
  Testimonial1,
  Quote,
  CanvasBackground1,
} from '@/components'

export default function Testimonial5() {
  return (
    <Section className="bg-body-dark py-20 relative overflow-hidden">
      <CanvasBackground1 className="absolute inset-0 w-full h-full" />
      <div className="relative">
        <FancyHeading
          text="Trusted by Leaders"
          accent="what our customers say"
        />
      <Swiper>
        <Testimonial1
          img="/images/profiles/pexels-nkhajotia-1516680.jpg"
          cite="James Anderson"
        >
          <Quote>
            This platform has completely transformed how our team collaborates.
            The intuitive interface and powerful features have increased our
            productivity by 40%. The seamless integrations with our existing
            tools made the transition effortless. It's become an indispensable
            part of our daily workflow.
          </Quote>
        </Testimonial1>
        <Testimonial1
          img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
          cite="Michael Chen"
        >
          <Quote>
            As a fast-growing startup, we needed a solution that could scale
            with us. This platform exceeded all expectations. The advanced
            analytics have given us insights we never had before, and the
            customer support team has been exceptional. Best investment we've
            made this year!
          </Quote>
        </Testimonial1>
        <Testimonial1
          img="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
          cite="Emily Rodriguez"
        >
          <Quote>
            The automation features have saved our team countless hours every
            week. What used to take days now happens in minutes. The platform is
            incredibly reliable, and the security features give us peace of mind
            with our sensitive data. Highly recommend to any enterprise team!
          </Quote>
        </Testimonial1>
        <Testimonial1
          img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
          cite="David Park"
        >
          <Quote>
            We evaluated several solutions before choosing this platform, and
            it's been the perfect fit. The API is well-documented, making custom
            integrations a breeze. Our developers love it, and our end users
            have reported significantly improved experiences. A true game-changer
            for our product team.
          </Quote>
        </Testimonial1>
      </Swiper>
      </div>
    </Section>
  )
}
