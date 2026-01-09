import { Section, Image, Heading } from '@/components'

export default function ProductGallery1() {
  return (
    <Section className="py-0 bg-body relative overflow-hidden">
      {/* Full-width image strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {/* Image 1 - Tall */}
        <div className="relative aspect-[3/4] md:aspect-auto md:row-span-2 overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-ertabbt-150087708-14210586.jpg"
            alt="Veloria served in a crystal glass"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            size="large"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
        </div>

        {/* Image 2 */}
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-nano-erdozain-120534369-28180071.jpg"
            alt="Botanical ingredients"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            size="medium"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
        </div>

        {/* Image 3 */}
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-larissafarber-34190188.jpg"
            alt="Botanical crafting process"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            size="medium"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
        </div>

        {/* Image 4 */}
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-yankrukov-5480235.jpg"
            alt="Evening refreshment setting"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            size="medium"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
        </div>

        {/* Image 5 */}
        <div className="relative aspect-square overflow-hidden group">
          <Image
            src="/images/layout-6/pexels-daka-12360528.jpg"
            alt="Veloria Botanical Elixir bottle"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            size="medium"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
        </div>
      </div>

      {/* Center overlay text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-body/95 backdrop-blur-sm px-12 py-10 text-center">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Experience
          </p>
          <Heading as="h2" styleAs="h3" margin="mb-0">
            The Art of Craft
          </Heading>
        </div>
      </div>
    </Section>
  )
}
