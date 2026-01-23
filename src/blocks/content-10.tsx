import { Section, Accent, Heading, Paragraph } from '@/components'

export default function Content10() {
  return (
    <Section className="relative py-30 overflow-hidden">
      <div className="absolute inset-0 opacity-30 sm:opacity-50 bg-repeat bg-left-top bg-[length:700px] bg-[url('/images/geometric-1400x809.jpg')]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent [background-image:linear-gradient(to_right,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_100%),linear-gradient(to_bottom,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_100%),linear-gradient(to_top,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_70%)]"></div>
      <Accent
        className="absolute left-[130%] sm:left-[120%] md:left-[110%] xl:left-full top-30 transform rotate-90 origin-top-left z-0 whitespace-nowrap opacity-5 sm:opacity-10"
        color="text-accent"
        fontSize="text-[10rem] lg:text-[12rem]"
        overflowFix="p-4 -ml-4"
      >
        careers
      </Accent>
      <div className="relative">
        <Heading
          id="learn-more"
          as="h1"
          className="max-w-2xl"
        >
          Join Our Team
        </Heading>
        <Paragraph className="max-w-lg">
          At Timmerman, we believe that great design comes from talented people
          who are passionate about their craft. We are always looking for
          creative professionals who share our commitment to excellence,
          innovation, and creating spaces that truly transform how people live
          and work. Whether you are an experienced designer or just starting
          your career, we offer opportunities to grow, collaborate, and make a
          meaningful impact.
        </Paragraph>
        <Paragraph
          className="max-w-lg"
          margin="pb-0"
        >
          Our team culture values creativity, collaboration, and continuous
          learning. We provide competitive compensation, professional
          development opportunities, and the chance to work on diverse projects
          that challenge and inspire. If you are ready to join a team that
          pushes boundaries and celebrates design excellence, we would love to
          hear from you.
        </Paragraph>
      </div>
    </Section>
  )
}
