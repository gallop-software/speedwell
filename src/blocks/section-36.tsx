import {
  Section,
  Subheading,
  Heading,
  Paragraph,
  Columns,
  Column,
} from '@/components'

export default function Section36() {
  return (
    <Section className="py-30 bg-gradient-to-br from-body-dark via-body to-body-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Subheading className="mb-4">What We Offer</Subheading>
          <Heading as="h2" margin="mb-6">
            Comprehensive Event Services
          </Heading>
          <Paragraph className="text-lg">
            From intimate gatherings to grand celebrations, we provide full-service planning 
            and design to create seamless, unforgettable experiences tailored to your vision.
          </Paragraph>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent2 rounded-t-2xl"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              💍
            </div>
            <Heading as="h3" styleAs="h4" margin="mb-4">
              Wedding Planning
            </Heading>
            <Paragraph className="text-sm mb-4 flex-grow">
              Complete wedding coordination from engagement to "I do." We handle every detail including venue selection, vendor management, timeline creation, and day-of coordination to ensure your perfect day.
            </Paragraph>
            <div className="text-accent text-sm font-semibold flex items-center gap-2 mt-auto">
              Learn More
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent2 to-accent rounded-t-2xl"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-accent2 to-accent2/70 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🎉
            </div>
            <Heading as="h3" styleAs="h4" margin="mb-4">
              Corporate Events
            </Heading>
            <Paragraph className="text-sm mb-4 flex-grow">
              Professional event planning for conferences, galas, product launches, and corporate celebrations. Strategic planning, brand integration, and flawless execution for memorable business events.
            </Paragraph>
            <div className="text-accent2 text-sm font-semibold flex items-center gap-2 mt-auto">
              Learn More
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent2 rounded-t-2xl"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🌸
            </div>
            <Heading as="h3" styleAs="h4" margin="mb-4">
              Event Design & Styling
            </Heading>
            <Paragraph className="text-sm mb-4 flex-grow">
              Creative design concepts bringing your vision to life. Custom decor, floral arrangements, lighting design, and styling that creates stunning atmospheres and lasting impressions.
            </Paragraph>
            <div className="text-accent text-sm font-semibold flex items-center gap-2 mt-auto">
              Learn More
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent2 to-accent rounded-t-2xl"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-accent2 to-accent2/70 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🎂
            </div>
            <Heading as="h3" styleAs="h4" margin="mb-4">
              Social Celebrations
            </Heading>
            <Paragraph className="text-sm mb-4 flex-grow">
              Milestone birthdays, anniversaries, engagement parties, and special celebrations. Personalized planning that captures the spirit of your occasion and creates cherished memories.
            </Paragraph>
            <div className="text-accent2 text-sm font-semibold flex items-center gap-2 mt-auto">
              Learn More
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent2 rounded-t-2xl"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              📋
            </div>
            <Heading as="h3" styleAs="h4" margin="mb-4">
              Vendor Coordination
            </Heading>
            <Paragraph className="text-sm mb-4 flex-grow">
              Access to our curated network of premium vendors. We manage all communications, contracts, and coordination to ensure seamless collaboration and exceptional service delivery.
            </Paragraph>
            <div className="text-accent text-sm font-semibold flex items-center gap-2 mt-auto">
              Learn More
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent2 to-accent rounded-t-2xl"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-accent2 to-accent2/70 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              ✨
            </div>
            <Heading as="h3" styleAs="h4" margin="mb-4">
              Day-of Coordination
            </Heading>
            <Paragraph className="text-sm mb-4 flex-grow">
              Professional coordination on your event day ensuring flawless execution. We manage timelines, vendors, and logistics so you can relax and enjoy every moment of your celebration.
            </Paragraph>
            <div className="text-accent2 text-sm font-semibold flex items-center gap-2 mt-auto">
              Learn More
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
