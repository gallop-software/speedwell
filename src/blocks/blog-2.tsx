import { Section, FancyHeading, Blog } from '@/components'

export default function Blog2() {
  return (
    <Section className="bg-body2 py-20">
      <FancyHeading
        text="Latest Projects"
        accent="explore our portfolio"
      />
      <Blog
        perPage={6}
        categoriesInclude={['Portfolio']}
        loadMoreText="See More of My Work"
      />
    </Section>
  )
}
