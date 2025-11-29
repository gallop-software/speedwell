import { Section, Heading, Paragraph, Accordion } from '@/components'

export default function Content4() {
  return (
    <Section
      className="bg-body py-30"
      innerAlign="content"
    >
      <Heading
        as="h2"
        id="learn-more"
        className="text-center"
      >
        Laboris et laborum velit officia
      </Heading>
      <Paragraph>
        Do id lorem aliqua sint proident ad minim labore enim proident amet enim
        ad laboris mollit est labore esse eiusmod fugiat laboris quis ea et
        velit pariatur commodo aliquip ad consequat do adipiscing velit
        adipiscing ut qui consectetur pariatur adipiscing fugiat et sed magna
        ipsum consectetur lorem tempor id sunt nulla dolor magna pariatur cillum
        incididunt adipiscing magna ipsum exercitation officia
      </Paragraph>
      <Heading as="h3">Aliqua commodo lorem consectetur aliquip</Heading>
      <Paragraph>
        Sed veniam esse ex labore irure reprehenderit ea nulla deserunt elit ea
        incididunt duis sunt eiusmod sit veniam aliqua non excepteur velit
        laboris ut amet nostrud adipiscing proident consequat sunt quis laboris
        nulla in nisi voluptate nisi nostrud lorem nostrud dolor consequat ad
        est sunt labore occaecat pariatur culpa labore culpa ut occaecat irure
        adipiscing
      </Paragraph>
      <Heading as="h3">Ut ex magna nulla irure esse sed dolore</Heading>
      <Paragraph>
        Ea ad pariatur ad ex quis amet in id mollit magna ipsum dolor adipiscing
        consequat commodo reprehenderit aliquip cillum ea fugiat sunt cillum
        consectetur culpa fugiat esse pariatur occaecat voluptate pariatur esse
        occaecat amet est velit enim esse labore amet nisi occaecat aliqua
        commodo mollit adipiscing voluptate reprehenderit
      </Paragraph>
      <Heading
        as="h2"
        className="mt-30"
      >
        Magna elit sunt
      </Heading>
      <Accordion headingText="Is water birth safe?">
        <Paragraph>
          Sit lorem et et anim dolore eiusmod veniam aliqua sint reprehenderit
          ipsum magna laborum lorem do nostrud consequat consequat mollit
          laboris dolore irure nulla minim ea et cillum dolor veniam in
          incididunt ullamco sint amet cillum irure deserunt magna ea deserunt
          pariatur ex
        </Paragraph>
      </Accordion>
      <Accordion headingText="What are the advantages of water birth?">
        <Paragraph>
          Tempor ullamco nulla est sunt exercitation nostrud commodo qui esse
          labore est labore esse velit culpa quis laborum exercitation amet
          officia consectetur occaecat laborum aliqua aliqua culpa do magna
          consectetur enim duis ullamco velit cupidatat
        </Paragraph>
      </Accordion>
      <Accordion headingText="Who is a good candidate?">
        <Paragraph>
          Sunt aliqua consequat non amet voluptate nostrud ut cillum culpa amet
          elit consectetur do duis elit labore mollit non sed ea sint tempor
          ullamco non aute sed adipiscing deserunt aute ad excepteur anim aute
          nostrud excepteur esse aliquip cillum aute sint est excepteur cillum
        </Paragraph>
      </Accordion>
      <Paragraph className="text-sm mt-10">
        Veniam irure minim ipsum dolore nostrud irure minim velit nisi aute
        officia quis proident ad minim amet nisi non aliquip aliqua aliquip
        mollit magna magna pariatur sunt veniam ex adipiscing duis esse deserunt
        ex duis id veniam
      </Paragraph>
    </Section>
  )
}
