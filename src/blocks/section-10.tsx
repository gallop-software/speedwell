import { Section, Heading, Paragraph, Image, Grid, Columns, Column } from '@/components'

export default function Section10() {
    return (
        <Section className="py-30 bg-body relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <Columns cols="grid-cols-1 lg:grid-cols-2" gap="gap-12" align="items-start">
                    {/* Left side - Image Grid */}
                    <Column>
                        <Grid cols="grid-cols-2" gap="gap-6">
                            {/* Top left */}
                            <div className="col-span-1">
                                <Image
                                    src="/images/layout-3/pexels-olly-774909.jpg"
                                    alt="Portrait photography"
                                    size="large"
                                    className="aspect-4/5 object-cover"
                                />
                            </div>

                            {/* Top right (offset down) */}
                            <div className="col-span-1 mt-12">
                                <Image
                                    src="/images/layout-3/pexels-pixabay-462162.jpg"
                                    alt="Landscape and nature photography"
                                    size="large"
                                    className="aspect-4/5 object-cover"
                                />
                            </div>

                            {/* Bottom left */}
                            <div className="col-span-1">
                                <Image
                                    src="/images/layout-3/pexels-2149489342-35218938.jpg"
                                    alt="Abstract photography"
                                    size="large"
                                    className="aspect-4/5 object-cover"
                                />
                            </div>

                            {/* Bottom right (offset down) */}
                            <div className="col-span-1 mt-12">
                                <Image
                                    src="/images/layout-1/pexels-shattha-pilabut-38930-135620.jpg"
                                    alt="Commercial photography"
                                    size="large"
                                    className="aspect-4/5 object-cover"
                                />
                            </div>
                        </Grid>
                    </Column>

                    {/* Right side - Content */}
                    <Column className="flex flex-col justify-center">
                        <Heading
                            as="h2"
                            margin="mb-6"
                        >
                            My Services
                        </Heading>
                        <Paragraph
                            fontSize="text-lg"
                            margin="mb-6"
                        >
                            Photography is my passion and I love to turn ideas into beautiful
                            things. Whether capturing intimate portraits, stunning landscapes,
                            creative abstracts, or professional commercial work, I bring a
                            unique artistic vision to every project.
                        </Paragraph>
                        <Paragraph margin="mb-8">
                            With years of experience and a commitment to excellence, I
                            specialize in creating images that tell compelling stories and
                            evoke emotion. From concept to final delivery, I work closely with
                            my clients to understand their vision and bring it to life through
                            thoughtful composition, expert lighting, and creative
                            post-processing. Each photograph is crafted with attention to
                            detail and a dedication to capturing moments that matter.
                        </Paragraph>
                    </Column>
                </Columns>
            </div>
        </Section>
    )
}
