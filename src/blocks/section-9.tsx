import { Section, Heading, Paragraph, Image, Button, Grid, Label, Span, Container } from '@/components'
import clsx from 'clsx'

const menuCategories = [
  {
    id: 'main-dishes',
    name: 'Main Dishes',
    number: '01.',
    image: '/images/layout-4/pexels-jonathanborba-2878738.jpg',
    items: [
      { name: 'Soft Shell Crab', description: 'Our tender, juicy filet paired with a steamed', price: '$29', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Miso Chicken', description: 'Fusca a velit tellus. Praesent neque arcu, e', price: '$12', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
      { name: 'Salmon Riverland', description: 'Pellentesque eros mi, faucibus tempor sceleri', price: '$14', image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg' },
      { name: "Victoria's Filet Mignon", description: 'Seasoned with an herb crust, served with au j', price: '$35', image: '/images/layout-4/pexels-valeriya-9266842.jpg' },
      { name: 'Salmon Riverland', description: 'Pellentesque eros mi, faucibus tempor sceleri', price: '$14', image: '/images/layout-4/pexels-pixabay-260922.jpg' },
      { name: 'Butterfly Fried Shrimps Platter', description: 'Seasoned with an herb crust, served with au j', price: '$19', image: '/images/layout-4/pexels-reneterp-1581384.jpg' },
      { name: 'Creme Brulee', description: 'Our tender, juicy filet paired with a steamed', price: '$29', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Chapel Down', description: 'Fusca a velit tellus. Praesent neque arcu, e', price: '$18', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    number: '02.',
    image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg',
    items: [
      { name: 'Soft Shell Crab', description: 'Our tender, juicy filet paired with a steamed', price: '$29', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Miso Chicken', description: 'Fusca a velit tellus. Praesent neque arcu, e', price: '$12', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
      { name: 'Salmon Riverland', description: 'Pellentesque eros mi, faucibus tempor sceleri', price: '$14', image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg' },
      { name: "Victoria's Filet Mignon", description: 'Seasoned with an herb crust, served with au j', price: '$35', image: '/images/layout-4/pexels-valeriya-9266842.jpg' },
      { name: 'Salmon Riverland', description: 'Pellentesque eros mi, faucibus tempor sceleri', price: '$14', image: '/images/layout-4/pexels-pixabay-260922.jpg' },
      { name: 'Butterfly Fried Shrimps Platter', description: 'Seasoned with an herb crust, served with au j', price: '$19', image: '/images/layout-4/pexels-reneterp-1581384.jpg' },
      { name: 'Creme Brulee', description: 'Our tender, juicy filet paired with a steamed', price: '$29', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Chapel Down', description: 'Fusca a velit tellus. Praesent neque arcu, e', price: '$12', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    number: '03.',
    image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg',
    items: [
      { name: 'Soft Shell Crab', description: 'Our tender, juicy filet paired with a steamed', price: '$29', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Miso Chicken', description: 'Fusca a velit tellus. Praesent neque arcu, e', price: '$18', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
      { name: 'Salmon Riverland', description: 'Pellentesque eros mi, faucibus tempor sceleri', price: '$14', image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg' },
      { name: "Victoria's Filet Mignon", description: 'Seasoned with an herb crust, served with au j', price: '$35', image: '/images/layout-4/pexels-valeriya-9266842.jpg' },
      { name: 'Salmon Riverland', description: 'Pellentesque eros mi, faucibus tempor sceleri', price: '$14', image: '/images/layout-4/pexels-pixabay-260922.jpg' },
      { name: 'Butterfly Fried Shrimps Platter', description: 'Seasoned with an herb crust, served with au j', price: '$19', image: '/images/layout-4/pexels-reneterp-1581384.jpg' },
      { name: 'Creme Brulee', description: 'Our tender, juicy filet paired with a steamed', price: '$29', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Chapel Down', description: 'Fusca a velit tellus. Praesent neque arcu, e', price: '$12', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    number: '04.',
    image: '/images/layout-4/pexels-valeriya-9266842.jpg',
    items: [
      { name: 'Soft Shell Crab', description: 'Our tender, juicy filet paired with a steamed', price: '$29', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Miso Chicken', description: 'Fusca a velit tellus. Praesent neque arcu, e', price: '$12', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
      { name: 'Salmon Riverland', description: 'Pellentesque eros mi, faucibus tempor sceleri', price: '$14', image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg' },
      { name: "Victoria's Filet Mignon", description: 'Seasoned with an herb crust, served with au j', price: '$35', image: '/images/layout-4/pexels-valeriya-9266842.jpg' },
      { name: 'Salmon Riverland', description: 'Pellentesque eros mi, faucibus tempor sceleri', price: '$14', image: '/images/layout-4/pexels-pixabay-260922.jpg' },
      { name: 'Butterfly Fried Shrimps Platter', description: 'Seasoned with an herb crust, served with au j', price: '$19', image: '/images/layout-4/pexels-reneterp-1581384.jpg' },
      { name: 'Creme Brulee', description: 'Our tender, juicy filet paired with a steamed', price: '$29', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Chapel Down', description: 'Fusca a velit tellus. Praesent neque arcu, e', price: '$12', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
    ],
  },
]

export default function Section9() {
  return (
    <Section className="py-30 relative" innerAlign="wide">
      {menuCategories.map((category) => (
        <div key={category.id} id={category.id}>
          {/* Category Header */}
          <div className="relative py-16 overflow-hidden rounded-lg">
            <Image
              src={category.image}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
              rounded="rounded-none"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative text-center">
              <Heading as="h2" color="text-white" margin="mb-2">
                {category.name}
              </Heading>
              <Label variant="large" color="text-white">
                {category.number}
              </Label>
            </div>
          </div>

          {/* Menu Items */}
          <Container padding="py-10 px-0" align="content">
            <Grid cols="grid-cols-1 md:grid-cols-2" gap="gap-x-16 gap-y-0">
              {category.items.map((item, index) => {
                const isLastItem = index === category.items.length - 1
                const isSecondToLast = index === category.items.length - 2
                return (
                  <div
                    key={index}
                    className={clsx(
                      'flex items-center gap-4 py-8 border-b border-contrast/10',
                      isLastItem && 'border-b-0',
                      isSecondToLast && 'md:border-b-0'
                    )}
                  >
                    {/* Circular Image */}
                    <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        rounded="rounded-none"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <Label fontWeight="font-semibold" margin="mb-0">
                        {item.name}
                      </Label>
                      <Paragraph fontSize="text-xs" color="text-contrast/60" margin="mb-0">
                        {item.description}
                      </Paragraph>
                    </div>

                    {/* Price */}
                    <Span fontSize="text-lg" color="text-accent" className="font-semibold shrink-0">
                      {item.price}
                    </Span>
                  </div>
                )
              })}
            </Grid>
          </Container>
        </div>
      ))}

      {/* Sticky Bottom Navigation */}
      <div className="sticky bottom-6 z-1 flex w-full justify-center">
        <div className="bg-white/70 backdrop-blur-xl rounded-full px-4 py-3 border border-white/10 shadow-2xl flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 mr-20">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-contrast/70 hover:text-contrast transition-colors whitespace-nowrap"
              >
                <Span color="text-inherit" className="mr-1" fontSize="text-xs">
                  {category.number}
                </Span>
                <Span color="text-inherit" fontSize="text-sm">{category.name}</Span>
              </a>
            ))}
          </nav>
          <Button
            size="small"
            href="#"
            variant="primary"
            className="rounded-full"
          >
            Download Menu
          </Button>
        </div>
      </div>
    </Section>
  )
}
