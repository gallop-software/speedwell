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
        <div className="absolute inset-y-0 left-0 w-full xl:w-2/3 bg-body2 z-0"></div>
        <div className="px-6 mx-auto max-w-[1600px] relative">
          <Columns
            reverseColumns={false}
            className="bg-body2"
            cols="grid-cols-1 xl:grid-cols-2"
            gap="gap-0 xl:gap-20"
          >
            <Column className="mx-auto max-w-2xl lg:max-w-7xl py-24 max-xl:order-2">
              <Heading
                as="h1"
                className="max-w-2xl"
              >
                Building Brands That Stand Out
              </Heading>
              <Paragraph className="max-w-2xl">
                We are a branding and creative agency specializing in brand identity, visual design, and strategic positioning. From logo design and brand guidelines to website development and marketing campaigns, we help businesses tell their story and connect with their audience in meaningful ways.
              </Paragraph>
            </Column>
            <Column className="relative -mx-6 flex items-center flex-row-reverse h-full  max-xl:order-1">
              <Image
                className="w-2/3 h-full relative object-cover object-center"
                src="/images/layout-1/pexels-anna-nekrashevich-7552446.jpg"
                alt="Labore voluptate enim aliquip eiusmod occaecat"
                rounded="rounded-none"
                size="large"
                lazy={false}
              />
              <div className="absolute h-auto top-30 bottom-30 w-3/7 left-0">
                <Image
                  className="width-full h-full object-cover object-top"
                  aspect="aspect-none"
                  src="/images/layout-1/pexels-ron-lach-8760891.jpg"
                  alt="Labore voluptate enim aliquip eiusmod occaecat"
                  rounded="rounded-none"
                  size="large"
                  lazy={false}
                />
              </div>
              <Accent
                color="text-white"
                className="absolute hidden lg:block -bottom-8 xl:top-0 left-6 xl:-left-30 transform -rotate-12"
              >
                make impact
              </Accent>
            </Column>
          </Columns>
        </div>
      </div>
    </>
  )
}
