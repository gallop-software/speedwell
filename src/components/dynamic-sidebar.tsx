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
import { GalleryPopup } from './lightbox/gallery-popup'
import { Image } from './image'

const images = [
  { src: '/images/pexels-helenalopes-1996337.jpg', alt: 'Lorem ipsum dolor' },
  {
    src: '/images/pexels-lumierestudiomx-1462355.jpg',
    alt: 'Sit amet consectetur',
  },
  {
    src: '/images/pexels-jaime-reimer-1376930-9899960.jpg',
    alt: 'Adipiscing elit sed',
  },
  {
    src: '/images/pexels-mabelamber-141978.jpg',
    alt: 'Eiusmod tempor incididunt',
  },
  { src: '/images/pexels-brett-sayles-1069722.jpg', alt: 'Ut labore dolore' },
]

function SidebarHeader({ closeModal }: any) {
  return (
    <div className="w-full flex justify-between px-4 md:px-8">
      <DialogTitle>
        <div className="flex -space-x-2">
          {images.map((image, index) => {
            return (
              <figure key={`figure-${index}`}>
                {image && (
                  <Image
                    src={image.src}
                    size="small"
                    alt={image.alt}
                    className="inline-block h-10 w-10 ring-2 ring-white object-cover"
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
            <GalleryPopup />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
