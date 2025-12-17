import {
  Section,
  Subheading,
  Heading,
  Paragraph,
  Image,
  Columns,
  Column,
} from '@/components'

export default function Showcase10() {
  return (
    <Section className="py-30 bg-body">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Subheading className="mb-4">Our Portfolio</Subheading>
        <Heading as="h2" margin="mb-6">
          Moments We've Crafted
        </Heading>
        <Paragraph className="text-lg">
          Every celebration tells a unique story. Explore our portfolio of weddings, 
          corporate events, and special occasions where dreams became reality through 
          meticulous planning and creative execution.
        </Paragraph>
      </div>

      {/* Masonry-style Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* Tall image - spans 2 rows */}
        <div className="md:row-span-2 relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[600px]">
          <Image
            src="/images/portfolio/pexels-amelia-hallsworth-5461644.jpg"
            alt="Elegant wedding ceremony with floral arch"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-2xl mb-2">Garden Wedding</h3>
              <p className="text-sm text-white/90">Intimate outdoor ceremony with 120 guests</p>
            </div>
          </div>
        </div>

        {/* Regular image */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/portfolio/pexels-burst-545012.jpg"
            alt="Elegant table setting with floral centerpiece"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Reception Details</h3>
              <p className="text-sm text-white/90">Luxury tablescape design</p>
            </div>
          </div>
        </div>

        {/* Regular image */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/portfolio/pexels-clickerhappy-584399.jpg"
            alt="Beautiful event venue decoration"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Venue Styling</h3>
              <p className="text-sm text-white/90">Complete event transformation</p>
            </div>
          </div>
        </div>

        {/* Wide image - spans 2 columns */}
        <div className="md:col-span-2 relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/portfolio/pexels-dropshado-2251247.jpg"
            alt="Corporate event setup"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-2xl mb-2">Corporate Gala</h3>
              <p className="text-sm text-white/90">Annual awards ceremony for 300 attendees</p>
            </div>
          </div>
        </div>

        {/* Regular image */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/portfolio/pexels-emrecan-2079249.jpg"
            alt="Event detail shot"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Ceremony Details</h3>
              <p className="text-sm text-white/90">Personalized touches</p>
            </div>
          </div>
        </div>

        {/* Regular image */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[290px]">
          <Image
            src="/images/portfolio/pexels-bemistermister-2442904.jpg"
            alt="Outdoor event setup"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-xl mb-2">Outdoor Celebration</h3>
              <p className="text-sm text-white/90">Al fresco dining experience</p>
            </div>
          </div>
        </div>

        {/* Tall image - spans 2 rows */}
        <div className="md:row-span-2 relative group overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[600px]">
          <Image
            src="/images/portfolio/pexels-alex-qian-1180283-2343465.jpg"
            alt="Elegant ballroom setup"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            size="large"
            rounded="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-heading text-2xl mb-2">Grand Ballroom</h3>
              <p className="text-sm text-white/90">Luxury wedding reception with 250 guests</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
