import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Image } from '@/components/image'
import { Button } from '@/components/button'
import { Grid } from '@/components/grid'
import { Label } from '@/components/label'
import { Span } from '@/components/span'
import clsx from 'clsx'
import arrowDownTrayIcon from '@iconify/icons-heroicons/arrow-down-tray'

const menuCategories = [
  {
    id: 'main-dishes',
    name: 'Main Dishes',
    number: '01.',
    image:
      'https://speedwell-cdn.gallop.software/images/layout-4/pexels-jonathanborba-2878738-lg.jpg',
    width: 1400,
    height: 2100,
    items: [
      {
        name: 'Grilled Ribeye Steak',
        description: 'Prime 12oz ribeye with herb butter, roasted garlic mash',
        price: '$42',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/ribeye-lg.jpg',
        width: 1400,
        height: 933,
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Atlantic salmon with lemon dill sauce and asparagus',
        price: '$34',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/salmon-lg.jpg',
        width: 1400,
        height: 934,
      },
      {
        name: 'Braised Short Ribs',
        description:
          'Slow-cooked beef ribs in red wine reduction, creamy polenta',
        price: '$38',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/short-ribs-lg.jpg',
        width: 1400,
        height: 2100,
      },
      {
        name: 'Herb Roasted Chicken',
        description:
          'Free-range chicken with thyme jus and seasonal vegetables',
        price: '$28',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/herb-roasted-chicken-lg.jpg',
        width: 1400,
        height: 1050,
      },
      {
        name: 'Lobster Linguine',
        description:
          'Fresh Maine lobster tossed in garlic butter and white wine',
        price: '$48',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/lobster-linguine-lg.jpg',
        width: 1400,
        height: 1867,
      },
      {
        name: 'Lamb Rack',
        description: 'New Zealand lamb with mint pesto and rosemary potatoes',
        price: '$45',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/lamb-rack-lg.jpg',
        width: 1400,
        height: 2097,
      },
      {
        name: 'Duck Confit',
        description: 'Crispy duck leg with cherry gastrique and wild rice',
        price: '$36',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/duck-confit-lg.jpg',
        width: 1400,
        height: 2100,
      },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    number: '02.',
    image:
      'https://speedwell-cdn.gallop.software/images/layout-4/burratta-caprese-lg.jpg',
    width: 1400,
    height: 934,
    items: [
      {
        name: 'Burrata Caprese',
        description: 'Creamy burrata with heirloom tomatoes and aged balsamic',
        price: '$16',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/burratta-caprese-lg.jpg',
        width: 1400,
        height: 934,
      },
      {
        name: 'Tuna Tartare',
        description: 'Sushi-grade ahi with avocado, sesame, and wonton crisps',
        price: '$19',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/tuna-tartare-lg.jpg',
        width: 1400,
        height: 2100,
      },
      {
        name: 'French Onion Soup',
        description:
          'Caramelized onions in rich beef broth with gruyère crouton',
        price: '$12',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/french-onion-soup-lg.jpg',
        width: 1400,
        height: 2100,
      },
      {
        name: 'Crispy Calamari',
        description: 'Lightly fried squid with marinara and lemon aioli',
        price: '$15',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/calamari-lg.jpg',
        width: 1400,
        height: 933,
      },
      {
        name: 'Beef Carpaccio',
        description:
          'Thinly sliced raw beef with arugula, capers, and parmesan',
        price: '$18',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/beef-carpaccio-lg.jpg',
        width: 1400,
        height: 1868,
      },
      {
        name: 'Oysters Rockefeller',
        description: 'Baked oysters with spinach, herbs, and breadcrumb gratin',
        price: '$22',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/oysters-lg.jpg',
        width: 1400,
        height: 2097,
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    number: '03.',
    image:
      'https://speedwell-cdn.gallop.software/images/layout-4/chocolate-lava-cake-lg.jpg',
    width: 1400,
    height: 933,
    items: [
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar crust',
        price: '$11',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/creme-brulee-lg.jpg',
        width: 1400,
        height: 1050,
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm molten chocolate cake with vanilla bean ice cream',
        price: '$13',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/chocolate-lava-cake-lg.jpg',
        width: 1400,
        height: 933,
      },
      {
        name: 'Tiramisu',
        description: 'Espresso-soaked ladyfingers with mascarpone cream',
        price: '$12',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/tiramisu-lg.jpg',
        width: 1400,
        height: 2099,
      },
      {
        name: 'New York Cheesecake',
        description: 'Creamy cheesecake with fresh berry compote',
        price: '$11',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/new-york-cheesecake-lg.jpg',
        width: 1400,
        height: 2100,
      },
      {
        name: 'Apple Tarte Tatin',
        description: 'Caramelized apple tart with crème fraîche',
        price: '$12',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/apple-tarte-lg.jpg',
        width: 1400,
        height: 933,
      },
      {
        name: 'Panna Cotta',
        description: 'Silky Italian cream dessert with seasonal fruit coulis',
        price: '$10',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/panna-cotta-lg.jpg',
        width: 1400,
        height: 2100,
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    number: '04.',
    image:
      'https://speedwell-cdn.gallop.software/images/layout-4/espresso-martini-lg.jpg',
    width: 1400,
    height: 1750,
    items: [
      {
        name: 'Classic Old Fashioned',
        description: 'Bourbon, bitters, sugar, and orange peel',
        price: '$14',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/old-fashioned-lg.jpg',
        width: 1400,
        height: 1973,
      },
      {
        name: 'Espresso Martini',
        description: 'Vodka, fresh espresso, and coffee liqueur',
        price: '$15',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/espresso-martini-lg.jpg',
        width: 1400,
        height: 1750,
      },
      {
        name: 'Napa Valley Cabernet',
        description: '2019 reserve, bold with notes of blackberry and oak',
        price: '$18',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/cabernet-lg.jpg',
        width: 1400,
        height: 1375,
      },
      {
        name: 'French 75',
        description: 'Gin, champagne, lemon juice, and simple syrup',
        price: '$16',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/french-75-lg.jpg',
        width: 1400,
        height: 2489,
      },
      {
        name: 'Craft Lemonade',
        description: 'Fresh-squeezed with lavender and mint',
        price: '$6',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/lemonade-lg.jpg',
        width: 1400,
        height: 2100,
      },
      {
        name: 'Cappuccino',
        description: 'Double shot espresso with steamed milk foam',
        price: '$5',
        image:
          'https://speedwell-cdn.gallop.software/images/layout-4/cappucino-image-lg.jpg',
        width: 1400,
        height: 2100,
      },
    ],
  },
]

export default function Ingredients() {
  return (
    <Section
      className="pt-30 pb-40 lg:pb-50 relative"
      innerAlign="wide"
    >
      {menuCategories.map((category) => (
        <div key={category.id}>
          {/* Category Header */}
          <div
            id={category.id}
            className="relative py-16 overflow-hidden rounded-lg"
          >
            <Image
              src={category.image}
              width={category.width}
              height={category.height}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
              rounded="rounded-none"
            />
            <div className="absolute inset-0 bg-overlay/70" />
            <div className="relative text-center">
              <Heading
                as="h2"
                color="text-overlay-text"
                margin="mb-2"
                disableId={true}
              >
                {category.name}
              </Heading>
              <Label
                variant="large"
                color="text-overlay-text"
              >
                {category.number}
              </Label>
            </div>
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <Grid
              cols="grid-cols-1 md:grid-cols-2"
              gap="gap-x-16 gap-y-0"
            >
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
                        width={item.width}
                        height={item.height}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        rounded="rounded-none"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <Label
                        fontWeight="font-semibold"
                        margin="mb-0"
                      >
                        {item.name}
                      </Label>
                      <Paragraph
                        fontSize="text-xs"
                        color="text-contrast/60"
                        margin="mb-0"
                      >
                        {item.description}
                      </Paragraph>
                    </div>

                    {/* Price */}
                    <Span
                      fontSize="text-lg"
                      color="text-accent"
                      className="font-semibold shrink-0"
                    >
                      {item.price}
                    </Span>
                  </div>
                )
              })}
            </Grid>
          </div>
        </div>
      ))}

      {/* Sticky Bottom Navigation */}
      <div className="hidden sticky bottom-6 z-1 lg:flex w-full justify-center mt-10">
        <div className="bg-body/70 backdrop-blur-xl rounded-lg px-4 py-3 ring-1 ring-body-light shadow-2xl flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 ml-4 mr-20">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-contrast/70 hover:text-contrast transition-colors whitespace-nowrap anchor-scroll"
              >
                <Span
                  color="text-inherit"
                  fontWeight="font-medium"
                  fontSize="text-sm"
                >
                  <Span
                    color="text-inherit"
                    fontWeight="font-medium"
                    className="mr-1"
                    fontSize="text-xs"
                  >
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
    </Section>
  )
}
