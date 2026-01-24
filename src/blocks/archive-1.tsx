import { Section } from '@/components/section'
import { FancyHeading } from '@/components/fancy-heading'
import { Blog } from '@/components/blog'

export default function Archive1() {
  return (
    <Section className="bg-body2 py-20">
      <FancyHeading
        text="Latest Projects"
        accent="explore our portfolio"
      />
      <Blog categoriesExclude={['Portfolio']} />
    </Section>
  )
}
