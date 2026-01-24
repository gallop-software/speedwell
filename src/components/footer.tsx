import { Container } from './container'
import { Gradient } from './gradient'
import { Logo } from './logo'
import Link from 'next/link'
import facebookIcon from '@iconify/icons-mdi/facebook'
import instagramIcon from '@iconify/icons-mdi/instagram'
import phoneIcon from '@iconify/icons-mdi/phone'
import emailOutlineIcon from '@iconify/icons-mdi/email-outline'
import heartIcon from '@iconify/icons-heroicons/heart-solid'
import { Icon } from './icon'
import { Paragraph } from './paragraph'
import { Heading } from './heading'

interface FooterLink {
  href: string
  label: string
}

interface SocialLink {
  name: string
  href: string
  icon: { body: string; width?: number; height?: number }
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/speedwell',
    icon: facebookIcon,
  },
  {
    name: 'Instagram',
    href: 'http://instagram.com/speedwell',
    icon: instagramIcon,
  },
  {
    name: 'Phone',
    href: 'tel:5551234567',
    icon: phoneIcon,
  },
  {
    name: 'Email',
    href: 'mailto:me@your-company.com',
    icon: emailOutlineIcon,
  },
]

const leftColumn = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Residential Design', href: '/residential' },
  { label: 'Commercial Design', href: '/commercial' },
  { label: 'Kitchen & Bath', href: '/kitchen-bath' },
  { label: 'Space Planning', href: '/space-planning' },
  { label: 'Color Consultation', href: '/color-consultation' },
  { label: 'Furniture Selection', href: '/furniture' },
]

const rightColumn = [
  { label: 'Our Story', href: '/residential' },
  { label: 'Meet the Team', href: '/commercial' },
  { label: 'Client Testimonials', href: '/testimonials' },
  { label: 'Before & After', href: '/before-after' },
  { label: 'Project Management', href: '/project-management' },
  { label: 'Contact', href: '/contact' },
  { label: 'Join Our Team', href: '/join-our-team' },
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
      className="flex items-center justify-center gap-1"
    >
      Built with{' '}
      <Icon
        icon={heartIcon}
        className="text-red-500"
      />{' '}
      by the team at{' '}
      <a
        className="underline hover:text-contrast-light"
        href="https://gallop.software/"
      >
        Gallop
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
      &copy; {new Date().getFullYear()} Timmerman Interior Designer
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
                width={220}
              />
              <Heading
                as="h4"
                styleAs="h3"
                fontSize="text-xl"
                textAlign="text-center"
                className="italic"
              >
                Situated in the heart of the Design District on Main Street, our
                studio is steps away from premier showrooms and artisan
                workshops. Nestled within a beautifully restored historic
                building, our inspiring space is perfect for bringing your
                design vision to life.
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
