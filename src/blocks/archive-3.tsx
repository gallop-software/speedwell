import {
  Section,
  Heading,
  Paragraph,
  Button,
  Accent,
  Icon,
  Chip,
  Label,
} from '@/components'
import playIcon from '@iconify/icons-heroicons/play-solid'
import clockIcon from '@iconify/icons-heroicons/clock-20-solid'
import calendarIcon from '@iconify/icons-heroicons/calendar-20-solid'

const episodes = [
  {
    number: 142,
    title: 'The Art of Reinvention with Marcus Sullivan',
    description:
      'From Wall Street executive to wilderness guide—Marcus shares his journey of letting go and finding purpose.',
    duration: '52 min',
    date: 'Jan 3, 2026',
    category: 'Career Change',
  },
  {
    number: 141,
    title: 'Breaking Patterns: A Conversation with Dr. Lisa Nakamura',
    description:
      'Clinical psychologist Dr. Nakamura reveals the science behind habit formation and lasting behavioral change.',
    duration: '48 min',
    date: 'Dec 27, 2025',
    category: 'Psychology',
  },
  {
    number: 140,
    title: 'Building in Public: Lessons from Failed Startups',
    description:
      'Entrepreneur Jamal Davis opens up about three failed ventures and the wisdom gained from each.',
    duration: '1h 5min',
    date: 'Dec 20, 2025',
    category: 'Entrepreneurship',
  },
  {
    number: 139,
    title: 'The Power of Presence with Meditation Teacher Ana Rodriguez',
    description:
      "How mindfulness transformed Ana's life after trauma, and practical techniques for cultivating presence.",
    duration: '44 min',
    date: 'Dec 13, 2025',
    category: 'Wellness',
  },
]

export default function Archive3() {
  return (
    <Section
      id="episodes"
      className="py-30 bg-body2 relative"
      innerAlign="content"
    >
      <Accent
        className="w-full"
        size="small"
        textAlign="text-center"
      >
        recent episodes
      </Accent>
      <Heading
        as="h2"
        textAlign="text-center"
      >
        Latest Conversations
      </Heading>
      <Paragraph
        textAlign="text-center"
        margin="mb-16"
      >
        New episodes every Wednesday. Subscribe to never miss a conversation.
      </Paragraph>

      {/* Episodes List */}
      <div className="space-y-6">
        {episodes.map((episode, index) => (
          <a
            key={episode.number}
            href="#"
            className="group block bg-body border border-body-dark/20 rounded-xl p-6 md:p-8 cursor-pointer hover:shadow-lg hover:shadow-contrast/5 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Play Button & Number */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-contrast group-hover:bg-contrast/90 flex items-center justify-center transition-colors duration-300">
                  <Icon
                    icon={playIcon}
                    className="w-6 h-6 text-body ml-1"
                  />
                </div>
                <Label
                  fontSize="text-sm"
                  color="text-body-contrast/40"
                  className="font-mono md:text-center"
                >
                  #{episode.number}
                </Label>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <Heading
                    as="h3"
                    styleAs="h4"
                    margin="mb-0"
                    className="group-hover:text-contrast/80 transition-colors"
                  >
                    {episode.title}
                  </Heading>
                </div>

                <Paragraph
                  margin="mb-4"
                  color="text-body-contrast/70"
                >
                  {episode.description}
                </Paragraph>

                <div className="flex flex-wrap items-center gap-2">
                  <Chip
                    iconBefore={clockIcon}
                    bgColor="bg-contrast/5"
                    color="text-contrast"
                    padding="px-3 py-1"
                  >
                    {episode.duration}
                  </Chip>
                  <Chip
                    iconBefore={calendarIcon}
                    bgColor="bg-contrast/5"
                    color="text-contrast"
                    padding="px-3 py-1"
                  >
                    {episode.date}
                  </Chip>
                  <Chip
                    bgColor="bg-contrast/5"
                    color="text-contrast"
                    padding="px-3 py-1"
                  >
                    {episode.category}
                  </Chip>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Button
          href="#"
          variant="outline"
        >
          View All Episodes
        </Button>
      </div>
    </Section>
  )
}
