import {
  Section,
  Heading,
  Image,
  Masonry,
  FilterNav,
  FilterWrapper,
} from '@/components'

const categories = ['ALL', 'PORTRAIT', 'LANDSCAPE', 'ABSTRACT', 'COMMERCIAL']

const portfolioItems = [
  {
    id: 1,
    category: 'PORTRAIT',
    image: '/images/layout-3/pexels-simon-robben-55958-614810.jpg',
    alt: 'Portrait photography 4',
  },
  {
    id: 2,
    category: 'PORTRAIT',
    image: '/images/layout-3/pexels-forgottenluix-2922450.jpg',
    alt: 'Portrait photography 2',
  },
  {
    id: 3,
    category: 'LANDSCAPE',
    image: '/images/layout-3/pexels-pixabay-462162.jpg',
    alt: 'Landscape photography 1',
  },
  {
    id: 4,
    category: 'LANDSCAPE',
    image: '/images/layout-3/pexels-bri-schneiter-28802-346529.jpg',
    alt: 'Landscape photography 2',
  },
  {
    id: 5,
    category: 'LANDSCAPE',
    image: '/images/layout-3/pexels-pixabay-355465.jpg',
    alt: 'Landscape photography 3',
  },
  {
    id: 6,
    category: 'LANDSCAPE',
    image: '/images/layout-3/pexels-sebastian-palomino-933481-1955134.jpg',
    alt: 'Landscape photography 4',
  },
  {
    id: 7,
    category: 'PORTRAIT',
    image: '/images/layout-3/pexels-olly-774909.jpg',
    alt: 'Portrait photography 1',
  },
  {
    id: 8,
    category: 'ABSTRACT',
    image: '/images/layout-3/pexels-2149489342-35218938.jpg',
    alt: 'Abstract photography 1',
  },
  {
    id: 9,
    category: 'ABSTRACT',
    image: '/images/layout-3/pexels-alan7502-35244055.jpg',
    alt: 'Abstract photography 2',
  },
  {
    id: 10,
    category: 'ABSTRACT',
    image: '/images/layout-3/pexels-minoa-film-112544374-35241220.jpg',
    alt: 'Abstract photography 3',
  },
  {
    id: 11,
    category: 'ABSTRACT',
    image: '/images/layout-3/pexels-the-iop-86002042-35241787.jpg',
    alt: 'Abstract photography 4',
  },
  {
    id: 12,
    category: 'COMMERCIAL',
    image: '/images/layout-1/pexels-shattha-pilabut-38930-135620.jpg',
    alt: 'Commercial photography 1',
  },
  {
    id: 13,
    category: 'COMMERCIAL',
    image: '/images/layout-1/pexels-ekrulila-27467420.jpg',
    alt: 'Commercial photography 2',
  },
  {
    id: 14,
    category: 'PORTRAIT',
    image: '/images/layout-3/pexels-jonaorle-4029925.jpg',
    alt: 'Portrait photography 3',
  },
  {
    id: 15,
    category: 'COMMERCIAL',
    image: '/images/layout-1/pexels-cottonbro-9745332.jpg',
    alt: 'Commercial photography 3',
  },
  {
    id: 16,
    category: 'COMMERCIAL',
    image: '/images/layout-1/pexels-rachel-claire-5490970.jpg',
    alt: 'Commercial photography 4',
  },
]

export default function Section10() {
  return (
    <Section
      id="portfolio-section"
      className="py-30 bg-body2"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <Heading as="h2">My Selected Shots</Heading>
      </div>

      {/* Category Filter */}
      <FilterNav categories={categories} />

      {/* Portfolio Masonry Grid */}
      <FilterWrapper>
        <Masonry
          gap={16}
          breakpoints={{
            default: 3,
            lg: 3,
            md: 2,
            sm: 1,
          }}
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              data-filter-category={item.category}
              className="overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.alt}
                size="large"
                className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          ))}
        </Masonry>
      </FilterWrapper>
    </Section>
  )
}
