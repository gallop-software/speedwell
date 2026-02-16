import { Section } from '@/components/section'
import { Subheading } from '@/components/subheading'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Image } from '@/components/image'
import { Grid } from '@/components/grid'

export default function Content() {
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
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-overlay-text transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <Heading as="h3" fontSize="text-2xl" margin="mb-2" color="text-overlay-text">Garden Wedding</Heading>
              <Paragraph
                fontSize="text-sm"
                color="text-overlay-text/90"
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
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-overlay-text transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <Heading as="h3" fontSize="text-xl" margin="mb-2" color="text-overlay-text">Reception Details</Heading>
              <Paragraph
                fontSize="text-sm"
                color="text-overlay-text/90"
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
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-overlay-text transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <Heading as="h3" fontSize="text-xl" margin="mb-2" color="text-overlay-text">Venue Styling</Heading>
              <Paragraph
                fontSize="text-sm"
                color="text-overlay-text/90"
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
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-overlay-text transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <Heading as="h3" fontSize="text-2xl" margin="mb-2" color="text-overlay-text">Corporate Gala</Heading>
              <Paragraph
                fontSize="text-sm"
                color="text-overlay-text/90"
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
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-overlay-text transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <Heading as="h3" fontSize="text-xl" margin="mb-2" color="text-overlay-text">Ceremony Details</Heading>
              <Paragraph
                fontSize="text-sm"
                color="text-overlay-text/90"
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
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-overlay-text transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <Heading as="h3" fontSize="text-xl" margin="mb-2" color="text-overlay-text">Outdoor Celebration</Heading>
              <Paragraph
                fontSize="text-sm"
                color="text-overlay-text/90"
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
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-overlay/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-overlay-text transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
              <Heading as="h3" fontSize="text-xl" margin="mb-2" color="text-overlay-text">Grand Ballroom</Heading>
              <Paragraph
                fontSize="text-sm"
                color="text-overlay-text/90"
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
