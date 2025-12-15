import {
  Navbar,
  Columns,
  Column,
  Image,
  Accent,
  Heading,
  Paragraph,
} from '@/components'
import userIcon from '@iconify/icons-heroicons/user-group'
import chatBubbleIcon from '@iconify/icons-heroicons/chat-bubble-left-right'
import sparklesIcon from '@iconify/icons-heroicons/sparkles'
import fileDocumentIcon from '@iconify/icons-mdi/file-document-outline'
import viewGridIcon from '@iconify/icons-mdi/view-grid-outline'
import viewColumnIcon from '@iconify/icons-mdi/view-column-outline'
import viewCarouselIcon from '@iconify/icons-mdi/view-carousel-outline'
import dockLeftIcon from '@iconify/icons-mdi/dock-left'
import windowMaximizeIcon from '@iconify/icons-mdi/window-maximize'
import viewSplitVerticalIcon from '@iconify/icons-mdi/view-split-vertical'
import type { NavConfig } from '@/components/navbar/types'

const navConfig: NavConfig = {
  links: [
    { href: '#phase-1', label: 'About' },
    { href: '#latest-projects-explore-our-portfolio', label: 'Portfolio' },
    {
      href: '#',
      label: 'Company',
      dropdown: {
        columns: 1,
        items: [
          {
            name: 'Showcase',
            description: 'View our featured work',
            href: '#commercial-excellence',
            icon: sparklesIcon,
          },
          {
            name: 'Testimonials',
            description: 'What our clients say about us',
            href: '#client-success-stories-what-our-clients-say',
            icon: chatBubbleIcon,
          },
          {
            name: 'Contact',
            description: 'Get in touch with our team',
            href: '#lets-create-your-dream-space',
            icon: userIcon,
          },
        ],
      },
    },
    {
      href: '/demos',
      label: 'Demos',
      dropdown: {
        position: 'center',
        columns: 3,
        items: [
          {
            name: 'Homepage Demo',
            description: 'Front page with hero and features',
            href: '/',
            icon: fileDocumentIcon,
          },
          {
            name: 'One Page Site',
            description: 'Navbar with smooth scrolling to sections',
            href: '/layout-1',
            icon: fileDocumentIcon,
          },
          {
            name: 'Layout 2',
            description: 'Modern grid-based card layout system',
            href: '/layout-2',
            icon: viewGridIcon,
          },
          {
            name: 'Layout 3',
            description: 'Multi-column content distribution design',
            href: '/layout-3',
            icon: viewColumnIcon,
          },
          {
            name: 'Layout 4',
            description: 'Full-width carousel presentation style',
            href: '/layout-4',
            icon: viewCarouselIcon,
          },
          {
            name: 'Layout 5',
            description: 'Split-screen with fixed left panel',
            href: '/layout-5',
            icon: dockLeftIcon,
          },
          {
            name: 'Layout 6',
            description: 'Fullscreen hero with minimal chrome',
            href: '/layout-6',
            icon: windowMaximizeIcon,
          },
          {
            name: 'Layout 7',
            description: 'Vertical split content arrangement',
            href: '/layout-7',
            icon: viewSplitVerticalIcon,
          },
        ],
      },
    },
  ],
  homeLink: '#navbar',
}

export default function Hero14() {
  return (
    <>
      <Navbar config={navConfig} />
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
                transformed
              </Accent>
            </Column>
            <Column className="mx-auto max-w-2xl lg:max-w-7xl">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Before & After Transformations
              </Heading>
              <Paragraph className="max-w-2xl">
                Witness the power of thoughtful interior design through our
                portfolio of stunning transformations. Each project tells a
                story of spaces reimagined, potential realized, and dreams
                brought to life. From outdated rooms to modern masterpieces, see
                how Timmerman transforms ordinary spaces into extraordinary
                environments.
              </Paragraph>
              <Paragraph className="max-w-2xl">
                Our before and after gallery showcases the dramatic impact that
                expert design can have on any space. Whether it's a complete
                home renovation, a commercial office redesign, or a single room
                makeover, these transformations demonstrate our commitment to
                excellence, creativity, and attention to detail. Every project
                begins with understanding your vision and ends with exceeding
                your expectations.
              </Paragraph>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
