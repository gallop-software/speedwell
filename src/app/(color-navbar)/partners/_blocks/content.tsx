import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { BackgroundGeometry2 } from '@/components/background-geometry-2'

export default function Content() {
  return (
    <>
      <Section className="relative py-30">
        <BackgroundGeometry2>designers</BackgroundGeometry2>
        <div className="relative">
          <Heading
            id="learn-more"
            as="h1"
            className="max-w-2xl"
          >
            Our Trusted Design Partners
          </Heading>
          <Paragraph className="max-w-lg">
            We believe exceptional interiors are built through collaboration.
            Our network of skilled artisans, premium suppliers, and specialty
            craftsmen share our commitment to quality and attention to detail.
            Together, we bring your vision to life.
          </Paragraph>
        </div>
      </Section>
    </>
  )
}
