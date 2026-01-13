'use client'

import {
  Section,
  Columns,
  Column,
  Heading,
  Paragraph,
  Button,
  Buttons,
  Accent,
  Label,
  Icon,
} from '@/components'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'
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

export default function CallToAction7() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  return (
    <Section
      className="py-20 md:py-30 bg-body"
      innerAlign="wide"
    >
      <Columns
        cols="grid-cols-1 lg:grid-cols-2"
        gap="gap-10 lg:gap-20"
        align="items-center"
      >
        {/* Content */}
        <Column className="flex flex-col justify-center">
          <Accent
            size="small"
            color="text-accent"
            margin="mb-4"
            display="block"
          >
            Join the Conversation
          </Accent>

          <Heading
            as="h2"
            margin="mb-6"
          >
            Be Part of Something Bigger
          </Heading>

          <Paragraph margin="mb-8">
            The Mindshift Podcast isn't just about listening—it's about
            connecting with a community of curious minds seeking growth and
            understanding. Share your story, suggest guests, or simply join the
            discussion.
          </Paragraph>

          {/* Community features */}
          <div className="space-y-4 mb-8">
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
                    className="w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <Heading
                    as="h4"
                    fontSize="text-lg"
                    margin="mb-0"
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

          <Buttons>
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
          <div
            ref={ref}
            className="relative w-full max-w-md"
          >
            {/* Circular design */}
            <div className="relative aspect-square">
              {/* Outer ring with orbiting dot */}
              <div
                className={clsx(
                  'absolute inset-0 rounded-full border-2 border-[#9933CC]/20',
                  inView && 'animate-spin-slow'
                )}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#9933CC] rounded-full"></div>
              </div>

              {/* Middle ring with orbiting dot */}
              <div
                className={clsx(
                  'absolute inset-8 rounded-full border-2 border-[#5865F2]/20',
                  inView && 'animate-spin-medium-reverse'
                )}
              >
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF0000]/70 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#5865F2] rounded-full"></div>
              </div>

              {/* Inner circle */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#5865F2]/20 to-[#9933CC]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5865F2] to-[#9933CC] flex items-center justify-center">
                    <Icon
                      icon={musicalNoteIcon}
                      className="w-10 h-10 text-white"
                    />
                  </div>
                  <Heading
                    as="h3"
                    margin="mb-2"
                    className="text-3xl"
                  >
                    150+
                  </Heading>
                  <Label margin="">Episodes</Label>
                </div>
              </div>
            </div>
          </div>
        </Column>
      </Columns>
    </Section>
  )
}
