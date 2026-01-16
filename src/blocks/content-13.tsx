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
  BackgroundDiagonal1,
} from '@/components'

export default function Content13() {
  return (
    <Section
      id="purchase"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <BackgroundDiagonal1 />

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
              <Label
                variant="large"
                color="text-body-contrast/60"
              >
                Volume
              </Label>
              <Span fontWeight="font-medium">750ml</Span>
            </div>
            <div className="flex justify-between items-center">
              <Label
                variant="large"
                color="text-body-contrast/60"
              >
                Alcohol
              </Label>
              <Span fontWeight="font-medium">0%</Span>
            </div>
            <div className="flex justify-between items-center">
              <Label
                variant="large"
                color="text-body-contrast/60"
              >
                Origin
              </Label>
              <Span fontWeight="font-medium">Scottish Highlands</Span>
            </div>
            <div className="flex justify-between items-center">
              <Label
                variant="large"
                color="text-body-contrast/60"
              >
                Batch
              </Label>
              <Span fontWeight="font-medium">No. 847</Span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div>
              <Label
                variant="large"
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
