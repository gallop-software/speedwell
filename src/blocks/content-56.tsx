import { Section, Heading, Paragraph, Accordion } from '@/components'

export default function Content56() {
  return (
    <Section
      className="bg-body py-30"
      innerAlign="content"
    >
      <Heading
        as="h2"
        id="learn-more"
        textAlign="text-center"
      >
        Comprehensive Kitchen & Bath Design Services
      </Heading>
      <Paragraph>
        At Speedwell, we understand that kitchens and bathrooms are more than
        just functional spaces – they're where memories are made, where you
        start and end your day, and where style meets substance. Our
        comprehensive design approach encompasses every detail, from initial
        space planning and layout optimization to the selection of premium
        fixtures, finishes, and custom cabinetry. We work with the finest
        craftspeople and suppliers to ensure every element is perfectly
        executed, creating spaces that are as beautiful as they are practical.
      </Paragraph>
      <Heading as="h3">Custom Kitchen Design & Remodeling</Heading>
      <Paragraph>
        Our kitchen designs are tailored to how you live, cook, and entertain.
        We create layouts that maximize efficiency and flow, incorporating
        professional-grade appliances, custom cabinetry, stunning countertops,
        and innovative storage solutions. Whether you prefer sleek modern
        minimalism, warm traditional elegance, or contemporary farmhouse charm,
        we design kitchens that reflect your personal style while enhancing
        functionality. From open-concept entertaining spaces to cozy family
        kitchens, we transform your culinary dreams into reality.
      </Paragraph>
      <Heading as="h3">Luxury Bathroom Design & Spa Retreats</Heading>
      <Paragraph>
        Transform your bathroom into a personal sanctuary with our luxury design
        services. We specialize in creating spa-like retreats that offer the
        perfect blend of relaxation and sophistication. Our designs feature
        premium materials, elegant fixtures, custom vanities, frameless glass
        showers, and luxurious soaking tubs. We pay special attention to
        lighting, ventilation, and storage to ensure your bathroom is not only
        beautiful but also highly functional. From powder rooms to master bath
        suites, we create spaces that elevate your daily routine.
      </Paragraph>
      <Heading
        as="h2"
        className="mt-30"
      >
        Frequently Asked Questions
      </Heading>
      <Accordion headingText="How long does a typical kitchen or bath remodel take?">
        <Paragraph>
          Timeline varies based on project scope, but most kitchen remodels take
          8-12 weeks from demolition to completion, while bathroom renovations
          typically require 4-6 weeks. We provide a detailed timeline during the
          planning phase and keep you informed throughout the process. Our
          project management ensures minimal disruption to your daily life while
          maintaining the highest quality standards.
        </Paragraph>
      </Accordion>
      <Accordion headingText="What should I consider when planning my remodel?">
        <Paragraph>
          Start by considering how you use the space and what's not working in
          your current layout. Think about your must-haves versus nice-to-haves,
          your style preferences, and your budget. We'll guide you through
          material selections, layout options, and design choices that align
          with your lifestyle and investment goals. Our team helps prioritize
          features to maximize value and functionality.
        </Paragraph>
      </Accordion>
      <Accordion headingText="Do you handle permits and coordinate with contractors?">
        <Paragraph>
          Absolutely. We manage the entire process from design through
          completion, including obtaining necessary permits, coordinating with
          licensed contractors and tradespeople, and ensuring all work meets
          code requirements. Our established relationships with trusted
          professionals ensure seamless execution and quality craftsmanship.
          You'll have a single point of contact throughout your project for
          peace of mind.
        </Paragraph>
      </Accordion>
    </Section>
  )
}
