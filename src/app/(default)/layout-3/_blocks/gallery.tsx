import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { MasonryFilter } from '@/components/masonry-filter'

const categories = ['All', 'Portrait', 'Landscape', 'Abstract', 'Commercial']

const portfolioItems = [
  {
    id: 1,
    category: 'Portrait',
    image: '/images/layout-3/pexels-simon-robben-55958-614810.jpg',
    alt: 'Portrait photography',
  },
  {
    id: 2,
    category: 'Portrait',
    image: '/images/layout-3/pexels-forgottenluix-2922450.jpg',
    alt: 'Portrait photography',
  },
  {
    id: 3,
    category: 'Landscape',
    image: '/images/layout-3/pexels-pixabay-462162.jpg',
    alt: 'Landscape photography',
  },
  {
    id: 4,
    category: 'Landscape',
    image: '/images/layout-3/pexels-bri-schneiter-28802-346529.jpg',
    alt: 'Landscape photography',
  },
  {
    id: 5,
    category: 'Landscape',
    image: '/images/layout-3/pexels-pixabay-355465.jpg',
    alt: 'Landscape photography',
  },
  {
    id: 6,
    category: 'Landscape',
    image: '/images/layout-3/pexels-sebastian-palomino-933481-1955134.jpg',
    alt: 'Landscape photography',
  },
  {
    id: 7,
    category: 'Portrait',
    image: '/images/layout-3/pexels-olly-774909.jpg',
    alt: 'Portrait photography',
  },
  {
    id: 8,
    category: 'Abstract',
    image: '/images/layout-3/pexels-2149489342-35218938.jpg',
    alt: 'Abstract photography',
  },
  {
    id: 9,
    category: 'Abstract',
    image: '/images/layout-3/pexels-alan7502-35244055.jpg',
    alt: 'Abstract photography',
  },
  {
    id: 10,
    category: 'Abstract',
    image: '/images/layout-3/pexels-minoa-film-112544374-35241220.jpg',
    alt: 'Abstract photography',
  },
  {
    id: 11,
    category: 'Abstract',
    image: '/images/layout-3/pexels-the-iop-86002042-35241787.jpg',
    alt: 'Abstract photography',
  },
  {
    id: 12,
    category: 'Commercial',
    image: '/layout-1/pexels-shattha-pilabut-38930-135620.jpg',
    alt: 'Commercial photography',
  },
  {
    id: 13,
    category: 'Commercial',
    image: '/layout-1/pexels-ekrulila-27467420.jpg',
    alt: 'Commercial photography',
  },
  {
    id: 14,
    category: 'Portrait',
    image: '/images/layout-3/pexels-jonaorle-4029925.jpg',
    alt: 'Portrait photography',
  },
  {
    id: 15,
    category: 'Commercial',
    image: '/layout-1/pexels-cottonbro-9745332.jpg',
    alt: 'Commercial photography',
  },
  {
    id: 16,
    category: 'Commercial',
    image: '/layout-1/pexels-rachel-claire-5490970.jpg',
    alt: 'Commercial photography',
  },
]

export default function Gallery() {
  return (
    <Section
      id="portfolio-section"
      className="py-30 bg-body2"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <Heading as="h2">My Selected Shots</Heading>
      </div>

      {/* Filterable Portfolio Grid */}
      <MasonryFilter
        categories={categories}
        items={portfolioItems}
        gap={16}
        breakpoints={{ default: 3, lg: 3, md: 2, sm: 1 }}
      />
    </Section>
  )
}
