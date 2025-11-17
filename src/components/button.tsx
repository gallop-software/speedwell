import { Paragraph } from './paragraph'
import { Button as HeadlessButton } from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'
import { Icon } from './icon'

const variants = {
  primary: {
    light: clsx(
      'inline-flex items-center justify-center',
      'rounded-full border border-transparent bg-gray-950 shadow-md',
      'text-white',
      'disabled:bg-gray-950 disabled:opacity-40 hover:bg-gray-800',
      'transition-colors duration-200'
    ),
    dark: clsx(
      'inline-flex items-center justify-center',
      'rounded-full border border-transparent bg-white shadow-md',
      'text-gray-950',
      'disabled:bg-white disabled:opacity-40 hover:bg-gray-100',
      'transition-colors duration-200'
    ),
  },
  secondary: {
    light: clsx(
      'relative inline-flex items-center justify-center',
      'rounded-full border border-transparent bg-white/35 shadow-md ring-1 ring-[#D15052]/15',
      'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
      'text-gray-950',
      'disabled:bg-white/25 disabled:opacity-40 hover:bg-white/25',
      'transition-colors duration-200'
    ),
    dark: clsx(
      'relative inline-flex items-center justify-center',
      'rounded-full border border-transparent bg-gray-950/15 shadow-md ring-1 ring-white/15',
      'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#00000040]',
      'text-white',
      'disabled:bg-gray-950/15 disabled:opacity-40 hover:bg-gray-950/20',
      'transition-colors duration-200'
    ),
  },
  outline: {
    light: clsx(
      'inline-flex items-center justify-center',
      'rounded-full border border-transparent shadow-sm ring-2 ring-inset ring-gray-950',
      'text-gray-950',
      'disabled:bg-transparent disabled:opacity-40 hover:bg-gray-950/5',
      'transition-colors duration-200'
    ),
    dark: clsx(
      'inline-flex items-center justify-center',
      'rounded-full border border-transparent shadow-sm ring-2 ring-inset ring-white',
      'text-white',
      'disabled:bg-transparent disabled:opacity-40 hover:bg-white/5',
      'transition-colors duration-200'
    ),
  },
}

const sizes = {
  default: clsx('px-6 py-[calc(--spacing(2)-1px)]', 'text-base font-medium'),
  medium: clsx(
    'px-6 lg:px-8 py-[calc(--spacing(2)-1px)] lg:py-[calc(--spacing(3)-1px)]',
    'text-lg font-medium'
  ),
  large: clsx(
    'px-8 lg:px-10 py-[calc(--spacing(3)-1px)] lg:py-[calc(--spacing(4)-1px)]',
    'text-xl font-medium'
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  icon?: { body: string; width?: number; height?: number }
  iconPlacement?: 'before' | 'after'
  iconSize?: string
  wrap?: boolean
  dark?: boolean
  target?: '_self' | '_blank'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<typeof HeadlessButton> & {
      href?: undefined
    })
)

export function Button({
  variant = 'primary',
  size = 'default',
  className,
  icon,
  iconPlacement = 'before',
  iconSize = 'w-5 h-5',
  wrap = false,
  dark = false,
  target = '_self',
  children,
  ...props
}: ButtonProps) {
  const variantClass = dark ? variants[variant].dark : variants[variant].light
  className = clsx(className, variantClass, sizes[size])

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

  const content = (
    <>
      {iconPlacement === 'before' && iconElement}
      {children}
      {iconPlacement === 'after' && iconElement}
    </>
  )

  const buttonElement =
    typeof props.href === 'undefined' ? (
      <HeadlessButton
        {...props}
        className={clsx('cursor-pointer', className)}
      >
        {content}
      </HeadlessButton>
    ) : (
      <Link
        {...props}
        target={target}
        className={clsx('cursor-pointer no-underline!', className)}
      >
        {content}
      </Link>
    )

  if (wrap) {
    return <Paragraph>{buttonElement}</Paragraph>
  }

  return buttonElement
}
