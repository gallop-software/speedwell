import { DisclosureButton } from '@headlessui/react'
import { motion } from 'framer-motion'
import type { ReactElement } from 'react'
import bars2Icon from '@iconify/icons-heroicons/bars-2-20-solid'
import xMarkIcon from '@iconify/icons-heroicons/x-mark-20-solid'
import { Icon } from '../icon'

/**
 * Mobile navigation hamburger button
 * Toggles the mobile menu visibility with animated icon transition
 * @param open - Whether the mobile menu is open
 * @returns {ReactElement} Mobile menu toggle button
 */
export function MobileNavButton({ open }: { open: boolean }): ReactElement {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg focus:outline-none focus:ring-0 lg:hidden cursor-pointer -mr-2"
      aria-label="Open main menu"
      suppressHydrationWarning
    >
      <motion.div
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.2 }}
        className="relative"
        suppressHydrationWarning
      >
        {open ? (
          <Icon
            icon={xMarkIcon}
            className="size-6"
          />
        ) : (
          <Icon
            icon={bars2Icon}
            className="size-6"
          />
        )}
      </motion.div>
    </DisclosureButton>
  )
}
