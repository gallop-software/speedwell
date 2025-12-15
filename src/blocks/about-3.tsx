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

export default function About3() {
  return (
    <Section className="mb-30 mt-30">
      <Grid cols="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
          cite="Sarah Mitchell"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Sarah Mitchell
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Principal Designer & Founder
          </Heading>
          <Paragraph textAlign="text-center">
            With over 15 years of experience, Sarah leads our design vision with
            creativity and strategic insight
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            New York, NY
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-nkhajotia-1516680.jpg"
          cite="Michael Chen"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Michael Chen
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Senior Commercial Designer
          </Heading>
          <Paragraph textAlign="text-center">
            Specializing in office and retail spaces, Michael creates functional
            environments that inspire productivity
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            San Francisco, CA
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-retamozo-gonzalo-454802313-26926485.jpg"
          cite="Robert Rodriguez"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Robert Rodriguez
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Residential Design Lead
          </Heading>
          <Paragraph textAlign="text-center">
            Robert brings warmth and personality to every home with his
            thoughtful approach to residential design
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Austin, TX
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-skildring-12871464.jpg"
          cite="David Thompson"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            David Thompson
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Color & Materials Specialist
          </Heading>
          <Paragraph textAlign="text-center">
            David has an exceptional eye for color theory and material
            selection, elevating every project
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Seattle, WA
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-anna-nekrashevich-6801642.jpg"
          cite="Ryan Anderson"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Ryan Anderson
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Kitchen & Bath Designer
          </Heading>
          <Paragraph textAlign="text-center">
            Ryan specializes in creating beautiful, functional kitchens and
            bathrooms that stand the test of time
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Boston, MA
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
          cite="Lucas Martinez"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Lucas Martinez
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Space Planning Expert
          </Heading>
          <Paragraph textAlign="text-center">
            Lucas transforms challenging layouts into optimized, flowing spaces
            that maximize function and beauty
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={mapPinIcon}
          >
            Chicago, IL
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-ekaterina-bolovtsova-5393594.jpg"
          cite="Amanda Foster"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Amanda Foster
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Project Manager
          </Heading>
          <Paragraph textAlign="text-center">
            Amanda ensures every project runs smoothly from concept to
            completion with expert coordination
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={academicCapIcon}
          >
            PMP Certified
          </IconText>
        </Profile1>

        <Profile1
          aspect="aspect-[4/5]"
          img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
          cite="Robert Taylor"
        >
          <Heading
            as="h3"
            margin="mb-0"
          >
            Robert Taylor
          </Heading>
          <Heading
            as="h4"
            fontSize="text-lg"
            className="text-accent mb-3"
          >
            Furniture & Styling Consultant
          </Heading>
          <Paragraph textAlign="text-center">
            Robert curates perfect furniture selections and styling details that
            complete every design vision
          </Paragraph>
          <IconText
            className="uppercase"
            fontWeight="font-semibold"
            fontSize="text-sm"
            textAlign="text-center"
            icon={academicCapIcon}
          >
            ASID Member
          </IconText>
        </Profile1>
      </Grid>
    </Section>
  )
}
