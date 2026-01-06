import { Heading, Button, Buttons } from '@/components'

export default function Hero20() {
  return (
    <div className="relative min-h-screen bg-contrast overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-black/80 z-10"></div>
      
      {/* Background video - Vimeo iframe */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1151997268?h=ec0ec60a5d&autoplay=1&loop=1&muted=1&background=1&quality=1080p"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
          style={{ aspectRatio: '16/9' }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Podcast Background"
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-navbar">
        <div className="max-w-4xl mx-auto">
          {/* Podcast badge */}
          <div className="inline-flex items-center gap-2 bg-accent3/20 border border-accent3/30 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-accent3 rounded-full animate-pulse"></span>
            <span className="text-accent3 text-sm tracking-[0.2em] uppercase font-medium">
              New Episode Weekly
            </span>
          </div>

          {/* Main heading */}
          <Heading
            as="h1"
            color="text-white"
            margin="mb-6"
            className="text-5xl md:text-6xl lg:text-7xl"
          >
            The Mindshift Podcast
          </Heading>

          {/* Tagline */}
          <p className="text-white/80 text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Conversations that challenge perspectives and inspire personal growth
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-12 text-white/60 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">150+</div>
              <div className="text-xs tracking-wider uppercase">Episodes</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">2M+</div>
              <div className="text-xs tracking-wider uppercase">Listeners</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">4.9★</div>
              <div className="text-xs tracking-wider uppercase">Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <Buttons className="justify-center">
            <Button
              href="#episodes"
              variant="primary"
            >
              Latest Episodes
            </Button>
            <Button
              href="#subscribe"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Subscribe Now
            </Button>
          </Buttons>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}
