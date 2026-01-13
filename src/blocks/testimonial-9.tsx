import {
  Section,
  Heading,
  Paragraph,
  CountUp,
  Accent,
  Label,
  Container,
  Icon,
} from '@/components'
import starIcon from '@iconify/icons-heroicons/star-solid'

const testimonials = [
  {
    quote:
      'Sarah has an incredible gift for making her guests feel comfortable enough to share their most vulnerable moments. Every episode leaves me feeling inspired.',
    author: 'Michael Torres',
    title: 'Regular Listener',
    rating: 5,
  },
  {
    quote:
      'The Mindshift Podcast has genuinely changed how I approach challenges. The conversations are deep, authentic, and always thought-provoking.',
    author: 'Jennifer Kim',
    title: 'Subscriber since 2023',
    rating: 5,
  },
  {
    quote:
      "I've tried countless self-improvement podcasts, but this one stands out. Real stories, real people, real impact. No pretense, just honest dialogue.",
    author: 'David Okonkwo',
    title: 'Apple Podcasts Reviewer',
    rating: 5,
  },
]

export default function Testimonial9() {
  return (
    <Section className="py-20 md:py-30 bg-body2 relative overflow-hidden">
      <Container align="wide">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-20">
          <Accent
            size="small"
            color="text-accent"
            margin="mb-4"
          >
            Listener Love
          </Accent>
          <Heading
            as="h2"
            margin=""
          >
            What Our Community Says
          </Heading>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 mb-10 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group flex flex-col h-full"
            >
              {/* Card */}
              <div className="bg-body border border-body-dark/10 rounded-2xl p-8 flex flex-col h-full group-hover:border-accent/30 group-hover:shadow-lg transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon
                      key={i}
                      icon={starIcon}
                      className="w-5 h-5 text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Paragraph
                  lineHeight="leading-relaxed"
                  margin="mb-8"
                  fontStyle="italic"
                  className="flex-grow"
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </Paragraph>

                {/* Author */}
                <div className="pt-6 border-t border-body-dark/10">
                  <Heading
                    as="h4"
                    fontSize="text-base"
                    margin="mb-1"
                  >
                    {testimonial.author}
                  </Heading>
                  <Label margin="">{testimonial.title}</Label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="pt-10 lg:pt-20 border-t border-body-dark/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Heading
                as="h3"
                margin=""
                className="text-4xl"
              >
                <CountUp
                  end={2}
                  decimals={1}
                  suffix="M+"
                  delay={0}
                  duration={3}
                />
              </Heading>
              <Label margin="">Monthly Listeners</Label>
            </div>
            <div className="text-center">
              <Heading
                as="h3"
                margin=""
                className="text-4xl"
              >
                <CountUp
                  end={150}
                  suffix="+"
                  delay={0}
                  duration={3}
                />
              </Heading>
              <Label margin="">Total Episodes</Label>
            </div>
            <div className="text-center">
              <Heading
                as="h3"
                margin=""
                className="text-4xl"
              >
                <CountUp
                  end={15}
                  suffix="K+"
                  delay={0}
                  duration={3}
                />
              </Heading>
              <Label margin="">Reviews</Label>
            </div>
            <div className="text-center">
              <Heading
                as="h3"
                margin=""
                className="text-4xl flex items-center justify-center gap-1"
              >
                <CountUp
                  end={4.9}
                  decimals={1}
                  delay={0}
                  duration={3}
                />
                <Icon
                  icon={starIcon}
                  className="w-8 h-8 text-accent"
                />
              </Heading>
              <Label margin="">Average Rating</Label>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
