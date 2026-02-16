import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Grid } from '@/components/grid'
import { Card2 } from '@/components/card-2'

export default function Section2() {
  return (
    <Section className="py-16 md:py-24 bg-gradient-to-b from-body to-body-light">
      <Heading
        as="h2"
        margin="mb-16"
        textAlign="text-center"
      >
        Our Services
      </Heading>
      <Grid gap="gap-10">
        <Card2
          name="Residential Design"
          description="Transform your home into a personal sanctuary"
          href="/residential"
          icon="lucide:home"
          backgroundClass="bg-body2"
        />
        <Card2
          name="Commercial Design"
          description="Create inspiring workspaces that drive success"
          href="/commercial"
          icon="lucide:briefcase"
          backgroundClass="bg-accent/10"
        />
        <Card2
          name="Kitchen & Bath"
          description="Luxury and functionality for your daily rituals"
          href="/kitchen-bath"
          icon="lucide:bath"
          backgroundClass="bg-accent2/10"
        />
        <Card2
          name="Space Planning"
          description="Optimize your layout for comfort and flow"
          href="/space-planning"
          icon="lucide:move"
          backgroundClass="bg-accent3"
        />
        <Card2
          name="Color Consultation"
          description="Expert guidance for the perfect palette"
          href="/color-consultation"
          icon="lucide:palette"
          backgroundClass="bg-accent4/10"
        />
        <Card2
          name="Furniture Selection"
          description="Curated pieces that reflect your style"
          href="/furniture"
          icon="lucide:armchair"
          backgroundClass="bg-accent5"
        />
        <Card2
          name="Project Management"
          description="Seamless execution from concept to completion"
          href="/project-management"
          icon="lucide:clipboard-check"
          backgroundClass="bg-accent6/10"
        />
      </Grid>
    </Section>
  )
}
