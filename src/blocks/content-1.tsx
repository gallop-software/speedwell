import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Label,
  Grid,
  CountUp,
} from '@/components'

export default function Content1() {
  return (
    <Section
      id="discover"
      className="py-24 md:py-32 bg-body relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="cross-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#cross-pattern)"
        />
      </svg>

      <Columns
        cols="grid-cols-1 lg:grid-cols-2"
        gap="gap-16 lg:gap-24"
        reverseColumns={false}
      >
        {/* Image Column */}
        <Column className="relative">
          <div className="relative">
            {/* Main product image */}
            <div className="relative z-10">
              <Image
                src="/images/layout-6/pexels-daka-12360528.jpg"
                alt="Veloria Botanical Elixir bottle"
                className="w-full object-cover rounded-sm"
                size="large"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-accent/20 rounded-sm -z-0"></div>
          </div>
        </Column>

        {/* Content Column */}
        <Column className="flex flex-col justify-center">
          <Heading
            as="h2"
            styleAs="h3"
            fontSize="text-3xl"
            color="text-accent5"
            margin="mb-4"
            fontWeight="font-medium"
          >
            Our Story
          </Heading>

          <Heading
            as="h3"
            styleAs="h2"
          >
            Born from Tradition, Refined by Time
          </Heading>

          <Paragraph>
            In the mist-covered hills of the Scottish Highlands, where ancient
            rivers meet untouched wilderness, we discovered the inspiration for
            Veloria. Our master blenders have spent decades perfecting the art
            of botanical infusion, honoring techniques passed down through
            generations.
          </Paragraph>

          <Paragraph>
            Each bottle represents over 200 hours of careful craftsmanship—from
            hand-selecting the finest botanicals at dawn to the slow cold-press
            extraction that captures every nuanced flavor. We source our
            ingredients from family farms across three continents, ensuring only
            the most exceptional botanicals make their way into your glass.
          </Paragraph>

          {/* Stats */}
          <Grid
            cols="grid-cols-3"
            gap="gap-8"
          >
            <div className="text-center">
              <Heading
                as="h3"
                fontSize="text-3xl md:text-4xl"
                color="text-accent"
                margin="mb-2"
              >
                <CountUp
                  end={1847}
                  duration={2.5}
                  separator=","
                />
              </Heading>
              <Label
                fontSize="text-sm"
                color="text-body-contrast/60"
                className="tracking-wide"
              >
                Year Founded
              </Label>
            </div>
            <div className="text-center">
              <Heading
                as="h3"
                fontSize="text-3xl md:text-4xl"
                color="text-accent"
                margin="mb-2"
              >
                <CountUp
                  end={12}
                  duration={2}
                />
              </Heading>
              <Label
                fontSize="text-sm"
                color="text-body-contrast/60"
                className="tracking-wide"
              >
                Botanicals
              </Label>
            </div>
            <div className="text-center">
              <Heading
                as="h3"
                fontSize="text-3xl md:text-4xl"
                color="text-accent"
                margin="mb-2"
              >
                <CountUp
                  end={6}
                  suffix="th"
                  duration={2}
                />
              </Heading>
              <Label
                fontSize="text-sm"
                color="text-body-contrast/60"
                className="tracking-wide"
              >
                Generation
              </Label>
            </div>
          </Grid>
        </Column>
      </Columns>
    </Section>
  )
}
