import { Section, Heading, Paragraph, Image, Button, Grid, Label, Span, Container } from '@/components'
import clsx from 'clsx'
import arrowDownTrayIcon from '@iconify/icons-heroicons/arrow-down-tray'

const menuCategories = [
  {
    id: 'main-dishes',
    name: 'Main Dishes',
    number: '01.',
    image: '/images/layout-4/pexels-jonathanborba-2878738.jpg',
    items: [
      { name: 'Grilled Ribeye Steak', description: 'Prime 12oz ribeye with herb butter, roasted garlic mash', price: '$42', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Pan-Seared Salmon', description: 'Atlantic salmon with lemon dill sauce and asparagus', price: '$34', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
      { name: 'Braised Short Ribs', description: 'Slow-cooked beef ribs in red wine reduction, creamy polenta', price: '$38', image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg' },
      { name: 'Herb Roasted Chicken', description: 'Free-range chicken with thyme jus and seasonal vegetables', price: '$28', image: '/images/layout-4/pexels-valeriya-9266842.jpg' },
      { name: 'Lobster Linguine', description: 'Fresh Maine lobster tossed in garlic butter and white wine', price: '$48', image: '/images/layout-4/pexels-pixabay-260922.jpg' },
      { name: 'Lamb Rack', description: 'New Zealand lamb with mint pesto and rosemary potatoes', price: '$45', image: '/images/layout-4/pexels-reneterp-1581384.jpg' },
      { name: 'Duck Confit', description: 'Crispy duck leg with cherry gastrique and wild rice', price: '$36', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    number: '02.',
    image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg',
    items: [
      { name: 'Burrata Caprese', description: 'Creamy burrata with heirloom tomatoes and aged balsamic', price: '$16', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Tuna Tartare', description: 'Sushi-grade ahi with avocado, sesame, and wonton crisps', price: '$19', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
      { name: 'French Onion Soup', description: 'Caramelized onions in rich beef broth with gruyère crouton', price: '$12', image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg' },
      { name: 'Crispy Calamari', description: 'Lightly fried squid with marinara and lemon aioli', price: '$15', image: '/images/layout-4/pexels-valeriya-9266842.jpg' },
      { name: 'Beef Carpaccio', description: 'Thinly sliced raw beef with arugula, capers, and parmesan', price: '$18', image: '/images/layout-4/pexels-pixabay-260922.jpg' },
      { name: 'Oysters Rockefeller', description: 'Baked oysters with spinach, herbs, and breadcrumb gratin', price: '$22', image: '/images/layout-4/pexels-reneterp-1581384.jpg' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    number: '03.',
    image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg',
    items: [
      { name: 'Crème Brûlée', description: 'Classic vanilla custard with caramelized sugar crust', price: '$11', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Chocolate Lava Cake', description: 'Warm molten chocolate cake with vanilla bean ice cream', price: '$13', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
      { name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone cream', price: '$12', image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg' },
      { name: 'New York Cheesecake', description: 'Creamy cheesecake with fresh berry compote', price: '$11', image: '/images/layout-4/pexels-valeriya-9266842.jpg' },
      { name: 'Apple Tarte Tatin', description: 'Caramelized apple tart with crème fraîche', price: '$12', image: '/images/layout-4/pexels-pixabay-260922.jpg' },
      { name: 'Panna Cotta', description: 'Silky Italian cream dessert with seasonal fruit coulis', price: '$10', image: '/images/layout-4/pexels-reneterp-1581384.jpg' },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    number: '04.',
    image: '/images/layout-4/pexels-valeriya-9266842.jpg',
    items: [
      { name: 'Classic Old Fashioned', description: 'Bourbon, bitters, sugar, and orange peel', price: '$14', image: '/images/layout-4/pexels-minchephoto-7491887.jpg' },
      { name: 'Espresso Martini', description: 'Vodka, fresh espresso, and coffee liqueur', price: '$15', image: '/images/layout-4/pexels-nadin-sh-78971847-12918197.jpg' },
      { name: 'Napa Valley Cabernet', description: '2019 reserve, bold with notes of blackberry and oak', price: '$18', image: '/images/layout-4/pexels-peps-silvestro-180443212-18229216.jpg' },
      { name: 'French 75', description: 'Gin, champagne, lemon juice, and simple syrup', price: '$16', image: '/images/layout-4/pexels-valeriya-9266842.jpg' },
      { name: 'Craft Lemonade', description: 'Fresh-squeezed with lavender and mint', price: '$6', image: '/images/layout-4/pexels-pixabay-260922.jpg' },
      { name: 'Cappuccino', description: 'Double shot espresso with steamed milk foam', price: '$5', image: '/images/layout-4/pexels-reneterp-1581384.jpg' },
    ],
  },
]

export default function Section9() {
  return (
    <Section className="pt-30 pb-20 lg:pb-30 relative" innerAlign="wide">
      {menuCategories.map((category) => (
        <div key={category.id}>
          {/* Category Header */}
          <div id={category.id} className="relative py-16 overflow-hidden rounded-lg">
            <Image
              src={category.image}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
              rounded="rounded-none"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative text-center">
              <Heading as="h2" color="text-white" margin="mb-2" disableId={true}>
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
      <div className="hidden sticky bottom-6 z-1 lg:flex w-full justify-center mt-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-lg px-4 py-3 ring-1 ring-gray-100 shadow-2xl flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 ml-4 mr-20">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-contrast/70 hover:text-contrast transition-colors whitespace-nowrap anchor-scroll"
              >
                <Span color="text-inherit" fontWeight="font-medium" fontSize="text-sm">
                  <Span color="text-inherit" fontWeight="font-medium" className="mr-1" fontSize="text-xs">
                    {category.number}
                  </Span>
                  {category.name}
                </Span>
              </a>
            ))}
          </nav>
          <Button
            size="small"
            href="#"
            variant="primary"
            className="rounded-full"
            icon={arrowDownTrayIcon}
          >
            Download Menu
          </Button>
        </div>
      </div>
    </Section >
  )
}
