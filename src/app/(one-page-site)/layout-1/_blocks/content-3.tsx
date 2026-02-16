import { Section } from '@/components/section'
import { Columns, Column } from '@/components/columns'
import { Image } from '@/components/image'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { Gallery } from '@/components/gallery'
import { GalleryItem } from '@/components/gallery-item'

export default function Content3() {
  return (
    <Section
      id="portfolio"
      className="py-30 bg-body-dark relative overflow-hidden"
    >
      <div className="relative">
        <Columns
          className="mb-8"
          reverseColumns={true}
        >
          <Column>
            <Heading
              as="h2"
              styleAs="h3"
              id="latest-projects-explore-our-portfolio"
            >
              Latest Projects
            </Heading>
            <Heading
              as="h3"
              styleAs="h2"
            >
              Tech Startup Brand Identity
            </Heading>
            <Paragraph>
              A complete brand transformation for an innovative tech startup,
              including logo design, brand guidelines, website design, and
              marketing collateral. Our strategic approach positioned them as
              industry leaders, resulting in increased investor confidence and
              customer acquisition. The bold visual identity perfectly captures
              their forward-thinking mission while maintaining accessibility and
              professionalism across all touchpoints.
            </Paragraph>
          </Column>
          <Column className="aspect-[7/6] relative">
            <Image
              src="/layout-1/pexels-diva-plavalaguna-6937932.jpg"
              alt="Tech startup brand identity showcase"
              className="absolute bottom-0 left-0 z-10 w-[75%] object-cover"
              size="large"
            />
            <Image
              src="/layout-1/pexels-pixabay-221185.jpg"
              alt="Brand guidelines and visual system"
              className="w-[65%] absolute top-0 right-0 object-cover shadow-2xl"
              rounded="rounded-b-none rounded-t-full"
              size="large"
            />
          </Column>
        </Columns>
        <Columns reverseColumns={false}>
          <Column>
            <Heading
              as="h3"
              styleAs="h2"
            >
              Luxury Retail Rebrand
            </Heading>
            <Paragraph>
              Repositioning an established retail brand for the modern luxury
              market through refined visual identity, elegant packaging design,
              and immersive digital experience. Our strategic rebrand elevated
              their market position while honoring their heritage, resulting in
              expanded customer base and premium pricing power. The cohesive
              brand system works seamlessly across physical stores, e-commerce,
              and social media.
            </Paragraph>
            <Paragraph>
              The rebrand included comprehensive photography direction, custom
              typography, and a sophisticated color palette that speaks to
              discerning customers. Every touchpoint was carefully crafted to
              deliver a consistent luxury experience, from embossed business
              cards to responsive web design. The result is a brand that
              commands attention and builds lasting emotional connections with
              its audience.
            </Paragraph>
          </Column>
          <Column className="aspect-[5/7] relative">
            <Image
              src="/layout-1/pexels-shattha-pilabut-38930-135620.jpg"
              alt="Luxury retail brand identity"
              className="absolute bottom-0 right-0 z-10 w-[75%] object-cover"
              size="large"
            />
            <Image
              src="/layout-1/pexels-ekrulila-27467420.jpg"
              alt="Packaging and retail design"
              className="w-[65%] absolute top-0 left-0 object-cover shadow-2xl"
              rounded="rounded-b-none rounded-t-full"
              size="large"
            />
          </Column>
        </Columns>
        <Gallery
          columns={5}
          align="none"
          className="mt-20"
        >
          <GalleryItem
            src="/layout-1/pexels-cottonbro-9745332.jpg"
            size="large"
          />
          <GalleryItem
            src="/layout-1/pexels-rachel-claire-5490970.jpg"
            size="large"
          />
          <GalleryItem
            src="/layout-1/pexels-alesiakozik-7797453.jpg"
            size="large"
          />
          <GalleryItem
            src="/layout-1/pexels-leeloothefirst-7598022.jpg"
            size="large"
          />
          <GalleryItem
            src="/layout-1/pexels-divinetechygirl-1181311.jpg"
            size="large"
          />
          <GalleryItem
            src="/layout-1/pexels-mareklevak-2265482.jpg"
            size="large"
          />
          <GalleryItem
            src="/layout-1/pexels-tranmautritam-326518.jpg"
            size="large"
          />
          <GalleryItem
            src="/layout-1/pexels-goumbik-669610.jpg"
            size="large"
          />
        </Gallery>
      </div>
    </Section>
  )
}
