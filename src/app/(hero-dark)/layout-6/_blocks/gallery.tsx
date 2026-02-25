import { Section } from '@/components/section'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Grid } from '@/components/grid'
import { Subheading } from '@/components/subheading'

export default function Gallery() {
  return (
    <Section
      className="py-0 bg-body relative overflow-hidden"
      innerAlign="full"
    >
      {/* Full-width image strip */}
      <Grid
        cols="grid-cols-2 md:grid-cols-3"
        gap="gap-0"
        className="bg-overlay"
      >
        {/* Image 1 - Tall */}
        <div className="relative aspect-auto row-span-2 overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-ertabbt-150087708-14210586.jpg"
            alt="Veloria served in a crystal glass"
            className="w-full h-full object-cover transition-transform duration-700 scale-104 group-hover:scale-105"
            size="large"
            rounded="rounded-none"
          />
          <div className="absolute inset-0 bg-overlay/20 group-hover:bg-overlay/10 transition-colors duration-500"></div>
        </div>

        {/* Image 2 */}
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-nano-erdozain-120534369-28180071.jpg"
            alt="Botanical ingredients"
            className="w-full h-full object-cover transition-transform duration-700 scale-104 group-hover:scale-105"
            size="medium"
            rounded="rounded-none"
          />
          <div className="absolute inset-0 bg-overlay/20 group-hover:bg-overlay/10 transition-colors duration-500"></div>
        </div>

        {/* Image 3 */}
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-larissafarber-34190188.jpg"
            alt="Botanical crafting process"
            className="w-full h-full object-cover transition-transform duration-700 scale-104 group-hover:scale-105"
            size="medium"
            rounded="rounded-none"
          />
          <div className="absolute inset-0 bg-overlay/20 group-hover:bg-overlay/10 transition-colors duration-500"></div>
        </div>

        {/* Image 4 */}
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-yankrukov-5480235.jpg"
            alt="Evening refreshment setting"
            className="w-full h-full object-cover transition-transform duration-700 scale-104 group-hover:scale-105"
            size="medium"
            rounded="rounded-none"
          />
          <div className="absolute inset-0 bg-overlay/20 group-hover:bg-overlay/10 transition-colors duration-500"></div>
        </div>

        {/* Image 5 */}
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-daka-12360528.jpg"
            alt="Veloria Botanical Elixir bottle"
            className="w-full h-full object-cover transition-transform duration-700 scale-104   group-hover:scale-105"
            size="medium"
            rounded="rounded-none"
          />
          <div className="absolute inset-0 bg-overlay/20 group-hover:bg-overlay/10 transition-colors duration-500"></div>
        </div>
      </Grid>

      {/* Center overlay text */}
      <div className="absolute inset-6 md:inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-body/95 backdrop-blur-sm px-12 py-10 text-center">
          <Subheading margin="mb-3">Experience</Subheading>
          <Heading
            as="h2"
            styleAs="h3"
            margin="mb-0"
          >
            The Art of Craft
          </Heading>
        </div>
      </div>
    </Section>
  )
}
