import { Section, Heading, Paragraph } from '@/components'

const platforms = [
  { name: 'Apple Podcasts', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v10l7-5-7-5z', color: 'from-purple-500 to-pink-500' },
  { name: 'Spotify', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', color: 'from-green-500 to-emerald-500' },
  { name: 'YouTube', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', color: 'from-red-500 to-red-600' },
  { name: 'Google Podcasts', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', color: 'from-blue-500 to-blue-600' },
  { name: 'Amazon Music', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', color: 'from-orange-500 to-amber-500' },
  { name: 'Pocket Casts', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', color: 'from-red-500 to-rose-500' },
]

export default function PodcastSubscribe1() {
  return (
    <Section id="subscribe" className="py-24 md:py-32 bg-body relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.05),transparent_50%)]"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent3 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Never Miss an Episode
          </p>
          <Heading as="h2" margin="mb-6">
            Subscribe on Your Favorite Platform
          </Heading>
          <Paragraph className="text-body-contrast/70">
            Available everywhere you listen to podcasts. Choose your preferred platform below.
          </Paragraph>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href="#"
              className="group relative bg-body2 border border-body-dark/20 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-accent3/30 hover:shadow-lg hover:shadow-accent3/5 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              
              {/* Name */}
              <div className="relative text-center font-medium text-sm group-hover:text-accent3 transition-colors">
                {platform.name}
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-purple-900/10 to-accent3/10 border border-accent3/20 rounded-2xl p-8 md:p-12 text-center">
          <Heading as="h3" margin="mb-4">
            Get Episode Updates via Email
          </Heading>
          <Paragraph className="text-body-contrast/70 mb-8 max-w-xl mx-auto">
            Join 50,000+ subscribers and receive weekly episode summaries, 
            key takeaways, and exclusive behind-the-scenes content.
          </Paragraph>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-body border border-body-dark/30 rounded-lg focus:outline-none focus:border-accent3 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent3 text-white rounded-lg font-medium hover:bg-accent3/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-body-contrast/50 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </Section>
  )
}
