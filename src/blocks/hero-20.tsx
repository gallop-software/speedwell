'use client'

import {
  Heading,
  Paragraph,
  Accent,
  Button,
  Buttons,
  CountUp,
  Label,
} from '@/components'

export default function Hero20() {
  return (
    <div className="relative bg-contrast overflow-hidden">
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
          suppressHydrationWarning
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-6 py-24 md:py-40 pt-navbar">
        <div className="max-w-4xl mx-auto">
          {/* Accent text */}
          <Accent
            size="medium"
            color="text-white"
            margin="mb-4"
          >
            new episode weekly
          </Accent>

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
          <Paragraph
            color="text-white/80"
            fontSize="text-xl md:text-2xl"
            fontWeight="font-light"
            lineHeight="leading-relaxed"
            margin="mb-8"
            className="max-w-2xl mx-auto"
          >
            Conversations that challenge perspectives and inspire personal
            growth
          </Paragraph>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <Heading
                as="h3"
                color="text-white"
                margin=""
                className="text-2xl"
              >
                <CountUp
                  end={150}
                  suffix="+"
                  delay={0.3}
                  duration={3}
                />
              </Heading>
              <Label color="text-white/60" margin="">Episodes</Label>
            </div>
            <div className="w-full md:w-px h-px md:h-auto md:self-stretch bg-white/20"></div>
            <div className="text-center">
              <Heading
                as="h3"
                color="text-white"
                margin=""
                className="text-2xl"
              >
                <CountUp
                  end={2}
                  decimals={1}
                  suffix="M+"
                  delay={0.5}
                  duration={3}
                />
              </Heading>
              <Label color="text-white/60" margin="">Listeners</Label>
            </div>
            <div className="w-full md:w-px h-px md:h-auto md:self-stretch bg-white/20"></div>
            <div className="text-center">
              <Heading
                as="h3"
                color="text-white"
                margin=""
                className="text-2xl flex items-center justify-center gap-1"
              >
                <CountUp
                  end={4.9}
                  decimals={1}
                  delay={0.7}
                  duration={3}
                />
                <svg
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </Heading>
              <Label color="text-white/60" margin="">Rating</Label>
            </div>
          </div>

          {/* CTA Buttons */}
          <Buttons className="justify-center">
            <Button
              href="#episodes"
              variant="primary"
              dark
            >
              Latest Episodes
            </Button>
            <Button
              href="#subscribe"
              variant="secondary"
              dark
            >
              Subscribe Now
            </Button>
          </Buttons>
        </div>
      </div>
    </div>
  )
}
