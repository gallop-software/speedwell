import {
  Section,
  Heading,
  Paragraph,
  Accent,
  Container,
  Form,
  FormInput,
  FormButton,
} from '@/components'

const platforms = [
  { name: 'Apple Podcasts', color: 'bg-accent' },
  { name: 'Spotify', color: 'bg-contrast' },
  { name: 'YouTube', color: 'bg-accent' },
  { name: 'Google Podcasts', color: 'bg-contrast' },
  { name: 'Amazon Music', color: 'bg-accent' },
  { name: 'Pocket Casts', color: 'bg-contrast' },
]

export default function Section38() {
  return (
    <Section
      id="subscribe"
      className="py-20 md:py-30 bg-body relative overflow-hidden"
    >
      <Container align="content">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-20">
          <Accent
            size="small"
            margin="mb-4"
          >
            Never Miss an Episode
          </Accent>
          <Heading
            as="h2"
            margin=""
          >
            Subscribe on Your Favorite Platform
          </Heading>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 lg:mb-20">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href="#"
              className="group relative bg-body2 border border-contrast/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-accent3/30 hover:shadow-lg hover:shadow-accent3/5 transition-all duration-300 overflow-hidden"
            >
              {/* Icon */}
              <div
                className={`relative w-12 h-12 rounded-full ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                </svg>
              </div>

              {/* Name */}
              <Paragraph
                margin=""
                fontSize="text-sm"
                fontWeight="font-medium"
                className="group-hover:text-accent3 transition-colors"
              >
                {platform.name}
              </Paragraph>
            </a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-body2 border border-accent3/20 rounded-2xl p-8 md:p-12 text-center">
          <Heading
            as="h3"
            margin="mb-4"
          >
            Get Episode Updates via Email
          </Heading>
          <Paragraph
            color="text-contrast/70"
            margin="mb-8"
            className="max-w-xl mx-auto"
          >
            Join 50,000+ subscribers and receive weekly episode summaries, key
            takeaways, and exclusive behind-the-scenes content.
          </Paragraph>

          <Form classname="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <FormInput
              name="email"
              type="email"
              placeholder="Enter your email"
              label="Email"
              required
              className="flex-1"
            />
            <FormButton label="Subscribe" />
          </Form>

          <Paragraph
            fontSize="text-xs"
            color="text-contrast/50"
            margin="mt-4"
          >
            No spam, ever. Unsubscribe anytime.
          </Paragraph>
        </div>
      </Container>
    </Section>
  )
}
