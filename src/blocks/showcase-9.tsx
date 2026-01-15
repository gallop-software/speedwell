import {
  Section,
  Container,
  Heading,
  Paragraph,
  Image,
  Button,
} from '@/components'

export default function Showcase9() {
  const menuItems = [
    {
      name: 'Truffle Risotto',
      description:
        'Creamy arborio rice with black truffle, parmigiano, and wild mushrooms',
      price: '$42',
      image: '/images/layout-4/pexels-minchephoto-7491887.jpg',
      category: 'Signature Dishes',
    },
    {
      name: 'Grilled Sea Bass',
      description:
        'Mediterranean-style with lemon butter, capers, and seasonal vegetables',
      price: '$48',
      image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg',
      category: 'Seafood',
    },
    {
      name: 'Wagyu Beef Tartare',
      description: 'Hand-cut wagyu with quail egg, caviar, and crispy shallots',
      price: '$38',
      image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg',
      category: 'Appetizers',
    },
    {
      name: 'Duck Confit',
      description:
        'Slow-cooked duck leg with orange gastrique and root vegetables',
      price: '$45',
      image: '/images/layout-4/pexels-valeriya-9266842.jpg',
      category: 'Main Course',
    },
  ]

  return (
    <Section className="relative py-24 overflow-hidden bg-body">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Culinary Excellence
          </div>
          <Heading
            as="h2"
            className="mb-6"
          >
            Featured Menu Selection
          </Heading>
          <Paragraph className="text-body-light max-w-2xl mx-auto text-lg">
            Discover our chef's handpicked creations, each dish crafted with
            passion and the finest seasonal ingredients.
          </Paragraph>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-body-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  size="medium"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Price tag */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white text-heading text-xl font-bold px-4 py-2 rounded-lg shadow-lg">
                    {item.price}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-heading text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <Paragraph className="text-body-light leading-relaxed">
                  {item.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 px-6 bg-accent/5 rounded-2xl border border-accent/10">
          <Heading
            as="h3"
            className="mb-4"
          >
            Explore Our Complete Menu
          </Heading>
          <Paragraph className="text-body-light mb-8 max-w-xl mx-auto">
            From appetizers to desserts, discover our full collection of
            meticulously crafted dishes that celebrate flavor and artistry.
          </Paragraph>
          <Button
            href="#"
            variant="primary"
            size="medium"
            className="inline-flex items-center gap-2 group"
          >
            View Full Menu
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </Section>
  )
}
