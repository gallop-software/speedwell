import {
  Section,
  Columns,
  Column,
  Heading,
  Paragraph,
  Span,
  Label,
  Button,
  Buttons,
  Chip,
  Image,
} from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'
import sparklesIcon from '@iconify/icons-heroicons/sparkles-20-solid'

export default function Hero21() {
  return (
    <Section className="relative min-h-screen overflow-hidden pt-navbar">
      {/* Gradient mesh background with diagonal clip */}
      <div className="absolute inset-0 -z-10">
        {/* Base - white background below the diagonal */}
        <div className="absolute inset-0 bg-white" />

        {/* Main colorful gradient with diagonal clip */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 65%)' }}
        />

        {/* Blur overlays for depth */}
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-violet-600 to-transparent opacity-60 blur-3xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 65%)' }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-400 rounded-full opacity-30 blur-3xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 65%)' }}
        />
      </div>

      {/* Diagonal dashed lines overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="hero21-diagonal-lines"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
            patternTransform="rotate(-45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="50"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="6 12"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#hero21-diagonal-lines)"
        />
      </svg>

      <Columns
        cols="grid-cols-1 lg:grid-cols-2"
        gap="gap-12 lg:gap-16"
        align="items-center"
        className="pb-20 lg:pb-32"
      >
        <Column>
          <Chip
            iconBefore={sparklesIcon}
            bgColor="bg-gray-900"
            color="text-white"
            margin="mb-8"
          >
            Now Booking 2026 Projects
          </Chip>

          <Heading
            as="h1"
            color="text-gray-900"
            fontSize="text-5xl sm:text-6xl lg:text-7xl"
            margin="mb-6"
          >
            Transform your space into something{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </Heading>

          <Paragraph
            color="text-gray-600"
            fontSize="text-lg md:text-xl"
            className="max-w-xl"
            margin="mb-10"
          >
            Join hundreds of homeowners who have transformed their living spaces
            with our award-winning interior design services. From concept to
            completion, we bring your vision to life.
          </Paragraph>

          <Buttons>
            <Button
              href="/contact"
              variant="primary"
              icon={arrowRightIcon}
              iconPlacement="after"
              size="medium"
            >
              Start Your Project
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
            >
              View Portfolio
            </Button>
          </Buttons>
        </Column>

        <Column className="relative">
          {/* Floating cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main featured image card */}
            <div className="absolute top-0 left-0 w-[70%] bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/images/portfolio/houzlook/pexels-houzlook-3356416.jpg"
                alt="Modern living room design"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <Label
                  color="text-gray-500"
                  margin="mb-1"
                >
                  Featured Project
                </Label>
                <Heading
                  as="h3"
                  fontSize="text-base"
                  color="text-gray-900"
                  margin="mb-0"
                >
                  Modern Minimalist Living
                </Heading>
                <Paragraph
                  fontSize="text-sm"
                  color="text-gray-600"
                  margin="mb-0"
                >
                  Completed 2025
                </Paragraph>
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute top-8 right-0 w-[55%] bg-white rounded-2xl shadow-2xl p-6">
              <Label
                color="text-gray-500"
                margin="mb-4"
              >
                This Year
              </Label>
              <div className="space-y-4">
                <div>
                  <Heading
                    as="h4"
                    fontSize="text-3xl"
                    margin="mb-0"
                  >
                    47{' '}
                    <span className="text-sm text-gray-500 block">
                      Projects Completed
                    </span>
                  </Heading>
                </div>
                <div className="flex items-center gap-2">
                  <Span
                    fontSize="text-sm"
                    fontWeight="font-medium"
                    color="text-green-500"
                  >
                    +28%
                  </Span>
                  <Span
                    fontSize="text-sm"
                    color="text-gray-400"
                  >
                    vs last year
                  </Span>
                </div>
              </div>
            </div>

            {/* Testimonial card */}
            <div className="absolute bottom-0 right-8 w-[65%] bg-white rounded-2xl shadow-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                <div>
                  <Paragraph
                    fontSize="text-sm"
                    fontWeight="font-medium"
                    color="text-gray-900"
                    margin="mb-0"
                  >
                    Sarah M.
                  </Paragraph>
                  <Label
                    fontSize="text-xs"
                    color="text-gray-500"
                  >
                    Verified Client
                  </Label>
                </div>
              </div>
              <Paragraph
                fontSize="text-sm"
                color="text-gray-600"
                fontStyle="italic"
                margin="mb-0"
              >
                "Absolutely transformed our home. The attention to detail was
                incredible."
              </Paragraph>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Span
                    key={i}
                    color="text-amber-400"
                  >
                    ★
                  </Span>
                ))}
              </div>
            </div>
          </div>
        </Column>
      </Columns>
    </Section>
  )
}
