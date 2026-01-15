import {
  Section,
  Heading,
  Paragraph,
  CountUp,
  Accent,
  Label,
  Icon,
  Image,
} from '@/components'
import starIcon from '@iconify/icons-heroicons/star-solid'
import chatBubbleIcon from '@iconify/icons-heroicons/chat-bubble-bottom-center-text-solid'

const testimonials = [
  {
    quote:
      'Sarah has an incredible gift for making her guests feel comfortable enough to share their most vulnerable moments. Every episode leaves me feeling inspired.',
    author: 'Michael Torres',
    title: 'Regular Listener',
    rating: 5,
    image: '/images/profiles/pexels-linkedin-2182970.jpg',
    platform: 'Apple Podcasts',
    featured: false,
  },
  {
    quote:
      'The Mindshift Podcast has genuinely changed how I approach challenges in both my personal and professional life. The conversations are deep, authentic, and always thought-provoking. I listen on my morning commute and it sets the perfect tone for my day.',
    author: 'Jennifer Kim',
    title: 'Subscriber since 2023',
    rating: 5,
    image: '/images/profiles/pexels-maide-arslan-128712163-31750448.jpg',
    platform: 'Spotify',
    featured: true,
  },
  {
    quote:
      "I've tried countless self-improvement podcasts, but this one stands out. Real stories, real people, real impact. No pretense, just honest dialogue.",
    author: 'David Okonkwo',
    title: 'Apple Podcasts Reviewer',
    rating: 5,
    image: '/images/profiles/pexels-moose-photos-170195-1587009.jpg',
    platform: 'Apple Podcasts',
    featured: false,
  },
]

export default function Testimonial9() {
  return (
    <Section
      className="py-20 md:py-30 bg-body2"
      innerAlign="wide"
    >
      {/* Section Header */}
      <Accent
        size="small"
        color="text-accent"
        margin="mb-4"
        textAlign="text-center"
        display="block"
      >
        Listener Love
      </Accent>
      <Heading
        as="h2"
        margin="mb-10 lg:mb-20"
        textAlign="text-center"
      >
        What Our Community Says
      </Heading>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={
              testimonial.featured ? 'md:col-span-1 md:row-span-1' : ''
            }
          >
            {/* Card */}
            <div
              className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
                testimonial.featured
                  ? 'bg-accent text-white ring-4 ring-accent/20'
                  : 'bg-body hover:ring-1 ring-body-dark/10'
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Icon
                  icon={chatBubbleIcon}
                  className={`w-10 h-10 ${testimonial.featured ? 'text-white/30' : 'text-accent/20'}`}
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Icon
                    key={i}
                    icon={starIcon}
                    className={`w-5 h-5 ${testimonial.featured ? 'text-white' : 'text-accent'}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <Paragraph
                lineHeight="leading-relaxed"
                margin="mb-8"
                fontStyle="italic"
                color={testimonial.featured ? 'text-white/90' : undefined}
                className="grow"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </Paragraph>

              {/* Author with Avatar */}
              <div className="pt-6 border-t border-current/10">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grow">
                    <Heading
                      as="h4"
                      fontSize="text-base"
                      margin="mb-1"
                      color={testimonial.featured ? 'text-white' : undefined}
                    >
                      {testimonial.author}
                    </Heading>
                    <Label
                      margin="mb-0"
                      color={testimonial.featured ? 'text-white/70' : undefined}
                    >
                      {testimonial.title}
                    </Label>
                  </div>
                </div>
                {/* Platform Badge */}
                <div
                  className={`mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.featured
                      ? 'bg-white/20 text-white'
                      : 'bg-body2 text-contrast'
                  }`}
                >
                  {testimonial.platform}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="pt-10 lg:pt-20 border-t border-body-dark/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-8">
          <div className="text-center">
            <Heading
              as="h3"
              margin=""
              fontSize="text-4xl"
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
              fontSize="text-4xl"
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
              fontSize="text-4xl"
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
              fontSize="text-4xl"
              className="flex items-center justify-center gap-1"
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
    </Section>
  )
}
