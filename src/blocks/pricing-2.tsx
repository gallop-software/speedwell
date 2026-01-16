import {
  Section,
  Heading,
  Paragraph,
  Button,
  Icon,
  Subheading,
} from '@/components'
import checkIcon from '@iconify/icons-heroicons/check-20-solid'

export default function Pricing2() {
  return (
    <Section className="py-30 bg-gradient-to-b from-body to-body-light relative overflow-hidden">

        <div className="text-center mb-20">
          <Heading
            as="h2"
            margin="mb-6"
          >
            Planning Services Tailored to You
          </Heading>
          <Paragraph fontSize="text-lg" className="max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we offer
            comprehensive planning packages designed to make your event
            stress-free and unforgettable.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Essentials Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col relative border-t-4 border-accent2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Essentials</h3>
              <p className="text-body-muted mb-4">
                Perfect for intimate celebrations
              </p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-accent2">$2,500</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 flex-grow text-sm">
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent2 mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">Up to 50 guests</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent2 mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">Venue recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent2 mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">
                  Vendor coordination (3 vendors)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent2 mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">Event timeline creation</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent2 mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">
                  Day-of coordination (6 hours)
                </span>
              </li>
            </ul>

            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Get Started
            </Button>
          </div>

          {/* Premier Package - Featured */}
          <div className="bg-gradient-to-br from-accent to-accent/90 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 relative flex flex-col scale-105 border-4 border-accent/20">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-accent px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Premier</h3>
              <p className="text-white/90 mb-4">
                For unforgettable celebrations
              </p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$6,500</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 flex-grow text-sm">
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                />
                <span className="text-white">Up to 150 guests</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                />
                <span className="text-white">Venue sourcing & negotiation</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                />
                <span className="text-white">Full vendor management</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                />
                <span className="text-white">
                  Custom event design & styling
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                />
                <span className="text-white">Budget management</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                />
                <span className="text-white">
                  Full day-of coordination (12 hours)
                </span>
              </li>
            </ul>

            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Get Started
            </Button>
          </div>

          {/* Luxury Package */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col relative border-t-4 border-accent">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Luxury</h3>
              <p className="text-body-muted mb-4">For extraordinary events</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-accent">$12,000</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 flex-grow text-sm">
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">Unlimited guests</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">Exclusive venue access</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">Premium vendor curation</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">Bespoke event design</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">
                  Custom decor & installations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon
                  icon={checkIcon}
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-body-dark">Multi-day coordination</span>
              </li>
            </ul>

            <Button
              href="#contact"
              variant="secondary"
              className="w-full"
            >
              Get Started
            </Button>
        </div>
      </div>
    </Section>
  )
}
