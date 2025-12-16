import {
  Section,
  Grid,
  Profile2,
  Heading,
  Paragraph,
  FancyHeading,
} from '@/components'
import facebookIcon from '@iconify/icons-simple-icons/facebook'
import dribbbleIcon from '@iconify/icons-simple-icons/dribbble'
import xIcon from '@iconify/icons-simple-icons/x'

export default function About3() {
  return (
    <Section className="mb-30 mt-30">
      <FancyHeading
        text="Meet Our Team"
        accent="professional designers"
      />
      <Grid cols="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <Profile2
          img="/images/profiles/pexels-moose-photos-170195-1587009.jpg"
          bgColor="bg-body2/40"
          cite="Sarah Mitchell"
          contact={[
            { icon: facebookIcon, link: '#' },
            { icon: dribbbleIcon, link: '#' },
            { icon: xIcon, link: '#' },
          ]}
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
          <Paragraph>
            With over 15 years of experience, Sarah leads our design vision with
            creativity and strategic insight
          </Paragraph>
        </Profile2>

        <Profile2
          img="/images/profiles/pexels-nkhajotia-1516680.jpg"
          bgColor="bg-body2/50"
          cite="Michael Chen"
          contact={[
            { icon: facebookIcon, link: '#' },
            { icon: dribbbleIcon, link: '#' },
            { icon: xIcon, link: '#' },
          ]}
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
          <Paragraph>
            Specializing in office and retail spaces, Michael creates functional
            environments that inspire productivity
          </Paragraph>
        </Profile2>

        <Profile2
          img="/images/profiles/pexels-retamozo-gonzalo-454802313-26926485.jpg"
          bgColor="bg-body2/60"
          cite="Robert Rodriguez"
          contact={[
            { icon: facebookIcon, link: '#' },
            { icon: dribbbleIcon, link: '#' },
            { icon: xIcon, link: '#' },
          ]}
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
          <Paragraph>
            Robert brings warmth and personality to every home with his
            thoughtful approach to residential design
          </Paragraph>
        </Profile2>

        <Profile2
          img="/images/profiles/pexels-skildring-12871464.jpg"
          bgColor="bg-body2/70"
          cite="David Thompson"
          contact={[
            { icon: facebookIcon, link: '#' },
            { icon: dribbbleIcon, link: '#' },
            { icon: xIcon, link: '#' },
          ]}
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
          <Paragraph>
            David has an exceptional eye for color theory and material
            selection, elevating every project
          </Paragraph>
        </Profile2>

        <Profile2
          img="/images/profiles/pexels-anna-nekrashevich-6801642.jpg"
          bgColor="bg-body2/40"
          cite="Ryan Anderson"
          contact={[
            { icon: facebookIcon, link: '#' },
            { icon: dribbbleIcon, link: '#' },
            { icon: xIcon, link: '#' },
          ]}
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
          <Paragraph>
            Ryan specializes in creating beautiful, functional kitchens and
            bathrooms that stand the test of time
          </Paragraph>
        </Profile2>

        <Profile2
          img="/images/profiles/pexels-dxaxoxfz-17555273.jpg"
          bgColor="bg-body2/50"
          cite="Lucas Martinez"
          contact={[
            { icon: facebookIcon, link: '#' },
            { icon: dribbbleIcon, link: '#' },
            { icon: xIcon, link: '#' },
          ]}
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
          <Paragraph>
            Lucas transforms challenging layouts into optimized, flowing spaces
            that maximize function and beauty
          </Paragraph>
        </Profile2>

        <Profile2
          img="/images/profiles/pexels-ekaterina-bolovtsova-5393594.jpg"
          bgColor="bg-body2/60"
          cite="Amanda Foster"
          contact={[
            { icon: facebookIcon, link: '#' },
            { icon: dribbbleIcon, link: '#' },
            { icon: xIcon, link: '#' },
          ]}
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
          <Paragraph>
            Amanda ensures every project runs smoothly from concept to
            completion with expert coordination
          </Paragraph>
        </Profile2>

        <Profile2
          img="/images/profiles/pexels-italo-melo-881954-2379005.jpg"
          bgColor="bg-body2/70"
          cite="Robert Taylor"
          contact={[
            { icon: facebookIcon, link: '#' },
            { icon: dribbbleIcon, link: '#' },
            { icon: xIcon, link: '#' },
          ]}
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
          <Paragraph>
            Robert curates perfect furniture selections and styling details that
            complete every design vision
          </Paragraph>
        </Profile2>
      </Grid>
    </Section>
  )
}
