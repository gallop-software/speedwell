import { Section, FancyHeading, Blog } from '@/components'

export default function Blog2() {
  return (
    <Section className="bg-body2 py-20">
      <FancyHeading
        text="Latest Projects"
        accent="explore our portfolio"
      />
      <Blog categoriesInclude={['Residential']} />
    </Section>
  )
}
