import { Section } from '@/components/section'
import { FancyHeading } from '@/components/fancy-heading'
import { Blog } from '@/components/blog'

export default function Archive() {
  return (
    <Section
      id="showcase"
      className="bg-body2 py-20"
    >
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
