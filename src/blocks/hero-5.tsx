import { Navbar, Section, Accent, Heading, Paragraph } from '@/components'

export default function Hero5() {
  return (
    <>
      <Navbar className="bg-body2" />
      <Section className="relative py-30">
        <div className="absolute inset-0 opacity-30 sm:opacity-50 bg-repeat bg-left-top bg-[length:700px] bg-[url('/images/geometric-1400x809.jpg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent [background-image:linear-gradient(to_right,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_100%),linear-gradient(to_bottom,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_100%),linear-gradient(to_top,rgb(255_255_255)_0%,rgb(255_255_255_/_0%)_70%)]"></div>
        <Accent
          className="absolute left-[130%] sm:left-[120%] md:left-[110%] xl:left-full top-30 transform rotate-90 origin-top-left z-0 whitespace-nowrap opacity-5 sm:opacity-10"
          color="text-accent"
          fontSize="text-[10rem] lg:text-[12rem]"
        >
          pariatur excepteur
        </Accent>
        <div className="relative">
          <Heading
            id="learn-more"
            as="h1"
            className="max-w-2xl"
          >
            Commodo minim pariatur consequat
          </Heading>
          <Paragraph className="max-w-lg">
            Magna et dolor officia occaecat consequat adipiscing quis ullamco
            ullamco lorem aliquip adipiscing exercitation aliqua pariatur quis
            cillum nisi lorem magna sint sit aliquip ex lorem anim fugiat ut sit
            ut ut commodo elit nostrud
          </Paragraph>
        </div>
      </Section>
    </>
  )
}
