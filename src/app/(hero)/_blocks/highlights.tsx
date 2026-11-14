import { Section } from '@/components/section'
import { Grid } from '@/components/grid'
import { Card1 } from '@/components/card-1'

export default function Highlights() {
  return (
    <Section className="pt-30 lg:pt-50 pb-30 bg-gradient-to-b from-body to-body-light">
      <Grid>
        <Card1
          id="1"
          title="Portfolio"
          image="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1643384-lg.jpg"
          width={1400}
          height={934}
          href="/portfolio"
          alt="Luxury home interior design"
        />
        <Card1
          id="2"
          title="Client Testimonials"
          image="https://speedwell-cdn.gallop.software/images/portfolio/fotoaibe/pexels-fotoaibe-1571453-lg.jpg"
          width={1400}
          height={935}
          href="/testimonials"
          alt="Stories from our satisfied clients"
        />
        <Card1
          id="3"
          title="Before & After"
          image="https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-3952034-lg.jpg"
          width={1400}
          height={935}
          href="/before-after"
          alt="See the transformation process"
        />
        <Card1
          id="4"
          title="Meet the Team"
          image="https://speedwell-cdn.gallop.software/images/portfolio/jonathanborba/pexels-jonathanborba-3255245-lg.jpg"
          width={1400}
          height={1400}
          href="/meet-the-team"
          alt="Get to know our design experts"
        />
        <Card1
          id="5"
          title="Join our Team"
          image="https://speedwell-cdn.gallop.software/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746-lg.jpg"
          width={1400}
          height={2097}
          href="/join-our-team"
          alt="Explore career opportunities with us"
        />
        <Card1
          id="6"
          title="Contact"
          image="https://speedwell-cdn.gallop.software/images/portfolio/pexels-mikhail-nilov-6707628-lg.jpg"
          width={1400}
          height={933}
          href="/contact"
          alt="Get in touch with our design team"
        />
      </Grid>
    </Section>
  )
}
