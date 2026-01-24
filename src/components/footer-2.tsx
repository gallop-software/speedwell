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
import { DateTime } from 'luxon'

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
    <div className="flex justify-center md:justify-start">
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
      className="flex items-center justify-center lg:justify-end gap-1"
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
      textAlign="text-center lg:text-left"
    >
      &copy; {DateTime.now().year} Timmerman Interior Designer
    </Paragraph>
  )
}

export function Footer2() {
  return (
    <footer className="">
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/50 z-0" />
        <Container className="pt-16 pb-8 z-10 relative">
          {/* Main footer content - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_1fr_1fr_1fr] gap-12 lg:gap-12 pb-12">
            {/* Column 1: Logo and Description */}
            <div className="flex flex-col items-center md:items-start">
              <Logo
                className="mb-6"
                width={180}
              />
              <Paragraph
                fontSize="text-sm"
                margin="mb-4"
                textAlign="text-center md:text-left"
              >
                Situated in the heart of the Design District on Main Street, our
                studio is steps away from premier showrooms and artisan
                workshops.
              </Paragraph>
              <SocialLinks />
            </div>

            {/* Column 2: Menu */}
            <div>
              <Heading
                as="h4"
                fontSize="text-lg"
                margin="mb-6"
                textAlign="text-center md:text-left"
              >
                Menu
              </Heading>
              <ul className="space-y-3 text-sm text-center md:text-left">
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

            {/* Column 3: Our Services */}
            <div>
              <Heading
                as="h4"
                fontSize="text-lg"
                margin="mb-6"
                textAlign="text-center md:text-left"
              >
                Our Services
              </Heading>
              <ul className="space-y-3 text-sm text-center md:text-left">
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

            {/* Column 4: Contact */}
            <div className="">
              <Heading
                as="h4"
                fontSize="text-lg"
                margin="mb-6"
                textAlign="text-center md:text-left"
              >
                Contact
              </Heading>
              <ul className="space-y-3 text-sm text-center md:text-left">
                {socialLinks.map((item: SocialLink) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 justify-center md:justify-start"
                  >
                    <Icon
                      icon={item.icon}
                      className="h-5 w-5 shrink-0"
                    />
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-contrast hover:text-contrast-light"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar with copyright and webmaster */}
          <div className="border-t border-accent/10 pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <Copyright />
              <WebMaster />
            </div>
          </div>
        </Container>
      </Gradient>
    </footer>
  )
}
