import {
  Section,
  Masonry,
  Testimonial2,
  Heading,
  Paragraph,
} from '@/components'

export default function About1() {
  return (
    <Section className="py-30">
      <Masonry
        breakpoints={{ default: 2, lg: 1, md: 1, sm: 1 }}
        gap={50}
        gapY={70}
      >
        <Testimonial2
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
          cite="Rachel Anderson"
        >
          <Heading as="h3">A Dream Home Come True</Heading>
          <Paragraph textAlign="text-left">
            We hired Speedwell to redesign our entire home after years of living with outdated decor. From our initial meeting, their team understood exactly what we were looking for. They created a cohesive design that flows from room to room while giving each space its own unique character. The furniture they selected is both stylish and comfortable, perfect for our busy family. Their color choices brightened our home and made it feel so much more inviting. The project was completed on schedule, and they handled every detail with professionalism. Our home now feels like a true reflection of who we are, and we love spending time here. We have recommended Speedwell to all our friends and family.
          </Paragraph>
        </Testimonial2>
        <Testimonial2
          aspect="aspect-[5/5]"
          img="/images/profiles/pexels-ekaterina-bolovtsova-5393594.jpg"
          cite="James Williams"
        >
          <Heading as="h3">Professional Excellence</Heading>
          <Paragraph textAlign="text-left">
            Our company needed to redesign our corporate headquarters to better reflect our brand and accommodate our growing team. Speedwell delivered beyond our expectations. They created a workspace that is modern, functional, and inspiring. The open floor plan encourages collaboration while private offices and meeting rooms provide quiet spaces when needed. Their understanding of commercial design requirements, including lighting, acoustics, and ergonomics, was impressive. The project stayed within budget and minimal disruption to our operations. Employee satisfaction has noticeably improved, and our clients consistently comment on how professional and welcoming our space feels.
          </Paragraph>
        </Testimonial2>
        <Testimonial2
          img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
          cite="Lisa Martinez"
        >
          <Heading as="h3">Exceeded All Expectations</Heading>
          <Paragraph textAlign="text-left">
            I purchased a condo that needed a complete renovation and had no idea where to start. Speedwell guided me through every decision with patience and expertise. They helped me maximize the small space with smart storage solutions and furniture that serves multiple purposes. The color consultation opened my eyes to possibilities I never would have considered. The end result is a sophisticated, modern home that feels spacious despite the square footage. Everyone who visits asks for their contact information because the transformation is so dramatic and beautiful.
          </Paragraph>
        </Testimonial2>
        <Testimonial2
          aspect="aspect-[4/3]"
          img="/images/profiles/pexels-linkedin-2182970.jpg"
          cite="Robert Taylor"
        >
          <Heading as="h3">Worth Every Penny</Heading>
          <Paragraph textAlign="text-left">
            After living in our home for 15 years, we knew it was time for an update but wanted to preserve what we loved about it. Speedwell struck the perfect balance between modernization and respecting the original character. They refreshed our kitchen with new cabinetry and updated appliances while keeping the layout we loved. The living areas now have better flow and lighting. Their recommendations for artwork and accessories added the perfect finishing touches. The quality of their work and materials is outstanding. We now have a home that feels brand new while still feeling like ours.
          </Paragraph>
        </Testimonial2>
        <Testimonial2
          img="/images/profiles/pexels-maide-arslan-128712163-31750448.jpg"
          cite="Amanda Foster"
        >
          <Heading as="h3">Stress-Free Experience</Heading>
          <Paragraph textAlign="text-left">
            As a busy professional, I did not have time to manage a home renovation myself. Speedwell handled everything from design to installation with minimal involvement needed from me. They provided regular updates and photos, made thoughtful decisions on my behalf, and always checked in before any major choices. The level of trust I developed with their team made the process enjoyable rather than stressful. When I finally saw the completed project, I was blown away. They captured my style perfectly and created a home that feels like a sanctuary after long work days. I cannot recommend them highly enough.
          </Paragraph>
        </Testimonial2>
        <Testimonial2
          aspect="aspect-[5/5]"
          img="/images/profiles/pexels-maide-arslan-128712163-31750456.jpg"
          cite="Daniel Park"
        >
          <Heading as="h3">Exceptional Service and Design</Heading>
          <Paragraph textAlign="text-left">
            We worked with several designers before finding Speedwell, and the difference was night and day. They truly listened to what we wanted and needed, rather than pushing their own agenda. Their design proposals were creative yet practical, beautiful yet livable. The project management was outstanding with clear timelines, regular communication, and problem-solving when unexpected issues arose. The craftsmanship of the work they coordinated was top-notch. Our home is now the envy of our neighborhood, but more importantly, it works perfectly for how we actually live. This was money well spent, and we look forward to working with them again.
          </Paragraph>
        </Testimonial2>
      </Masonry>
    </Section>
  )
}
