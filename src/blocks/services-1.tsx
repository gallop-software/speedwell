'use client'

import { Section, Heading, Paragraph, Card1, Button } from '@/components'

export default function Services1() {
  const scrollToPortfolio = (category: string) => {
    const portfolioSection = document.getElementById('portfolio-section')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
      // Trigger category change after scroll
      setTimeout(() => {
        const event = new CustomEvent('portfolioFilterChange', {
          detail: category,
        })
        window.dispatchEvent(event)
      }, 500)
    }
  }

  return (
    <Section className="py-20 bg-body relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Service Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Portrait Photography - top left */}
            <div className="col-span-1">
              <div
                onClick={() => scrollToPortfolio('PORTRAIT')}
                className="cursor-pointer"
              >
                <Card1
                  id="service-portrait"
                  title="Portrait"
                  image="/images/layout-3/pexels-olly-774909.jpg"
                  href="#portfolio-section"
                  alt="Portrait photography"
                  size="large"
                />
              </div>
            </div>

            {/* Landscape & Nature - top right (offset down) */}
            <div className="col-span-1 mt-12">
              <div
                onClick={() => scrollToPortfolio('LANDSCAPE')}
                className="cursor-pointer"
              >
                <Card1
                  id="service-landscape"
                  title="Landscape"
                  image="/images/layout-3/pexels-pixabay-462162.jpg"
                  href="#portfolio-section"
                  alt="Landscape and nature photography"
                  size="large"
                />
              </div>
            </div>

            {/* Abstract Photography - bottom left */}
            <div className="col-span-1">
              <div
                onClick={() => scrollToPortfolio('ABSTRACT')}
                className="cursor-pointer"
              >
                <Card1
                  id="service-abstract"
                  title="Abstract"
                  image="/images/layout-3/pexels-2149489342-35218938.jpg"
                  href="#portfolio-section"
                  alt="Abstract photography"
                  size="large"
                />
              </div>
            </div>

            {/* Commercial - bottom right (offset down) */}
            <div className="col-span-1 mt-12">
              <div
                onClick={() => scrollToPortfolio('COMMERCIAL')}
                className="cursor-pointer"
              >
                <Card1
                  id="service-commercial"
                  title="Commercial"
                  image="/images/layout-1/pexels-shattha-pilabut-38930-135620.jpg"
                  href="#portfolio-section"
                  alt="Commercial photography"
                  size="large"
                />
              </div>
            </div>
          </div>

          {/* Right side - Services Content */}
          <div className="flex flex-col justify-center">
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
          </div>
        </div>
      </div>
    </Section>
  )
}
