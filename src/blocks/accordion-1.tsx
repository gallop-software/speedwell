import { Section, Heading, Accordion, List, Li } from '@/components'

export default function Accordion1() {
  return (
    <Section className="relative pb-30">
      <Heading as="h2">Sunt amet ipsum in magna</Heading>
      <Accordion headingText="Sed Ut Discipulus">
        <Heading as="h4">Exercitation enim ex</Heading>
        <List className="mb-8">
          <Li>
            Pariatur pariatur ut esse qui non consectetur eiusmod anim tempor
            sed fugiat
          </Li>
          <Li>
            Et sunt est aliqua cupidatat cillum voluptate excepteur nulla
            consectetur
          </Li>
          <Li>Labore fugiat tempor sit dolor exercitation cillum commodo</Li>
        </List>
        <Heading as="h4">In aliquip</Heading>
        <List className="mb-8">
          <Li>Exercitation lorem mollit irure ullamco</Li>
          <Li>Quis non in</Li>
          <Li>Voluptate ipsum sit occaecat consectetur ullamco consectetur</Li>
          <Li>Incididunt proident</Li>
          <Li>Qui aliquip dolor anim minim cupidatat officia</Li>
          <Li>
            Velit ullamco deserunt ut labore id aliqua mollit exercitation aute
          </Li>
          <Li>Sit esse id amet ullamco sit eiusmod sunt</Li>
          <Li>Cillum non qui quis minim laboris nisi esse tempor ad</Li>
        </List>
        <Heading as="h4">Irure velit sit tempor</Heading>
        <List className="mb-8">
          <Li>Mollit commodo excepteur laborum in</Li>
          <Li>
            Lorem sed aliqua laboris deserunt et non consectetur qui et sunt
          </Li>
          <Li>Irure ea velit quis nulla exercitation magna ipsum</Li>
          <Li>
            Et proident est tempor enim aute dolore mollit et adipiscing velit
            irure proident anim
          </Li>
        </List>
      </Accordion>
      <Accordion headingText="Midwife">
        <Heading as="h4">Non irure reprehenderit</Heading>
        <List className="mb-8">
          <Li>Occaecat amet</Li>
          <Li>Reprehenderit mollit est</Li>
          <Li>Eiusmod qui</Li>
          <Li>
            Commodo in nostrud esse nostrud incididunt dolor sit consequat
          </Li>
          <Li>Nulla id reprehenderit quis</Li>
          <Li>Minim magna cillum anim amet amet non nulla</Li>
          <Li>Veniam sint ad officia ipsum duis sit</Li>
        </List>
        <Heading as="h4">Sint sunt</Heading>
        <List className="mb-8">
          <Li>Magna veniam mollit</Li>
          <Li>Tempor in</Li>
          <Li>Tempor cupidatat</Li>
          <Li>Non elit fugiat adipiscing consectetur sit non</Li>
        </List>
        <Heading as="h4">Id do</Heading>
        <List className="mb-8">
          <Li>Officia ex et in exercitation</Li>
          <Li>
            Proident irure veniam exercitation dolore exercitation magna esse
          </Li>
          <Li>Proident voluptate ea ut fugiat</Li>
          <Li>
            Commodo minim do anim qui ea cupidatat aliqua enim id eiusmod non
            dolor ullamco aliquip labore
          </Li>
          <Li>Deserunt sint irure irure duis laboris ut</Li>
        </List>
      </Accordion>
      <Accordion headingText="Receptionist">
        <Heading as="h4">Enim tempor dolor</Heading>
        <List className="mb-8">
          <Li>
            Fugiat tempor commodo proident esse non irure ad exercitation
            nostrud aliquip est do velit magna ad nisi
          </Li>
          <Li>Ea irure</Li>
          <Li>Proident dolor exercitation</Li>
          <Li>Amet sunt</Li>
          <Li>Adipiscing do sint culpa reprehenderit minim sint aliqua</Li>
        </List>
        <Heading as="h4">Anim anim</Heading>
        <List className="mb-8">
          <Li>Dolor eiusmod in deserunt</Li>
          <Li>Voluptate ipsum cupidatat</Li>
          <Li>Ullamco tempor magna irure cillum deserunt commodo</Li>
          <Li>Laborum do</Li>
          <Li>Labore irure anim incididunt et</Li>
        </List>
        <Heading as="h4">Pariatur cupidatat</Heading>
        <List className="mb-8">
          <Li>Dolor consectetur quis fugiat minim</Li>
          <Li>Culpa ex aliqua nisi aute</Li>
          <Li>Minim velit pariatur officia culpa dolor cillum nostrud</Li>
        </List>
        <Heading as="h4">Labore ut</Heading>
        <List className="mb-8">
          <Li>
            Culpa lorem excepteur id in exercitation elit excepteur et cillum
            nisi aliquip irure aliquip sunt incididunt duis anim proident
          </Li>
          <Li>
            Cupidatat velit ea in veniam consectetur ea ipsum esse proident
            occaecat fugiat quis lorem fugiat exercitation veniam
          </Li>
          <Li>Ullamco amet velit proident velit dolor</Li>
          <Li>
            Anim non tempor anim reprehenderit nulla elit culpa sed eiusmod
            voluptate irure ad laboris
          </Li>
        </List>
      </Accordion>
    </Section>
  )
}
