import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Accent } from '@/components/accent'
import { Grid } from '@/components/grid'
import { Form as FormComponent, FormInput, FormButton } from '@/components/form'
import { Icon } from '@/components/icon'
import headphonesIcon from '@iconify/icons-lucide/headphones'
import clsx from 'clsx'

const platforms = [
  { name: 'Apple Podcasts', color: 'bg-[#9933CC]' },
  { name: 'Spotify', color: 'bg-[#1DB954]' },
  { name: 'YouTube', color: 'bg-[#FF0000]' },
  { name: 'Google Podcasts', color: 'bg-[#4285F4]' },
  { name: 'Amazon Music', color: 'bg-[#00A8E1]' },
  { name: 'Pocket Casts', color: 'bg-[#F43E37]' },
]

export default function Form() {
  return (
    <Section
      id="subscribe"
      className="py-20 md:py-30 bg-body relative overflow-hidden"
      innerAlign="content"
    >
      {/* Section Header */}
      <Accent
        size="small"
        margin="mb-4"
        textAlign="text-center"
        display="block"
      >
        Never Miss an Episode
      </Accent>
      <Heading
        as="h2"
        textAlign="text-center"
      >
        Subscribe on Your Favorite Platform
      </Heading>

      {/* Platforms Grid */}
      <Grid
        cols="grid-cols-2 md:grid-cols-3"
        gap="gap-4 md:gap-6"
        className="mb-4 md:mb-6"
      >
        {platforms.map((platform, index) => (
          <a
            key={index}
            href="#"
            className="group relative bg-body2 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-body2/90 hover:shadow-md hover:ring-contrast/5 ring-1 ring-body2 transition-all duration-300 overflow-hidden"
          >
            {/* Icon */}
            <div
              className={clsx(
                'relative w-12 h-12 rounded-full flex items-center justify-center',
                platform.color
              )}
            >
              <Icon icon={headphonesIcon} className="w-6 h-6 text-body" />
            </div>

            {/* Name */}
            <Paragraph
              margin="mb-0"
              variant="small"
              fontWeight="font-medium"
              textAlign="text-center"
            >
              {platform.name}
            </Paragraph>
          </a>
        ))}
      </Grid>

      {/* Newsletter Signup */}
      <div className="bg-body2 border border-accent3/20 rounded-2xl px-6 md:px-12 py-12 text-center">
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

        <FormComponent
          classname="max-w-md mx-auto"
          gap="gap-4"
        >
          <FormInput
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            required
            className="flex-1"
          />
          <FormButton
            name="submit"
            label="Subscribe"
          />
        </FormComponent>

        <Paragraph
          variant="small"
          color="text-contrast/50"
          margin="mt-4"
        >
          No spam, ever. Unsubscribe anytime.
        </Paragraph>
      </div>
    </Section>
  )
}
