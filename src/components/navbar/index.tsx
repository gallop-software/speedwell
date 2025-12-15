'use client'

import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import type { ReactElement } from 'react'
import clsx from 'clsx'
import { Logo } from '../logo'
import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'
import { SearchButton } from './search-button'
import { SocialMediaNav } from './social-media-nav'
import { MobileNavButton } from './mobile-nav-button'
import { StickyNavbar } from './sticky-navbar'
import useOffsetTop from '@/hooks/use-offset-top'
import { state, useSnapshot } from '@/state'
import type { NavbarProps } from './types'

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
                    className="block lg:hover:bg-black/2.5 lg:rounded-lg lg:p-2  outline-none focus:outline-none"
                  >
                    <Logo
                      className="w-[120px] md:w-[200px]"
                      width={200}
                    />
                  </Link>
                </div>

                {/* Centered Navigation - using absolute positioning for true centering */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <DesktopNav isScrolling={isScrolling} />
                </div>

                {/* Right Side - Social Media Icons and Mobile Button */}
                <div className="flex items-center ml-auto space-x-0 md:space-x-1">
                  <SearchButton enableShortcut={true} />
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
