import { Section, Columns, Column, Heading, Paragraph, Button } from '@/components'

export default function PodcastCta1() {
  return (
    <Section className="py-24 md:py-32 bg-body relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-accent3/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent3/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Columns
          cols="grid-cols-1 lg:grid-cols-2"
          gap="gap-16 lg:gap-24"
          reverseColumns={false}
        >
          {/* Content */}
          <Column className="flex flex-col justify-center">
            <p className="text-accent3 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
              Join the Conversation
            </p>

            <Heading as="h2" margin="mb-6">
              Be Part of Something Bigger
            </Heading>

            <Paragraph className="text-lg mb-8 text-body-contrast/80 leading-relaxed">
              The Mindshift Podcast isn't just about listening—it's about connecting 
              with a community of curious minds seeking growth and understanding. 
              Share your story, suggest guests, or simply join the discussion.
            </Paragraph>

            {/* Community features */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent3/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">Private Community</h4>
                  <p className="text-sm text-body-contrast/60">
                    Connect with fellow listeners in our exclusive Discord server
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent3/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">Live Q&A Sessions</h4>
                  <p className="text-sm text-body-contrast/60">
                    Monthly live streams with Sarah and special guests
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent3/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">Exclusive Content</h4>
                  <p className="text-sm text-body-contrast/60">
                    Bonus episodes, extended interviews, and resources
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#subscribe" variant="primary">
                Start Listening Today
              </Button>
              <Button href="#" variant="outline">
                Support the Show
              </Button>
            </div>
          </Column>

          {/* Visual Element */}
          <Column className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Circular design */}
              <div className="relative aspect-square">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent3/20 animate-[spin_20s_linear_infinite]"></div>
                
                {/* Middle ring */}
                <div className="absolute inset-8 rounded-full border-2 border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Inner circle */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-500/20 to-accent3/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-accent3 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                      </svg>
                    </div>
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-sm text-body-contrast/60 tracking-wider uppercase">Episodes</div>
                  </div>
                </div>

                {/* Floating dots */}
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent3 rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                <div className="absolute top-1/4 right-0 w-3 h-3 bg-accent3/50 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </Column>
        </Columns>
      </div>
    </Section>
  )
}
