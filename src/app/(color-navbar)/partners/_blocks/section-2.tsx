import { Section } from '@/components/section'
import { Heading } from '@/components/heading'
import { Grid } from '@/components/grid'
import { Card3 } from '@/components/card-3'

export default function Section2() {
  return (
    <Section className="relative py-30">
      <Heading as="h2">Furniture & Upholstery</Heading>
      <Grid
        cols="grid-cols-3"
        className="mb-30"
      >
        <Card3
          id="1"
          image="/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
          alt="Evergreen Upholstery Co."
          size="large"
          href="#"
        />
        <Card3
          id="2"
          image="/portfolio/charlotte-may/pexels-charlotte-may-5825398.jpg"
          alt="Monarch Furniture Studio"
          size="large"
          href="#"
        />
        <Card3
          id="3"
          image="/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg"
          alt="Heritage Seating"
          size="large"
          href="#"
        />
        <Card3
          id="4"
          image="/portfolio/fotoaibe/pexels-fotoaibe-1571453.jpg"
          alt="Luxe Leather Works"
          size="large"
          href="#"
        />
        <Card3
          id="5"
          image="/portfolio/falling4utah/pexels-falling4utah-1080696.jpg"
          alt="Bespoke Sofas Ltd."
          size="large"
          href="#"
        />
      </Grid>

      <Heading as="h2">Lighting & Fixtures</Heading>
      <Grid
        cols="grid-cols-3"
        className="mb-30"
      >
        <Card3
          id="6"
          image="/portfolio/charlotte-may/pexels-charlotte-may-5824901.jpg"
          alt="Lumière Atelier"
          size="large"
          href="#"
        />
        <Card3
          id="7"
          image="/portfolio/jonathanborba/pexels-jonathanborba-5570224.jpg"
          alt="Radiant Designs"
          size="large"
          href="#"
        />
        <Card3
          id="8"
          image="/portfolio/jvdm/pexels-jvdm-1454804.jpg"
          alt="Chandelier House"
          size="large"
          href="#"
        />
        <Card3
          id="9"
          image="/portfolio/kseniachernaya/pexels-kseniachernaya-5806989.jpg"
          alt="Edison & Co."
          size="large"
          href="#"
        />
        <Card3
          id="10"
          image="/portfolio/kseniachernaya/pexels-kseniachernaya-11112251.jpg"
          alt="Ambient Lighting Studio"
          size="large"
          href="#"
        />
        <Card3
          id="11"
          image="/portfolio/jonathanborba/pexels-jonathanborba-3255245.jpg"
          alt="Sconce & Shade"
          size="large"
          href="#"
        />
      </Grid>

      <Heading as="h2">Flooring & Tile</Heading>
      <Grid
        cols="grid-cols-3"
        className="mb-30"
      >
        <Card3
          id="12"
          image="/portfolio/pexels-mikhail-nilov-6707628.jpg"
          alt="Stone & Terra"
          size="large"
          href="#"
        />
        <Card3
          id="13"
          image="/portfolio/pexels-clickerhappy-584399.jpg"
          alt="Mosaic Masters"
          size="large"
          href="#"
        />
        <Card3
          id="14"
          image="/portfolio/fotoaibe/pexels-fotoaibe-1643384.jpg"
          alt="Hardwood Heritage"
          size="large"
          href="#"
        />
        <Card3
          id="15"
          image="/portfolio/pexels-pixabay-279719.jpg"
          alt="Marble & Granite Co."
          size="large"
          href="#"
        />
        <Card3
          id="16"
          image="/portfolio/fotoaibe/pexels-fotoaibe-1669799.jpg"
          alt="Reclaimed Wood Floors"
          size="large"
          href="#"
        />
        <Card3
          id="17"
          image="/portfolio/pexels-pixabay-269218.jpg"
          alt="Porcelain & Ceramic Studio"
          size="large"
          href="#"
        />
      </Grid>

      <Heading as="h2">Textiles & Drapery</Heading>
      <Grid
        cols="grid-cols-3"
        className="mb-30"
      >
        <Card3
          id="18"
          image="/portfolio/kseniachernaya/pexels-kseniachernaya-4450337.jpg"
          alt="Silk Road Fabrics"
          size="large"
          href="#"
        />
        <Card3
          id="19"
          image="/portfolio/houzlook/pexels-houzlook-3356416.jpg"
          alt="Velvet & Linen Co."
          size="large"
          href="#"
        />
        <Card3
          id="20"
          image="/portfolio/houzlook/pexels-houzlook-3797991.jpg"
          alt="Custom Drapery House"
          size="large"
          href="#"
        />
        <Card3
          id="21"
          image="/portfolio/fotoaibe/pexels-fotoaibe-1571460.jpg"
          alt="Woven Wonders"
          size="large"
          href="#"
        />
        <Card3
          id="22"
          image="/portfolio/fotoaibe/pexels-fotoaibe-1571468.jpg"
          alt="Artisan Rugs & Carpets"
          size="large"
          href="#"
        />
      </Grid>

      <Heading as="h2">Specialty Artisans</Heading>
      <Grid
        cols="grid-cols-3"
        gap="gap-6"
        className="mt-10"
      >
        <Card3
          id="23"
          image="/portfolio/pexels-dropshado-2251247.jpg"
          alt="Ironwork & Metalcraft"
          size="large"
          href="#"
        />
        <Card3
          id="24"
          image="/portfolio/pexels-pixabay-276724.jpg"
          alt="Glass & Mirror Studio"
          size="large"
          href="#"
        />
      </Grid>
    </Section>
  )
}
