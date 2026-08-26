import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Image } from '@/components/image'

export default function Methodology() {
  return (
    <Section
      id="about"
      className="bg-body py-30"
      innerAlign="content"
    >
      <Heading
        as="h2"
        id="our-process"
        textAlign="text-center"
      >
        How We Bring Brands to Life
      </Heading>
      <Paragraph>
        Great brands aren't built overnight—they're the result of thoughtful
        strategy, creative exploration, and collaborative refinement. Our proven
        process ensures every project receives the strategic foundation and
        creative attention it deserves. We believe in partnership over
        prescription, working closely with clients at every stage to ensure the
        final outcome authentically represents your vision and resonates with
        your audience.
      </Paragraph>
      <Image
        src="/layout-1/pexels-thirdman-5257578.jpg"
        alt="Collaborative creative process and strategy sessions"
        size="large"
        className="my-8"
      />
      <Paragraph>
        We start with discovery—deep diving into your business, market,
        competitors, and audience to understand what makes you unique. This
        research phase informs our strategic direction, ensuring creative
        decisions are grounded in insight. Next comes ideation, where our team
        explores multiple creative directions, pushing boundaries while staying
        true to your brand essence. We present concepts with clear rationale,
        showing how each approach solves your specific challenges.
      </Paragraph>
      <Paragraph>
        From there, we refine the chosen direction through iterative
        collaboration, perfecting every detail until it's exactly right.
        Finally, we deliver comprehensive brand assets and guidelines, ensuring
        consistent implementation across all touchpoints. But our relationship
        doesn't end at delivery—we provide ongoing support to help your brand
        grow and evolve as your business scales.
      </Paragraph>
    </Section>
  )
}
