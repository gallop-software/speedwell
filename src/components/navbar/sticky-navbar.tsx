import { Disclosure } from '@headlessui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ReactElement } from 'react'
import clsx from 'clsx'
import { Logo } from '../logo'
import { DesktopNav } from './desktop-nav'
import { SearchButton } from './search-button'
import { SocialMediaNav } from './social-media-nav'
import { StickyMobileNavButton } from './sticky-mobile-nav-button'

/**
 * Sticky navbar component
 * Appears on scroll with slide-in/out animation
 * Always uses normal theme
 * @returns {ReactElement} Sticky navbar element
 */
export function StickyNavbar({
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
                      className="block lg:hover:bg-black/2.5 lg:rounded-lg lg:p-2  outline-none focus:outline-none"
                    >
                      <Logo
                        className=""
                        width={100}
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
                    <SearchButton enableShortcut={false} />
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
