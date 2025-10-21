'use client'

import React, { type ReactNode } from 'react'
import { clsx } from 'clsx'
import { Heading } from './heading'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

interface AccordionProps {
  headingText?: string
  children?: React.ReactNode
}

export function Accordion({ headingText, children }: AccordionProps) {
  return (
    <div className="w-full">
      <Disclosure
        as="div"
        className="py-4"
        defaultOpen={false}
      >
        {({ open }) => (
          <>
            <DisclosureButton className="group flex w-full items-center justify-between text-left cursor-pointer bg-body2 hover:bg-body2/80 p-4">
              <Heading
                as="h3"
                margin="mb-0"
              >
                {headingText}
              </Heading>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <ChevronDownIcon className="size-6 text-gray-900" />
              </motion.div>
            </DisclosureButton>

            <DisclosurePanel className="mt-8 text-sm leading-5 text-white/50 max-w-3xl">
              {children}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
