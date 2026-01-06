import { Section, Columns, Column, Image, Heading, Paragraph } from '@/components'

export default function PodcastAbout1() {
  return (
    <Section id="about" className="py-24 md:py-32 bg-body relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent3/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Columns
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-16 lg:gap-24"
          reverseColumns={false}
        >
          {/* Image Column */}
          <Column className="relative">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <Image
                  src="/images/layout-7/pexels-karola-g-6919956.jpg"
                  alt="Sarah Chen - Host of The Mindshift Podcast"
                  className="w-full object-cover"
                  size="large"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-accent/20 rounded-2xl -z-0"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent3/10 rounded-full -z-0"></div>
            </div>
          </Column>

          {/* Content Column */}
          <Column className="flex flex-col justify-center">
            <p className="text-accent3 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              About the Show
            </p>

            <Heading as="h2" margin="mb-6">
              Your Weekly Dose of Inspiration
            </Heading>

            <Paragraph className="text-lg mb-6 leading-relaxed">
              Hosted by Sarah Chen, The Mindshift Podcast brings you intimate 
              conversations with thought leaders, innovators, and everyday people 
              making extraordinary impacts. Each episode explores the pivotal 
              moments that transformed their thinking and shaped their journeys.
            </Paragraph>

            <Paragraph className="mb-8 text-body-contrast/70">
              Whether you're navigating a career transition, seeking personal growth, 
              or simply curious about the human experience, our candid discussions 
              offer fresh perspectives and actionable insights. No fluff, no scripts—
              just authentic conversations that matter.
            </Paragraph>

            {/* Host info */}
            <div className="flex items-center gap-6 pt-8 border-t border-body-dark/20">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-accent3 flex items-center justify-center text-white font-bold text-xl">
                  SC
                </div>
              </div>
              <div>
                <div className="font-heading text-lg mb-1">Sarah Chen</div>
                <div className="text-sm text-body-contrast/60">
                  Host & Creator | Former Psychologist
                </div>
              </div>
            </div>
          </Column>
        </Columns>
      </div>
    </Section>
  )
}
