'use client'

import clsx from 'clsx'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import xMarkIcon from '@iconify/icons-heroicons/x-mark'
import { Icon } from './icon'
import type { ReactNode } from 'react'
import { Image } from './image'

const images = [
  {
    src: '/images/profiles/pexels-anna-nekrashevich-6801642-200x300.jpg',
    alt: 'Team member',
  },
  {
    src: '/images/profiles/pexels-dxaxoxfz-17555273-200x300.jpg',
    alt: 'Team member',
  },
  {
    src: '/images/profiles/pexels-ekaterina-bolovtsova-5393594-200x300.jpg',
    alt: 'Team member',
  },
  {
    src: '/images/profiles/pexels-linkedin-2182970-200x300.jpg',
    alt: 'Team member',
  },
  {
    src: '/images/profiles/pexels-nkhajotia-1516680-200x300.jpg',
    alt: 'Team member',
  },
]

function SidebarHeader({ closeModal }: any) {
  return (
    <div className="w-full flex justify-between px-4 md:px-8">
      <DialogTitle>
        <div className="flex -space-x-2">
          {images.map((image, index) => {
            return (
              <figure
                key={`figure-${index}`}
                className="h-10 w-10"
              >
                {image && (
                  <Image
                    src={image.src}
                    size="small"
                    alt={image.alt}
                    className="inline-block h-10 w-10 ring-2 ring-white object-cover"
                    aspect="aspect-square"
                    rounded="rounded-full"
                  />
                )}
              </figure>
            )
          })}
        </div>
      </DialogTitle>
      <button
        type="button"
        className={
          'rounded-full focus:outline-none focus:ring-0 p-1.5 -mx-2.5 cursor-pointer'
        }
        onClick={closeModal}
      >
        <Icon
          icon={xMarkIcon}
          className="h-6 w-6"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}

interface Props {
  isOpen: any
  setIsOpen: any
  children?: ReactNode
}

export default function DynamicSidebar({ isOpen, setIsOpen, children }: Props) {
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Dialog
      as="div"
      className="relative z-40 dynamic-content"
      onClose={closeModal}
      open={isOpen}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-body/50 backdrop-blur-md duration-500 ease-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 font-body h-screen min-h-screen text-contrast max-w-[86%] md:max-w-[77%] lg:max-w-[67%] xl:max-w-[700px] w-full right-0 left-auto scroll-smooth">
        <div className="flex justify-end h-full">
          <DialogPanel
            transition
            className="pointer-events-auto h-full bg-body shadow-xl text-left align-middle overflow-hidden overflow-y-auto scrollbar-hide w-full duration-500 ease-in-out transition data-[closed]:translate-x-full [-webkit-overflow-scrolling:touch]"
          >
            <div className="relative flex items-center justify-start flex-col h-full pt-6 pb-14">
              <SidebarHeader closeModal={closeModal} />
              <div
                className={clsx(
                  'h-full px-4 md:px-8 [&>*:first-child]:mt-0 w-full',
                  "before:content-[''] before:block before:w-full before:h-10 after:content-[''] after:block after:w-full after:h-20 after:xl:h-10 [&_h2]:!text-4xl [&_h2]:!mb-7 [&_.is-style-h2]:!text-4xl [&_.is-style-h2]:!mb-7"
                )}
              >
                {children}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
