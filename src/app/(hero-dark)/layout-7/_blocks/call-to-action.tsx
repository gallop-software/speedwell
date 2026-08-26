import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Button } from '@/components/button'
import { Buttons } from '@/components/buttons'
import { Accent } from '@/components/accent'
import { Icon } from '@/components/icon'
import { OrbitStats } from '@/components/orbit-stats'
import clsx from 'clsx'
import chatBubbleLeftRightIcon from '@iconify/icons-heroicons/chat-bubble-left-right-solid'
import videoCameraIcon from '@iconify/icons-heroicons/video-camera-solid'
import bookOpenIcon from '@iconify/icons-heroicons/book-open-solid'
import musicalNoteIcon from '@iconify/icons-heroicons/musical-note-solid'

const features = [
  {
    icon: chatBubbleLeftRightIcon,
    title: 'Private Community',
    description:
      'Connect with fellow listeners in our exclusive Discord server',
    color: 'bg-[#5865F2]', // Discord blue
  },
  {
    icon: videoCameraIcon,
    title: 'Live Q&A Sessions',
    description: 'Monthly live streams with Sarah and special guests',
    color: 'bg-[#FF0000]', // YouTube red
  },
  {
    icon: bookOpenIcon,
    title: 'Exclusive Content',
    description: 'Bonus episodes, extended interviews, and resources',
    color: 'bg-[#9933CC]', // Purple
  },
]

export default function CallToAction() {
  return (
    <Section
      className="py-20 md:py-30 bg-body"
      innerAlign="wide"
    >
      <Columns
        cols="grid-cols-1 lg:grid-cols-2"
        gap="gap-16 lg:gap-20"
        align="items-center"
      >
        {/* Content */}
        <Column className="flex flex-col justify-center gap-8">
          <Accent
            size="small"
            color="text-accent"
            margin="mb-0"
            display="block"
            overflowFix="ml-6"
          >
            Join the Conversation
          </Accent>

          <Heading
            as="h2"
            margin="mb-0"
          >
            Be Part of Something Bigger
          </Heading>

          <Paragraph margin="mb-0">
            The Mindshift Podcast isn't just about listening—it's about
            connecting with a community of curious minds seeking growth and
            understanding. Share your story, suggest guests, or simply join the
            discussion.
          </Paragraph>

          {/* Community features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div
                  className={clsx(
                    'flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center',
                    feature.color
                  )}
                >
                  <Icon
                    icon={feature.icon}
                    className="w-6 h-6 text-body"
                  />
                </div>
                <div>
                  <Heading
                    as="h4"
                    fontSize="text-lg"
                    margin="mb-1"
                    lineHeight="leading-tight"
                  >
                    {feature.title}
                  </Heading>
                  <Paragraph
                    variant="small"
                    margin="mb-0"
                    lineHeight="leading-tight"
                  >
                    {feature.description}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>

          <Buttons margin="mt-4 mb-0">
            <Button
              href="#subscribe"
              variant="primary"
            >
              Start Listening Today
            </Button>
            <Button
              href="#"
              variant="outline"
            >
              Support the Show
            </Button>
          </Buttons>
        </Column>

        {/* Visual Element */}
        <Column className="relative flex items-center justify-center">
          <OrbitStats
            stat={150}
            suffix="+"
            label="Episodes"
            icon={musicalNoteIcon}
            colors={{
              primary: '#5865F2',
              secondary: '#9933CC',
              accent: '#FF0000',
            }}
            className="max-w-md"
          />
        </Column>
      </Columns>
    </Section>
  )
}
