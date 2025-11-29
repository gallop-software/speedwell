import { Navbar } from '@/components'
import Section10 from '@/blocks/section-10'
import Accordion1 from '@/blocks/accordion-1'
import Application1 from '@/blocks/application-1'

export default function Content() {
  return (
    <>
      <Navbar className="bg-body2" />
      <Section10 />
      <Accordion1 />
      <Application1 />
    </>
  )
}

export const metadata = {
  title: 'Ipsum aliqua enim nisi',
  description:
    'Lorem excepteur occaecat mollit laboris qui sit pariatur deserunt est ea nisi sed sint cupidatat duis sunt dolor enim et duis qui velit excepteur mollit nulla ullamco ipsum cillum exercitation esse pariatur commodo',
  featuredImage: '/images/portfolio/fotoaibe/pexels-fotoaibe-1571452.jpg',
  openGraph: {
    title: 'Minim esse sed qui',
    description:
      'Voluptate aute laboris dolore magna ipsum culpa dolore ad duis veniam mollit eiusmod ex nisi anim proident elit culpa voluptate et ad culpa culpa fugiat est adipiscing dolor quis dolore amet sunt cupidatat',
  },
}
