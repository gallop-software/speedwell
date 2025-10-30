import clsx from 'clsx'
import React from 'react'

interface ButtonsProps {
  children: React.ReactNode
  className?: string
  margin?: string
}

export function Buttons({
  children,
  className,
  margin = 'mt-12 mb-8',
}: ButtonsProps) {
  return (
    <div
      className={clsx(
        'content-wrapper',
        'flex flex-col gap-x-6 gap-y-4 sm:flex-row relative z-30',
        margin,
        className
      )}
    >
      {children}
    </div>
  )
}
