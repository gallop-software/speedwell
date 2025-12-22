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
import facebookIcon from '@iconify/icons-mdi/facebook'
import instagramIcon from '@iconify/icons-mdi/instagram'
import phoneIcon from '@iconify/icons-mdi/phone'
import emailOutlineIcon from '@iconify/icons-mdi/email-outline'
import type { NavLink, SocialLink } from './types'

/**
 * Home link for logo navigation
 */
export const homeLink = '#navbar'

/**
 * Main navigation links configuration
 * Includes both simple links and dropdown menus
 */
export const links: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  {
    href: '#',
    label: 'Company',
    dropdown: {
      columns: 1,
      items: [
        {
          name: 'Showcase',
          description: 'View our featured work',
          href: '#showcase',
          icon: sparklesIcon,
        },
        {
          name: 'Testimonials',
          description: 'What our clients say about us',
          href: '#testimonials',
          icon: chatBubbleIcon,
        },
        {
          name: 'Contact',
          description: 'Get in touch with our team',
          href: '#contact',
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
      columns: 1,
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
          name: 'Startup Page',
          description: 'Modern tech platform solution',
          href: '/layout-2',
          icon: viewGridIcon,
        },
        /*{
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
        },*/
      ],
    },
  },
]

/**
 * Social media links configuration
 */
export const socialLinks: SocialLink[] = [
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
