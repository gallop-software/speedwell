import {
  Section,
  Grid,
  Profile1,
  Heading,
  Paragraph,
  IconText,
} from '@/components'
import mapPinIcon from '@iconify/icons-heroicons/map-pin'
import academicCapIcon from '@iconify/icons-heroicons/academic-cap'

export default function About2() {
  return (
    <Section className="mb-30">
      <Grid cols="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
          cite="Lorem Consectetur"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Proident fugiat
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Esse aliquip voluptate
          </Heading>
          <Paragraph textAlign="text-center">
            Occaecat pariatur dolor dolore magna ut aliquip id aute id eiusmod
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Tellus, Magna
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-nkhajotia-1516680.jpg"
          cite="Ex irure"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Esse et
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Ullamco minim labore
          </Heading>
          <Paragraph textAlign="text-center">
            Ea ullamco minim irure veniam sit consequat eiusmod mollit
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Tellus, Magna
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-retamozo-gonzalo-454802313-26926485.jpg"
          cite="Mollit aliqua"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Sed cillum
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Sit amet irure
          </Heading>
          <Paragraph textAlign="text-center">
            Do aute eiusmod anim cupidatat aliqua consectetur amet
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Tellus, Magna
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-skildring-12871464.jpg"
          cite="Ad incididunt"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Labore nulla
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Duis elit
          </Heading>
          <Paragraph textAlign="text-center">
            Dolor id excepteur mollit occaecat in adipiscing sint
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Seminolus, Magna
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-anna-nekrashevich-6801642.jpg"
          cite="Lorem enim"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Enim consequat
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Incididunt amet amet aute
          </Heading>
          <Paragraph textAlign="text-center">
            Tempor qui quis quis commodo deserunt incididunt
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Tellus, Magna
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
          cite="Quis quis"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Sed et
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Excepteur proident proident
          </Heading>
          <Paragraph textAlign="text-center">
            Sit sed dolor nisi do irure nulla mollit duis
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Tellus, Magna
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-ekaterina-bolovtsova-5393594.jpg"
          cite="Aliquip consectetur"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Laborum exercitation
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Anim ex
          </Heading>
          <Paragraph textAlign="text-center">
            Amet duis proident elit tempor ipsum cillum sint duis
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={academicCapIcon}
          >
            Educatio
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
          cite="Laborum sint"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Quis ullamco
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Adipiscing consequat
          </Heading>
          <Paragraph textAlign="text-center">
            Cillum et esse voluptate consectetur culpa fugiat
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={academicCapIcon}
          >
            Educatio
          </IconText>
        </Profile1>
      </Grid>
    </Section>
  )
}
