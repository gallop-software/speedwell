import { Section } from '@/components/section'
import { Masonry } from '@/components/masonry'
import { CardTestimonial2 } from '@/components/card-testimonial-2'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'

export default function About() {
  return (
    <Section className="py-30">
      <Masonry
        breakpoints={{ default: 2, lg: 1, md: 1, sm: 1 }}
        gap={50}
        gapY={70}
      >
        <CardTestimonial2
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
          cite="Jordan Anderson"
        >
          <Heading as="h3">Jordan Anderson</Heading>
          <Paragraph textAlign="text-left">
            We hired Speedwell to redesign our entire home after years of living
            with outdated decor. From our initial meeting, their team understood
            exactly what we were looking for. They created a cohesive design
            that flows from room to room while giving each space its own unique
            character. The furniture they selected is both stylish and
            comfortable, perfect for our busy family. Their color choices
            brightened our home and made it feel so much more inviting. The
            project was completed on schedule, and they handled every detail
            with professionalism. Our home now feels like a true reflection of
            who we are, and we love spending time here. We have recommended
            Speedwell to all our friends and family.
          </Paragraph>
        </CardTestimonial2>
        <CardTestimonial2
          aspect="aspect-[1/1]"
          img="/images/profiles/pexels-ekaterina-bolovtsova-5393594.jpg"
          cite="Casey Williams"
        >
          <Heading as="h3">Casey Williams</Heading>
          <Paragraph textAlign="text-left">
            Our company needed to redesign our corporate headquarters to better
            reflect our brand and accommodate our growing team. Speedwell
            delivered beyond our expectations. They created a workspace that is
            modern, functional, and inspiring. The open floor plan encourages
            collaboration while private offices and meeting rooms provide quiet
            spaces when needed. Their understanding of commercial design
            requirements, including lighting, acoustics, and ergonomics, was
            impressive. The project stayed within budget and minimal disruption
            to our operations. Employee satisfaction has noticeably improved,
            and our clients consistently comment on how professional and
            welcoming our space feels.
          </Paragraph>
        </CardTestimonial2>
        <CardTestimonial2
          aspect="aspect-[1/1]"
          img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
          cite="Ryan Martinez"
        >
          <Heading as="h3">Ryan Martinez</Heading>
          <Paragraph textAlign="text-left">
            I purchased a condo that needed a complete renovation and had no
            idea where to start. Speedwell guided me through every decision with
            patience and expertise. They helped me maximize the small space with
            smart storage solutions and furniture that serves multiple purposes.
            The color consultation opened my eyes to possibilities I never would
            have considered. The end result is a sophisticated, modern home that
            feels spacious despite the square footage. Everyone who visits asks
            for their contact information because the transformation is so
            dramatic and beautiful.
          </Paragraph>
        </CardTestimonial2>
        <CardTestimonial2
          img="/images/profiles/pexels-maide-arslan-128712163-31750448.jpg"
          cite="Alex Foster"
        >
          <Heading as="h3">Alex Foster</Heading>
          <Paragraph textAlign="text-left">
            As a busy professional, I did not have time to manage a home
            renovation myself. Speedwell handled everything from design to
            installation with minimal involvement needed from me. They provided
            regular updates and photos, made thoughtful decisions on my behalf,
            and always checked in before any major choices. The level of trust I
            developed with their team made the process enjoyable rather than
            stressful. When I finally saw the completed project, I was blown
            away. They captured my style perfectly and created a home that feels
            like a sanctuary after long work days. I cannot recommend them
            highly enough.
          </Paragraph>
        </CardTestimonial2>
        <CardTestimonial2
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-retamozo-gonzalo-454802313-26926485.jpg"
          cite="Marcus Park"
        >
          <Heading as="h3">Marcus Park</Heading>
          <Paragraph textAlign="text-left">
            We worked with several designers before finding Speedwell, and the
            difference was night and day. They truly listened to what we wanted
            and needed, rather than pushing their own agenda. Their design
            proposals were creative yet practical, beautiful yet livable. The
            project management was outstanding with clear timelines, regular
            communication, and problem-solving when unexpected issues arose. The
            craftsmanship of the work they coordinated was top-notch. Our home
            is now the envy of our neighborhood, but more importantly, it works
            perfectly for how we actually live. This was money well spent, and
            we look forward to working with them again.
          </Paragraph>
        </CardTestimonial2>
      </Masonry>
    </Section>
  )
}
