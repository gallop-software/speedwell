import { Section, Grid, Card1 } from '@/components'

export default function Section2() {
  return (
    <Section className="pt-30 lg:pt-50 pb-30 bg-gradient-to-b from-body to-body-light">
      <Grid>
        <Card1
          id="1"
          title="Portfolio"
          image="/images/portfolio/fotoaibe/pexels-fotoaibe-1643384.jpg"
          href="/portfolio"
          alt="Luxury home interior design"
        />
        <Card1
          id="2"
          title="Client Testimonials"
          image="/images/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
          href="/testimonials"
          alt="Stories from our satisfied clients"
        />
        <Card1
          id="3"
          title="Before & After"
          image="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034.jpg"
          href="/before-after"
          alt="See the transformation process"
        />
        <Card1
          id="4"
          title="Case Studies"
          image="/images/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg"
          href="/case-studies"
          alt="Detailed project breakdowns"
        />
        <Card1
          id="5"
          title="Join our Team"
          image="/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
          href="/join-our-team"
          alt="Explore career opportunities with us"
        />
        <Card1
          id="6"
          title="Contact"
          image="/images/portfolio/pexels-mikhail-nilov-6707628.jpg"
          href="/contact"
          alt="Get in touch with our design team"
        />
      </Grid>
    </Section>
  )
}
