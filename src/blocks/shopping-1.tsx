import {
  Section,
  Columns,
  Column,
  Image,
  Heading,
  Paragraph,
  Button,
  Subheading,
  Span,
  Label,
  BackgroundDiagonal1,
  Chip,
} from '@/components'
import shoppingBagIcon from '@iconify/icons-lucide/shopping-bag'

export default function Shopping1() {
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
              className="relative z-10 max-w-2xl mx-auto w-full shadow-2xl"
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
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Label
                variant="large"
                color="text-body-contrast/60"
              >
                Volume
              </Label>
              <span className="flex-1 border-b border-dashed border-body-dark/90" />
              <Chip>750ml</Chip>
            </div>
            <div className="flex items-center gap-3">
              <Label
                variant="large"
                color="text-body-contrast/60"
              >
                Alcohol
              </Label>
              <span className="flex-1 border-b border-dashed border-body-dark/90" />
              <Chip>0%</Chip>
            </div>
            <div className="flex items-center gap-3">
              <Label
                variant="large"
                color="text-body-contrast/60"
              >
                Origin
              </Label>
              <span className="flex-1 border-b border-dashed border-body-dark/90" />
              <Chip>Scottish Highlands</Chip>
            </div>
            <div className="flex items-center gap-3">
              <Label
                variant="large"
                color="text-body-contrast/60"
              >
                Batch
              </Label>
              <span className="flex-1 border-b border-dashed border-body-dark/90" />
              <Chip>No. 847</Chip>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="mt-10">
            <Label
              fontWeight="font-bold"
              variant="large"
              color="text-accent2"
              margin="mb-1"
            >
              Price
            </Label>
            <div className="flex items-center gap-6">
              <Heading
                as="h3"
                fontSize="text-4xl"
                color="text-accent"
                margin="mb-0"
              >
                $89
              </Heading>

              <span className="hidden sm:block flex-1 border-b border-dashed border-body-dark/90" />

              <Button
                href="https://buy.stripe.com/test_9B6cN71Sw03VgpWdHb2Ry00"
                variant="primary"
                target="_blank"
                icon={shoppingBagIcon}
                iconPlacement="before"
                className="w-full sm:w-auto"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </Column>
      </Columns>
    </Section>
  )
}
