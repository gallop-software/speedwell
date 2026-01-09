'use client'

import { Section, Heading, Paragraph, Image } from '@/components'
import { useState, useEffect } from 'react'

const categories = ['ALL', 'PORTRAIT', 'LANDSCAPE', 'ABSTRACT', 'COMMERCIAL']

const portfolioItems = [
  {
    id: 1,
    category: 'PORTRAIT',
    image: '/images/layout-3/pexels-olly-774909.jpg',
    alt: 'Portrait photography 1',
  },
  {
    id: 2,
    category: 'PORTRAIT',
    image: '/images/layout-3/pexels-forgottenluix-2922450.jpg',
    alt: 'Portrait photography 2',
  },
  {
    id: 3,
    category: 'PORTRAIT',
    image: '/images/layout-3/pexels-jonaorle-4029925.jpg',
    alt: 'Portrait photography 3',
  },
  {
    id: 4,
    category: 'PORTRAIT',
    image: '/images/layout-3/pexels-simon-robben-55958-614810.jpg',
    alt: 'Portrait photography 4',
  },
  {
    id: 5,
    category: 'LANDSCAPE',
    image: '/images/layout-3/pexels-pixabay-462162.jpg',
    alt: 'Landscape photography 1',
  },
  {
    id: 6,
    category: 'LANDSCAPE',
    image: '/images/layout-3/pexels-bri-schneiter-28802-346529.jpg',
    alt: 'Landscape photography 2',
  },
  {
    id: 7,
    category: 'LANDSCAPE',
    image: '/images/layout-3/pexels-pixabay-355465.jpg',
    alt: 'Landscape photography 3',
  },
  {
    id: 8,
    category: 'LANDSCAPE',
    image: '/images/layout-3/pexels-sebastian-palomino-933481-1955134.jpg',
    alt: 'Landscape photography 4',
  },
  {
    id: 9,
    category: 'ABSTRACT',
    image: '/images/layout-3/pexels-2149489342-35218938.jpg',
    alt: 'Abstract photography 1',
  },
  {
    id: 10,
    category: 'ABSTRACT',
    image: '/images/layout-3/pexels-alan7502-35244055.jpg',
    alt: 'Abstract photography 2',
  },
  {
    id: 11,
    category: 'ABSTRACT',
    image: '/images/layout-3/pexels-minoa-film-112544374-35241220.jpg',
    alt: 'Abstract photography 3',
  },
  {
    id: 12,
    category: 'ABSTRACT',
    image: '/images/layout-3/pexels-the-iop-86002042-35241787.jpg',
    alt: 'Abstract photography 4',
  },
  {
    id: 13,
    category: 'COMMERCIAL',
    image: '/images/layout-1/pexels-shattha-pilabut-38930-135620.jpg',
    alt: 'Commercial photography 1',
  },
  {
    id: 14,
    category: 'COMMERCIAL',
    image: '/images/layout-1/pexels-ekrulila-27467420.jpg',
    alt: 'Commercial photography 2',
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

export default function Portfolio1() {
  const [activeCategory, setActiveCategory] = useState('ALL')

  useEffect(() => {
    const handleFilterChange = (event: CustomEvent) => {
      setActiveCategory(event.detail)
    }

    window.addEventListener('portfolioFilterChange', handleFilterChange as EventListener)

    return () => {
      window.removeEventListener('portfolioFilterChange', handleFilterChange as EventListener)
    }
  }, [])

  const filteredItems =
    activeCategory === 'ALL'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <Section id="portfolio-section" className="py-20 bg-body2">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Heading as="h2" className="mb-4">
            My Selected Shots
          </Heading>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? 'text-accent font-semibold'
                  : 'text-body-contrast/60 hover:text-body-contrast'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.alt}
                size="large"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
