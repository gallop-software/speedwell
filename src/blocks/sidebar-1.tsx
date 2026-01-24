import { ProBlock } from '@/components'

export default function Sidebar1() {
  return (
<<<<<<< HEAD
    <ProBlock
      blockSlug="sidebar-1"
      blockName="Sidebar 1"
    />
=======
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
                  src="/images/layout-1/pexels-shattha-pilabut-38930-135620.jpg"
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
              >
                Open Stackable Sidebar Content
              </OpenSidebarButton>
            </Column>
          </Columns>
        </Section>
        <SidebarPanels panels={panels} />
      </SidebarClickHandler>
    </SidebarStackProvider>
>>>>>>> pro
  )
}
