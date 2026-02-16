import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Image } from '@/components/image'
import { Grid } from '@/components/grid'
import { Columns, Column } from '@/components/columns'
import {
  SidebarStackProvider,
  SidebarPanels,
  SidebarLink,
  SidebarClickHandler,
  OpenSidebarButton,
} from '@/components/sidebar-stack'
import sidebarIcon from '@iconify/icons-heroicons/bars-3-bottom-right-20-solid'

function Demo1() {
  return (
    <div className="space-y-6">
      <Image
        src="/portfolio/pexels-pixabay-161758.jpg"
        alt="Modern interior"
        size="medium"
        className="w-full"
      />
      <Heading as="h2">The Art of Interior Design</Heading>
      <Paragraph>
        Interior design is the art and science of enhancing the interior of a
        space to achieve a healthier and more aesthetically pleasing
        environment. Learn more about{' '}
        <SidebarLink
          showTitleImmediately
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>{' '}
        and{' '}
        <SidebarLink
          showTitleImmediately
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
          showTitleImmediately
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
          showTitleImmediately
          componentId="demo5"
          title="Minimalist Design"
        >
          Minimalist Design
        </SidebarLink>{' '}
        or{' '}
        <SidebarLink
          showTitleImmediately
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
        src="/portfolio/pexels-burst-545012.jpg"
        alt="Modern living room"
        size="medium"
        className="w-full"
      />
      <Heading as="h2">Modern Interior Style</Heading>
      <Paragraph>
        Modern style emphasizes clean lines, minimal ornamentation, and a focus
        on function. It emerged in the early 20th century and continues to
        influence{' '}
        <SidebarLink
          showTitleImmediately
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
          showTitleImmediately
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
          showTitleImmediately
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
        src="/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
        alt="Colorful interior"
        size="medium"
        className="w-full"
      />
      <Heading as="h2">Color Theory in Design</Heading>
      <Paragraph>
        Color theory is essential to{' '}
        <SidebarLink
          showTitleImmediately
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
          showTitleImmediately
          componentId="demo4"
          title="Space Planning"
        >
          Space Planning
        </SidebarLink>
        .
      </Paragraph>
      <Paragraph>
        <SidebarLink
          showTitleImmediately
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>{' '}
        typically uses neutral palettes, while{' '}
        <SidebarLink
          showTitleImmediately
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
        src="/portfolio/houzlook/pexels-houzlook-3797991.jpg"
        alt="Floor plan"
        size="medium"
        className="w-full"
      />
      <Heading as="h2">Space Planning Fundamentals</Heading>
      <Paragraph>
        Space planning is the first step in any{' '}
        <SidebarLink
          showTitleImmediately
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
          showTitleImmediately
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>{' '}
        or{' '}
        <SidebarLink
          showTitleImmediately
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
          showTitleImmediately
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
        src="/portfolio/pexels-pixabay-276724.jpg"
        alt="Minimalist room"
        size="medium"
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
          showTitleImmediately
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
          showTitleImmediately
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>
        , minimalism is more extreme in its reduction. Compare with{' '}
        <SidebarLink
          showTitleImmediately
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
        src="/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
        alt="Bohemian interior"
        size="medium"
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
          showTitleImmediately
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
          showTitleImmediately
          componentId="demo5"
          title="Minimalist Design"
        >
          Minimalist Design
        </SidebarLink>
        , bohemian style breaks the rules of{' '}
        <SidebarLink
          showTitleImmediately
          componentId="demo2"
          title="Modern Style"
        >
          Modern Style
        </SidebarLink>{' '}
        intentionally. Good{' '}
        <SidebarLink
          showTitleImmediately
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

const panels = {
  demo1: <Demo1 />,
  demo2: <Demo2 />,
  demo3: <Demo3 />,
  demo4: <Demo4 />,
  demo5: <Demo5 />,
  demo6: <Demo6 />,
}

export default function Sidebar() {
  return (
    <SidebarStackProvider>
      <SidebarClickHandler>
        <Section className="pt-30 pb-30 lg:pb-42 bg-body relative overflow-hidden">
          <Columns
            cols="grid-cols-1 lg:grid-cols-2"
            align="items-center"
          >
            {/* Left side - Image Grid */}
            <Column>
              <Grid
                cols="grid-cols-3"
                gap="gap-4"
                className="-ml-6 -mr-6 lg:-ml-20 lg:mr-0"
              >
                {/* Column 1 - Top */}
                <Image
                  src="/images/layout-3/pexels-olly-774909.jpg"
                  alt="Portrait photography"
                  size="large"
                  aspect="aspect-4/5"
                  className="object-cover"
                />

                {/* Column 2 - Top (offset down) */}
                <Image
                  src="/images/layout-3/pexels-pixabay-462162.jpg"
                  alt="Landscape and nature photography"
                  size="large"
                  aspect="aspect-4/5"
                  className="object-cover relative top-8"
                />

                {/* Column 3 - Top */}
                <Image
                  src="/images/layout-3/pexels-forgottenluix-2922450.jpg"
                  alt="Fashion photography"
                  size="large"
                  aspect="aspect-4/5"
                  className="object-cover"
                />

                {/* Column 1 - Bottom */}
                <Image
                  src="/images/layout-3/pexels-2149489342-35218938.jpg"
                  alt="Abstract photography"
                  size="large"
                  aspect="aspect-4/5"
                  className="object-cover"
                />

                {/* Column 2 - Bottom (offset down) */}
                <Image
                  src="/layout-1/pexels-shattha-pilabut-38930-135620.jpg"
                  alt="Commercial photography"
                  size="large"
                  aspect="aspect-4/5"
                  className="object-cover relative top-8"
                />

                {/* Column 3 - Bottom */}
                <Image
                  src="/images/layout-3/pexels-jonaorle-4029925.jpg"
                  alt="Creative photography"
                  size="large"
                  aspect="aspect-4/5"
                  className="object-cover"
                />
              </Grid>
            </Column>

            {/* Right side - Content */}
            <Column className="flex flex-col justify-center">
              <Heading
                as="h2"
                margin="mb-6"
              >
                Explore Details of Each Project
              </Heading>
              <Paragraph>
                Photography is my passion and I love to turn ideas into
                beautiful things. Whether capturing intimate portraits, stunning
                landscapes, creative abstracts, or professional commercial work,
                I bring a unique artistic vision to every project.
              </Paragraph>
              <Paragraph>
                With years of experience and a commitment to excellence, I
                specialize in creating images that tell compelling stories and
                evoke emotion. From concept to final delivery, I work closely
                with my clients to understand their vision and bring it to life
                through thoughtful composition, expert lighting, and creative
                post-processing. Each photograph is crafted with attention to
                detail and a dedication to capturing moments that matter.
              </Paragraph>
              <OpenSidebarButton
                componentId="demo1"
                title="Interior Design"
                icon={sidebarIcon}
                iconPlacement="after"
                className="self-start"
                showTitleImmediately
              >
                Open Stackable Sidebar Content
              </OpenSidebarButton>
            </Column>
          </Columns>
        </Section>
        <SidebarPanels panels={panels} />
      </SidebarClickHandler>
    </SidebarStackProvider>
  )
}
