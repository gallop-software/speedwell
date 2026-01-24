import {
  Container,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Label,
  Span,
} from '@/components'

export default function Content2() {
  return (
    <Container className="my-24 md:my-32">
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
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-48 h-48 md:w-64 md:h-64 border-2 border-accent/20 rounded-2xl -z-0"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent3/10 rounded-full -z-0"></div>
          </div>
        </Column>

        {/* Content Column */}
        <Column className="flex flex-col justify-center">
          <Heading
            as="h3"
            styleAs="h3"
            margin="mb-2"
            fontSize="text-3xl"
            color="text-contrast"
          >
            About the Show
          </Heading>
          <Heading
            as="h2"
            styleAs="h2"
          >
            Your Weekly Dose of Inspiration
          </Heading>

          <Paragraph
            fontSize="text-lg"
            margin="mb-6"
            lineHeight="leading-relaxed"
          >
            Hosted by Sarah Chen, The Mindshift Podcast brings you intimate
            conversations with thought leaders, innovators, and everyday people
            making extraordinary impacts. Each episode explores the pivotal
            moments that transformed their thinking and shaped their journeys.
          </Paragraph>

          <Paragraph
            margin="mb-8"
            color="text-body-contrast/70"
          >
            Whether you're navigating a career transition, seeking personal
            growth, or simply curious about the human experience, our candid
            discussions offer fresh perspectives and actionable insights. No
            fluff, no scripts— just authentic conversations that matter.
          </Paragraph>

          {/* Host info */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <Span className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-bold text-xl">
                SC
              </Span>
            </div>
            <div>
              <Heading
                as="h4"
                margin="mb-1"
              >
                Sarah Chen
              </Heading>
              <Label>Host & Creator | Former Psychologist</Label>
            </div>
          </div>
        </Column>
      </Columns>
    </Container>
  )
}
