import { Section, Heading, Paragraph, Button } from '@/components'

const episodes = [
  {
    number: 142,
    title: "The Art of Reinvention with Marcus Sullivan",
    description: "From Wall Street executive to wilderness guide—Marcus shares his journey of letting go and finding purpose.",
    duration: "52 min",
    date: "Jan 3, 2026",
    category: "Career Change",
  },
  {
    number: 141,
    title: "Breaking Patterns: A Conversation with Dr. Lisa Nakamura",
    description: "Clinical psychologist Dr. Nakamura reveals the science behind habit formation and lasting behavioral change.",
    duration: "48 min",
    date: "Dec 27, 2025",
    category: "Psychology",
  },
  {
    number: 140,
    title: "Building in Public: Lessons from Failed Startups",
    description: "Entrepreneur Jamal Davis opens up about three failed ventures and the wisdom gained from each.",
    duration: "1h 5min",
    date: "Dec 20, 2025",
    category: "Entrepreneurship",
  },
  {
    number: 139,
    title: "The Power of Presence with Meditation Teacher Ana Rodriguez",
    description: "How mindfulness transformed Ana's life after trauma, and practical techniques for cultivating presence.",
    duration: "44 min",
    date: "Dec 13, 2025",
    category: "Wellness",
  },
]

export default function PodcastEpisodes1() {
  return (
    <Section id="episodes" className="py-24 md:py-32 bg-body2 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent3 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Recent Episodes
          </p>
          <Heading as="h2" margin="mb-6">
            Latest Conversations
          </Heading>
          <Paragraph className="text-body-contrast/70">
            New episodes every Wednesday. Subscribe to never miss a conversation.
          </Paragraph>
        </div>

        {/* Episodes List */}
        <div className="space-y-6">
          {episodes.map((episode, index) => (
            <div
              key={episode.number}
              className="group bg-body border border-body-dark/20 rounded-xl p-6 md:p-8 hover:border-accent3/30 hover:shadow-lg hover:shadow-accent3/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Play Button & Number */}
                <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2">
                  <button className="flex-shrink-0 w-14 h-14 rounded-full bg-accent3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="text-sm font-mono text-body-contrast/40 md:text-center">
                    #{episode.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <Heading as="h3" styleAs="h4" margin="mb-0" className="group-hover:text-accent3 transition-colors">
                      {episode.title}
                    </Heading>
                  </div>
                  
                  <Paragraph className="mb-4 text-body-contrast/70">
                    {episode.description}
                  </Paragraph>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-body-contrast/50">
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {episode.duration}
                    </span>
                    <span>·</span>
                    <span>{episode.date}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent3/10 text-accent3 rounded-full text-xs">
                      {episode.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button href="#" variant="outline">
            View All Episodes
          </Button>
        </div>
      </div>
    </Section>
  )
}
