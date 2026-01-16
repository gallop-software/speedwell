import {
  Section,
  Subheading,
  Heading,
  Paragraph,
  Grid,
  Image,
  Button,
} from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'

const services = [
  {
    image: '/images/layout-5/pexels-jeremy-wong-382920-1082024.jpg',
    title: 'Wedding Planning',
    description:
      'Complete wedding coordination from engagement to "I do." We handle every detail including venue selection, vendor management, timeline creation, and day-of coordination to ensure your perfect day.',
    accent: 'accent',
  },
  {
    image: '/images/layout-5/pexels-bohlemedia-1114425.jpg',
    title: 'Corporate Events',
    description:
      'Professional event planning for conferences, galas, product launches, and corporate celebrations. Strategic planning, brand integration, and flawless execution for memorable business events.',
    accent: 'accent2',
  },
  {
    image: '/images/layout-5/pexels-jeremy-wong-382920-1035665.jpg',
    title: 'Event Design & Styling',
    description:
      'Creative design concepts bringing your vision to life. Custom decor, floral arrangements, lighting design, and styling that creates stunning atmospheres and lasting impressions.',
    accent: 'accent',
  },
  {
    image: '/images/layout-5/pexels-pavel-danilyuk-6405768.jpg',
    title: 'Social Celebrations',
    description:
      'Milestone birthdays, anniversaries, engagement parties, and special celebrations. Personalized planning that captures the spirit of your occasion and creates cherished memories.',
    accent: 'accent2',
  },
  {
    image: '/images/layout-5/pexels-bendix-251808.jpg',
    title: 'Vendor Coordination',
    description:
      'Access to our curated network of premium vendors. We manage all communications, contracts, and coordination to ensure seamless collaboration and exceptional service delivery.',
    accent: 'accent',
  },
  {
    image: '/images/layout-5/pexels-panditwiguna-2788488.jpg',
    title: 'Day-of Coordination',
    description:
      'Professional coordination on your event day ensuring flawless execution. We manage timelines, vendors, and logistics so you can relax and enjoy every moment of your celebration.',
    accent: 'accent2',
  },
]

export default function Section5() {
  return (
    <Section className="py-30 bg-gradient-to-tl from-body via-accent2/5 to-body relative overflow-hidden">
      <div className="relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Subheading className="mb-4">What We Offer</Subheading>
          <Heading
            as="h2"
            margin="mb-6"
          >
            Comprehensive Event Services
          </Heading>
          <Paragraph fontSize="text-lg">
            From intimate gatherings to grand celebrations, we provide
            full-service planning and design to create seamless, unforgettable
            experiences tailored to your vision.
          </Paragraph>
        </div>

        {/* Services Grid */}
        <Grid
          cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          gap="gap-8"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  size="medium"
                  rounded="rounded-none"
                />
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 ${
                    service.accent === 'accent'
                      ? 'bg-gradient-to-r from-accent to-accent2'
                      : 'bg-gradient-to-r from-accent2 to-accent'
                  }`}
                ></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <Heading
                  as="h3"
                  styleAs="h4"
                  margin="mb-4"
                >
                  {service.title}
                </Heading>
                <Paragraph
                  fontSize="text-sm"
                  margin="mb-4"
                  className="flex-grow"
                >
                  {service.description}
                </Paragraph>
                <Button
                  href="#"
                  variant="text"
                  icon={arrowRightIcon}
                  iconPlacement="after"
                  className="mt-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </Section>
  )
}
