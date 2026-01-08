'use client'

import { Section, Heading, Paragraph, CountUp } from '@/components'

const testimonials = [
  {
    quote: "Sarah has an incredible gift for making her guests feel comfortable enough to share their most vulnerable moments. Every episode leaves me feeling inspired.",
    author: "Michael Torres",
    title: "Regular Listener",
    rating: 5,
  },
  {
    quote: "The Mindshift Podcast has genuinely changed how I approach challenges. The conversations are deep, authentic, and always thought-provoking.",
    author: "Jennifer Kim",
    title: "Subscriber since 2023",
    rating: 5,
  },
  {
    quote: "I've tried countless self-improvement podcasts, but this one stands out. Real stories, real people, real impact. No pretense, just honest dialogue.",
    author: "David Okonkwo",
    title: "Apple Podcasts Reviewer",
    rating: 5,
  },
]

export default function PodcastTestimonials1() {
  return (
    <Section className="py-24 md:py-32 bg-gradient-to-b from-contrast via-purple-950/20 to-contrast relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent3/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent3 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Listener Love
          </p>
          <Heading as="h2" color="text-white" margin="mb-6">
            What Our Community Says
          </Heading>
          <Paragraph className="text-white/70">
            Rated 4.9/5 stars across all platforms with over 15,000 reviews
          </Paragraph>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group flex flex-col h-full"
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col h-full group-hover:border-accent3/30 group-hover:bg-white/10 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <Paragraph className="text-white/80 leading-relaxed mb-8 flex-grow italic">
                  "{testimonial.quote}"
                </Paragraph>

                {/* Author */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-white font-medium mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-white/50 text-sm">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Heading as="h3" color="text-white" margin="mb-2" className="text-4xl">
                <CountUp end={2} decimals={1} suffix="M+" delay={0.3} duration={3} />
              </Heading>
              <Paragraph className="text-white/50 text-sm tracking-wide">
                Monthly Listeners
              </Paragraph>
            </div>
            <div className="text-center">
              <Heading as="h3" color="text-white" margin="mb-2" className="text-4xl">
                <CountUp end={150} suffix="+" delay={0.5} duration={3} />
              </Heading>
              <Paragraph className="text-white/50 text-sm tracking-wide">
                Total Episodes
              </Paragraph>
            </div>
            <div className="text-center">
              <Heading as="h3" color="text-white" margin="mb-2" className="text-4xl">
                <CountUp end={15} suffix="K+" delay={0.7} duration={3} />
              </Heading>
              <Paragraph className="text-white/50 text-sm tracking-wide">
                Reviews
              </Paragraph>
            </div>
            <div className="text-center">
              <Heading as="h3" color="text-white" margin="mb-2" className="text-4xl flex items-center justify-center gap-1">
                <CountUp end={4.9} decimals={1} delay={0.9} duration={3} />
                <svg className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </Heading>
              <Paragraph className="text-white/50 text-sm tracking-wide">
                Average Rating
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
