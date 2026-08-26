import { Section } from '@/components/section'
import { Swiper } from '@/components/swiper'
import { Profile2 } from '@/components/profile-2'
import { Heading } from '@/components/heading'
import { Paragraph } from '@/components/paragraph'
import { FancyHeading } from '@/components/fancy-heading'
import facebookIcon from '@iconify/icons-simple-icons/facebook'
import dribbbleIcon from '@iconify/icons-simple-icons/dribbble'
import xIcon from '@iconify/icons-simple-icons/x'

export default function About() {
  return (
    <Section className="mb-30 mt-30 overflow-hidden">
      <FancyHeading
        text="Meet Our Team"
        accent="creative minds"
        margin="mb-4"
      />
      <Swiper layout="carousel">
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
            color="text-accent"
            margin="mb-3"
          >
            Creative Director & Founder
          </Heading>
          <Paragraph>
            With over 15 years of experience, Sarah leads our creative vision
            with strategic insight and bold thinking
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
            color="text-accent"
            margin="mb-3"
          >
            Brand Strategist
          </Heading>
          <Paragraph>
            Specializing in brand positioning and market analysis, Michael
            creates strategic foundations that drive business growth
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
            color="text-accent"
            margin="mb-3"
          >
            Lead Visual Designer
          </Heading>
          <Paragraph>
            Robert brings artistry and attention to detail to every brand
            identity with his thoughtful approach to visual design
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
            color="text-accent"
            margin="mb-3"
          >
            Typography & Color Specialist
          </Heading>
          <Paragraph>
            David has an exceptional eye for typography and color systems,
            creating cohesive visual languages for every brand
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
            color="text-accent"
            margin="mb-3"
          >
            Digital Designer
          </Heading>
          <Paragraph>
            Ryan specializes in creating engaging digital experiences and
            interactive designs that connect brands with audiences
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
            color="text-accent"
            margin="mb-3"
          >
            UX/UI Designer
          </Heading>
          <Paragraph>
            Lucas transforms complex user journeys into intuitive experiences
            that maximize engagement and conversion
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
            color="text-accent"
            margin="mb-3"
          >
            Account Director
          </Heading>
          <Paragraph>
            Amanda ensures every project runs smoothly from briefing to launch
            with expert client coordination and strategic oversight
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
            color="text-accent"
            margin="mb-3"
          >
            Copywriter & Content Strategist
          </Heading>
          <Paragraph>
            Robert crafts compelling brand narratives and messaging strategies
            that resonate with audiences and drive action
          </Paragraph>
        </Profile2>
      </Swiper>
    </Section>
  )
}
