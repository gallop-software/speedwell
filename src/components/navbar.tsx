'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import {
  Bars2Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useState, useEffect, type ReactElement } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { Logo, Mark } from './logo'
import { Search } from './search'
import useOffsetTop from '@/hooks/use-offset-top'
import { state, useSnapshot } from '@/state'

// Navbar data types and configuration
interface DropdownItem {
  name: string
  description: string
  href: string
  icon: string
}

interface NavLink {
  href: string
  label: string
  dropdown?: {
    items: DropdownItem[]
  }
}

interface CallToAction {
  name: string
  href: string
  icon: string
}

interface SocialLink {
  name: string
  href: string
  icon: string
}

interface NavbarProps {
  className?: string
}

const links: NavLink[] = [
  { href: '/lorem-ipsum', label: 'Lorem Ipsum' },
  {
    href: '/enim-ad',
    label: 'Eiusmod',
    dropdown: {
      items: [
        {
          name: 'Adipiscing Elit',
          description: 'Sed do eiusmod tempor incididunt ut labore',
          href: '/enim-ad',
          icon: 'lucide:baby',
        },
        {
          name: 'Ut Enim Ad',
          description: 'Minim veniam quis nostrud exercitation',
          href: '/eiusmod-tempor',
          icon: 'lucide:bed-single',
        },
        {
          name: 'Duis Aute Irure',
          description: 'Dolor in reprehenderit in voluptate velit',
          href: '/adipiscing-elit-sed',
          icon: 'lucide:users',
        },
        {
          name: 'Excepteur Sint',
          description: 'Occaecat cupidatat non proident sunt',
          href: '/laboris-nisi',
          icon: 'lucide:droplet',
        },
        {
          name: 'In Culpa Qui',
          description: 'Officia deserunt mollit anim id est',
          href: '/magna-aliqua',
          icon: 'lucide:heart-handshake',
        },
        {
          name: 'Laborum Et Dolorum',
          description: 'Fuga et harum quidem rerum facilis',
          href: '/sit-amet-consectetur',
          icon: 'lucide:graduation-cap',
        },
        {
          name: 'Nam Libero Tempore',
          description: 'Cum soluta nobis est eligendi optio',
          href: '/labore-dolore',
          icon: 'lucide:pill',
        },
      ],
    },
  },
  {
    href: '/enim-ad-minim',
    label: 'Vestibulum',
    dropdown: {
      items: [
        {
          name: 'Ante Ipsum',
          description: 'Primis in faucibus orci luctus et',
          href: '/enim-ad-minim',
          icon: 'lucide:users-round',
        },
        {
          name: 'Ultrices Posuere',
          description: 'Cubilia curae mauris viverra odio',
          href: '/quis-nostrud',
          icon: 'lucide:graduation-cap',
        },
        {
          name: 'Sagittis Lacus',
          description: 'Vel augue laoreet rutrum faucibus',
          href: '/sit',
          icon: 'lucide:map-pin',
        },
        {
          name: 'Dolor Auctor',
          description: 'Elit ut aliquam purus sit amet',
          href: '/incididunt',
          icon: 'lucide:message-circle-heart',
        },
        {
          name: 'Luctus Accumsan',
          description: 'Tortor mauris condimentum nibh ut',
          href: '/sed-do',
          icon: 'lucide:handshake',
        },
      ],
    },
  },
]

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/speedwell',
    icon: 'mdi:facebook',
  },
  {
    name: 'Instagram',
    href: 'http://instagram.com/speedwell',
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

// Interface for Popover render prop
interface PopoverRenderProps {
  open: boolean
}

/**
 * Desktop navigation component
 * Renders horizontal navigation with dropdowns for larger screens
 * @returns {ReactElement} Desktop navigation elements
 */
function DesktopNav({
  isScrolling,
  forceCloseOnHide,
}: {
  isScrolling?: boolean
  forceCloseOnHide?: boolean
}): ReactElement {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label, dropdown }: NavLink) => (
        <div
          key={href}
          className="relative flex"
        >
          {dropdown ? (
            <Popover
              className="relative"
              key={forceCloseOnHide ? `${href}-${isScrolling}` : href}
            >
              {({ open }: any) => (
                <>
                  <PopoverButton className="flex h-full cursor-pointer items-center px-4 py-3 text-lg font-body font-medium text-contrast bg-blend-multiply focus:outline-none data-hover:bg-black/[2.5%] rounded-lg">
                    {label}
                    <ChevronDownIcon
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    className="absolute left-1/2 -translate-x-1/2 xl:left-0 xl:-ml-4 xl:translate-x-0 z-50 mt-5 flex w-screen max-w-max px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                  >
                    <div
                      className={`w-screen ${label === 'Eiusmod' ? 'max-w-2xl' : 'max-w-md'} flex-auto overflow-hidden rounded-3xl bg-body2 text-sm/6 shadow-lg ring-1 ring-accent/20`}
                    >
                      <div
                        className={`p-4 ${label === 'Eiusmod' ? 'grid grid-cols-2 gap-x-4' : ''}`}
                      >
                        {dropdown.items.map((item: DropdownItem) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            prefetch={true}
                            scroll={true}
                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-black/[2.5%] cursor-pointer"
                          >
                            <span className="mt-1 flex size-11 flex-none items-center justify-center rounded-full bg-body-light group-hover:bg-body-light/50">
                              <Icon
                                icon={item.icon}
                                aria-hidden={true}
                                className="size-6 text-accent group-hover:text-accent-dark"
                              />
                            </span>
                            <span className="flex flex-col">
                              <span className="font-medium text-contrast">
                                {item.name}
                              </span>
                              <span className="mt-1 text-contrast-light">
                                {item.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          ) : (
            <Link
              href={href}
              className="flex items-center px-4 py-3 text-lg font-body font-medium text-contrast bg-blend-multiply hover:bg-black/[2.5%] rounded-lg"
            >
              {label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

/**
 * Search button component with dropdown
 * Toggles Search visibility and positions it absolutely
 * Manages its own state internally
 * @returns {ReactElement} Search button with dropdown
 */
function SearchButton(): ReactElement {
  const [isSearching, setIsSearching] = useState(false)

  return (
    <div className="hidden lg:block">
      <button
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-dark hover:bg-black/[2.5%] rounded-lg transition-colors duration-200 cursor-pointer p-2 outline-none focus:outline-none"
        aria-label="search"
        onClick={() => setIsSearching((prev) => !prev)}
      >
        <Icon
          icon="lucide:search"
          className="h-7 w-7"
        />
      </button>
      <Search
        isOpen={isSearching}
        setIsOpen={setIsSearching}
      />
    </div>
  )
}

/**
 * Social media navigation component
 * Renders social media icons for desktop view
 * @returns {ReactElement} Social media links
 */
function SocialMediaNav(): ReactElement {
  return (
    <div className="hidden lg:flex items-center space-x-1">
      {socialLinks.map((item: SocialLink) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-dark hover:bg-black/[2.5%] rounded-lg transition-colors duration-200 p-2"
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

/**
 * Mobile navigation hamburger button
 * Toggles the mobile menu visibility with animated icon transition
 * @param open - Whether the mobile menu is open
 * @returns {ReactElement} Mobile menu toggle button
 */
function MobileNavButton({ open }: { open: boolean }): ReactElement {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg focus:outline-none focus:ring-0 lg:hidden cursor-pointer -mr-2"
      aria-label="Open main menu"
    >
      <motion.div
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        {open ? (
          <XMarkIcon className="size-6" />
        ) : (
          <Bars2Icon className="size-6" />
        )}
      </motion.div>
    </DisclosureButton>
  )
}

/**
 * Mobile navigation menu component
 * Renders slide-down mobile menu with animations and expandable dropdowns
 * @returns {ReactElement} Mobile navigation menu
 */
function MobileNav(): ReactElement {
  const [isSearching, setIsSearching] = useState(false)

  return (
    <DisclosurePanel
      className="lg:hidden"
      static={false}
    >
      <div className="flex flex-col gap-3 py-8">
        {links.map(({ href, label, dropdown }: NavLink, linkIndex: number) => (
          <div key={href}>
            {dropdown ? (
              <Disclosure>
                {({ open }) => (
                  <motion.div
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{
                      duration: 0.1,
                      ease: 'easeInOut',
                    }}
                  >
                    <DisclosureButton className="flex w-full items-center justify-between text-lg font-body font-medium text-contrast focus:outline-none py-2 cursor-pointer pr-2">
                      {label}
                      <ChevronDownIcon
                        className={`h-6 w-6 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2">
                      <div className="flex flex-col gap-2">
                        {dropdown.items.map((item: DropdownItem) => (
                          <div
                            key={item.name}
                            className="group relative flex gap-x-4 py-3 cursor-pointer"
                          >
                            <div className="mt-1 flex size-10 flex-none items-center justify-center rounded-full bg-body-light">
                              <Icon
                                icon={item.icon}
                                aria-hidden={true}
                                className="size-5 text-accent"
                              />
                            </div>
                            <div className="flex-1">
                              <Link
                                prefetch={true}
                                scroll={true}
                                href={item.href}
                                className="font-body font-medium text-contrast text-base"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-sm text-contrast-light">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </motion.div>
                )}
              </Disclosure>
            ) : (
              <motion.div
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.1,
                  ease: 'easeInOut',
                }}
              >
                <Link
                  href={href}
                  className="text-lg block font-body font-medium text-contrast py-2 px-0"
                >
                  {label}
                </Link>
              </motion.div>
            )}
          </div>
        ))}
        {/* Mobile Search Button */}
        <button
          type="button"
          className="mt-4 w-full flex items-center justify-start rounded-lg py-2.5 pr-3.5 pl-4 text-lg ring-1 ring-contrast outline-none focus:outline-none focus:ring-contrast hover:bg-black/[2.5%]"
          onClick={() => setIsSearching(true)}
        >
          <Icon
            icon="lucide:search"
            className="h-5 w-5 flex-none text-contrast hover:text-contrast"
          />
          <span className="ml-2 text-contrast">Search...</span>
        </button>
        {/* Mobile Search Modal */}
        <Search
          isOpen={isSearching}
          setIsOpen={setIsSearching}
        />{' '}
        {/* Mobile Social Media Links */}
        <div className="flex flex-col gap-3 pt-10 border-t-1 border-contrast mt-10">
          {socialLinks.map((item: SocialLink) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-3 py-2 text-lg font-body font-medium text-contrast"
              aria-label={item.name}
            >
              <Icon
                icon={item.icon}
                className="size-6 text-accent"
              />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </DisclosurePanel>
  )
}

/**
 * Sticky Mobile Nav Button with Sidebar Dialog
 * Opens mobile navigation in a sliding sidebar dialog
 */
function StickyMobileNavButton(): ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-accent hover:text-accent-dark rounded-lg transition-colors duration-200 p-2 cursor-pointer -mr-2 focus:outline-none focus:ring-0"
        aria-label="Open mobile menu"
      >
        <Bars2Icon className="h-7 w-7" />
      </button>

      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={closeModal}
        open={isOpen}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-white/50 backdrop-blur-md duration-500 ease-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 font-body h-screen min-h-screen text-contrast max-w-[86%] md:max-w-[77%] w-full right-0 left-auto scroll-smooth">
          <div className="flex justify-end h-full">
            <DialogPanel
              transition
              className="pointer-events-auto h-full bg-body2 shadow-xl text-left align-middle overflow-hidden overflow-y-auto scrollbar-hide w-full duration-500 ease-in-out transition data-[closed]:translate-x-full [-webkit-overflow-scrolling:touch]"
            >
              <div className="relative flex items-center justify-start flex-col h-full pt-6 pb-14">
                {/* Header */}
                <div className="w-full flex justify-between px-8 mb-6">
                  <DialogTitle className="text-xl font-heading font-bold">
                    Menu
                  </DialogTitle>
                  <button
                    type="button"
                    className="rounded-full focus:outline-none focus:ring-0 p-1.5 cursor-pointer -mr-2"
                    onClick={closeModal}
                  >
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Mobile Navigation Content */}
                <div
                  className={clsx(
                    'h-full px-8 [&>*:first-child]:mt-0 w-full',
                    "after:content-[''] after:block after:w-full after:h-20 after:xl:h-10"
                  )}
                >
                  <MobileNav />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

function StickyNavbar({
  isScrolling,
  scrollingDirection,
}: {
  isScrolling?: boolean
  scrollingDirection?: string
}): ReactElement {
  const shouldShow = isScrolling && scrollingDirection === 'up'

  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: shouldShow ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="z-40 fixed top-0 left-0 right-0"
    >
      <Disclosure
        as="header"
        className={clsx(
          'bg-body2 shadow-xl py-4 lg:py-4 border-b border-accent/20'
        )}
      >
        {({ open, close }) => {
          // Close mobile menu when navbar slides up
          if (!isScrolling && open) {
            close()
          }

          return (
            <>
              <div className="mx-auto max-w-[1800px] px-6 lg:px-8">
                <div className="relative flex items-center">
                  {/* Logo Section */}
                  <div className="shrink-0">
                    <Link
                      prefetch={true}
                      scroll={true}
                      href="/"
                      title="Logo"
                      className="block lg:hover:bg-black/2.5 lg:rounded-lg lg:p-2"
                    >
                      <Logo
                        className=""
                        width={220}
                      />
                    </Link>
                  </div>

                  {/* Centered Navigation - using absolute positioning for true centering */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <DesktopNav
                      isScrolling={isScrolling}
                      forceCloseOnHide={true}
                    />
                  </div>

                  {/* Right Side - Social Media Icons and Mobile Button */}
                  <div className="flex items-center ml-auto space-x-0 md:space-x-1">
                    <SearchButton />
                    <SocialMediaNav />
                    <StickyMobileNavButton />
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </Disclosure>
    </motion.div>
  )
}

/**
 * Main navigation bar component for the application
 *
 * Features:
 * - Responsive design with desktop and mobile layouts
 * - Click-based dropdown menus for desktop
 * - Mobile hamburger menu with animations
 * - Social media links integration
 * - TypeScript typed with comprehensive interfaces
 * - Accessible design with proper ARIA labels
 * - Tailwind CSS styling with custom theme colors
 *
 * @returns {ReactElement} The rendered navigation component
 */
export function Navbar({ className = '' }: NavbarProps = {}): ReactElement {
  useOffsetTop(800)
  const snap = useSnapshot(state)
  const isScrolling = snap.isScrolling
  const scrollingDirection = snap.scrollingDirection

  return (
    <>
      <Disclosure
        as="header"
        className={clsx('pt-12 sm:pt-16 relative z-40 pb-10', className)}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-[1800px] px-6 lg:px-8">
              <div className="relative flex items-center">
                {/* Logo Section */}
                <div className="shrink-0">
                  <Link
                    prefetch={true}
                    scroll={true}
                    href="/"
                    title="Speedwell"
                    className="block lg:hover:bg-black/2.5 lg:rounded-lg lg:p-2"
                  >
                    <Logo
                      className=""
                      width={220}
                    />
                  </Link>
                </div>

                {/* Centered Navigation - using absolute positioning for true centering */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <DesktopNav isScrolling={isScrolling} />
                </div>

                {/* Right Side - Social Media Icons and Mobile Button */}
                <div className="flex items-center ml-auto space-x-0 md:space-x-1">
                  <SearchButton />
                  <SocialMediaNav />
                  <MobileNavButton open={open} />
                </div>
              </div>
              <MobileNav />
            </div>
          </>
        )}
      </Disclosure>
      <StickyNavbar
        isScrolling={isScrolling}
        scrollingDirection={scrollingDirection}
      />
    </>
  )
}
