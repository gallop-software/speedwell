import { Section, FancyHeading, Blog } from '@/components'

export default function Blog1() {
  return (
    <Section className="bg-body2 py-20">
      <FancyHeading
        text="Latest Projects"
        accent="explore our portfolio"
      />
      <Blog />
    </Section>
  )
}
