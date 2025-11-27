import { Cover, Section, Heading, Paragraph, Quote, Buttons, Button, Accent, Columns, Column, Navbar, Image, Profile1, Grid, IconText } from '@/components'
import arrowRightIcon from '@iconify/icons-heroicons/arrow-right-20-solid'
import mapPinIcon from '@iconify/icons-heroicons/map-pin'
import academicCapIcon from '@iconify/icons-heroicons/academic-cap'

export default function Content() {
  return (
    <>
<Navbar />

<div className="relative">
  <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-body2 z-0"></div>
  <div className="pt-0 pb-20 lg:py-24 px-6 mx-auto max-w-[1600px] relative">
    <Columns reverseColumns>
      <Column className="relative -mx-6">
        <Image
          className="w-full h-[450px] sm:h-[600px] lg:h-[800px] object-cover object-top"
          src="/images/portfolio/kseniachernaya/pexels-kseniachernaya-6021777.jpg"
          alt="Labore voluptate enim aliquip eiusmod occaecat"
          rounded="rounded-none"
          size="large"
          lazy={false}
        />
        <Accent
          color="text-white"
          className="absolute hidden lg:block -bottom-10 lg:bottom-auto left-6 lg:-top-20 lg:-left-40 transform -rotate-12"
        >
          ad duis
        </Accent>
      </Column>
      <Column className="mx-auto max-w-2xl lg:max-w-7xl">
        <Heading
          as="h1"
          className="max-w-2xl"
        >
          Ullamco veniam aliquip officia fugiat officia
        </Heading>
        <Paragraph className="max-w-2xl">Sunt eiusmod labore nostrud quis laborum enim nisi consectetur esse nulla aliquip eiusmod proident cillum minim aliqua eiusmod ullamco aute incididunt deserunt et ullamco eiusmod culpa qui proident dolor dolor pariatur aute commodo quis incididunt nulla aute dolore ad</Paragraph>
        <Paragraph className="max-w-2xl">In elit est do adipiscing nulla esse mollit aute veniam anim in aliquip consectetur qui sunt laborum excepteur quis occaecat quis eiusmod enim cillum anim commodo commodo officia enim consequat minim excepteur sunt tempor do enim occaecat eiusmod deserunt eiusmod aliquip deserunt proident quis est ut cupidatat in commodo cillum officia est labore magna adipiscing magna minim lorem adipiscing qui commodo irure est sint sit minim</Paragraph>
      </Column>
    </Columns>
  </div>
</div>

<Section
  innerAlign="content"
  className="my-30"
>
  <Heading
    as="h2"
    textAlign="text-center"
  >
    Incididunt laboris veniam minim
  </Heading>
  <Paragraph>Magna quis fugiat incididunt in incididunt cillum amet duis excepteur excepteur eiusmod labore enim et commodo do ullamco sint proident mollit sint culpa amet non tempor elit tempor officia ipsum eiusmod nulla id sint proident dolor ipsum minim qui culpa aliquip sint duis quis nostrud do pariatur qui exercitation</Paragraph>
</Section>

<Section className="mb-30">
  <Grid cols="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <Profile1
      aspect="aspect-[4/5]"
      img="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
      cite="Lorem Consectetur"
    >
      <Heading as="h3" margin="mb-0">Proident fugiat</Heading>
      <Heading as="h4" fontSize="text-lg" className="text-accent mb-3">Esse aliquip voluptate</Heading>
      <Paragraph textAlign="text-center">Occaecat pariatur dolor dolore magna ut aliquip id aute id eiusmod</Paragraph>
      <IconText className="uppercase" fontWeight="font-semibold" fontSize="text-sm" textAlign="text-center" icon={mapPinIcon}>Tellus, Magna</IconText>
    </Profile1>

    <Profile1
      aspect="aspect-[4/5]"
      img="/images/profiles/pexels-nkhajotia-1516680.jpg"
      cite="Ex irure"
    >
      <Heading as="h3" margin="mb-0">Esse et</Heading>
      <Heading as="h4" fontSize="text-lg" className="text-accent mb-3">Ullamco minim labore</Heading>
      <Paragraph textAlign="text-center">Ea ullamco minim irure veniam sit consequat eiusmod mollit</Paragraph>
      <IconText className="uppercase" fontWeight="font-semibold" fontSize="text-sm" textAlign="text-center" icon={mapPinIcon}>Tellus, Magna</IconText>
    </Profile1>

    <Profile1
      aspect="aspect-[4/5]"
      img="/images/profiles/pexels-retamozo-gonzalo-454802313-26926485.jpg"
      cite="Mollit aliqua"
    >
      <Heading as="h3" margin="mb-0">Sed cillum</Heading>
      <Heading as="h4" fontSize="text-lg" className="text-accent mb-3">Sit amet irure</Heading>
      <Paragraph textAlign="text-center">Do aute eiusmod anim cupidatat aliqua consectetur amet</Paragraph>
      <IconText className="uppercase" fontWeight="font-semibold" fontSize="text-sm" textAlign="text-center" icon={mapPinIcon}>Tellus, Magna</IconText>
    </Profile1>

    <Profile1
      aspect="aspect-[4/5]"
      img="/images/profiles/pexels-skildring-12871464.jpg"
      cite="Ad incididunt"
    >
      <Heading as="h3" margin="mb-0">Labore nulla</Heading>
      <Heading as="h4" fontSize="text-lg" className="text-accent mb-3">Duis elit</Heading>
      <Paragraph textAlign="text-center">Dolor id excepteur mollit occaecat in adipiscing sint</Paragraph>
      <IconText className="uppercase" fontWeight="font-semibold" fontSize="text-sm" textAlign="text-center" icon={mapPinIcon}>Seminolus, Magna</IconText>
    </Profile1>

    <Profile1
      aspect="aspect-[4/5]"
      img="/images/profiles/pexels-anna-nekrashevich-6801642.jpg"
      cite="Lorem enim"
    >
      <Heading as="h3" margin="mb-0">Enim consequat</Heading>
      <Heading as="h4" fontSize="text-lg" className="text-accent mb-3">Incididunt amet amet aute</Heading>
      <Paragraph textAlign="text-center">Tempor qui quis quis commodo deserunt incididunt</Paragraph>
      <IconText className="uppercase" fontWeight="font-semibold" fontSize="text-sm" textAlign="text-center" icon={mapPinIcon}>Tellus, Magna</IconText>
    </Profile1>

    <Profile1
      aspect="aspect-[4/5]"
      img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
      cite="Quis quis"
    >
      <Heading as="h3" margin="mb-0">Sed et</Heading>
      <Heading as="h4" fontSize="text-lg" className="text-accent mb-3">Excepteur proident proident</Heading>
      <Paragraph textAlign="text-center">Sit sed dolor nisi do irure nulla mollit duis</Paragraph>
      <IconText className="uppercase" fontWeight="font-semibold" fontSize="text-sm" textAlign="text-center" icon={mapPinIcon}>Tellus, Magna</IconText>
    </Profile1>

    <Profile1
      aspect="aspect-[4/5]"
      img="/images/profiles/pexels-ekaterina-bolovtsova-5393594.jpg"
      cite="Aliquip consectetur"
    >
      <Heading as="h3" margin="mb-0">Laborum exercitation</Heading>
      <Heading as="h4" fontSize="text-lg" className="text-accent mb-3">Anim ex</Heading>
      <Paragraph textAlign="text-center">Amet duis proident elit tempor ipsum cillum sint duis</Paragraph>
      <IconText className="uppercase" fontWeight="font-semibold" fontSize="text-sm" textAlign="text-center" icon={academicCapIcon}>Educatio</IconText>
    </Profile1>

    <Profile1
      aspect="aspect-[4/5]"
      img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
      cite="Laborum sint"
    >
      <Heading as="h3" margin="mb-0">Quis ullamco</Heading>
      <Heading as="h4" fontSize="text-lg" className="text-accent mb-3">Adipiscing consequat</Heading>
      <Paragraph textAlign="text-center">Cillum et esse voluptate consectetur culpa fugiat</Paragraph>
      <IconText className="uppercase" fontWeight="font-semibold" fontSize="text-sm" textAlign="text-center" icon={academicCapIcon}>Educatio</IconText>
    </Profile1>

  </Grid>
</Section>

<Cover
  imageSrc="/images/portfolio/fotoaibe/pexels-fotoaibe-1668860.jpg"
  imageAlt="Anim laboris fugiat sit magna non sit minim"
  overlayColor="bg-accent5/90"
  height="h-auto"
  innerAlign="content"
  className="py-20 lg:py-30"
>
  <Heading
    as="h2"
    styleAs="h2"
    textAlign="text-center"
    color="text-contrast"
    className="mb-6"
  >
    Deserunt eiusmod reprehenderit est
  </Heading>
  <Paragraph
    variant="large"
    textAlign="text-center"
    color="text-contrast"
    className="mb-12"
  >
    In ad aliqua ullamco duis nulla commodo reprehenderit occaecat ad aute nulla et cupidatat aute fugiat ut adipiscing duis do lorem duis cupidatat ipsum cupidatat deserunt ex ipsum non irure proident id sit dolore sed
  </Paragraph>
  <Columns
    gap="gap-16 lg:gap-16"
    className="mt-12"
  >
    <Column>
      <Heading
        as="h3"
        styleAs="h4"
        textAlign="text-center"
        color="text-contrast"
        margin="mb-4"
      >
        Irure magna
      </Heading>
      <Paragraph
        textAlign="text-center"
        color="text-contrast-light"
      >
        Ut proident laborum elit cillum est proident anim dolor labore tempor elit ipsum
      </Paragraph>
      <div className="flex justify-center">
        <Button
          size="medium"
          variant="outline"
          href="/sed-do"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Ipsum irure
        </Button>
      </div>
    </Column>
    <Column>
      <Heading
        as="h3"
        styleAs="h4"
        textAlign="text-center"
        color="text-contrast"
        margin="mb-4"
      >
        Enim consectetur
      </Heading>
      <Paragraph
        textAlign="text-center"
        color="text-contrast-light"
      >
        Commodo officia labore non velit eiusmod non amet labore ipsum reprehenderit quis et excepteur aliqua incididunt elit nulla
      </Paragraph>
      <div className="flex justify-center">
        <Button
          size="medium"
          variant="outline"
          href="/contact"
          icon={arrowRightIcon}
          iconPlacement="after"
        >
          Lorem labore
        </Button>
      </div>
    </Column>
  </Columns>
</Cover>
    </>
  )
}

export const metadata = {
  title: 'Cillum veniam ullamco officia et proident ex ea',
  description: 'Fugiat ex anim do laborum laborum pariatur enim commodo consequat enim ad sint mollit ut cillum minim non velit qui ullamco minim ea adipiscing dolore mollit id',
  slug: 'quis-nostrud',
  featuredImage: '/images/portfolio/kseniachernaya/pexels-kseniachernaya-3951746.jpg',
  focusKeyword: 'fusce dapibus cursus',
  readingTimeMinutes: 8,
  publishDate: '2025-10-16T00:00:00Z',
  lastModified: '2025-10-16T00:00:00Z',
  alternates: {
    canonical: 'https://speedwell.gallop.software/quis-nostrud',
  },
  openGraph: {
    title: 'Adipiscing adipiscing sit do velit consequat nisi proident',
    description: 'Consectetur amet ad cupidatat fugiat sed amet duis quis sint in ea enim cupidatat aliquip excepteur voluptate elit ipsum magna aliquip laboris cupidatat dolor amet id ad',
    image: {
      url: '/images/portfolio/jvdm/pexels-jvdm-1457844.jpg',
      alt: 'Elit occaecat incididunt aliquip mollit veniam',
    },
    imageAlt: 'Fusce Dapibus Cursus apud Tellus Commodo',
  },
}
