'use client'

import React from 'react'
import { Button, Section, Heading, Paragraph, Image } from '@/components'
import {
  SidebarStackProvider,
  useSidebarStack,
  SidebarStackRenderer,
} from '@/components/sidebar-stack'

function SidebarLink({
  children,
  componentId,
  title,
}: {
  children: React.ReactNode
  componentId: string
  title: string
}) {
  const { push } = useSidebarStack()
  return (
    <button
      onClick={() => push({ title, componentId })}
      className="text-blue-600 underline cursor-pointer hover:text-blue-800"
    >
      {children}
    </button>
  )
}

function Demo1() {
  return (
    <div className="space-y-6">
      <Image
        src="/images/portfolio/pexels-pixabay-161758.jpg"
        alt="Modern interior"
        className="w-full"
      />
      <Heading as="h2">The Art of Interior Design</Heading>
      <Paragraph>
        Interior design is the art and science of enhancing the interior of a
        space to achieve a healthier and more aesthetically pleasing
        environment. Learn more about{' '}
        <SidebarLink
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>{' '}
        and{' '}
        <SidebarLink
          componentId="demo3"
          title="Color Theory"
        >
          Color Theory
        </SidebarLink>
        .
      </Paragraph>
      <Heading as="h3">Key Principles</Heading>
      <Paragraph>
        The fundamental principles include balance, rhythm, emphasis, and
        harmony. These concepts work together to create spaces that are both
        functional and beautiful. Explore{' '}
        <SidebarLink
          componentId="demo4"
          title="Space Planning"
        >
          Space Planning
        </SidebarLink>{' '}
        for layout techniques.
      </Paragraph>
      <Paragraph>
        Whether you prefer{' '}
        <SidebarLink
          componentId="demo5"
          title="Minimalist Design"
        >
          Minimalist Design
        </SidebarLink>{' '}
        or{' '}
        <SidebarLink
          componentId="demo6"
          title="Bohemian Style"
        >
          Bohemian Style
        </SidebarLink>
        , understanding these principles will help you create your perfect
        space.
      </Paragraph>
    </div>
  )
}

function Demo2() {
  return (
    <div className="space-y-6">
      <Image
        src="/images/portfolio/pexels-burst-545012.jpg"
        alt="Modern living room"
        className="w-full"
      />
      <Heading as="h2">Modern Interior Style</Heading>
      <Paragraph>
        Modern style emphasizes clean lines, minimal ornamentation, and a focus
        on function. It emerged in the early 20th century and continues to
        influence{' '}
        <SidebarLink
          componentId="demo1"
          title="Interior Design"
        >
          Interior Design
        </SidebarLink>{' '}
        today.
      </Paragraph>
      <Heading as="h3">Characteristics</Heading>
      <Paragraph>
        Key features include open floor plans, neutral color palettes, and the
        use of materials like glass, steel, and concrete. See how{' '}
        <SidebarLink
          componentId="demo3"
          title="Color Theory"
        >
          Color Theory
        </SidebarLink>{' '}
        applies to modern spaces.
      </Paragraph>
      <Paragraph>
        Modern style often overlaps with{' '}
        <SidebarLink
          componentId="demo5"
          title="Minimalist Design"
        >
          Minimalist Design
        </SidebarLink>
        , though they have distinct differences in their approach to decoration
        and warmth.
      </Paragraph>
    </div>
  )
}

function Demo3() {
  return (
    <div className="space-y-6">
      <Image
        src="/images/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
        alt="Colorful interior"
        className="w-full"
      />
      <Heading as="h2">Color Theory in Design</Heading>
      <Paragraph>
        Color theory is essential to{' '}
        <SidebarLink
          componentId="demo1"
          title="Interior Design"
        >
          Interior Design
        </SidebarLink>
        . Understanding the color wheel, complementary colors, and color
        psychology helps create impactful spaces.
      </Paragraph>
      <Heading as="h3">Warm vs Cool Colors</Heading>
      <Paragraph>
        Warm colors (reds, oranges, yellows) create energy and intimacy, while
        cool colors (blues, greens, purples) evoke calm and spaciousness. This
        is crucial for{' '}
        <SidebarLink
          componentId="demo4"
          title="Space Planning"
        >
          Space Planning
        </SidebarLink>
        .
      </Paragraph>
      <Paragraph>
        <SidebarLink
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>{' '}
        typically uses neutral palettes, while{' '}
        <SidebarLink
          componentId="demo6"
          title="Bohemian Style"
        >
          Bohemian Style
        </SidebarLink>{' '}
        embraces rich, saturated hues.
      </Paragraph>
    </div>
  )
}

function Demo4() {
  return (
    <div className="space-y-6">
      <Image
        src="/images/portfolio/houzlook/pexels-houzlook-3797991.jpg"
        alt="Floor plan"
        className="w-full"
      />
      <Heading as="h2">Space Planning Fundamentals</Heading>
      <Paragraph>
        Space planning is the first step in any{' '}
        <SidebarLink
          componentId="demo1"
          title="Interior Design"
        >
          Interior Design
        </SidebarLink>{' '}
        project. It involves analyzing how space will be used and arranging
        furniture accordingly.
      </Paragraph>
      <Heading as="h3">Traffic Flow</Heading>
      <Paragraph>
        Good space planning considers how people move through a room. Clear
        pathways and logical furniture groupings are essential, whether
        following{' '}
        <SidebarLink
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>{' '}
        or{' '}
        <SidebarLink
          componentId="demo6"
          title="Bohemian Style"
        >
          Bohemian Style
        </SidebarLink>
        .
      </Paragraph>
      <Paragraph>
        Apply{' '}
        <SidebarLink
          componentId="demo3"
          title="Color Theory"
        >
          Color Theory
        </SidebarLink>{' '}
        to visually expand or contract spaces based on your planning goals.
      </Paragraph>
    </div>
  )
}

function Demo5() {
  return (
    <div className="space-y-6">
      <Image
        src="/images/portfolio/pexels-pixabay-276724.jpg"
        alt="Minimalist room"
        className="w-full"
      />
      <Heading as="h2">Minimalist Design Philosophy</Heading>
      <Paragraph>
        Minimalism follows the principle that less is more. It strips away
        excess to focus on essential elements, creating peaceful and uncluttered
        spaces.
      </Paragraph>
      <Heading as="h3">Core Principles</Heading>
      <Paragraph>
        Every item must have purpose.{' '}
        <SidebarLink
          componentId="demo3"
          title="Color Theory"
        >
          Color Theory
        </SidebarLink>{' '}
        in minimalism favors monochromatic schemes and neutral tones.
      </Paragraph>
      <Paragraph>
        While related to{' '}
        <SidebarLink
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>
        , minimalism is more extreme in its reduction. Compare with{' '}
        <SidebarLink
          componentId="demo6"
          title="Bohemian Style"
        >
          Bohemian Style
        </SidebarLink>{' '}
        for a completely different approach.
      </Paragraph>
    </div>
  )
}

function Demo6() {
  return (
    <div className="space-y-6">
      <Image
        src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
        alt="Bohemian interior"
        className="w-full"
      />
      <Heading as="h2">Bohemian Style Guide</Heading>
      <Paragraph>
        Bohemian style celebrates creativity, individuality, and an eclectic mix
        of patterns, textures, and colors from around the world.
      </Paragraph>
      <Heading as="h3">Key Elements</Heading>
      <Paragraph>
        Layer textiles, mix patterns, and embrace maximalism.{' '}
        <SidebarLink
          componentId="demo3"
          title="Color Theory"
        >
          Color Theory
        </SidebarLink>{' '}
        here favors rich jewel tones and warm earthy hues.
      </Paragraph>
      <Paragraph>
        The opposite of{' '}
        <SidebarLink
          componentId="demo5"
          title="Minimalist Design"
        >
          Minimalist Design
        </SidebarLink>
        , bohemian style breaks the rules of{' '}
        <SidebarLink
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>{' '}
        intentionally. Good{' '}
        <SidebarLink
          componentId="demo4"
          title="Space Planning"
        >
          Space Planning
        </SidebarLink>{' '}
        prevents chaos.
      </Paragraph>
    </div>
  )
}

const demoComponents: Record<string, () => React.ReactNode> = {
  demo1: Demo1,
  demo2: Demo2,
  demo3: Demo3,
  demo4: Demo4,
  demo5: Demo5,
  demo6: Demo6,
}

function Sidebar1Content() {
  const { push } = useSidebarStack()

  const handleOpenBlog = () => {
    push({ title: 'Interior Design', componentId: 'demo1' })
  }

  const renderContent = (componentId: string) => {
    const Component = demoComponents[componentId]
    return Component ? <Component /> : <Paragraph>Content not found</Paragraph>
  }

  return (
    <>
      <Section className="py-62">
        <div className="flex justify-center">
          <Button onClick={handleOpenBlog}>Open Blog</Button>
        </div>
      </Section>
      <SidebarStackRenderer renderContent={renderContent} />
    </>
  )
}

export default function Sidebar1() {
  return (
    <SidebarStackProvider>
      <Sidebar1Content />
    </SidebarStackProvider>
  )
}
