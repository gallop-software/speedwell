import React from 'react'
import { clsx } from 'clsx'
import { Icon } from './icon'
import { Heading } from './heading'
import { Paragraph } from './paragraph'

interface CardContactProps {
  children?: React.ReactNode
  className?: string
  /** Link URL */
  href: string
  /** Background color override */
  color?: string
  /** Heading text */
  heading: string
  /** Description text */
  text: string
  /** Icon name (Lucide icon) or icon object */
  icon: { body: string; width?: number; height?: number } | string
  /** Icon color override */
  iconColor?: string
}

export function CardContact({
  children,
  className = '',
  href,
  color = '',
  heading,
  text,
  icon,
  iconColor = '',
}: CardContactProps) {
  // Use user-defined values if provided, otherwise use defaults
  const finalColor = color || 'bg-body hover:bg-body/90 text-contrast'
  const finalIconColor =
    iconColor ||
    'text-accent bg-accent3 group-hover:bg-accent3-dark group-hover:text-accent-dark'

  return (
    <a
      href={href}
      className={clsx(
        'group rounded-lg flex items-center gap-6 justify-center w-full p-5',
        finalColor,
        // Custom className can override or extend default styles
        className
      )}
    >
      <div className="w-full flex flex-col items-start justify-center">
        <Heading
          as="h4"
          margin="mb-2"
        >
          {heading}
        </Heading>
        <Paragraph
          margin="0"
          fontSize="text-sm"
        >
          {text}
        </Paragraph>
        {children}
      </div>
      <span
        className={clsx(
          finalIconColor,
          'flex size-11 flex-none items-center justify-center rounded-full'
        )}
      >
        <Icon
          icon={icon}
          aria-hidden={true}
          className={clsx('size-5')}
        />
      </span>
    </a>
  )
}
