import NextLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'
import { Icon } from '@/components/icon'
import { clsx } from 'clsx'

type LinkWithIconProps = LinkProps &
  React.ComponentPropsWithoutRef<'a'> & {
    icon?: { body: string; width?: number; height?: number }
    iconPlacement?: 'before' | 'after'
    iconSize?: string
  }

export const Link = forwardRef(function Link(
  {
    icon,
    iconPlacement = 'after',
    iconSize = 'w-5 h-5',
    children,
    className,
    ...props
  }: LinkWithIconProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  const iconElement = icon ? (
    <Icon
      icon={icon}
      className={clsx(
        iconSize,
        iconPlacement === 'before' && children ? 'mr-2' : '',
        iconPlacement === 'after' && children ? 'ml-2' : ''
      )}
    />
  ) : null

  return (
    <NextLink
      ref={ref}
      className={className}
      {...props}
    >
      {iconPlacement === 'before' && iconElement}
      {children}
      {iconPlacement === 'after' && iconElement}
    </NextLink>
  )
})
