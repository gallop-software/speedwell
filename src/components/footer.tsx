import { Container } from './container'
import { Gradient } from './gradient'
import { Logo } from './logo'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Paragraph } from './paragraph'
import { Heading } from './heading'

interface FooterLink {
  href: string
  label: string
}

interface SocialLink {
  name: string
  href: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: 'mdi:facebook',
  },
  {
    name: 'Instagram',
    href: 'http://instagram.com',
    icon: 'mdi:instagram',
  },
  {
    name: 'Phone',
    href: 'tel:5551234567',
    icon: 'mdi:phone',
  },
  {
    name: 'Email',
    href: '/sit',
    icon: 'mdi:email-outline',
  },
]

const leftColumn = [
  { label: 'Lorem Ipsum', href: '/lorem-ipsum' },
  { label: 'Dolor Sit Amet', href: '/enim-ad' },
  { label: 'Consectetur Adipiscing', href: '/eiusmod-tempor' },
  { label: 'Sed Do Eiusmod', href: '/adipiscing-elit-sed' },
  { label: 'Tempor Incididunt', href: '/laboris-nisi' },
  { label: 'Ut Labore Et', href: '/magna-aliqua' },
]

const rightColumn = [
  { label: 'Dolore Magna Aliqua', href: '/sit-amet-consectetur' },
  { label: 'Enim Ad Minim', href: '/labore-dolore' },
  { label: 'Veniam Quis Nostrud', href: '/enim-ad-minim' },
  { label: 'Exercitation Ullamco', href: '/sit' },
  { label: 'Laboris Nisi Ut', href: '/incididunt' },
  { label: 'Aliquip Ex Ea', href: '/sed-do' },
]

function SocialLinks() {
  return (
    <div className="flex">
      {socialLinks.map((item: SocialLink) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-dark hover:bg-body2/30 rounded-lg transition-colors duration-200 p-2"
          aria-label={item.name}
        >
          <Icon
            icon={item.icon}
            className="h-7 w-7"
          />
        </a>
      ))}
    </div>
  )
}

function WebMaster() {
  return (
    <Paragraph
      fontSize="text-sm"
      margin="mb-0"
    >
      Web design by{' '}
      <a
        className="underline hover:text-contrast-light"
        href="https://webplant.media"
      >
        Web Plant Media
      </a>
    </Paragraph>
  )
}
function Copyright() {
  return (
    <Paragraph
      fontSize="text-sm"
      margin="mb-0"
    >
      &copy; {new Date().getFullYear()} Lorem Ipsum Company
    </Paragraph>
  )
}

export function Footer() {
  return (
    <footer className="">
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/50 z-0" />
        <Container className="pt-20 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-y-0 pb-6 lg:gap-24 items-center">
            {/* Center content - first in HTML order, but visually centered on desktop */}
            <div className="flex flex-col items-center lg:order-2">
              <Logo
                className="mb-7"
                width={350}
              />
              <Heading
                as="h4"
                styleAs="h3"
                fontSize="text-xl"
                className="text-center italic"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Heading>
              <SocialLinks />
            </div>

            {/* Left column - second in HTML order, but visually left on desktop */}
            <div className="gap-x-8 lg:order-1">
              <div>
                <ul className="text-center space-y-4 text-sm mb-4 lg:mb-0 mt-20 lg:mt-0">
                  {leftColumn.map((link: FooterLink) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-medium text-contrast hover:text-contrast-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column - third in HTML order, visually right on desktop */}
            <div className="gap-x-8 lg:order-3">
              <div>
                <ul className="text-center space-y-4 text-sm">
                  {rightColumn.map((link: FooterLink) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-medium text-contrast hover:text-contrast-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-6 mt-10 text-center">
            <div>
              <Copyright />
              <WebMaster />
            </div>
          </div>
        </Container>
      </Gradient>
    </footer>
  )
}
