import clsx from 'clsx'
import React from 'react'

interface ButtonsProps {
  children: React.ReactNode
  className?: string
}

export function Buttons({ children, className }: ButtonsProps) {
  return (
    <div
      className={clsx(
        'content-wrapper',
        'mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row relative z-30 mb-8',
        className
      )}
    >
      {children}
    </div>
  )
}
