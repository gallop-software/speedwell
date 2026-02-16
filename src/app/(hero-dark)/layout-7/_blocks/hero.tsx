import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Accent } from '@/components/accent'
import { Button } from '@/components/button'
import { Buttons } from '@/components/buttons'
import { CountUp } from '@/components/count-up'
import { Label } from '@/components/label'
import { VideoBackground } from '@/components/video-background'
import { Icon } from '@/components/icon'
import starIcon from '@iconify/icons-heroicons/star-20-solid'

export default function Hero() {
  return (
    <div className="relative bg-contrast overflow-hidden pt-navbar min-h-0 flex items-center justify-center">
      <VideoBackground
        videoId="1151997268"
        videoHash="ec0ec60a5d"
        posterImage="/images/layout-7/video-image.png"
        gradientOverlay="bg-gradient-to-br from-purple-900/40 via-overlay/60 to-overlay/80"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-6 pt-14 pb-28 lg:pb-28">
        <div className="max-w-4xl mx-auto">
          {/* Accent text */}
          <Accent
            size="medium"
            color="text-overlay-text"
            margin="mb-4"
          >
            new episode weekly
          </Accent>

          {/* Main heading */}
          <Heading
            as="h1"
            color="text-overlay-text"
            margin="mb-6"
            fontSize="text-5xl md:text-6xl lg:text-7xl"
          >
            The Mindshift Podcast
          </Heading>

          {/* Tagline */}
          <Paragraph
            color="text-overlay-text/80"
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
                color="text-overlay-text"
                margin=""
                fontSize="text-2xl"
              >
                <CountUp
                  end={150}
                  suffix="+"
                  delay={0}
                  duration={3}
                />
              </Heading>
              <Label
                color="text-overlay-text/60"
                margin=""
              >
                Episodes
              </Label>
            </div>
            <div className="w-full max-w-20 md:max-w-none md:w-px h-px md:h-auto md:self-stretch bg-overlay-text/20"></div>
            <div className="text-center">
              <Heading
                as="h3"
                color="text-overlay-text"
                margin=""
                fontSize="text-2xl"
              >
                <CountUp
                  end={2}
                  decimals={1}
                  suffix="M+"
                  delay={0}
                  duration={3}
                />
              </Heading>
              <Label
                color="text-overlay-text/60"
                margin=""
              >
                Listeners
              </Label>
            </div>
            <div className="w-full max-w-20 md:max-w-none md:w-px h-px md:h-auto md:self-stretch bg-overlay-text/20"></div>
            <div className="text-center">
              <Heading
                as="h3"
                color="text-overlay-text"
                margin=""
                fontSize="text-2xl"
                className="flex items-center justify-center gap-1"
              >
                <CountUp
                  end={4.9}
                  decimals={1}
                  delay={0}
                  duration={3}
                />
                <Icon icon={starIcon} className="w-5 h-5 text-yellow-400" />
              </Heading>
              <Label
                color="text-overlay-text/60"
                margin=""
              >
                Rating
              </Label>
            </div>
          </div>

          {/* CTA Buttons */}
          <Buttons
            margin="mb-0"
            className="justify-center"
          >
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
