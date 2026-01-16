import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Button,
  Buttons,
  Subheading,
  Span,
  Label,
} from '@/components'

export default function Content13() {
  return (
    <Section
      id="purchase"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Gradient mesh background with diagonal clip */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient with diagonal clip - using template color scheme */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-body2)] via-[var(--color-accent3)] to-[var(--color-accent3-dark)]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 65%)' }}
        />

        {/* Blur overlays for depth */}
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-accent5-dark to-transparent opacity-40 blur-3xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 65%)' }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent3-light rounded-full opacity-30 blur-3xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 65%)' }}
        />
      </div>

      {/* Diagonal dashed lines overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="content13-diagonal-lines"
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
              stroke="var(--color-accent3-dark)"
              strokeWidth="1"
              strokeDasharray="6 12"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#content13-diagonal-lines)"
        />
      </svg>

      <Columns
        cols="grid-cols-1 lg:grid-cols-2"
        gap="gap-16 lg:gap-24"
        reverseColumns={true}
      >
        {/* Product Image */}
        <Column className="relative flex items-center justify-center">
          <div className="relative w-full">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-150"></div>

            <Image
              src="/images/layout-6/pexels-roman-odintsov-5837002.jpg"
              alt="Veloria Botanical Elixir bottle"
              className="relative z-10 max-w-2xl mx-auto w-full"
              size="large"
            />
          </div>
        </Column>

        {/* Content */}
        <Column className="flex flex-col justify-center">
          <Subheading margin="mb-4">Limited Release</Subheading>

          <Heading
            as="h2"
            margin="mb-6"
          >
            Bring Veloria Home
          </Heading>

          <Paragraph
            fontSize="text-lg"
            margin="mb-8"
            color="text-body-contrast/80"
          >
            Each bottle is individually numbered and crafted with exceptional
            care. Experience the culmination of six generations of botanical
            craftsmanship.
          </Paragraph>

          {/* Product details */}
          <div className="space-y-4 mb-10 pb-10 border-b border-body-dark/20">
            <div className="flex justify-between items-center">
              <Span color="text-body-contrast/60">Volume</Span>
              <Span fontWeight="font-medium">750ml</Span>
            </div>
            <div className="flex justify-between items-center">
              <Span color="text-body-contrast/60">Alcohol</Span>
              <Span fontWeight="font-medium">0%</Span>
            </div>
            <div className="flex justify-between items-center">
              <Span color="text-body-contrast/60">Origin</Span>
              <Span fontWeight="font-medium">Scottish Highlands</Span>
            </div>
            <div className="flex justify-between items-center">
              <Span color="text-body-contrast/60">Batch</Span>
              <Span fontWeight="font-medium">No. 847</Span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div>
              <Label
                fontSize="text-sm"
                color="text-body-contrast/50"
                margin="mb-1"
              >
                Price
              </Label>
              <Heading
                as="h3"
                fontSize="text-4xl"
                color="text-accent"
                margin="mb-0"
              >
                $89
              </Heading>
            </div>

            <Buttons className="flex-1 sm:justify-end">
              <Button
                href="#"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Add to Cart
              </Button>
            </Buttons>
          </div>
        </Column>
      </Columns>
    </Section>
  )
}
