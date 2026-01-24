import { Section, Heading, Paragraph, Image, Grid, Label } from '@/components'

export default function Cover3() {
  return (
    <Section
      className="relative py-30 overflow-hidden bg-black/70 px-0"
      innerAlign="content"
    >
      <div className="absolute inset-0 w-full -z-1">
        <Image
          src="/images/layout-4/pexels-jonathanborba-2878738.jpg"
          alt="Signature dish"
          className="w-full h-full object-cover"
          size="full"
        />
      </div>
      <Heading
        as="h2"
        color="text-white"
        textAlign="text-center"
      >
        Our Signature Dish
      </Heading>
      <Paragraph color="text-white/90">
        Introducing our renowned Prime Aged Ribeye with Truffle-Infused Mashed
        Potatoes and Roasted Seasonal Vegetables. A masterful composition of
        premium beef, velvety potatoes, and garden-fresh accompaniments that
        represents the pinnacle of steakhouse excellence.
      </Paragraph>
      <Paragraph color="text-white/80">
        Featuring 28-day dry-aged USDA Prime ribeye, hand-selected for its
        exceptional marbling and tenderness. Our silky mashed potatoes are
        enriched with black truffle oil and European butter, while seasonal
        vegetables are roasted to caramelized perfection. Each component
        showcases our dedication to quality and craftsmanship.
      </Paragraph>

      {/* Features grid */}
      <Grid
        cols="grid-cols-1 md:grid-cols-2"
        gap="gap-4"
        className="mb-8"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <Label
            color="text-white"
            fontSize="text-sm"
            fontWeight="font-semibold"
            margin="mb-1"
          >
            Preparation
          </Label>
          <Paragraph
            color="text-white/80"
            fontSize="text-xs"
            margin="mb-0"
          >
            Wood-fired grill with butter basting technique
          </Paragraph>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <Label
            color="text-white"
            fontSize="text-sm"
            fontWeight="font-semibold"
            margin="mb-1"
          >
            Wine Pairing
          </Label>
          <Paragraph
            color="text-white/80"
            fontSize="text-xs"
            margin="mb-0"
          >
            2018 Napa Valley Cabernet Sauvignon
          </Paragraph>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <Label
            color="text-white"
            fontSize="text-sm"
            fontWeight="font-semibold"
            margin="mb-1"
          >
            Chef's Note
          </Label>
          <Paragraph
            color="text-white/80"
            fontSize="text-xs"
            margin="mb-0"
          >
            Recommended medium-rare for optimal flavor
          </Paragraph>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <Label
            color="text-white"
            fontSize="text-sm"
            fontWeight="font-semibold"
            margin="mb-1"
          >
            Accolades
          </Label>
          <Paragraph
            color="text-white/80"
            fontSize="text-xs"
            margin="mb-0"
          >
            Best Steak Award 2024 - Culinary Excellence
          </Paragraph>
        </div>
      </Grid>
    </Section>
  )
}
