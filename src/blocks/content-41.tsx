import {
  Section,
  Subheading,
  Heading,
  Paragraph,
  Image,
  Grid,
} from '@/components'

export default function Content41() {
  return (
    <Section className="py-30 bg-body">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Subheading className="mb-4">Our Portfolio</Subheading>
        <Heading as="h2">Moments We've Crafted</Heading>
        <Paragraph fontSize="text-lg">
          Every celebration tells a unique story. Explore our portfolio of
          weddings, corporate events, and special occasions where dreams became
          reality through meticulous planning and creative execution.
        </Paragraph>
      </div>

      {/* Masonry-style Gallery Grid */}
      <Grid
        cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        gap="gap-6"
        className="mb-16"
      >
        {/* Tall image - spans 2 rows */}
        <div className="md:row-span-2 relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[600px]">
          <Image
            src="/images/layout-5/pexels-jeremy-wong-382920-1082024.jpg"
            alt="Elegant wedding ceremony with floral arch"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-2xl mb-2">Garden Wedding</h3>
              <Paragraph
                fontSize="text-sm"
                color="text-white/90"
                margin="mb-0"
              >
                Intimate outdoor ceremony with 120 guests
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Regular image */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/layout-5/pexels-bohlemedia-1114425.jpg"
            alt="Elegant table setting with floral centerpiece"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Reception Details</h3>
              <Paragraph
                fontSize="text-sm"
                color="text-white/90"
                margin="mb-0"
              >
                Luxury tablescape design
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Regular image */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/layout-5/pexels-jeremy-wong-382920-1035665.jpg"
            alt="Beautiful event venue decoration"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Venue Styling</h3>
              <Paragraph
                fontSize="text-sm"
                color="text-white/90"
                margin="mb-0"
              >
                Complete event transformation
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Wide image - spans 2 columns */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/layout-5/pexels-pavel-danilyuk-6405768.jpg"
            alt="Corporate event setup"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-2xl mb-2">Corporate Gala</h3>
              <Paragraph
                fontSize="text-sm"
                color="text-white/90"
                margin="mb-0"
              >
                Annual awards ceremony for 300 attendees
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Regular image */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/layout-5/pexels-bendix-251808.jpg"
            alt="Event detail shot"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Ceremony Details</h3>
              <Paragraph
                fontSize="text-sm"
                color="text-white/90"
                margin="mb-0"
              >
                Personalized touches
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Tall image - spans 2 rows on tablet only */}
        <div className="md:row-span-2 lg:row-span-1 relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[600px] lg:h-[290px]">
          <Image
            src="/images/layout-5/pexels-panditwiguna-2788488.jpg"
            alt="Outdoor event setup"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Outdoor Celebration</h3>
              <Paragraph
                fontSize="text-sm"
                color="text-white/90"
                margin="mb-0"
              >
                Al fresco dining experience
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Regular image */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/layout-5/pexels-pixabay-265947.jpg"
            alt="Elegant ballroom setup"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Grand Ballroom</h3>
              <Paragraph
                fontSize="text-sm"
                color="text-white/90"
                margin="mb-0"
              >
                Luxury wedding reception with 250 guests
              </Paragraph>
            </div>
          </div>
        </div>
      </Grid>
    </Section>
  )
}
